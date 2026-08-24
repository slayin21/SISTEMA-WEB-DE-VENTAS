import { Usuario } from './usuario.model';
import { CarritoItem } from './carrito-item.model';

export interface Carrito {
  idCarrito?: number;
  usuario?: Usuario;
  idUsuario?: number;
  fechaCreacion?: string | Date;
  items?: CarritoItem[];
}
