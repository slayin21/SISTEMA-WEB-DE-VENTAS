package com.zapateriajoselito.service;

import com.zapateriajoselito.model.entity.InventarioMovimiento;
import com.zapateriajoselito.model.entity.ProductoVariante;
import com.zapateriajoselito.repository.InventarioMovimientoRepository;
import com.zapateriajoselito.repository.ProductoVarianteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class InventarioService {

    @Autowired
    private InventarioMovimientoRepository movimientoRepository;

    @Autowired
    private ProductoVarianteRepository varianteRepository;

    @Transactional(readOnly = true)
    public List<InventarioMovimiento> obtenerMovimientosPorVariante(Long idVariante) {
        return movimientoRepository.findByVarianteIdVarianteOrderByFechaMovimientoDesc(idVariante);
    }

    @Transactional
    public InventarioMovimiento registrarMovimiento(Long idVariante, String tipoMovimiento, int cantidad, String observacion) {
        ProductoVariante variante = varianteRepository.findById(idVariante)
                .orElseThrow(() -> new RuntimeException("Variante de producto no encontrada"));

        int stockAnterior = variante.getStock();
        int stockNuevo;

        if ("ENTRADA_COMPRA".equalsIgnoreCase(tipoMovimiento) || "AJUSTE_ENTRADA".equalsIgnoreCase(tipoMovimiento)) {
            stockNuevo = stockAnterior + cantidad;
        } else if ("SALIDA_VENTA".equalsIgnoreCase(tipoMovimiento) || "AJUSTE_SALIDA".equalsIgnoreCase(tipoMovimiento)) {
            if (stockAnterior < cantidad) {
                throw new RuntimeException("Stock insuficiente para realizar el movimiento. Stock disponible: " + stockAnterior);
            }
            stockNuevo = stockAnterior - cantidad;
        } else {
            stockNuevo = cantidad; // Ajuste directo
        }

        variante.setStock(stockNuevo);
        varianteRepository.save(variante);

        InventarioMovimiento movimiento = new InventarioMovimiento();
        movimiento.setVariante(variante);
        movimiento.setTipoMovimiento(tipoMovimiento);
        movimiento.setCantidad(cantidad);
        movimiento.setStockAnterior(stockAnterior);
        movimiento.setStockActual(stockNuevo);
        movimiento.setFechaMovimiento(LocalDateTime.now());
        movimiento.setObservacion(observacion);

        return movimientoRepository.save(movimiento);
    }
}
