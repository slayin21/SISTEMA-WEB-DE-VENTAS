package com.zapateriajoselito.repository;

import com.zapateriajoselito.model.entity.Resena;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ResenaRepository extends JpaRepository<Resena, Long> {
    List<Resena> findByProductoIdProductoOrderByFechaDesc(Long idProducto);
    List<Resena> findByUsuarioIdUsuario(Long idUsuario);
}
