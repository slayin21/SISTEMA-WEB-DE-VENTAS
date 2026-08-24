import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Direccion } from '../models';

@Injectable({
  providedIn: 'root'
})
export class DireccionService {
  private apiUrl = 'http://localhost:8080/api/v1/direcciones';

  constructor(private http: HttpClient) {}

  listarPorUsuario(idUsuario: number): Observable<Direccion[]> {
    return this.http.get<Direccion[]>(`${this.apiUrl}/usuario/${idUsuario}`);
  }

  crear(idUsuario: number, direccion: any): Observable<Direccion> {
    return this.http.post<Direccion>(`${this.apiUrl}/usuario/${idUsuario}`, direccion);
  }

  actualizar(idDireccion: number, direccion: any): Observable<Direccion> {
    return this.http.put<Direccion>(`${this.apiUrl}/${idDireccion}`, direccion);
  }

  eliminar(idDireccion: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${idDireccion}`);
  }
}
