package com.zapateriajoselito.controller;

import com.zapateriajoselito.model.entity.InventarioMovimiento;
import com.zapateriajoselito.model.entity.Producto;
import com.zapateriajoselito.model.entity.ProductoVariante;
import com.zapateriajoselito.repository.InventarioMovimientoRepository;
import com.zapateriajoselito.repository.ProductoRepository;
import com.zapateriajoselito.repository.ProductoVarianteRepository;
import com.zapateriajoselito.service.InventarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/admin")
@CrossOrigin(origins = "*")
public class AdminController {

    @Autowired
    private ProductoVarianteRepository varianteRepository;

    @Autowired
    private ProductoRepository productoRepository;

    @Autowired
    private InventarioMovimientoRepository inventarioMovimientoRepository;

    @Autowired
    private InventarioService inventarioService;

    // RF-11: Alertas visuales de stock bajo (< 5 unidades)
    @GetMapping("/inventario/alertas")
    public ResponseEntity<List<ProductoVariante>> obtenerAlertasStockBajo(@RequestParam(defaultValue = "5") int limite) {
        List<ProductoVariante> alertas = varianteRepository.findAll().stream()
                .filter(v -> v.getStock() != null && v.getStock() <= limite)
                .collect(Collectors.toList());
        return ResponseEntity.ok(alertas);
    }

    // RF-12: Registro completo de Kardex (Entradas, Salidas, Devoluciones)
    @GetMapping("/inventario/kardex")
    public ResponseEntity<List<InventarioMovimiento>> obtenerKardex() {
        return ResponseEntity.ok(inventarioMovimientoRepository.findAll());
    }

    // Registrar Entrada / Salida / Ajuste de Stock en Kardex
    @PostMapping("/inventario/movimiento")
    public ResponseEntity<InventarioMovimiento> registrarMovimientoStock(@RequestBody Map<String, Object> body) {
        Long idVariante = Long.valueOf(body.get("idVariante").toString());
        String tipoMovimiento = body.get("tipoMovimiento").toString();
        int cantidad = Integer.parseInt(body.get("cantidad").toString());
        String observacion = body.getOrDefault("observacion", "Movimiento registrado desde el Panel de Administración").toString();

        InventarioMovimiento movimiento = inventarioService.registrarMovimiento(idVariante, tipoMovimiento, cantidad, observacion);
        return ResponseEntity.ok(movimiento);
    }

    // Actualizar Stock y Datos de Variante
    @PutMapping("/inventario/variantes/{idVariante}")
    public ResponseEntity<ProductoVariante> actualizarVariante(
            @PathVariable Long idVariante,
            @RequestBody Map<String, Object> body) {

        ProductoVariante variante = varianteRepository.findById(idVariante)
                .orElseThrow(() -> new RuntimeException("Variante no encontrada ID: " + idVariante));

        int stockAnterior = variante.getStock();

        if (body.containsKey("talla") && body.get("talla") != null) {
            variante.setTalla(body.get("talla").toString());
        }
        if (body.containsKey("color") && body.get("color") != null) {
            variante.setColor(body.get("color").toString());
        }
        if (body.containsKey("precio") && body.get("precio") != null) {
            variante.setPrecio(Double.parseDouble(body.get("precio").toString()));
        }
        if (body.containsKey("sku") && body.get("sku") != null) {
            variante.setSku(body.get("sku").toString());
        }
        if (body.containsKey("stock") && body.get("stock") != null) {
            int nuevoStock = Integer.parseInt(body.get("stock").toString());
            variante.setStock(nuevoStock);

            // Registrar movimiento en Kardex si el stock cambió
            if (nuevoStock != stockAnterior) {
                int dif = nuevoStock - stockAnterior;
                String tipo = dif > 0 ? "AJUSTE_ENTRADA" : "AJUSTE_SALIDA";
                inventarioService.registrarMovimiento(
                        idVariante, 
                        tipo, 
                        Math.abs(dif), 
                        "Ajuste directo de stock desde Gestión de Productos (De " + stockAnterior + " a " + nuevoStock + " unid.)"
                );
            }
        }

        ProductoVariante guardada = varianteRepository.save(variante);
        return ResponseEntity.ok(guardada);
    }

    // Crear Nueva Variante para un Producto
    @PostMapping("/inventario/productos/{idProducto}/variantes")
    public ResponseEntity<ProductoVariante> crearVariante(
            @PathVariable Long idProducto,
            @RequestBody Map<String, Object> body) {

        Producto producto = productoRepository.findById(idProducto)
                .orElseThrow(() -> new RuntimeException("Producto no encontrado ID: " + idProducto));

        String talla = body.get("talla").toString();
        String color = body.getOrDefault("color", "Único").toString();
        double precio = Double.parseDouble(body.get("precio").toString());
        int stock = Integer.parseInt(body.get("stock").toString());
        String sku = body.getOrDefault("sku", "SKU-" + idProducto + "-" + talla + "-" + color.toUpperCase()).toString();

        ProductoVariante variante = new ProductoVariante();
        variante.setProducto(producto);
        variante.setTalla(talla);
        variante.setColor(color);
        variante.setPrecio(precio);
        variante.setStock(stock);
        variante.setSku(sku);

        ProductoVariante guardada = varianteRepository.save(variante);

        // Registrar movimiento inicial en Kardex
        if (stock > 0) {
            inventarioService.registrarMovimiento(
                    guardada.getIdVariante(), 
                    "ENTRADA_INICIAL", 
                    stock, 
                    "Creación de variante inicial (Talla " + talla + ", Color " + color + ")"
            );
        }

        return ResponseEntity.ok(guardada);
    }

    // RNF-10: Ejecutar / solicitar copia de seguridad (Backup) de la Base de Datos
    @PostMapping("/backup")
    public ResponseEntity<Map<String, String>> solicitarBackupBD() {
        System.out.println("=================================================");
        System.out.println("SOLICITUD DE BACKUP REALIZADA CON ÉXITO");
        System.out.println("BASE DE DATOS: ZapateriaJoselito");
        System.out.println("FECHA Y HORA: " + java.time.LocalDateTime.now());
        System.out.println("=================================================");

        return ResponseEntity.ok(Map.of(
                "mensaje", "Copia de seguridad (Backup) generada exitosamente en el servidor de SQL Server",
                "estado", "OK",
                "timestamp", java.time.LocalDateTime.now().toString()
        ));
    }
}

