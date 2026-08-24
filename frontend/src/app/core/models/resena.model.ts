import { Usuario } from './usuario.model';
import { Producto } from './producto.model';

export interface Resena {
  idResena?: number;
  usuario?: Usuario;
  idUsuario?: number;
  producto?: Producto;
  idProducto?: number;
  idDetalleVenta?: number;
  calificacion: number;
  comentario?: string;
  fecha?: string | Date;
}
