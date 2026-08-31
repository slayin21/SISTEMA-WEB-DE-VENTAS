import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ProductoService } from '../../core/services/producto.service';
import { CarritoService } from '../../core/services/carrito.service';
import { AuthService } from '../../core/services/auth.service';
import { Producto, ProductoVariante } from '../../core/models';

@Component({
  selector: 'app-producto-detalle',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.css']
})
export class ProductoDetalleComponent implements OnInit {
  producto: Producto | null = null;
  varianteSeleccionada: ProductoVariante | null = null;
  imagenSeleccionada: string = '';
  cantidad: number = 1;
  cargando: boolean = true;
  agregando: boolean = false;
  mensajeExito: string = '';
  mensajeError: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productoService: ProductoService,
    private carritoService: CarritoService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.cargarProducto(id);
    }
  }

  cargarProducto(id: number): void {
    this.cargando = true;
    this.productoService.obtenerPorId(id).subscribe({
      next: (data) => {
        this.producto = data;
        this.cargando = false;
        
        if (data.imagenes && data.imagenes.length > 0) {
          const principal = data.imagenes.find(i => i.esPrincipal);
          this.imagenSeleccionada = principal ? principal.urlImagen : data.imagenes[0].urlImagen;
        } else {
          this.imagenSeleccionada = 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=600';
        }

        if (data.variantes && data.variantes.length > 0) {
          this.varianteSeleccionada = data.variantes[0];
        }
      },
      error: (err) => {
        console.error(err);
        this.cargando = false;
      }
    });
  }

  seleccionarVariante(v: ProductoVariante): void {
    this.varianteSeleccionada = v;
    this.cantidad = 1;
  }

  agregarAlCarrito(): void {
    if (!this.varianteSeleccionada || !this.varianteSeleccionada.idVariante) {
      this.mensajeError = 'Debes seleccionar una talla/variante.';
      return;
    }

    this.agregando = true;
    this.mensajeExito = '';
    this.mensajeError = '';

    const user = this.authService.getCurrentUser();
    const idUsuario = user && user.idUsuario ? user.idUsuario : 1;

    this.carritoService.agregarItem(idUsuario, this.varianteSeleccionada.idVariante, this.cantidad).subscribe({
      next: () => {
        this.agregando = false;
        this.mensajeExito = '¡Producto agregado al carrito exitosamente!';
        setTimeout(() => this.mensajeExito = '', 4000);
      },
      error: (err) => {
        this.agregando = false;
        this.mensajeError = err.error?.message || 'Ocurrió un error al agregar al carrito';
      }
    });
  }
}
