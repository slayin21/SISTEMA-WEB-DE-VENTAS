import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, tap } from 'rxjs';
import { Carrito } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private readonly apiUrl = 'http://localhost:8080/api/v1/carrito';
  private carritoSubject = new BehaviorSubject<Carrito | null>(null);
  public carrito$ = this.carritoSubject.asObservable();

  constructor(private http: HttpClient) {}

  obtenerCarrito(idUsuario: number): Observable<Carrito> {
    return this.http.get<Carrito>(`${this.apiUrl}/usuario/${idUsuario}`).pipe(
      tap(carrito => this.carritoSubject.next(carrito))
    );
  }

  agregarItem(idUsuario: number, idVariante: number, cantidad: number): Observable<Carrito> {
    return this.http.post<Carrito>(`${this.apiUrl}/usuario/${idUsuario}/items`, null, {
      params: { idVariante: idVariante.toString(), cantidad: cantidad.toString() }
    }).pipe(
      tap(carrito => this.carritoSubject.next(carrito))
    );
  }

  eliminarItem(idCarritoItem: number, idUsuario: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/items/${idCarritoItem}`).pipe(
      tap(() => this.obtenerCarrito(idUsuario).subscribe())
    );
  }

  vaciarCarrito(idUsuario: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/usuario/${idUsuario}/vaciar`).pipe(
      tap(() => this.carritoSubject.next(null))
    );
  }
}
