package com.zapateriajoselito.service;

import com.zapateriajoselito.model.entity.Direccion;
import com.zapateriajoselito.model.entity.Usuario;
import com.zapateriajoselito.repository.DireccionRepository;
import com.zapateriajoselito.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DireccionService {

    @Autowired
    private DireccionRepository direccionRepository;

    @Autowired
    private UsuarioRepository usuarioRepository;

    public List<Direccion> listarPorUsuario(Long idUsuario) {
        return direccionRepository.findByUsuarioIdUsuario(idUsuario);
    }

    public Direccion guardarDireccion(Long idUsuario, Direccion direccion) {
        Usuario usuario = usuarioRepository.findById(idUsuario)
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));

        direccion.setUsuario(usuario);

        if (Boolean.TRUE.equals(direccion.getPrincipal())) {
            desmarcarOtrasDireccionesPrincipales(idUsuario);
        }

        return direccionRepository.save(direccion);
    }

    public Direccion actualizarDireccion(Long idDireccion, Direccion detalles) {
        Direccion existente = direccionRepository.findById(idDireccion)
                .orElseThrow(() -> new RuntimeException("Dirección no encontrada"));

        existente.setDireccion(detalles.getDireccion());
        existente.setDistrito(detalles.getDistrito());
        existente.setProvincia(detalles.getProvincia());
        existente.setDepartamento(detalles.getDepartamento());
        existente.setReferencia(detalles.getReferencia());

        if (Boolean.TRUE.equals(detalles.getPrincipal())) {
            desmarcarOtrasDireccionesPrincipales(existente.getUsuario().getIdUsuario());
            existente.setPrincipal(true);
        }

        return direccionRepository.save(existente);
    }

    public void eliminarDireccion(Long idDireccion) {
        direccionRepository.deleteById(idDireccion);
    }

    private void desmarcarOtrasDireccionesPrincipales(Long idUsuario) {
        List<Direccion> direcciones = direccionRepository.findByUsuarioIdUsuario(idUsuario);
        direcciones.forEach(d -> {
            if (Boolean.TRUE.equals(d.getPrincipal())) {
                d.setPrincipal(false);
                direccionRepository.save(d);
            }
        });
    }
}
