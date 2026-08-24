package com.zapateriajoselito.controller;

import com.zapateriajoselito.model.entity.Usuario;
import com.zapateriajoselito.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/usuarios")
@CrossOrigin(origins = "*")
public class UsuarioController {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @GetMapping
    public ResponseEntity<List<Usuario>> listarTodos() {
        return ResponseEntity.ok(usuarioRepository.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Usuario> obtenerPorId(@PathVariable Long id) {
        return ResponseEntity.ok(
            usuarioRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado ID: " + id))
        );
    }

    @PutMapping("/{id}/rol")
    public ResponseEntity<Usuario> cambiarRol(@PathVariable Long id, @RequestBody Map<String, String> body) {
        Usuario usuario = usuarioRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado ID: " + id));
        String nuevoRol = body.get("rol");
        if (nuevoRol != null && (nuevoRol.equalsIgnoreCase("ADMIN") || nuevoRol.equalsIgnoreCase("CLIENTE"))) {
            usuario.setRol(nuevoRol.toUpperCase());
            usuarioRepository.save(usuario);
        }
        return ResponseEntity.ok(usuario);
    }

    @PutMapping("/{id}/estado")
    public ResponseEntity<Usuario> cambiarEstado(@PathVariable Long id, @RequestBody Map<String, Boolean> body) {
        Usuario usuario = usuarioRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado ID: " + id));
        Boolean nuevoEstado = body.get("activo");
        if (nuevoEstado != null) {
            usuario.setActivo(nuevoEstado);
            usuarioRepository.save(usuario);
        }
        return ResponseEntity.ok(usuario);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> desactivarUsuario(@PathVariable Long id) {
        Usuario usuario = usuarioRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado ID: " + id));
        usuario.setActivo(false);
        usuarioRepository.save(usuario);
        return ResponseEntity.noContent().build();
    }
}
