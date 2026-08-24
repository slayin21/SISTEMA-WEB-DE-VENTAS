import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CarritoService } from '../../core/services/carrito.service';
import { Carrito, CarritoItem } from '../../core/models';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  carrito: Carrito | null = null;
  cargando: boolean = true;
  idUsuario: number = 1; // Usuario por defecto

  constructor(private carritoService: CarritoService) {}

  ngOnInit(): void {
    this.cargarCarrito();
  }

  cargarCarrito(): void {
    this.cargando = true;
    this.carritoService.obtenerCarrito(this.idUsuario).subscribe({
      next: (data) => {
        this.carrito = data;
        this.cargando = false;
      },
      error: (err) => {
        console.error(err);
        this.cargando = false;
      }
    });
  }

  eliminarItem(idItem?: number): void {
    if (!idItem) return;
    this.carritoService.eliminarItem(idItem, this.idUsuario).subscribe({
      next: () => this.cargarCarrito()
    });
  }

  vaciarCarrito(): void {
    this.carritoService.vaciarCarrito(this.idUsuario).subscribe({
      next: () => this.carrito = null
    });
  }

  calcularSubtotal(): number {
    if (!this.carrito || !this.carrito.items) return 0;
    return this.carrito.items.reduce((acc, item) => {
      const precio = item.variante ? item.variante.precio : 0;
      return acc + (precio * item.cantidad);
    }, 0);
  }

  calcularCostoEnvio(): number {
    return this.calcularSubtotal() > 200 || this.calcularSubtotal() === 0 ? 0 : 15;
  }

  calcularTotal(): number {
    return this.calcularSubtotal() + this.calcularCostoEnvio();
  }
}
