package com.zapateriajoselito.repository;

import com.zapateriajoselito.model.entity.ImagenProducto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ImagenProductoRepository extends JpaRepository<ImagenProducto, Long> {
    List<ImagenProducto> findByProductoIdProductoOrderByOrdenVisualizacionAsc(Long idProducto);
}
