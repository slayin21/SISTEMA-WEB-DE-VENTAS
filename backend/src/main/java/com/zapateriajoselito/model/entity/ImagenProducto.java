package com.zapateriajoselito.model.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

@Entity
@Table(name = "IMAGENES_PRODUCTOS")
public class ImagenProducto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_imagenes_productos")
    private Long idImagenProducto;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_productos", nullable = false)
    @JsonIgnoreProperties("imagenes")
    @NotNull(message = "El producto es obligatorio")
    private Producto producto;

    @NotBlank(message = "La URL de la imagen es obligatoria")
    @Column(name = "url_imagen", nullable = false, columnDefinition = "NVARCHAR(MAX)")
    private String urlImagen;

    @Column(name = "orden_visualizacion")
    private Integer ordenVisualizacion;

    @NotNull(message = "Debe indicarse si es la imagen principal")
    @Column(name = "es_principal", nullable = false)
    private Boolean esPrincipal = false;

    public ImagenProducto() {}

    public ImagenProducto(Long idImagenProducto, Producto producto, String urlImagen, Integer ordenVisualizacion, Boolean esPrincipal) {
        this.idImagenProducto = idImagenProducto;
        this.producto = producto;
        this.urlImagen = urlImagen;
        this.ordenVisualizacion = ordenVisualizacion;
        this.esPrincipal = esPrincipal;
    }

    public Long getIdImagenProducto() { return idImagenProducto; }
    public void setIdImagenProducto(Long idImagenProducto) { this.idImagenProducto = idImagenProducto; }

    public Producto getProducto() { return producto; }
    public void setProducto(Producto producto) { this.producto = producto; }

    public String getUrlImagen() { return urlImagen; }
    public void setUrlImagen(String urlImagen) { this.urlImagen = urlImagen; }

    public Integer getOrdenVisualizacion() { return ordenVisualizacion; }
    public void setOrdenVisualizacion(Integer ordenVisualizacion) { this.ordenVisualizacion = ordenVisualizacion; }

    public Boolean getEsPrincipal() { return esPrincipal; }
    public void setEsPrincipal(Boolean esPrincipal) { this.esPrincipal = esPrincipal; }
}
