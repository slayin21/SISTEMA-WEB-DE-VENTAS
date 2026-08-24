package com.zapateriajoselito.repository;

import com.zapateriajoselito.model.entity.Direccion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface DireccionRepository extends JpaRepository<Direccion, Long> {
    List<Direccion> findByUsuarioIdUsuario(Long idUsuario);
    Optional<Direccion> findByUsuarioIdUsuarioAndPrincipalTrue(Long idUsuario);
}
