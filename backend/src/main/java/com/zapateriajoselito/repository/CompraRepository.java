package com.zapateriajoselito.repository;

import com.zapateriajoselito.model.entity.Compra;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface CompraRepository extends JpaRepository<Compra, Long> {
    List<Compra> findByProveedorIdProveedor(Long idProveedor);
    List<Compra> findByFechaBetween(LocalDateTime inicio, LocalDateTime fin);
}
