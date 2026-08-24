import { Usuario } from './usuario.model';

export interface Direccion {
  idDireccion?: number;
  usuario?: Usuario;
  idUsuario?: number;
  direccion: string;
  distrito: string;
  provincia: string;
  departamento: string;
  referencia?: string;
  principal: boolean;
}
