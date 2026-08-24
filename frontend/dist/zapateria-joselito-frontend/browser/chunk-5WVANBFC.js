import {
  HttpClient,
  HttpParams,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-LIYF5RMP.js";

// src/app/core/services/producto.service.ts
var ProductoService = class _ProductoService {
  constructor(http) {
    this.http = http;
    this.apiUrl = "http://localhost:8080/api/v1/productos";
  }
  obtenerTodos() {
    return this.http.get(this.apiUrl);
  }
  obtenerPorId(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  obtenerPorCategoria(idCategoria) {
    return this.http.get(`${this.apiUrl}/categoria/${idCategoria}`);
  }
  buscarConFiltros(filtros) {
    let params = new HttpParams();
    if (filtros.query)
      params = params.set("query", filtros.query);
    if (filtros.categoriaId)
      params = params.set("categoriaId", filtros.categoriaId.toString());
    if (filtros.marca)
      params = params.set("marca", filtros.marca);
    if (filtros.minPrecio)
      params = params.set("minPrecio", filtros.minPrecio.toString());
    if (filtros.maxPrecio)
      params = params.set("maxPrecio", filtros.maxPrecio.toString());
    if (filtros.talla)
      params = params.set("talla", filtros.talla);
    if (filtros.genero)
      params = params.set("genero", filtros.genero);
    return this.http.get(`${this.apiUrl}/search`, { params });
  }
  crearProducto(producto) {
    return this.http.post(this.apiUrl, producto);
  }
  actualizarProducto(id, producto) {
    return this.http.put(`${this.apiUrl}/${id}`, producto);
  }
  agregarVariante(idProducto, variante) {
    return this.http.post(`${this.apiUrl}/${idProducto}/variantes`, variante);
  }
  desactivarProducto(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  static {
    this.\u0275fac = function ProductoService_Factory(t) {
      return new (t || _ProductoService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProductoService, factory: _ProductoService.\u0275fac, providedIn: "root" });
  }
};

export {
  ProductoService
};
//# sourceMappingURL=chunk-5WVANBFC.js.map
