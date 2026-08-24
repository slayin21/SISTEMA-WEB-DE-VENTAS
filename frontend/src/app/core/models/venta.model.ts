import { Usuario } from './usuario.model';
import { MetodoPago } from './metodo-pago.model';
import { Cupon } from './cupon.model';
import { DetalleVenta } from './detalle-venta.model';

export interface Venta {
  idVenta?: number;
  usuario?: Usuario;
  idUsuario?: number;
  metodoPago?: MetodoPago;
  idMetodoPago?: number;
  cupon?: Cupon;
  idCupon?: number;
  fecha?: string | Date;
  subtotal: number;
  descuentoMonto?: number;
  direccionEnvio: string;
  distritoEnvio: string;
  costoEnvio: number;
  despachadorAgencia?: string;
  estadoPedido: 'PENDIENTE' | 'PAGADO' | 'DESPACHADO' | 'ENTREGADO' | 'CANCELADO' | string;
  detalles?: DetalleVenta[];
}
