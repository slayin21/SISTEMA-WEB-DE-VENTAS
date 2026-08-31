import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CarritoService } from '../../core/services/carrito.service';
import { VentaService } from '../../core/services/venta.service';
import { AuthService } from '../../core/services/auth.service';
import { Carrito, Venta, DetalleVenta } from '../../core/models';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  carrito: Carrito | null = null;
  cargando: boolean = true;
  procesando: boolean = false;
  idUsuario: number = 1;

  // Formulario Checkout
  direccionEnvio: string = 'Av. Larco 456';
  distritoEnvio: string = 'Miraflores';
  despachadorAgencia: string = 'Shalom / Olva Courier';
  idMetodoPago: number = 1; // 1: Yape/Plin, 2: Transferencia, 3: Tarjeta, 4: Efectivo
  codigoCupon: string = '';
  descuentoAplicado: number = 0;

  ventaRealizada: Venta | null = null;
  mensajeError: string = '';

  constructor(
    private carritoService: CarritoService,
    private ventaService: VentaService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const currentUser = this.authService.getCurrentUser();
    this.idUsuario = currentUser && currentUser.idUsuario ? currentUser.idUsuario : 1;
    this.cargarCarrito();
  }

  cargarCarrito(): void {
    this.cargando = true;
    this.carritoService.obtenerCarrito(this.idUsuario).subscribe({
      next: (data) => {
        if ((!data || !data.items || data.items.length === 0) && this.idUsuario !== 1) {
          // Si el usuario recién autenticado aún no tiene ítems en su ID de carrito, cargar los ítems del carrito por defecto #1
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

  aplicarCupon(): void {
    if (this.codigoCupon.trim().toUpperCase() === 'JOSELITO10') {
      this.descuentoAplicado = this.calcularSubtotal() * 0.10;
      alert('¡Cupón JOSELITO10 aplicado! Descuento del 10%.');
    } else if (this.codigoCupon.trim().toUpperCase() === 'PROMO20') {
      this.descuentoAplicado = 20;
      alert('¡Cupón PROMO20 aplicado! Descuento de S/ 20.00.');
    } else {
      alert('Cupón inválido o expirado.');
    }
  }

  calcularSubtotal(): number {
    if (!this.carrito || !this.carrito.items) return 0;
    return this.carrito.items.reduce((acc, item) => {
      const precio = item.variante ? item.variante.precio : 0;
      return acc + (precio * item.cantidad);
    }, 0);
  }

  calcularIgv(): number {
    return this.calcularSubtotal() * 0.18; // IGV 18% (RF-07)
  }

  calcularEnvio(): number {
    const sub = this.calcularSubtotal();
    if (sub === 0) return 0;
    return sub > 200 ? 0 : 15;
  }

  calcularTotal(): number {
    const sub = this.calcularSubtotal();
    if (sub === 0) return 0;
    return Math.max(0, sub + this.calcularEnvio() - this.descuentoAplicado);
  }

  confirmarVenta(): void {
    if (!this.carrito || !this.carrito.items || this.carrito.items.length === 0) {
      this.mensajeError = 'Tu carrito está vacío.';
      return;
    }

    if (!this.direccionEnvio || !this.distritoEnvio) {
      this.mensajeError = 'Por favor completa la dirección y distrito de envío.';
      return;
    }

    this.procesando = true;
    this.mensajeError = '';

    const detalles: DetalleVenta[] = this.carrito.items.map(item => ({
      variante: item.variante,
      idVariante: item.variante?.idVariante,
      cantidad: item.cantidad,
      precioUnitario: item.variante?.precio || 0,
      subtotal: (item.variante?.precio || 0) * item.cantidad
    }));

    const user = this.authService.getCurrentUser();

    const payloadVenta: Venta = {
      usuario: { idUsuario: this.idUsuario, nombre: user?.nombre || 'Cliente Zapatería', email: user?.email || 'cliente@zapateriajoselito.com', rol: 'CLIENTE', activo: true },
      idUsuario: this.idUsuario,
      metodoPago: { idMetodoPago: this.idMetodoPago, nombre: this.getNombreMetodoPago(), activo: true },
      idMetodoPago: this.idMetodoPago,
      subtotal: this.calcularSubtotal(),
      costoEnvio: this.calcularEnvio(),
      descuentoMonto: this.descuentoAplicado,
      direccionEnvio: this.direccionEnvio,
      distritoEnvio: this.distritoEnvio,
      provinciaEnvio: 'Lima',
      departamentoEnvio: 'Lima',
      despachadorAgencia: this.despachadorAgencia,
      estadoPedido: 'PAGADO',
      detalles: detalles
    };

    this.ventaService.registrarVenta(payloadVenta).subscribe({
      next: (venta) => {
        this.procesando = false;
        this.ventaRealizada = venta;
      },
      error: (err) => {
        this.procesando = false;
        this.mensajeError = err.error?.message || 'Error al procesar la compra.';
      }
    });
  }

  getNombreMetodoPago(): string {
    switch (this.idMetodoPago) {
      case 1: return 'Yape / Plin';
      case 2: return 'Transferencia Bancaria';
      case 3: return 'Tarjeta de Crédito/Débito';
      case 4: return 'Efectivo';
      default: return 'Yape / Plin';
    }
  }

  imprimirBoleta(): void {
    window.print();
  }
}
