package com.zapateriajoselito.service;

import com.zapateriajoselito.model.entity.Proveedor;
import com.zapateriajoselito.repository.ProveedorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProveedorService {

    @Autowired
    private ProveedorRepository proveedorRepository;

    public List<Proveedor> listarTodos() {
        return proveedorRepository.findAll();
    }

    public Proveedor obtenerPorId(Long id) {
        return proveedorRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Proveedor no encontrado con ID: " + id));
    }

    public Proveedor guardar(Proveedor proveedor) {
        return proveedorRepository.save(proveedor);
    }

    public Proveedor actualizar(Long id, Proveedor proveedor) {
        Proveedor existente = obtenerPorId(id);
        existente.setRazonSocial(proveedor.getRazonSocial());
        existente.setRuc(proveedor.getRuc());
        existente.setTelefono(proveedor.getTelefono());
        existente.setCorreo(proveedor.getCorreo());
        existente.setDireccion(proveedor.getDireccion());
        existente.setEstado(proveedor.getEstado());
        return proveedorRepository.save(existente);
    }

    public void eliminar(Long id) {
        proveedorRepository.deleteById(id);
    }
}
