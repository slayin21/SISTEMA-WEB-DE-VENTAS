package com.zapateriajoselito.repository;

import com.zapateriajoselito.model.entity.Venta;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface VentaRepository extends JpaRepository<Venta, Long> {
    List<Venta> findByUsuarioIdUsuarioOrderByFechaDesc(Long idUsuario);
    List<Venta> findByEstadoPedido(String estadoPedido);
    List<Venta> findByFechaBetween(LocalDateTime inicio, LocalDateTime fin);
}
