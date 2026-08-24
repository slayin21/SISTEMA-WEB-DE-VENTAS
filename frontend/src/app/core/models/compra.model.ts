import { Proveedor } from './proveedor.model';
import { DetalleCompra } from './detalle-compra.model';

export interface Compra {
  idCompra?: number;
  proveedor?: Proveedor;
  idProveedor?: number;
  fecha: string | Date;
  total: number;
  estado: string;
  detalles?: DetalleCompra[];
}
