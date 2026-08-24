package com.zapateriajoselito.dto;

import java.math.BigDecimal;

public class ReporteDTOs {

    public static class ReporteVentasSummary {
        private Long totalVentas;
        private BigDecimal ingresosTotales;
        private BigDecimal totalDescuentos;
        private BigDecimal totalEnvios;
        private BigDecimal subtotalGeneral;

        public ReporteVentasSummary() {}
        public ReporteVentasSummary(Long totalVentas, BigDecimal ingresosTotales, BigDecimal totalDescuentos, BigDecimal totalEnvios, BigDecimal subtotalGeneral) {
            this.totalVentas = totalVentas;
            this.ingresosTotales = ingresosTotales;
            this.totalDescuentos = totalDescuentos;
            this.totalEnvios = totalEnvios;
            this.subtotalGeneral = subtotalGeneral;
        }

        public static ReporteVentasSummaryBuilder builder() {
            return new ReporteVentasSummaryBuilder();
        }

        public Long getTotalVentas() { return totalVentas; }
        public void setTotalVentas(Long totalVentas) { this.totalVentas = totalVentas; }
        public BigDecimal getIngresosTotales() { return ingresosTotales; }
        public void setIngresosTotales(BigDecimal ingresosTotales) { this.ingresosTotales = ingresosTotales; }
        public BigDecimal getTotalDescuentos() { return totalDescuentos; }
        public void setTotalDescuentos(BigDecimal totalDescuentos) { this.totalDescuentos = totalDescuentos; }
        public BigDecimal getTotalEnvios() { return totalEnvios; }
        public void setTotalEnvios(BigDecimal totalEnvios) { this.totalEnvios = totalEnvios; }
        public BigDecimal getSubtotalGeneral() { return subtotalGeneral; }
        public void setSubtotalGeneral(BigDecimal subtotalGeneral) { this.subtotalGeneral = subtotalGeneral; }

        public static class ReporteVentasSummaryBuilder {
            private Long totalVentas;
            private BigDecimal ingresosTotales;
            private BigDecimal totalDescuentos;
            private BigDecimal totalEnvios;
            private BigDecimal subtotalGeneral;

            public ReporteVentasSummaryBuilder totalVentas(Long totalVentas) { this.totalVentas = totalVentas; return this; }
            public ReporteVentasSummaryBuilder ingresosTotales(BigDecimal ingresosTotales) { this.ingresosTotales = ingresosTotales; return this; }
            public ReporteVentasSummaryBuilder totalDescuentos(BigDecimal totalDescuentos) { this.totalDescuentos = totalDescuentos; return this; }
            public ReporteVentasSummaryBuilder totalEnvios(BigDecimal totalEnvios) { this.totalEnvios = totalEnvios; return this; }
            public ReporteVentasSummaryBuilder subtotalGeneral(BigDecimal subtotalGeneral) { this.subtotalGeneral = subtotalGeneral; return this; }
            public ReporteVentasSummary build() { return new ReporteVentasSummary(totalVentas, ingresosTotales, totalDescuentos, totalEnvios, subtotalGeneral); }
        }
    }

    public static class ProductoTopDTO {
        private Long idProducto;
        private String nombre;
        private String marca;
        private Long cantidadVendida;
        private BigDecimal totalGenerado;

        public ProductoTopDTO() {}
        public ProductoTopDTO(Long idProducto, String nombre, String marca, Long cantidadVendida, BigDecimal totalGenerado) {
            this.idProducto = idProducto;
            this.nombre = nombre;
            this.marca = marca;
            this.cantidadVendida = cantidadVendida;
            this.totalGenerado = totalGenerado;
        }

        public static ProductoTopDTOBuilder builder() {
            return new ProductoTopDTOBuilder();
        }

        public Long getIdProducto() { return idProducto; }
        public void setIdProducto(Long idProducto) { this.idProducto = idProducto; }
        public String getNombre() { return nombre; }
        public void setNombre(String nombre) { this.nombre = nombre; }
        public String getMarca() { return marca; }
        public void setMarca(String marca) { this.marca = marca; }
        public Long getCantidadVendida() { return cantidadVendida; }
        public void setCantidadVendida(Long cantidadVendida) { this.cantidadVendida = cantidadVendida; }
        public BigDecimal getTotalGenerado() { return totalGenerado; }
        public void setTotalGenerado(BigDecimal totalGenerado) { this.totalGenerado = totalGenerado; }

        public static class ProductoTopDTOBuilder {
            private Long idProducto;
            private String nombre;
            private String marca;
            private Long cantidadVendida;
            private BigDecimal totalGenerado;

            public ProductoTopDTOBuilder idProducto(Long idProducto) { this.idProducto = idProducto; return this; }
            public ProductoTopDTOBuilder nombre(String nombre) { this.nombre = nombre; return this; }
            public ProductoTopDTOBuilder marca(String marca) { this.marca = marca; return this; }
            public ProductoTopDTOBuilder cantidadVendida(Long cantidadVendida) { this.cantidadVendida = cantidadVendida; return this; }
            public ProductoTopDTOBuilder totalGenerado(BigDecimal totalGenerado) { this.totalGenerado = totalGenerado; return this; }
            public ProductoTopDTO build() { return new ProductoTopDTO(idProducto, nombre, marca, cantidadVendida, totalGenerado); }
        }
    }
}
