package com.zapateriajoselito.service;

import com.zapateriajoselito.model.entity.Producto;
import com.zapateriajoselito.model.entity.ProductoVariante;
import com.zapateriajoselito.repository.CategoriaRepository;
import com.zapateriajoselito.repository.ProductoRepository;
import com.zapateriajoselito.repository.ProductoVarianteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProductoService {

    @Autowired
    private ProductoRepository productoRepository;
    
    @Autowired
    private ProductoVarianteRepository productoVarianteRepository;
    
    @Autowired
    private CategoriaRepository categoriaRepository;

    @Transactional(readOnly = true)
    public List<Producto> obtenerTodos() {
        return productoRepository.findByActivoTrue();
    }

    @Transactional(readOnly = true)
    public Producto obtenerPorId(Long id) {
        return productoRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Producto no encontrado con el ID: " + id));
    }

    @Transactional(readOnly = true)
    public List<Producto> obtenerPorCategoria(Long idCategoria) {
        return productoRepository.findByCategoriaIdCategoria(idCategoria);
    }

    // RF-04: Buscador por palabras clave y filtros avanzados (categoría, marca, rango de precio, talla, género)
    @Transactional(readOnly = true)
    public List<Producto> buscarConFiltros(String query, Long categoriaId, String marca,
                                           BigDecimal minPrecio, BigDecimal maxPrecio,
                                           String talla, String genero) {
        List<Producto> todos = productoRepository.findByActivoTrue();

        return todos.stream().filter(p -> {
            if (query != null && !query.trim().isEmpty()) {
                String q = query.toLowerCase().trim();
                boolean matchNombre = p.getNombre() != null && p.getNombre().toLowerCase().contains(q);
                boolean matchDesc = p.getDescripcion() != null && p.getDescripcion().toLowerCase().contains(q);
                boolean matchMarca = p.getMarca() != null && p.getMarca().toLowerCase().contains(q);
                if (!matchNombre && !matchDesc && !matchMarca) return false;
            }

            if (categoriaId != null && p.getCategoria() != null) {
                if (!categoriaId.equals(p.getCategoria().getIdCategoria())) return false;
            }

            if (marca != null && !marca.trim().isEmpty()) {
                if (p.getMarca() == null || !p.getMarca().equalsIgnoreCase(marca.trim())) return false;
            }

            if (genero != null && !genero.trim().isEmpty()) {
                if (p.getGenero() == null || !p.getGenero().equalsIgnoreCase(genero.trim())) return false;
            }

            if ((minPrecio != null || maxPrecio != null || (talla != null && !talla.trim().isEmpty())) && p.getVariantes() != null) {
                boolean hasMatchingVariant = p.getVariantes().stream().anyMatch(v -> {
                    if (Boolean.FALSE.equals(v.getActivo())) return false;

                    if (minPrecio != null && v.getPrecio() != null && v.getPrecio().compareTo(minPrecio) < 0) return false;
                    if (maxPrecio != null && v.getPrecio() != null && v.getPrecio().compareTo(maxPrecio) > 0) return false;

                    if (talla != null && !talla.trim().isEmpty()) {
                        if (v.getTalla() == null || !v.getTalla().equalsIgnoreCase(talla.trim())) return false;
                    }

                    return true;
                });

                if (!hasMatchingVariant) return false;
            }

            return true;
        }).collect(Collectors.toList());
    }

    @Transactional
    public Producto guardarProducto(Producto producto) {
        if (producto.getCategoria() != null && producto.getCategoria().getIdCategoria() != null) {
            var cat = categoriaRepository.findById(producto.getCategoria().getIdCategoria())
                    .orElseThrow(() -> new RuntimeException("Categoría no encontrada"));
            producto.setCategoria(cat);
        }
        if (producto.getImagenes() != null) {
            for (com.zapateriajoselito.model.entity.ImagenProducto img : producto.getImagenes()) {
                img.setProducto(producto);
            }
        }
        return productoRepository.save(producto);
    }

    @Transactional
    public Producto actualizarProducto(Long id, Producto producto) {
        Producto existente = obtenerPorId(id);
        existente.setNombre(producto.getNombre());
        existente.setDescripcion(producto.getDescripcion());
        existente.setMarca(producto.getMarca());
        existente.setMaterial(producto.getMaterial());
        existente.setGenero(producto.getGenero());
        if (producto.getActivo() != null) {
            existente.setActivo(producto.getActivo());
        }

        if (producto.getCategoria() != null && producto.getCategoria().getIdCategoria() != null) {
            var cat = categoriaRepository.findById(producto.getCategoria().getIdCategoria())
                    .orElseThrow(() -> new RuntimeException("Categoría no encontrada"));
            existente.setCategoria(cat);
        }

        if (producto.getImagenes() != null && !producto.getImagenes().isEmpty()) {
            String nuevaUrl = producto.getImagenes().get(0).getUrlImagen();
            if (nuevaUrl != null && !nuevaUrl.trim().isEmpty()) {
                if (existente.getImagenes() != null && !existente.getImagenes().isEmpty()) {
                    existente.getImagenes().get(0).setUrlImagen(nuevaUrl.trim());
                    existente.getImagenes().get(0).setEsPrincipal(true);
                } else {
                    com.zapateriajoselito.model.entity.ImagenProducto img = new com.zapateriajoselito.model.entity.ImagenProducto();
                    img.setProducto(existente);
                    img.setUrlImagen(nuevaUrl.trim());
                    img.setEsPrincipal(true);
                    img.setOrdenVisualizacion(1);
                    existente.getImagenes().add(img);
                }
            }
        }

        return productoRepository.save(existente);
    }

    @Transactional
    public ProductoVariante agregarVariante(Long idProducto, ProductoVariante variante) {
        Producto producto = obtenerPorId(idProducto);
        variante.setProducto(producto);
        return productoVarianteRepository.save(variante);
    }

    @Transactional
    public void desactivarProducto(Long id) {
        Producto producto = obtenerPorId(id);
        producto.setActivo(false);
        productoRepository.save(producto);
    }

    @Transactional
    public void eliminarProductoDefinitivo(Long id) {
        productoRepository.deleteById(id);
    }
}
