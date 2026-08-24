package com.zapateriajoselito.model.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "VENTAS")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Venta {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_ventas")
    private Long idVenta;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_usuarios", nullable = false)
    @JsonIgnoreProperties({"ventas", "direcciones", "carritos", "resenas", "reclamaciones"})
    @NotNull(message = "El usuario es obligatorio")
    private Usuario usuario;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_metodos_pago", nullable = false)
    @JsonIgnoreProperties("ventas")
    @NotNull(message = "El método de pago es obligatorio")
    private MetodoPago metodoPago;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_cupones")
    @JsonIgnoreProperties("ventas")
    private Cupon cupon;

    @NotNull(message = "La fecha de venta es obligatoria")
    @Column(name = "fecha", nullable = false)
    @Builder.Default
    private LocalDateTime fecha = LocalDateTime.now();

    @NotNull(message = "El subtotal es obligatorio")
    @DecimalMin(value = "0.0", message = "El subtotal no puede ser negativo")
    @Column(name = "monto_total", nullable = false, precision = 12, scale = 2)
    private BigDecimal subtotal;

    @Transient
    @Builder.Default
    private BigDecimal descuentoMonto = BigDecimal.ZERO;

    @NotBlank(message = "La dirección de envío es obligatoria")
    @Size(max = 200, message = "La dirección de envío no debe superar los 200 caracteres")
    @Column(name = "direccion_envio", nullable = false, length = 200)
    private String direccionEnvio;

    @NotBlank(message = "El distrito de envío es obligatorio")
    @Size(max = 100, message = "El distrito de envío no debe superar los 100 caracteres")
    @Column(name = "distrito_envio", nullable = false, length = 100)
    private String distritoEnvio;

    @Transient
    @Builder.Default
    private BigDecimal costoEnvio = BigDecimal.ZERO;

    @Transient
    private String despachadorAgencia;

    @NotBlank(message = "El estado del pedido es obligatorio")
    @Column(name = "estado_pedido", nullable = false, length = 30)
    @Builder.Default
    private String estadoPedido = "PENDIENTE";

    @OneToMany(mappedBy = "venta", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonIgnoreProperties("venta")
    @Builder.Default
    private List<DetalleVenta> detalles = new ArrayList<>();

    @OneToMany(mappedBy = "venta", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonIgnoreProperties("venta")
    @Builder.Default
    private List<InventarioMovimiento> movimientos = new ArrayList<>();

    @OneToMany(mappedBy = "venta", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonIgnoreProperties("venta")
    @Builder.Default
    private List<Reclamacion> reclamaciones = new ArrayList<>();

    // Manual Getters & Setters
    public Long getIdVenta() { return idVenta; }
    public void setIdVenta(Long idVenta) { this.idVenta = idVenta; }

    public Usuario getUsuario() { return usuario; }
    public void setUsuario(Usuario usuario) { this.usuario = usuario; }

    public MetodoPago getMetodoPago() { return metodoPago; }
    public void setMetodoPago(MetodoPago metodoPago) { this.metodoPago = metodoPago; }

    public Cupon getCupon() { return cupon; }
    public void setCupon(Cupon cupon) { this.cupon = cupon; }

    public LocalDateTime getFecha() { return fecha; }
    public void setFecha(LocalDateTime fecha) { this.fecha = fecha; }

    public BigDecimal getSubtotal() { return subtotal; }
    public void setSubtotal(BigDecimal subtotal) { this.subtotal = subtotal; }

    public BigDecimal getDescuentoMonto() { return descuentoMonto; }
    public void setDescuentoMonto(BigDecimal descuentoMonto) { this.descuentoMonto = descuentoMonto; }

    public String getDireccionEnvio() { return direccionEnvio; }
    public void setDireccionEnvio(String direccionEnvio) { this.direccionEnvio = direccionEnvio; }

    public String getDistritoEnvio() { return distritoEnvio; }
    public void setDistritoEnvio(String distritoEnvio) { this.distritoEnvio = distritoEnvio; }

    public BigDecimal getCostoEnvio() { return costoEnvio; }
    public void setCostoEnvio(BigDecimal costoEnvio) { this.costoEnvio = costoEnvio; }

    public String getDespachadorAgencia() { return despachadorAgencia; }
    public void setDespachadorAgencia(String despachadorAgencia) { this.despachadorAgencia = despachadorAgencia; }

    public String getEstadoPedido() { return estadoPedido; }
    public void setEstadoPedido(String estadoPedido) { this.estadoPedido = estadoPedido; }

    public List<DetalleVenta> getDetalles() { return detalles; }
    public void setDetalles(List<DetalleVenta> detalles) { this.detalles = detalles; }

    public List<InventarioMovimiento> getMovimientos() { return movimientos; }
    public void setMovimientos(List<InventarioMovimiento> movimientos) { this.movimientos = movimientos; }

    public List<Reclamacion> getReclamaciones() { return reclamaciones; }
    public void setReclamaciones(List<Reclamacion> reclamaciones) { this.reclamaciones = reclamaciones; }
}
