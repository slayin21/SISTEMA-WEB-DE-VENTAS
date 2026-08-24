package com.zapateriajoselito.controller;

import com.zapateriajoselito.model.entity.Carrito;
import com.zapateriajoselito.service.CarritoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/carrito")
@CrossOrigin(origins = "*")
public class CarritoController {

    @Autowired
    private CarritoService carritoService;

    @GetMapping("/usuario/{idUsuario}")
    public ResponseEntity<Carrito> obtenerCarrito(@PathVariable Long idUsuario) {
        return ResponseEntity.ok(carritoService.obtenerOCrearCarrito(idUsuario));
    }

    @PostMapping("/usuario/{idUsuario}/items")
    public ResponseEntity<Carrito> agregarItem(
            @PathVariable Long idUsuario,
            @RequestParam Long idVariante,
            @RequestParam Integer cantidad) {
        return ResponseEntity.ok(carritoService.agregarItem(idUsuario, idVariante, cantidad));
    }

    @DeleteMapping("/items/{idCarritoItem}")
    public ResponseEntity<Void> eliminarItem(@PathVariable Long idCarritoItem) {
        carritoService.eliminarItem(idCarritoItem);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/usuario/{idUsuario}")
    public ResponseEntity<Void> vaciarCarrito(@PathVariable Long idUsuario) {
        carritoService.vaciarCarrito(idUsuario);
        return ResponseEntity.noContent().build();
    }
}
