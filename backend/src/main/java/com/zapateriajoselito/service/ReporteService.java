package com.zapateriajoselito.service;

import com.zapateriajoselito.dto.ReporteDTOs.*;
import com.zapateriajoselito.model.entity.Venta;
import com.zapateriajoselito.repository.VentaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.*;
import java.util.stream.Collectors;

@Service
public class ReporteService {

    @Autowired
    private VentaRepository ventaRepository;

    public ReporteVentasSummary obtenerResumenVentas(LocalDateTime inicio, LocalDateTime fin) {
        List<Venta> ventas = (inicio != null && fin != null)
                ? ventaRepository.findAll().stream()
                    .filter(v -> v.getFecha() != null && !v.getFecha().isBefore(inicio) && !v.getFecha().isAfter(fin))
                    .collect(Collectors.toList())
                : ventaRepository.findAll();

        long count = ventas.size();
        BigDecimal ingresosTotales = BigDecimal.ZERO;
        BigDecimal totalDescuentos = BigDecimal.ZERO;
        BigDecimal totalEnvios = BigDecimal.ZERO;
        BigDecimal subtotalGeneral = BigDecimal.ZERO;

        for (Venta v : ventas) {
            BigDecimal sub = v.getSubtotal() != null ? v.getSubtotal() : BigDecimal.ZERO;
            BigDecimal desc = v.getDescuentoMonto() != null ? v.getDescuentoMonto() : BigDecimal.ZERO;
            BigDecimal env = v.getCostoEnvio() != null ? v.getCostoEnvio() : BigDecimal.ZERO;

            subtotalGeneral = subtotalGeneral.add(sub);
            totalDescuentos = totalDescuentos.add(desc);
            totalEnvios = totalEnvios.add(env);
            ingresosTotales = ingresosTotales.add(sub.add(env).subtract(desc));
        }

        return ReporteVentasSummary.builder()
                .totalVentas(count)
                .ingresosTotales(ingresosTotales)
                .totalDescuentos(totalDescuentos)
                .totalEnvios(totalEnvios)
                .subtotalGeneral(subtotalGeneral)
                .build();
    }

    public List<ProductoTopDTO> obtenerProductosTop() {
        List<Venta> ventas = ventaRepository.findAll();
        Map<Long, ProductoTopDTO> mapaProductos = new HashMap<>();

        ventas.forEach(v -> {
            if (v.getDetalles() != null) {
                v.getDetalles().forEach(detalle -> {
                    if (detalle.getVariante() != null && detalle.getVariante().getProducto() != null) {
                        Long idProd = detalle.getVariante().getProducto().getIdProducto();
                        String nombre = detalle.getVariante().getProducto().getNombre();
                        String marca = detalle.getVariante().getProducto().getMarca();

                        int cant = detalle.getCantidad() != null ? detalle.getCantidad() : 0;
                        BigDecimal subt = detalle.getSubtotal() != null ? detalle.getSubtotal() : BigDecimal.ZERO;

                        ProductoTopDTO dto = mapaProductos.getOrDefault(idProd, ProductoTopDTO.builder()
                                .idProducto(idProd)
                                .nombre(nombre)
                                .marca(marca != null ? marca : "Joselito")
                                .cantidadVendida(0L)
                                .totalGenerado(BigDecimal.ZERO)
                                .build());

                        dto.setCantidadVendida(dto.getCantidadVendida() + cant);
                        dto.setTotalGenerado(dto.getTotalGenerado().add(subt));
                        mapaProductos.put(idProd, dto);
                    }
                });
            }
        });

        return mapaProductos.values().stream()
                .sorted((a, b) -> b.getCantidadVendida().compareTo(a.getCantidadVendida()))
                .collect(Collectors.toList());
    }

    public String generarReporteCSV() {
        List<Venta> ventas = ventaRepository.findAll();
        StringBuilder csv = new StringBuilder();
        csv.append("ID VENTA,FECHA,CLIENTE,SUBTOTAL,DESCUENTO,COSTO ENVIO,TOTAL,ESTADO\n");

        for (Venta v : ventas) {
            BigDecimal sub = v.getSubtotal() != null ? v.getSubtotal() : BigDecimal.ZERO;
            BigDecimal desc = v.getDescuentoMonto() != null ? v.getDescuentoMonto() : BigDecimal.ZERO;
            BigDecimal env = v.getCostoEnvio() != null ? v.getCostoEnvio() : BigDecimal.ZERO;
            BigDecimal tot = sub.add(env).subtract(desc);
            String cliente = v.getUsuario() != null ? v.getUsuario().getNombre() : "Cliente Anónimo";

            csv.append(v.getIdVenta()).append(",")
               .append(v.getFecha()).append(",")
               .append("\"").append(cliente).append("\",")
               .append(sub).append(",")
               .append(desc).append(",")
               .append(env).append(",")
               .append(tot).append(",")
               .append(v.getEstadoPedido()).append("\n");
        }

        return csv.toString();
    }
}
