package com.zapateriajoselito.controller;

import com.zapateriajoselito.dto.ReporteDTOs.*;
import com.zapateriajoselito.service.ReporteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/admin/reportes")
@CrossOrigin(origins = "*")
public class ReporteController {

    @Autowired
    private ReporteService reporteService;

    @GetMapping("/resumen")
    public ResponseEntity<ReporteVentasSummary> obtenerResumen(
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime inicio,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime fin) {
        return ResponseEntity.ok(reporteService.obtenerResumenVentas(inicio, fin));
    }

    @GetMapping("/top-productos")
    public ResponseEntity<List<ProductoTopDTO>> obtenerTopProductos() {
        return ResponseEntity.ok(reporteService.obtenerProductosTop());
    }

    @GetMapping("/exportar-csv")
    public ResponseEntity<byte[]> exportarCSV() {
        String csv = reporteService.generarReporteCSV();
        byte[] bytes = csv.getBytes();

        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=reporte_ventas_joselito.csv")
                .contentType(MediaType.parseMediaType("text/csv"))
                .body(bytes);
    }
}
