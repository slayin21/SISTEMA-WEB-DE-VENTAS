import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ReporteVentasSummary {
  totalVentas: number;
  ingresosTotales: number;
  totalDescuentos: number;
  totalEnvios: number;
  subtotalGeneral: number;
}

export interface ProductoTop {
  idProducto: number;
  nombre: string;
  marca: string;
  cantidadVendida: number;
  totalGenerado: number;
}

@Injectable({
  providedIn: 'root'
})
export class ReporteService {
  private apiUrl = 'http://localhost:8080/api/v1/admin/reportes';

  constructor(private http: HttpClient) {}

  obtenerResumen(inicio?: string, fin?: string): Observable<ReporteVentasSummary> {
    let params = '';
    if (inicio && fin) {
      params = `?inicio=${inicio}&fin=${fin}`;
    }
    return this.http.get<ReporteVentasSummary>(`${this.apiUrl}/resumen${params}`);
  }

  obtenerTopProductos(): Observable<ProductoTop[]> {
    return this.http.get<ProductoTop[]>(`${this.apiUrl}/top-productos`);
  }

  exportarCSV(): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/exportar-csv`, { responseType: 'blob' });
  }
}
