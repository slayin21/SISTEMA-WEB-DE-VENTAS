import { ProductoVariante } from './producto-variante.model';

export interface InventarioMovimiento {
  idMovimiento?: number;
  variante?: ProductoVariante;
  idVariante?: number;
  idCompra?: number;
  idVenta?: number;
  tipoMovimiento: string;
  cantidad: number;
  stockAnterior: number;
  stockActual: number;
  fechaMovimiento: string | Date;
  observacion?: string;
}
