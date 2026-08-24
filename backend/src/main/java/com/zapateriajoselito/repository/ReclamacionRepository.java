package com.zapateriajoselito.repository;

import com.zapateriajoselito.model.entity.Reclamacion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReclamacionRepository extends JpaRepository<Reclamacion, Long> {
    List<Reclamacion> findByUsuarioIdUsuarioOrderByFechaRegistroDesc(Long idUsuario);
    List<Reclamacion> findByEstado(String estado);
}
