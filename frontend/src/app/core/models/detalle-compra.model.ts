import { Compra } from './compra.model';
import { ProductoVariante } from './producto-variante.model';

export interface DetalleCompra {
  idDetalleCompra?: number;
  compra?: Compra;
  idCompra?: number;
  variante?: ProductoVariante;
  idVariante?: number;
  cantidad: number;
  costoUnitario: number;
  subtotal: number;
}
