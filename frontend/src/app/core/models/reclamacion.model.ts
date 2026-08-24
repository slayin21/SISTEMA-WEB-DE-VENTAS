import { Usuario } from './usuario.model';
import { Venta } from './venta.model';

export interface Reclamacion {
  idReclamacion?: number;
  usuario?: Usuario;
  idUsuario?: number;
  venta?: Venta;
  idVenta?: number;
  fechaRegistro?: string | Date;
  detalleIncidente: string;
  estado: 'PENDIENTE' | 'EN_REVISION' | 'RESUELTO' | 'RECHAZADO' | string;
}
