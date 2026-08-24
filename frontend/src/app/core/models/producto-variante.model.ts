import { Producto } from './producto.model';

export interface ProductoVariante {
  idVariante?: number;
  producto?: Producto;
  idProducto?: number;
  talla: string;
  color: string;
  sku: string;
  precio: number;
  stock: number;
  activo: boolean;
}
