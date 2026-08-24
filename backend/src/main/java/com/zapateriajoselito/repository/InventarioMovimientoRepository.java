package com.zapateriajoselito.repository;

import com.zapateriajoselito.model.entity.InventarioMovimiento;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface InventarioMovimientoRepository extends JpaRepository<InventarioMovimiento, Long> {
    List<InventarioMovimiento> findByVarianteIdVarianteOrderByFechaMovimientoDesc(Long idVariante);
    List<InventarioMovimiento> findByTipoMovimiento(String tipoMovimiento);
}
