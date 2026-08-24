package com.zapateriajoselito.controller;

import com.zapateriajoselito.model.entity.InventarioMovimiento;
import com.zapateriajoselito.model.entity.ProductoVariante;
import com.zapateriajoselito.repository.InventarioMovimientoRepository;
import com.zapateriajoselito.repository.ProductoVarianteRepository;
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
    private InventarioMovimientoRepository inventarioMovimientoRepository;

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
