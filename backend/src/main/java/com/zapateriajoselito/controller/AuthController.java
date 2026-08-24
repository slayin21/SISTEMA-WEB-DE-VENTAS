package com.zapateriajoselito.controller;

import com.zapateriajoselito.dto.AuthDTOs.*;
import com.zapateriajoselito.service.AuthService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "*")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/register")
    public ResponseEntity<AuthResponse> registrar(@Valid @RequestBody RegisterRequest request) {
        return ResponseEntity.ok(authService.registrar(request));
    }

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@Valid @RequestBody LoginRequest request) {
        return ResponseEntity.ok(authService.login(request));
    }

    @PostMapping("/forgot-password")
    public ResponseEntity<Map<String, String>> solicitarRecuperacion(@Valid @RequestBody ForgotPasswordRequest request) {
        String mensaje = authService.solicitarRecuperacionPassword(request.getEmail());
        return ResponseEntity.ok(Map.of("mensaje", mensaje));
    }

    @PostMapping("/reset-password")
    public ResponseEntity<Map<String, String>> restablecerPassword(@Valid @RequestBody ResetPasswordRequest request) {
        String mensaje = authService.restablecerPassword(request);
        return ResponseEntity.ok(Map.of("mensaje", mensaje));
    }
}
