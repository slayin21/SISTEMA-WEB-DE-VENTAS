package com.zapateriajoselito.controller;

import com.zapateriajoselito.model.entity.Producto;
import com.zapateriajoselito.model.entity.ProductoVariante;
import com.zapateriajoselito.service.ProductoService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.List;

@RestController
@RequestMapping("/productos")
@CrossOrigin(origins = "*")
public class ProductoController {

    @Autowired
    private ProductoService productoService;

    @GetMapping
    public ResponseEntity<List<Producto>> listarTodos() {
        return ResponseEntity.ok(productoService.obtenerTodos());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Producto> obtenerPorId(@PathVariable Long id) {
        return ResponseEntity.ok(productoService.obtenerPorId(id));
    }

    @GetMapping("/categoria/{idCategoria}")
    public ResponseEntity<List<Producto>> listarPorCategoria(@PathVariable Long idCategoria) {
        return ResponseEntity.ok(productoService.obtenerPorCategoria(idCategoria));
    }

    // RF-04: Buscador por palabras clave y filtros avanzados
    @GetMapping("/search")
    public ResponseEntity<List<Producto>> buscarConFiltros(
            @RequestParam(required = false) String query,
            @RequestParam(required = false) Long categoriaId,
            @RequestParam(required = false) String marca,
            @RequestParam(required = false) BigDecimal minPrecio,
            @RequestParam(required = false) BigDecimal maxPrecio,
            @RequestParam(required = false) String talla,
            @RequestParam(required = false) String genero) {
        return ResponseEntity.ok(productoService.buscarConFiltros(query, categoriaId, marca, minPrecio, maxPrecio, talla, genero));
    }

    @GetMapping("/buscar")
    public ResponseEntity<List<Producto>> buscarPorNombre(@RequestParam String nombre) {
        return ResponseEntity.ok(productoService.buscarConFiltros(nombre, null, null, null, null, null, null));
    }

    @PostMapping
    public ResponseEntity<Producto> crearProducto(@Valid @RequestBody Producto producto) {
        Producto nuevo = productoService.guardarProducto(producto);
        return ResponseEntity.status(HttpStatus.CREATED).body(nuevo);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Producto> actualizarProducto(@PathVariable Long id, @Valid @RequestBody Producto producto) {
        return ResponseEntity.ok(productoService.actualizarProducto(id, producto));
    }

    @PostMapping("/{id}/variantes")
    public ResponseEntity<ProductoVariante> agregarVariante(
            @PathVariable Long id,
            @Valid @RequestBody ProductoVariante variante) {
        ProductoVariante nueva = productoService.agregarVariante(id, variante);
        return ResponseEntity.status(HttpStatus.CREATED).body(nueva);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> desactivarProducto(@PathVariable Long id) {
        productoService.desactivarProducto(id);
        return ResponseEntity.noContent().build();
    }
}
