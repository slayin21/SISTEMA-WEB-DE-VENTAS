import {
  BehaviorSubject,
  HttpClient,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-LIYF5RMP.js";

// src/app/core/services/carrito.service.ts
var CarritoService = class _CarritoService {
  constructor(http) {
    this.http = http;
    this.apiUrl = "http://localhost:8080/api/v1/carrito";
    this.carritoSubject = new BehaviorSubject(null);
    this.carrito$ = this.carritoSubject.asObservable();
  }
  obtenerCarrito(idUsuario) {
    return this.http.get(`${this.apiUrl}/usuario/${idUsuario}`).pipe(tap((carrito) => this.carritoSubject.next(carrito)));
  }
  agregarItem(idUsuario, idVariante, cantidad) {
    return this.http.post(`${this.apiUrl}/usuario/${idUsuario}/items`, null, {
      params: { idVariante: idVariante.toString(), cantidad: cantidad.toString() }
    }).pipe(tap((carrito) => this.carritoSubject.next(carrito)));
  }
  eliminarItem(idCarritoItem, idUsuario) {
    return this.http.delete(`${this.apiUrl}/items/${idCarritoItem}`).pipe(tap(() => this.obtenerCarrito(idUsuario).subscribe()));
  }
  vaciarCarrito(idUsuario) {
    return this.http.delete(`${this.apiUrl}/usuario/${idUsuario}/vaciar`).pipe(tap(() => this.carritoSubject.next(null)));
  }
  static {
    this.\u0275fac = function CarritoService_Factory(t) {
      return new (t || _CarritoService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CarritoService, factory: _CarritoService.\u0275fac, providedIn: "root" });
  }
};

export {
  CarritoService
};
//# sourceMappingURL=chunk-MWWYMB5K.js.map
