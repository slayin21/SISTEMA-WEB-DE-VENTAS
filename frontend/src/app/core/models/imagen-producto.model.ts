import { Producto } from './producto.model';

export interface ImagenProducto {
  idImagenProducto?: number;
  producto?: Producto;
  idProducto?: number;
  urlImagen: string;
  ordenVisualizacion?: number;
  esPrincipal: boolean;
}
