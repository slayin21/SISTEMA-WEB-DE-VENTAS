import {
  HttpClient,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-EH6AJVCA.js";

// src/app/core/services/venta.service.ts
var VentaService = class _VentaService {
  constructor(http) {
    this.http = http;
    this.apiUrl = "http://localhost:8080/api/v1/ventas";
  }
  registrarVenta(venta) {
    return this.http.post(this.apiUrl, venta);
  }
  obtenerVentasPorUsuario(idUsuario) {
    return this.http.get(`${this.apiUrl}/usuario/${idUsuario}`);
  }
  obtenerPorId(idVenta) {
    return this.http.get(`${this.apiUrl}/${idVenta}`);
  }
  obtenerTodas() {
    return this.http.get(this.apiUrl);
  }
  actualizarEstado(idVenta, nuevoEstado) {
    return this.http.put(`${this.apiUrl}/${idVenta}/estado`, null, {
      params: { nuevoEstado }
    });
  }
  static {
    this.\u0275fac = function VentaService_Factory(t) {
      return new (t || _VentaService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _VentaService, factory: _VentaService.\u0275fac, providedIn: "root" });
  }
};

export {
  VentaService
};
//# sourceMappingURL=chunk-FKKLMHON.js.map
