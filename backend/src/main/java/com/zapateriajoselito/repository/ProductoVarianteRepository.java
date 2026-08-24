package com.zapateriajoselito.repository;

import com.zapateriajoselito.model.entity.ProductoVariante;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ProductoVarianteRepository extends JpaRepository<ProductoVariante, Long> {
    Optional<ProductoVariante> findBySku(String sku);
    List<ProductoVariante> findByProductoIdProducto(Long idProducto);
    List<ProductoVariante> findByProductoIdProductoAndActivoTrue(Long idProducto);
    List<ProductoVariante> findByStockLessThanEqual(Integer stockMinimo);
}
