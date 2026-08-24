import { Direccion } from './direccion.model';

export interface Usuario {
  idUsuario?: number;
  nombre: string;
  email: string;
  passwordHash?: string;
  rol: 'ADMIN' | 'CLIENTE' | 'EMPLEADO' | string;
  fechaRegistro?: string | Date;
  activo: boolean;
  direcciones?: Direccion[];
}
