import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto, ProductoVariante } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private readonly apiUrl = 'http://localhost:8080/api/v1/productos';

  constructor(private http: HttpClient) {}

  obtenerTodos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.apiUrl);
  }

  obtenerPorId(id: number): Observable<Producto> {
    return this.http.get<Producto>(`${this.apiUrl}/${id}`);
  }

  obtenerPorCategoria(idCategoria: number): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.apiUrl}/categoria/${idCategoria}`);
  }

  buscarConFiltros(filtros: {
    query?: string;
    categoriaId?: number;
    marca?: string;
    minPrecio?: number;
    maxPrecio?: number;
    talla?: string;
    genero?: string;
  }): Observable<Producto[]> {
    let params = new HttpParams();
    if (filtros.query) params = params.set('query', filtros.query);
    if (filtros.categoriaId) params = params.set('categoriaId', filtros.categoriaId.toString());
    if (filtros.marca) params = params.set('marca', filtros.marca);
    if (filtros.minPrecio) params = params.set('minPrecio', filtros.minPrecio.toString());
    if (filtros.maxPrecio) params = params.set('maxPrecio', filtros.maxPrecio.toString());
    if (filtros.talla) params = params.set('talla', filtros.talla);
    if (filtros.genero) params = params.set('genero', filtros.genero);

    return this.http.get<Producto[]>(`${this.apiUrl}/search`, { params });
  }

  crearProducto(producto: Producto): Observable<Producto> {
    return this.http.post<Producto>(this.apiUrl, producto);
  }

  actualizarProducto(id: number, producto: Producto): Observable<Producto> {
    return this.http.put<Producto>(`${this.apiUrl}/${id}`, producto);
  }

  agregarVariante(idProducto: number, variante: ProductoVariante): Observable<ProductoVariante> {
    return this.http.post<ProductoVariante>(`${this.apiUrl}/${idProducto}/variantes`, variante);
  }

  desactivarProducto(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
