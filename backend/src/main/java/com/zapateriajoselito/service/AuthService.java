package com.zapateriajoselito.service;

import com.zapateriajoselito.dto.AuthDTOs.*;
import com.zapateriajoselito.model.entity.Usuario;
import com.zapateriajoselito.repository.UsuarioRepository;
import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Map;
import java.util.UUID;
import java.util.concurrent.ConcurrentHashMap;

@Service
public class AuthService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private EmailService emailService;

    // Almacenamiento temporal de tokens de recuperación de contraseña (email -> token)
    private final Map<String, String> resetTokens = new ConcurrentHashMap<>();

    public AuthResponse registrar(RegisterRequest request) {
        if (usuarioRepository.findByEmail(request.getEmail()).isPresent()) {
            throw new RuntimeException("El email '" + request.getEmail() + "' ya se encuentra registrado");
        }

        // Hashing seguro de la contraseña con BCrypt (RNF-01)
        String hashedPassword = BCrypt.hashpw(request.getPassword(), BCrypt.gensalt(12));

        String rolFinal = (request.getRol() != null && request.getRol().trim().equalsIgnoreCase("ADMIN")) 
                ? "ADMIN" 
                : "CLIENTE";

        Usuario nuevoUsuario = new Usuario();
        nuevoUsuario.setNombre(request.getNombre());
        nuevoUsuario.setEmail(request.getEmail());
        nuevoUsuario.setPasswordHash(hashedPassword);
        nuevoUsuario.setRol(rolFinal);
        nuevoUsuario.setFechaRegistro(LocalDateTime.now());
        nuevoUsuario.setActivo(true);

        Usuario guardado = usuarioRepository.save(nuevoUsuario);
        String tokenSimulado = UUID.randomUUID().toString();

        return AuthResponse.builder()
                .token(tokenSimulado)
                .idUsuario(guardado.getIdUsuario())
                .nombre(guardado.getNombre())
                .email(guardado.getEmail())
                .rol(guardado.getRol())
                .mensaje("Usuario registrado exitosamente")
                .build();
    }

    public AuthResponse login(LoginRequest request) {
        Usuario usuario = usuarioRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new RuntimeException("Credenciales inválidas: Usuario no encontrado"));

        if (!Boolean.TRUE.equals(usuario.getActivo())) {
            throw new RuntimeException("El usuario se encuentra inactivo");
        }

        // Verificación de la contraseña mediante BCrypt (RNF-01)
        if (!BCrypt.checkpw(request.getPassword(), usuario.getPasswordHash())) {
            throw new RuntimeException("Credenciales inválidas: Contraseña incorrecta");
        }

        String tokenSimulado = UUID.randomUUID().toString();

        return AuthResponse.builder()
                .token(tokenSimulado)
                .idUsuario(usuario.getIdUsuario())
                .nombre(usuario.getNombre())
                .email(usuario.getEmail())
                .rol(usuario.getRol())
                .mensaje("Inicio de sesión exitoso")
                .build();
    }

    public String solicitarRecuperacionPassword(String email) {
        Usuario usuario = usuarioRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("No existe ninguna cuenta asociada al email: " + email));

        String token = UUID.randomUUID().toString().substring(0, 8).toUpperCase();
        resetTokens.put(email.toLowerCase(), token);

        emailService.enviarEnlaceRecuperacion(email, token);

        return "Se ha enviado un enlace y código de recuperación a su correo electrónico (" + email + ")";
    }

    public String restablecerPassword(ResetPasswordRequest request) {
        String emailClean = request.getEmail().toLowerCase();
        String storedToken = resetTokens.get(emailClean);

        if (storedToken == null || !storedToken.equals(request.getToken())) {
            throw new RuntimeException("El token de recuperación es inválido o ha expirado");
        }

        Usuario usuario = usuarioRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));

        String newHashedPassword = BCrypt.hashpw(request.getNewPassword(), BCrypt.gensalt(12));
        usuario.setPasswordHash(newHashedPassword);
        usuarioRepository.save(usuario);

        resetTokens.remove(emailClean);

        return "Contraseña actualizada exitosamente. Ahora puede iniciar sesión con su nueva clave.";
    }
}
