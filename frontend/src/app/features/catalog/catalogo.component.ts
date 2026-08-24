import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ProductoService } from '../../core/services/producto.service';
import { Producto } from '../../core/models';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit, OnDestroy {
  productos: Producto[] = [];
  productosFiltrados: Producto[] = [];
  cargando: boolean = true;
  mostrarFiltrosAvanzados: boolean = false;

  // Carrusel Hero Banner
  slides = [
    {
      imagen: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=1400',
      badge: '✨ COLECCIÓN 2026',
      titulo: 'Zapatillas Urbanas de Alta Gama',
      subtitulo: 'Estilo contemporáneo, comodidad inigualable y las mejores marcas internacionales.',
      categoriaId: 1
    },
    {
      imagen: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&q=80&w=1400',
      badge: '👔 LÍNEA EJECUTIVA & FORMAL',
      titulo: '100% Cuero Vacuno de Calidad Superior',
      subtitulo: 'Elegancia clásica y acabado artesanal para tus momentos más importantes.',
      categoriaId: 3
    },
    {
      imagen: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=1400',
      badge: '⚡ ALTO RENDIMIENTO',
      titulo: 'Calzado Deportivo & Running',
      subtitulo: 'Tecnología de amortiguación avanzada para superar tus propios límites.',
      categoriaId: 2
    },
    {
      imagen: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&q=80&w=1400',
      badge: '🥾 OUTDOOR & TERTULIA',
      titulo: 'Botas Tácticas y Calzado Confort',
      subtitulo: 'Resistencia todo terreno y máxima durabilidad para cada aventura.',
      categoriaId: 5
    }
  ];

  slideActual = 0;
  intervaloCarrusel: any;

  // Filtros Avanzados (RF-04)
  query: string = '';
  categoriaId: number | null = null;
  marcaSeleccionada: string = '';
  minPrecio: number | null = null;
  maxPrecio: number | null = null;
  tallaSeleccionada: string = '';
  generoSeleccionado: string = '';

  marcasDisponibles: string[] = ['Nike', 'Adidas', 'Puma', 'Vans', 'Reebok', 'Converse', 'Timberland', 'Joselito Premium'];
  tallasDisponibles: string[] = ['36', '37', '38', '39', '40', '41', '42', '43'];
  generosDisponibles: string[] = ['Hombre', 'Mujer', 'Unisex'];

  constructor(private productoService: ProductoService) {}

  ngOnInit(): void {
    this.cargarProductos();
    this.iniciarAutoplay();
  }

  ngOnDestroy(): void {
    if (this.intervaloCarrusel) {
      clearInterval(this.intervaloCarrusel);
    }
  }

  iniciarAutoplay(): void {
    this.intervaloCarrusel = setInterval(() => {
      this.siguienteSlide();
    }, 5000);
  }

  resetAutoplay(): void {
    if (this.intervaloCarrusel) {
      clearInterval(this.intervaloCarrusel);
    }
    this.iniciarAutoplay();
  }

  siguienteSlide(): void {
    this.slideActual = (this.slideActual + 1) % this.slides.length;
  }

  anteriorSlide(): void {
    this.slideActual = (this.slideActual - 1 + this.slides.length) % this.slides.length;
    this.resetAutoplay();
  }

  irASlide(index: number): void {
    this.slideActual = index;
    this.resetAutoplay();
  }

  filtrarPorSlide(catId: number): void {
    this.categoriaId = catId;
    this.aplicarFiltros();
  }

  cargarProductos(): void {
    this.cargando = true;
    this.productoService.obtenerTodos().subscribe({
      next: (data) => {
        this.productos = data;
        this.productosFiltrados = data;
        this.cargando = false;
      },
      error: (err) => {
        console.error('Error al cargar productos', err);
        this.cargando = false;
      }
    });
  }

  aplicarFiltros(): void {
    this.cargando = true;
    this.productoService.buscarConFiltros({
      query: this.query,
      categoriaId: this.categoriaId || undefined,
      marca: this.marcaSeleccionada || undefined,
      minPrecio: this.minPrecio || undefined,
      maxPrecio: this.maxPrecio || undefined,
      talla: this.tallaSeleccionada || undefined,
      genero: this.generoSeleccionado || undefined
    }).subscribe({
      next: (data) => {
        this.productosFiltrados = data;
        this.cargando = false;
      },
      error: (err) => {
        console.error('Error al filtrar productos', err);
        this.cargando = false;
      }
    });
  }

  limpiarFiltros(): void {
    this.query = '';
    this.categoriaId = null;
    this.marcaSeleccionada = '';
    this.minPrecio = null;
    this.maxPrecio = null;
    this.tallaSeleccionada = '';
    this.generoSeleccionado = '';
    this.cargarProductos();
  }

  toggleFiltrosAvanzados(): void {
    this.mostrarFiltrosAvanzados = !this.mostrarFiltrosAvanzados;
  }

  obtenerPrecioMinimo(producto: Producto): number {
    if (!producto.variantes || producto.variantes.length === 0) return 0;
    return Math.min(...producto.variantes.map(v => v.precio));
  }

  obtenerImagenPrincipal(producto: Producto): string {
    if (!producto.imagenes || producto.imagenes.length === 0) {
      return 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=600';
    }
    const principal = producto.imagenes.find(img => img.esPrincipal);
    return principal ? principal.urlImagen : producto.imagenes[0].urlImagen;
  }
}
