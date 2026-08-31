package com.zapateriajoselito.service;

import com.zapateriajoselito.model.entity.*;
import com.zapateriajoselito.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
public class VentaService {

    @Autowired
    private VentaRepository ventaRepository;

    @Autowired
    private DetalleVentaRepository detalleVentaRepository;

    @Autowired
    private ProductoVarianteRepository varianteRepository;

    @Autowired
    private InventarioMovimientoRepository movimientoRepository;

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private MetodoPagoRepository metodoPagoRepository;

    @Autowired
    private CuponRepository cuponRepository;

    @Autowired
    private CarritoRepository carritoRepository;

    @Autowired
    private EmailService emailService;

    @Transactional(readOnly = true)
    public List<Venta> obtenerVentasPorUsuario(Long idUsuario) {
        return ventaRepository.findByUsuarioIdUsuarioOrderByFechaDesc(idUsuario);
    }

    @Transactional(readOnly = true)
    public Venta obtenerPorId(Long idVenta) {
        return ventaRepository.findById(idVenta)
                .orElseThrow(() -> new RuntimeException("Venta no encontrada con ID: " + idVenta));
    }

    @Transactional(readOnly = true)
    public List<Venta> obtenerTodas() {
        return ventaRepository.findAll();
    }

    @Transactional
    public Venta registrarVenta(Venta ventaRequest) {
        Usuario usuario = usuarioRepository.findById(ventaRequest.getUsuario().getIdUsuario())
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));

        MetodoPago metodoPago = metodoPagoRepository.findById(ventaRequest.getMetodoPago().getIdMetodoPago())
                .orElseThrow(() -> new RuntimeException("Método de pago no encontrado"));

        Cupon cupon = null;
        if (ventaRequest.getCupon() != null && ventaRequest.getCupon().getIdCupon() != null) {
            cupon = cuponRepository.findById(ventaRequest.getCupon().getIdCupon())
                    .orElse(null);
        }

        Venta venta = new Venta();
        venta.setUsuario(usuario);
        venta.setMetodoPago(metodoPago);
        venta.setCupon(cupon);
        venta.setFecha(LocalDateTime.now());
        venta.setSubtotal(ventaRequest.getSubtotal());
        venta.setDescuentoMonto(ventaRequest.getDescuentoMonto() != null ? ventaRequest.getDescuentoMonto() : BigDecimal.ZERO);
        venta.setDireccionEnvio(ventaRequest.getDireccionEnvio());
        venta.setDistritoEnvio(ventaRequest.getDistritoEnvio());
        venta.setProvinciaEnvio(ventaRequest.getProvinciaEnvio() != null ? ventaRequest.getProvinciaEnvio() : "Lima");
        venta.setDepartamentoEnvio(ventaRequest.getDepartamentoEnvio() != null ? ventaRequest.getDepartamentoEnvio() : "Lima");
        venta.setCostoEnvio(ventaRequest.getCostoEnvio());
        venta.setDespachadorAgencia(ventaRequest.getDespachadorAgencia());
        venta.setEstadoPedido("PAGADO");
        venta.setDetalles(new ArrayList<>());

        Venta ventaGuardada = ventaRepository.save(venta);
        List<DetalleVenta> detallesGuardados = new ArrayList<>();

        for (DetalleVenta itemReq : ventaRequest.getDetalles()) {
            ProductoVariante variante = varianteRepository.findById(itemReq.getVariante().getIdVariante())
                    .orElseThrow(() -> new RuntimeException("Variante no encontrada con ID: " + itemReq.getVariante().getIdVariante()));

            if (variante.getStock() < itemReq.getCantidad()) {
                throw new RuntimeException("Stock insuficiente para el producto: "
                        + variante.getProducto().getNombre() + " (" + variante.getTalla() + " / " + variante.getColor() + "). "
                        + "Stock disponible: " + variante.getStock() + ", solicitado: " + itemReq.getCantidad());
            }

            int stockAnterior = variante.getStock();
            int nuevoStock = stockAnterior - itemReq.getCantidad();

            variante.setStock(nuevoStock);
            varianteRepository.save(variante);

            DetalleVenta detalle = new DetalleVenta();
            detalle.setVenta(ventaGuardada);
            detalle.setVariante(variante);
            detalle.setCantidad(itemReq.getCantidad());
            detalle.setPrecioUnitario(itemReq.getPrecioUnitario());
            detalle.setSubtotal(itemReq.getSubtotal());

            DetalleVenta detalleGuardado = detalleVentaRepository.save(detalle);
            detallesGuardados.add(detalleGuardado);

            InventarioMovimiento movimiento = new InventarioMovimiento();
            movimiento.setVariante(variante);
            movimiento.setVenta(ventaGuardada);
            movimiento.setTipoMovimiento("SALIDA");
            movimiento.setOrigenTipo("VENTA");
            movimiento.setCantidad(itemReq.getCantidad());
            movimiento.setStockAnterior(stockAnterior);
            movimiento.setStockActual(nuevoStock);
            movimiento.setFechaMovimiento(LocalDateTime.now());
            movimiento.setObservacion("Venta realizada N° " + ventaGuardada.getIdVenta());

            movimientoRepository.save(movimiento);
        }

        ventaGuardada.setDetalles(detallesGuardados);

        carritoRepository.findByUsuarioIdUsuario(usuario.getIdUsuario())
                .ifPresent(carrito -> {
                    carrito.getItems().clear();
                    carritoRepository.save(carrito);
                });

        try {
            emailService.enviarBoletaDigital(ventaGuardada);
        } catch (Exception e) {
            System.err.println("No se pudo enviar el correo de la boleta: " + e.getMessage());
        }

        return ventaGuardada;
    }

    @Transactional
    public Venta actualizarEstadoPedido(Long idVenta, String nuevoEstado) {
        Venta venta = obtenerPorId(idVenta);
        venta.setEstadoPedido(nuevoEstado);
        return ventaRepository.save(venta);
    }
}
