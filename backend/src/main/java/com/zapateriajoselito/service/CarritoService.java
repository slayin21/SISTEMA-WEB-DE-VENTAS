package com.zapateriajoselito.service;

import com.zapateriajoselito.model.entity.Carrito;
import com.zapateriajoselito.model.entity.CarritoItem;
import com.zapateriajoselito.model.entity.ProductoVariante;
import com.zapateriajoselito.model.entity.Usuario;
import com.zapateriajoselito.repository.CarritoItemRepository;
import com.zapateriajoselito.repository.CarritoRepository;
import com.zapateriajoselito.repository.ProductoVarianteRepository;
import com.zapateriajoselito.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.ArrayList;

@Service
public class CarritoService {

    @Autowired
    private CarritoRepository carritoRepository;

    @Autowired
    private CarritoItemRepository carritoItemRepository;

    @Autowired
    private ProductoVarianteRepository varianteRepository;

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Transactional
    public Carrito obtenerOCrearCarrito(Long idUsuario) {
        return carritoRepository.findByUsuarioIdUsuario(idUsuario)
                .orElseGet(() -> {
                    Usuario usuario = usuarioRepository.findById(idUsuario)
                            .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));
                    Carrito nuevoCarrito = new Carrito();
                    nuevoCarrito.setUsuario(usuario);
                    nuevoCarrito.setFechaCreacion(LocalDateTime.now());
                    nuevoCarrito.setItems(new ArrayList<>());
                    return carritoRepository.save(nuevoCarrito);
                });
    }

    @Transactional
    public Carrito agregarItem(Long idUsuario, Long idVariante, Integer cantidad) {
        Carrito carrito = obtenerOCrearCarrito(idUsuario);
        ProductoVariante variante = varianteRepository.findById(idVariante)
                .orElseThrow(() -> new RuntimeException("Variante de producto no encontrada"));

        if (variante.getStock() < cantidad) {
            throw new RuntimeException("Stock insuficiente para la variante seleccionada.");
        }

        var itemExistente = carritoItemRepository.findByCarritoIdCarritoAndVarianteIdVariante(carrito.getIdCarrito(), idVariante);

        if (itemExistente.isPresent()) {
            CarritoItem item = itemExistente.get();
            int nuevaCantidad = item.getCantidad() + cantidad;
            if (variante.getStock() < nuevaCantidad) {
                throw new RuntimeException("Supera el stock disponible");
            }
            item.setCantidad(nuevaCantidad);
            carritoItemRepository.save(item);
        } else {
            CarritoItem nuevoItem = new CarritoItem();
            nuevoItem.setCarrito(carrito);
            nuevoItem.setVariante(variante);
            nuevoItem.setCantidad(cantidad);
            carritoItemRepository.save(nuevoItem);
        }

        return obtenerOCrearCarrito(idUsuario);
    }

    @Transactional
    public void eliminarItem(Long idCarritoItem) {
        carritoItemRepository.deleteById(idCarritoItem);
    }

    @Transactional
    public void vaciarCarrito(Long idUsuario) {
        Carrito carrito = obtenerOCrearCarrito(idUsuario);
        carritoItemRepository.deleteAll(carrito.getItems());
        carrito.getItems().clear();
        carritoRepository.save(carrito);
    }
}
