package com.zapateriajoselito.controller;

import com.zapateriajoselito.model.entity.Direccion;
import com.zapateriajoselito.service.DireccionService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/direcciones")
@CrossOrigin(origins = "*")
public class DireccionController {

    @Autowired
    private DireccionService direccionService;

    @GetMapping("/usuario/{idUsuario}")
    public ResponseEntity<List<Direccion>> listarPorUsuario(@PathVariable Long idUsuario) {
        return ResponseEntity.ok(direccionService.listarPorUsuario(idUsuario));
    }

    @PostMapping("/usuario/{idUsuario}")
    public ResponseEntity<Direccion> guardar(@PathVariable Long idUsuario, @Valid @RequestBody Direccion direccion) {
        return ResponseEntity.ok(direccionService.guardarDireccion(idUsuario, direccion));
    }

    @PutMapping("/{idDireccion}")
    public ResponseEntity<Direccion> actualizar(@PathVariable Long idDireccion, @Valid @RequestBody Direccion direccion) {
        return ResponseEntity.ok(direccionService.actualizarDireccion(idDireccion, direccion));
    }

    @DeleteMapping("/{idDireccion}")
    public ResponseEntity<Void> eliminar(@PathVariable Long idDireccion) {
        direccionService.eliminarDireccion(idDireccion);
        return ResponseEntity.noContent().build();
    }
}
