import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CarritoService } from '../../core/services/carrito.service';
import { AuthService } from '../../core/services/auth.service';
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
  idUsuario: number = 1;

  constructor(
    private carritoService: CarritoService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    const user = this.authService.getCurrentUser();
    this.idUsuario = user && user.idUsuario ? user.idUsuario : 1;
    this.cargarCarrito();
  }

  cargarCarrito(): void {
    this.cargando = true;
    this.carritoService.obtenerCarrito(this.idUsuario).subscribe({
      next: (data) => {
        if ((!data || !data.items || data.items.length === 0) && this.idUsuario !== 1) {
          this.carritoService.obtenerCarrito(1).subscribe({
            next: (dataDefault) => {
              this.carrito = dataDefault;
              this.cargando = false;
            },
            error: () => {
              this.carrito = data;
              this.cargando = false;
            }
          });
        } else {
          this.carrito = data;
          this.cargando = false;
        }
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

  obtenerImagenItem(item: CarritoItem): string {
    const fallback = 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=600';
    if (!item.variante || !item.variante.producto) return fallback;
    const prod = item.variante.producto;
    if (prod.imagenes && prod.imagenes.length > 0) {
      const principal = prod.imagenes.find(i => i.esPrincipal);
      const url = principal ? principal.urlImagen : prod.imagenes[0].urlImagen;
      return url || fallback;
    }
    return fallback;
  }

  onErrorImagen(event: any) {
    event.target.src = 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=600';
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
