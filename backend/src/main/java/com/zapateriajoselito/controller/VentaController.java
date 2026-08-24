package com.zapateriajoselito.controller;

import com.zapateriajoselito.model.entity.Venta;
import com.zapateriajoselito.service.VentaService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/ventas")
@CrossOrigin(origins = "*")
public class VentaController {

    @Autowired
    private VentaService ventaService;

    @PostMapping
    public ResponseEntity<Venta> registrarVenta(@Valid @RequestBody Venta ventaRequest) {
        Venta ventaRealizada = ventaService.registrarVenta(ventaRequest);
        return ResponseEntity.status(HttpStatus.CREATED).body(ventaRealizada);
    }

    @GetMapping("/usuario/{idUsuario}")
    public ResponseEntity<List<Venta>> obtenerPorUsuario(@PathVariable Long idUsuario) {
        return ResponseEntity.ok(ventaService.obtenerVentasPorUsuario(idUsuario));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Venta> obtenerPorId(@PathVariable Long id) {
        return ResponseEntity.ok(ventaService.obtenerPorId(id));
    }

    @GetMapping
    public ResponseEntity<List<Venta>> obtenerTodas() {
        return ResponseEntity.ok(ventaService.obtenerTodas());
    }

    @PutMapping("/{id}/estado")
    public ResponseEntity<Venta> cambiarEstado(@PathVariable Long id, @RequestParam String nuevoEstado) {
        return ResponseEntity.ok(ventaService.actualizarEstadoPedido(id, nuevoEstado));
    }
}
