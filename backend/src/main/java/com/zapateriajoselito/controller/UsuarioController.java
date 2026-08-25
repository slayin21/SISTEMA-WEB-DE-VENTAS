package com.zapateriajoselito.controller;

import com.zapateriajoselito.model.entity.Usuario;
import com.zapateriajoselito.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/usuarios")
@CrossOrigin(origins = "*")
public class UsuarioController {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

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

    @PostMapping
    public ResponseEntity<Usuario> crearUsuario(@RequestBody Map<String, Object> body) {
        String nombre = (String) body.get("nombre");
        String email = (String) body.get("email");
        String password = (String) body.get("password");
        String rol = (String) body.getOrDefault("rol", "CLIENTE");
        Boolean activo = (Boolean) body.getOrDefault("activo", true);

        if (nombre == null || email == null || password == null) {
            throw new RuntimeException("Nombre, email y contraseña son obligatorios");
        }

        Usuario usuario = new Usuario();
        usuario.setNombre(nombre);
        usuario.setEmail(email);
        usuario.setPasswordHash(passwordEncoder.encode(password));
        usuario.setRol(rol.toUpperCase());
        usuario.setActivo(activo != null ? activo : true);
        usuario.setFechaRegistro(new Date());

        Usuario guardado = usuarioRepository.save(usuario);
        return ResponseEntity.ok(guardado);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Usuario> actualizarUsuario(@PathVariable Long id, @RequestBody Map<String, Object> body) {
        Usuario usuario = usuarioRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado ID: " + id));

        if (body.containsKey("nombre") && body.get("nombre") != null) {
            usuario.setNombre((String) body.get("nombre"));
        }
        if (body.containsKey("email") && body.get("email") != null) {
            usuario.setEmail((String) body.get("email"));
        }
        if (body.containsKey("rol") && body.get("rol") != null) {
            usuario.setRol(((String) body.get("rol")).toUpperCase());
        }
        if (body.containsKey("activo") && body.get("activo") != null) {
            usuario.setActivo((Boolean) body.get("activo"));
        }
        if (body.containsKey("password") && body.get("password") != null) {
            String pass = (String) body.get("password");
            if (!pass.trim().isEmpty()) {
                usuario.setPasswordHash(passwordEncoder.encode(pass));
            }
        }

        Usuario actualizado = usuarioRepository.save(usuario);
        return ResponseEntity.ok(actualizado);
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

