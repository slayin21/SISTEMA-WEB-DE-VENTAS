package com.zapateriajoselito.model.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "PROVEEDORES")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Proveedor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_proveedores")
    private Long idProveedor;

    @NotBlank(message = "La razón social es obligatoria")
    @Size(max = 150, message = "La razón social no debe superar los 150 caracteres")
    @Column(name = "razon_social", nullable = false, length = 150)
    private String razonSocial;

    @NotBlank(message = "El RUC es obligatorio")
    @Size(min = 11, max = 11, message = "El RUC debe contener exactamente 11 dígitos")
    @Column(name = "ruc", nullable = false, unique = true, length = 11)
    private String ruc;

    @Size(max = 20, message = "El teléfono no debe superar 20 caracteres")
    @Column(name = "telefono", length = 20)
    private String telefono;

    @Email(message = "Debe ser una dirección de correo válida")
    @Size(max = 100, message = "El correo no debe superar los 100 caracteres")
    @Column(name = "correo", length = 100)
    private String correo;

    @Size(max = 250, message = "La dirección no debe superar los 250 caracteres")
    @Column(name = "direccion", length = 250)
    private String direccion;

    @NotNull(message = "El estado del proveedor es obligatorio")
    @Column(name = "estado", nullable = false)
    @Builder.Default
    private Boolean estado = true;

    @OneToMany(mappedBy = "proveedor", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonIgnore
    @Builder.Default
    private List<Compra> compras = new ArrayList<>();

    // Manual Getters & Setters
    public Long getIdProveedor() { return idProveedor; }
    public void setIdProveedor(Long idProveedor) { this.idProveedor = idProveedor; }

    public String getRazonSocial() { return razonSocial; }
    public void setRazonSocial(String razonSocial) { this.razonSocial = razonSocial; }

    public String getRuc() { return ruc; }
    public void setRuc(String ruc) { this.ruc = ruc; }

    public String getTelefono() { return telefono; }
    public void setTelefono(String telefono) { this.telefono = telefono; }

    public String getCorreo() { return correo; }
    public void setCorreo(String correo) { this.correo = correo; }

    public String getDireccion() { return direccion; }
    public void setDireccion(String direccion) { this.direccion = direccion; }

    public Boolean getEstado() { return estado; }
    public void setEstado(Boolean estado) { this.estado = estado; }
}
