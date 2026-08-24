import { ProductoVariante } from './producto-variante.model';

export interface CarritoItem {
  idCarritoItem?: number;
  idCarrito?: number;
  variante: ProductoVariante;
  idVariante?: number;
  cantidad: number;
}
