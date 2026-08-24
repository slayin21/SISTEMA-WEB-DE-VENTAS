package com.zapateriajoselito.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public class AuthDTOs {

    public static class LoginRequest {
        @NotBlank(message = "El email es obligatorio")
        @Email(message = "Email inválido")
        private String email;

        @NotBlank(message = "La contraseña es obligatoria")
        private String password;

        public LoginRequest() {}
        public LoginRequest(String email, String password) {
            this.email = email;
            this.password = password;
        }

        public String getEmail() { return email; }
        public void setEmail(String email) { this.email = email; }
        public String getPassword() { return password; }
        public void setPassword(String password) { this.password = password; }
    }

    public static class RegisterRequest {
        @NotBlank(message = "El nombre es obligatorio")
        private String nombre;

        @NotBlank(message = "El email es obligatorio")
        @Email(message = "Email inválido")
        private String email;

        @NotBlank(message = "La contraseña es obligatoria")
        @Size(min = 6, message = "La contraseña debe tener al menos 6 caracteres")
        private String password;

        private String rol = "CLIENTE";

        public RegisterRequest() {}
        public RegisterRequest(String nombre, String email, String password, String rol) {
            this.nombre = nombre;
            this.email = email;
            this.password = password;
            this.rol = rol;
        }

        public String getNombre() { return nombre; }
        public void setNombre(String nombre) { this.nombre = nombre; }
        public String getEmail() { return email; }
        public void setEmail(String email) { this.email = email; }
        public String getPassword() { return password; }
        public void setPassword(String password) { this.password = password; }
        public String getRol() { return rol; }
        public void setRol(String rol) { this.rol = rol; }
    }

    public static class ForgotPasswordRequest {
        @NotBlank(message = "El email es obligatorio")
        @Email(message = "Email inválido")
        private String email;

        public ForgotPasswordRequest() {}
        public ForgotPasswordRequest(String email) { this.email = email; }

        public String getEmail() { return email; }
        public void setEmail(String email) { this.email = email; }
    }

    public static class ResetPasswordRequest {
        @NotBlank(message = "El email es obligatorio")
        @Email(message = "Email inválido")
        private String email;

        @NotBlank(message = "El token es obligatorio")
        private String token;

        @NotBlank(message = "La nueva contraseña es obligatoria")
        @Size(min = 6, message = "La nueva contraseña debe tener al menos 6 caracteres")
        private String newPassword;

        public ResetPasswordRequest() {}
        public ResetPasswordRequest(String email, String token, String newPassword) {
            this.email = email;
            this.token = token;
            this.newPassword = newPassword;
        }

        public String getEmail() { return email; }
        public void setEmail(String email) { this.email = email; }
        public String getToken() { return token; }
        public void setToken(String token) { this.token = token; }
        public String getNewPassword() { return newPassword; }
        public void setNewPassword(String newPassword) { this.newPassword = newPassword; }
    }

    public static class AuthResponse {
        private String token;
        private Long idUsuario;
        private String nombre;
        private String email;
        private String rol;
        private String mensaje;

        public AuthResponse() {}
        public AuthResponse(String token, Long idUsuario, String nombre, String email, String rol, String mensaje) {
            this.token = token;
            this.idUsuario = idUsuario;
            this.nombre = nombre;
            this.email = email;
            this.rol = rol;
            this.mensaje = mensaje;
        }

        public static AuthResponseBuilder builder() {
            return new AuthResponseBuilder();
        }

        public String getToken() { return token; }
        public void setToken(String token) { this.token = token; }
        public Long getIdUsuario() { return idUsuario; }
        public void setIdUsuario(Long idUsuario) { this.idUsuario = idUsuario; }
        public String getNombre() { return nombre; }
        public void setNombre(String nombre) { this.nombre = nombre; }
        public String getEmail() { return email; }
        public void setEmail(String email) { this.email = email; }
        public String getRol() { return rol; }
        public void setRol(String rol) { this.rol = rol; }
        public String getMensaje() { return mensaje; }
        public void setMensaje(String mensaje) { this.mensaje = mensaje; }

        public static class AuthResponseBuilder {
            private String token;
            private Long idUsuario;
            private String nombre;
            private String email;
            private String rol;
            private String mensaje;

            public AuthResponseBuilder token(String token) { this.token = token; return this; }
            public AuthResponseBuilder idUsuario(Long idUsuario) { this.idUsuario = idUsuario; return this; }
            public AuthResponseBuilder nombre(String nombre) { this.nombre = nombre; return this; }
            public AuthResponseBuilder email(String email) { this.email = email; return this; }
            public AuthResponseBuilder rol(String rol) { this.rol = rol; return this; }
            public AuthResponseBuilder mensaje(String mensaje) { this.mensaje = mensaje; return this; }
            public AuthResponse build() { return new AuthResponse(token, idUsuario, nombre, email, rol, mensaje); }
        }
    }
}
