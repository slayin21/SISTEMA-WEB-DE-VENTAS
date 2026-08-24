import { ProductoVariante } from './producto-variante.model';

export interface DetalleVenta {
  idDetalleVenta?: number;
  idVenta?: number;
  variante?: ProductoVariante;
  idVariante?: number;
  cantidad: number;
  precioUnitario: number;
  subtotal: number;
}
