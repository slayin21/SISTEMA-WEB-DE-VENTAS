export interface Cupon {
  idCupon?: number;
  codigo: string;
  descuento: number;
  tipoDescuento: 'PORCENTAJE' | 'MONTO_FIJO' | string;
  fechaInicio: string | Date;
  fechaFin: string | Date;
  activo: boolean;
}
