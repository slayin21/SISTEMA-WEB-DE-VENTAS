import { Categoria } from './categoria.model';
import { ProductoVariante } from './producto-variante.model';
import { ImagenProducto } from './imagen-producto.model';
import { Resena } from './resena.model';

export interface Producto {
  idProducto?: number;
  categoria: Categoria;
  idCategoria?: number; // Para payloads de envío
  nombre: string;
  descripcion?: string;
  marca?: string;
  material?: string;
  genero?: string;
  activo: boolean;
  variantes?: ProductoVariante[];
  imagenes?: ImagenProducto[];
  resenas?: Resena[];
}
