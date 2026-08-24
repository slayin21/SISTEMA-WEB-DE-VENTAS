import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Venta } from '../models';

@Injectable({
  providedIn: 'root'
})
export class VentaService {
  private readonly apiUrl = 'http://localhost:8080/api/v1/ventas';

  constructor(private http: HttpClient) {}

  registrarVenta(venta: Venta): Observable<Venta> {
    return this.http.post<Venta>(this.apiUrl, venta);
  }

  obtenerVentasPorUsuario(idUsuario: number): Observable<Venta[]> {
    return this.http.get<Venta[]>(`${this.apiUrl}/usuario/${idUsuario}`);
  }

  obtenerPorId(idVenta: number): Observable<Venta> {
    return this.http.get<Venta>(`${this.apiUrl}/${idVenta}`);
  }

  obtenerTodas(): Observable<Venta[]> {
    return this.http.get<Venta[]>(this.apiUrl);
  }

  actualizarEstado(idVenta: number, nuevoEstado: string): Observable<Venta> {
    return this.http.put<Venta>(`${this.apiUrl}/${idVenta}/estado`, null, {
      params: { nuevoEstado }
    });
  }
}
