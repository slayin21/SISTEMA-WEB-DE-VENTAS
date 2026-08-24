package com.zapateriajoselito.controller;

import com.zapateriajoselito.model.entity.Reclamacion;
import com.zapateriajoselito.repository.ReclamacionRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/reclamaciones")
@CrossOrigin(origins = "*")
public class ReclamacionController {

    @Autowired
    private ReclamacionRepository reclamacionRepository;

    @PostMapping
    public ResponseEntity<Reclamacion> registrarReclamacion(@Valid @RequestBody Reclamacion reclamacion) {
        Reclamacion nueva = reclamacionRepository.save(reclamacion);
        return ResponseEntity.status(HttpStatus.CREATED).body(nueva);
    }

    @GetMapping("/usuario/{idUsuario}")
    public ResponseEntity<List<Reclamacion>> obtenerPorUsuario(@PathVariable Long idUsuario) {
        return ResponseEntity.ok(reclamacionRepository.findByUsuarioIdUsuarioOrderByFechaRegistroDesc(idUsuario));
    }
}
