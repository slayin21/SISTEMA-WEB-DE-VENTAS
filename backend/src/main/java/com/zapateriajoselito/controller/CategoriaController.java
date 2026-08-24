package com.zapateriajoselito.controller;

import com.zapateriajoselito.model.entity.Categoria;
import com.zapateriajoselito.repository.CategoriaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/categorias")
@CrossOrigin(origins = "*")
public class CategoriaController {

    @Autowired
    private CategoriaRepository categoriaRepository;

    @GetMapping
    public ResponseEntity<List<Categoria>> listarActivas() {
        return ResponseEntity.ok(categoriaRepository.findByActivoTrue());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Categoria> obtenerPorId(@PathVariable Long id) {
        return ResponseEntity.ok(
            categoriaRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Categoría no encontrada ID: " + id))
        );
    }
}
