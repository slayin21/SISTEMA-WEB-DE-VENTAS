package com.zapateriajoselito.model.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.*;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "PRODUCTO_VARIANTES")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ProductoVariante {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_variantes")
    private Long idVariante;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "id_productos", nullable = false)
    @JsonIgnoreProperties({"variantes", "resenas"})
    @NotNull(message = "El producto padre es obligatorio")
    private Producto producto;

    @NotBlank(message = "La talla es obligatoria")
    @Size(max = 20, message = "La talla no puede superar los 20 caracteres")
    @Column(name = "talla", nullable = false, length = 20)
    private String talla;

    @NotBlank(message = "El color es obligatorio")
    @Size(max = 50, message = "El color no puede superar los 50 caracteres")
    @Column(name = "color", nullable = false, length = 50)
    private String color;

    @NotBlank(message = "El SKU es obligatorio")
    @Size(max = 50, message = "El SKU no puede superar los 50 caracteres")
    @Column(name = "sku", nullable = false, unique = true, length = 50)
    private String sku;

    @NotNull(message = "El precio es obligatorio")
    @DecimalMin(value = "0.0", inclusive = false, message = "El precio debe ser mayor a 0")
    @Column(name = "precio", nullable = false, precision = 10, scale = 2)
    private BigDecimal precio;

    @NotNull(message = "El stock es obligatorio")
    @Min(value = 0, message = "El stock no puede ser negativo")
    @Column(name = "stock", nullable = false)
    private Integer stock;

    @NotNull(message = "El estado activo es obligatorio")
    @Column(name = "activo", nullable = false)
    @Builder.Default
    private Boolean activo = true;

    @OneToMany(mappedBy = "variante", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonIgnoreProperties("variante")
    @Builder.Default
    private List<DetalleCompra> detallesCompras = new ArrayList<>();

    @OneToMany(mappedBy = "variante", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonIgnoreProperties("variante")
    @Builder.Default
    private List<InventarioMovimiento> movimientosInventario = new ArrayList<>();

    @OneToMany(mappedBy = "variante", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonIgnoreProperties("variante")
    @Builder.Default
    private List<CarritoItem> carritoItems = new ArrayList<>();

    @OneToMany(mappedBy = "variante", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonIgnoreProperties("variante")
    @Builder.Default
    private List<DetalleVenta> detallesVentas = new ArrayList<>();

    // Manual Getters & Setters
    public Long getIdVariante() { return idVariante; }
    public void setIdVariante(Long idVariante) { this.idVariante = idVariante; }

    public Producto getProducto() { return producto; }
    public void setProducto(Producto producto) { this.producto = producto; }

    public String getTalla() { return talla; }
    public void setTalla(String talla) { this.talla = talla; }

    public String getColor() { return color; }
    public void setColor(String color) { this.color = color; }

    public String getSku() { return sku; }
    public void setSku(String sku) { this.sku = sku; }

    public BigDecimal getPrecio() { return precio; }
    public void setPrecio(BigDecimal precio) { this.precio = precio; }

    public Integer getStock() { return stock; }
    public void setStock(Integer stock) { this.stock = stock; }

    public Boolean getActivo() { return activo; }
    public void setActivo(Boolean activo) { this.activo = activo; }

    public List<DetalleCompra> getDetallesCompras() { return detallesCompras; }
    public void setDetallesCompras(List<DetalleCompra> detallesCompras) { this.detallesCompras = detallesCompras; }

    public List<InventarioMovimiento> getMovimientosInventario() { return movimientosInventario; }
    public void setMovimientosInventario(List<InventarioMovimiento> movimientosInventario) { this.movimientosInventario = movimientosInventario; }

    public List<CarritoItem> getCarritoItems() { return carritoItems; }
    public void setCarritoItems(List<CarritoItem> carritoItems) { this.carritoItems = carritoItems; }

    public List<DetalleVenta> getDetallesVentas() { return detallesVentas; }
    public void setDetallesVentas(List<DetalleVenta> detallesVentas) { this.detallesVentas = detallesVentas; }
}
