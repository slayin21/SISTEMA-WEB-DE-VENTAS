package com.zapateriajoselito.model.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "RECLAMACIONES")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Reclamacion {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_reclamaciones")
    private Long idReclamacion;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_usuarios", nullable = false)
    @JsonIgnoreProperties({"reclamaciones", "direcciones", "carritos", "ventas", "resenas"})
    @NotNull(message = "El usuario es obligatorio")
    private Usuario usuario;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_ventas", nullable = false)
    @JsonIgnoreProperties({"reclamaciones", "detalles", "movimientos"})
    @NotNull(message = "La venta es obligatoria")
    private Venta venta;

    @NotNull(message = "La fecha de registro es obligatoria")
    @Column(name = "fecha_registro", nullable = false)
    @Builder.Default
    private LocalDateTime fechaRegistro = LocalDateTime.now();

    @NotBlank(message = "El detalle del incidente es obligatorio")
    @Column(name = "detalle_incidente", nullable = false, columnDefinition = "NVARCHAR(MAX)")
    private String detalleIncidente;

    @NotBlank(message = "El estado de la reclamación es obligatorio")
    @Column(name = "estado", nullable = false, length = 30)
    @Builder.Default
    private String estado = "PENDIENTE";

    // Manual Getters & Setters
    public Long getIdReclamacion() { return idReclamacion; }
    public void setIdReclamacion(Long idReclamacion) { this.idReclamacion = idReclamacion; }

    public Usuario getUsuario() { return usuario; }
    public void setUsuario(Usuario usuario) { this.usuario = usuario; }

    public Venta getVenta() { return venta; }
    public void setVenta(Venta venta) { this.venta = venta; }

    public LocalDateTime getFechaRegistro() { return fechaRegistro; }
    public void setFechaRegistro(LocalDateTime fechaRegistro) { this.fechaRegistro = fechaRegistro; }

    public String getDetalleIncidente() { return detalleIncidente; }
    public void setDetalleIncidente(String detalleIncidente) { this.detalleIncidente = detalleIncidente; }

    public String getEstado() { return estado; }
    public void setEstado(String estado) { this.estado = estado; }
}
