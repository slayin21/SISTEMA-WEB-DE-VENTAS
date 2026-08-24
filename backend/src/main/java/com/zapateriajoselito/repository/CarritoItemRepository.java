package com.zapateriajoselito.repository;

import com.zapateriajoselito.model.entity.CarritoItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CarritoItemRepository extends JpaRepository<CarritoItem, Long> {
    List<CarritoItem> findByCarritoIdCarrito(Long idCarrito);
    Optional<CarritoItem> findByCarritoIdCarritoAndVarianteIdVariante(Long idCarrito, Long idVariante);
}
