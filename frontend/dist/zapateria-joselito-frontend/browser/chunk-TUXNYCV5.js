import {
  NotificationService
} from "./chunk-MRZIMWW3.js";
import {
  ProductoService
} from "./chunk-7IYHPI4O.js";
import {
  VentaService
} from "./chunk-FKKLMHON.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MaxLengthValidator,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-J5QRST4F.js";
import {
  CommonModule,
  DatePipe,
  DecimalPipe,
  HttpClient,
  NgClass,
  NgForOf,
  NgIf,
  __spreadValues,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate4,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-EH6AJVCA.js";

// src/app/core/services/proveedor.service.ts
var ProveedorService = class _ProveedorService {
  constructor(http) {
    this.http = http;
    this.apiUrl = "http://localhost:8080/api/v1/admin/proveedores";
  }
  listar() {
    return this.http.get(this.apiUrl);
  }
  crear(proveedor) {
    return this.http.post(this.apiUrl, proveedor);
  }
  actualizar(id, proveedor) {
    return this.http.put(`${this.apiUrl}/${id}`, proveedor);
  }
  eliminar(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  static {
    this.\u0275fac = function ProveedorService_Factory(t) {
      return new (t || _ProveedorService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProveedorService, factory: _ProveedorService.\u0275fac, providedIn: "root" });
  }
};

// src/app/core/services/usuario.service.ts
var UsuarioService = class _UsuarioService {
  constructor(http) {
    this.http = http;
    this.apiUrl = "http://localhost:8080/api/v1/usuarios";
  }
  listarTodos() {
    return this.http.get(this.apiUrl);
  }
  obtenerPorId(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  crearUsuario(datos) {
    return this.http.post(this.apiUrl, datos);
  }
  actualizarUsuario(id, datos) {
    return this.http.put(`${this.apiUrl}/${id}`, datos);
  }
  cambiarRol(id, rol) {
    return this.http.put(`${this.apiUrl}/${id}/rol`, { rol });
  }
  cambiarEstado(id, activo) {
    return this.http.put(`${this.apiUrl}/${id}/estado`, { activo });
  }
  desactivar(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  static {
    this.\u0275fac = function UsuarioService_Factory(t) {
      return new (t || _UsuarioService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UsuarioService, factory: _UsuarioService.\u0275fac, providedIn: "root" });
  }
};

// src/app/core/services/reporte.service.ts
var ReporteService = class _ReporteService {
  constructor(http) {
    this.http = http;
    this.apiUrl = "http://localhost:8080/api/v1/admin/reportes";
  }
  obtenerResumen(inicio, fin) {
    let params = "";
    if (inicio && fin) {
      params = `?inicio=${inicio}&fin=${fin}`;
    }
    return this.http.get(`${this.apiUrl}/resumen${params}`);
  }
  obtenerTopProductos() {
    return this.http.get(`${this.apiUrl}/top-productos`);
  }
  exportarCSV() {
    return this.http.get(`${this.apiUrl}/exportar-csv`, { responseType: "blob" });
  }
  static {
    this.\u0275fac = function ReporteService_Factory(t) {
      return new (t || _ReporteService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ReporteService, factory: _ReporteService.\u0275fac, providedIn: "root" });
  }
};

// src/app/features/admin/admin-dashboard.component.ts
function AdminDashboardComponent_span_84_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.alertasStock.length);
  }
}
function AdminDashboardComponent_div_93_tr_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "span", 54);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "span", 55);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td")(9, "div", 56)(10, "span", 57);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 58);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "td")(15, "div", 59)(16, "strong");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 60);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "td")(21, "span", 61);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "td")(25, "span", 62);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "td")(28, "select", 63);
    \u0275\u0275listener("change", function AdminDashboardComponent_div_93_tr_41_Template_select_change_28_listener($event) {
      const v_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.cambiarEstadoPedido(v_r4.idVenta, $event.target.value));
    });
    \u0275\u0275elementStart(29, "option", 45);
    \u0275\u0275text(30, "PENDIENTE");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "option", 46);
    \u0275\u0275text(32, "EN PREPARACI\xD3N");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "option", 47);
    \u0275\u0275text(34, "ENVIADO");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "option", 48);
    \u0275\u0275text(36, "ENTREGADO");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "option", 49);
    \u0275\u0275text(38, "CANCELADO");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const v_r4 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("#ZAP-", v_r4.idVenta, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 10, v_r4.fecha, "dd/MM/yyyy HH:mm"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("\u{1F464} ", (v_r4.usuario == null ? null : v_r4.usuario.nombre) || "Cliente General", "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(v_r4.usuario == null ? null : v_r4.usuario.email);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("\u{1F4CD} ", v_r4.distritoEnvio, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(v_r4.despachadorAgencia || "Env\xEDo Regular");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" S/ ", \u0275\u0275pipeBind2(23, 13, (v_r4.subtotal || 0) + (v_r4.costoEnvio || 0) - (v_r4.descuentoMonto || 0), "1.2-2"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", v_r4.estadoPedido.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", v_r4.estadoPedido.replace("_", " "), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", v_r4.estadoPedido);
  }
}
function AdminDashboardComponent_div_93_tr_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 64);
    \u0275\u0275text(2, "No se encontraron pedidos que coincidan con la b\xFAsqueda.");
    \u0275\u0275elementEnd()();
  }
}
function AdminDashboardComponent_div_93_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38)(1, "div", 39)(2, "div")(3, "h2");
    \u0275\u0275text(4, "Gesti\xF3n de Pedidos y Estado de Despacho");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 40);
    \u0275\u0275text(6, "Supervisa y actualiza el ciclo de vida de los pedidos registrados");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 41)(8, "input", 42);
    \u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_div_93_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.searchPedidos, $event) || (ctx_r0.searchPedidos = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "select", 43);
    \u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_div_93_Template_select_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.filtroEstadoPedido, $event) || (ctx_r0.filtroEstadoPedido = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(10, "option", 44);
    \u0275\u0275text(11, "Todos los Estados");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "option", 45);
    \u0275\u0275text(13, "PENDIENTE");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "option", 46);
    \u0275\u0275text(15, "EN PREPARACI\xD3N");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "option", 47);
    \u0275\u0275text(17, "ENVIADO");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "option", 48);
    \u0275\u0275text(19, "ENTREGADO");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "option", 49);
    \u0275\u0275text(21, "CANCELADO");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(22, "div", 50)(23, "table", 51)(24, "thead")(25, "tr")(26, "th");
    \u0275\u0275text(27, "C\xF3digo Pedido");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "th");
    \u0275\u0275text(29, "Fecha y Hora");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "th");
    \u0275\u0275text(31, "Cliente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "th");
    \u0275\u0275text(33, "Direcci\xF3n & Agencia");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "th");
    \u0275\u0275text(35, "Monto Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "th");
    \u0275\u0275text(37, "Estado Actual");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "th");
    \u0275\u0275text(39, "Actualizar Estado");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(40, "tbody");
    \u0275\u0275template(41, AdminDashboardComponent_div_93_tr_41_Template, 39, 16, "tr", 52)(42, AdminDashboardComponent_div_93_tr_42_Template, 3, 0, "tr", 53);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.searchPedidos);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.filtroEstadoPedido);
    \u0275\u0275advance(32);
    \u0275\u0275property("ngForOf", ctx_r0.ventasFiltradas);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.ventasFiltradas.length === 0);
  }
}
function AdminDashboardComponent_div_94_tr_34_span_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 80);
    \u0275\u0275text(1, "Activo");
    \u0275\u0275elementEnd();
  }
}
function AdminDashboardComponent_div_94_tr_34_span_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 81);
    \u0275\u0275text(1, "Inactivo");
    \u0275\u0275elementEnd();
  }
}
function AdminDashboardComponent_div_94_tr_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 68)(3, "img", 69);
    \u0275\u0275listener("error", function AdminDashboardComponent_div_94_tr_34_Template_img_error_3_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onErrorImagen($event));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(4, "td")(5, "span", 70);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td")(8, "strong", 71);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td")(11, "span", 72);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td")(14, "span", 73);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td");
    \u0275\u0275template(21, AdminDashboardComponent_div_94_tr_34_span_21_Template, 2, 0, "span", 74)(22, AdminDashboardComponent_div_94_tr_34_span_22_Template, 2, 0, "span", 75);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td")(24, "div", 76)(25, "button", 77);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_94_tr_34_Template_button_click_25_listener() {
      const p_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.gestionarStockProducto(p_r7));
    });
    \u0275\u0275text(26, "\u{1F4E6} Stock");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "button", 78);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_94_tr_34_Template_button_click_27_listener() {
      const p_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.editarProducto(p_r7));
    });
    \u0275\u0275text(28, "\u270F\uFE0F Editar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "button", 79);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_94_tr_34_Template_button_click_29_listener() {
      const p_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.eliminarProducto(p_r7.idProducto));
    });
    \u0275\u0275text(30, "\u{1F5D1}\uFE0F Desactivar");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const p_r7 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("src", ctx_r0.obtenerUrlImagen(p_r7), \u0275\u0275sanitizeUrl)("alt", p_r7.nombre);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("#", p_r7.idProducto, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r7.nombre);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r7.marca);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((p_r7.categoria == null ? null : p_r7.categoria.nombre) || "General");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r7.genero);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r7.material);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", p_r7.activo);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !p_r7.activo);
  }
}
function AdminDashboardComponent_div_94_tr_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 82);
    \u0275\u0275text(2, "No se encontraron productos registrados.");
    \u0275\u0275elementEnd()();
  }
}
function AdminDashboardComponent_div_94_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38)(1, "div", 39)(2, "div")(3, "h2");
    \u0275\u0275text(4, "Gesti\xF3n de Cat\xE1logo de Productos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 40);
    \u0275\u0275text(6, "Crea, edita, visualiza im\xE1genes y administra los modelos de calzado");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 65)(8, "input", 66);
    \u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_div_94_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.searchCatalogo, $event) || (ctx_r0.searchCatalogo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 67);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_94_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.abrirModalProducto());
    });
    \u0275\u0275text(10, " \u2795 Crear Nuevo Producto ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 50)(12, "table", 51)(13, "thead")(14, "tr")(15, "th");
    \u0275\u0275text(16, "Imagen");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th");
    \u0275\u0275text(20, "Nombre del Producto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th");
    \u0275\u0275text(22, "Marca");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th");
    \u0275\u0275text(24, "Categor\xEDa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "th");
    \u0275\u0275text(26, "G\xE9nero");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "th");
    \u0275\u0275text(28, "Material");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "th");
    \u0275\u0275text(30, "Estado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "th");
    \u0275\u0275text(32, "Acciones");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "tbody");
    \u0275\u0275template(34, AdminDashboardComponent_div_94_tr_34_Template, 31, 10, "tr", 52)(35, AdminDashboardComponent_div_94_tr_35_Template, 3, 0, "tr", 53);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.searchCatalogo);
    \u0275\u0275advance(26);
    \u0275\u0275property("ngForOf", ctx_r0.productosFiltrados);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.productosFiltrados.length === 0);
  }
}
function AdminDashboardComponent_div_95_tr_30_span_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 80);
    \u0275\u0275text(1, "ACTIVO");
    \u0275\u0275elementEnd();
  }
}
function AdminDashboardComponent_div_95_tr_30_span_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 92);
    \u0275\u0275text(1, "INACTIVO");
    \u0275\u0275elementEnd();
  }
}
function AdminDashboardComponent_div_95_tr_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "span", 70);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "strong", 84);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td")(8, "span", 85);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td")(11, "select", 86);
    \u0275\u0275listener("change", function AdminDashboardComponent_div_95_tr_30_Template_select_change_11_listener($event) {
      const u_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.cambiarRolUsuario(u_r10.idUsuario, $event.target.value));
    });
    \u0275\u0275elementStart(12, "option", 87);
    \u0275\u0275text(13, "CLIENTE");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "option", 88);
    \u0275\u0275text(15, "ADMINISTRADOR");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "td")(17, "span", 55);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "td");
    \u0275\u0275template(21, AdminDashboardComponent_div_95_tr_30_span_21_Template, 2, 0, "span", 74)(22, AdminDashboardComponent_div_95_tr_30_span_22_Template, 2, 0, "span", 89);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td")(24, "div", 76)(25, "button", 90);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_95_tr_30_Template_button_click_25_listener() {
      const u_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.editarUsuario(u_r10));
    });
    \u0275\u0275text(26, "\u270F\uFE0F Editar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "button", 91);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_95_tr_30_Template_button_click_27_listener() {
      const u_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggleEstadoUsuario(u_r10));
    });
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const u_r10 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("#USR-", u_r10.idUsuario, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u{1F464} ", u_r10.nombre, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(u_r10.email);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("admin-role", u_r10.rol === "ADMIN");
    \u0275\u0275property("ngModel", u_r10.rol);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(19, 14, u_r10.fechaRegistro, "dd/MM/yyyy HH:mm"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", u_r10.activo);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !u_r10.activo);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("delete", u_r10.activo)("edit", !u_r10.activo);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", u_r10.activo ? "\u{1F6AB} Desactivar" : "\u2705 Activar", " ");
  }
}
function AdminDashboardComponent_div_95_tr_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 64);
    \u0275\u0275text(2, "No se encontraron usuarios registrados que coincidan con la b\xFAsqueda.");
    \u0275\u0275elementEnd()();
  }
}
function AdminDashboardComponent_div_95_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38)(1, "div", 39)(2, "div")(3, "h2");
    \u0275\u0275text(4, "Gesti\xF3n de Usuarios Registrados");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 40);
    \u0275\u0275text(6, "Visualiza, crea, edita datos de cuenta, modifica roles y administra accesos");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 65)(8, "input", 83);
    \u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_div_95_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.searchUsuarios, $event) || (ctx_r0.searchUsuarios = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 67);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_95_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.abrirModalUsuario());
    });
    \u0275\u0275text(10, " \u{1F464} Crear Nuevo Usuario ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 50)(12, "table", 51)(13, "thead")(14, "tr")(15, "th");
    \u0275\u0275text(16, "ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "Nombre del Usuario");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th");
    \u0275\u0275text(20, "Correo Electr\xF3nico");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th");
    \u0275\u0275text(22, "Rol de Acceso");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th");
    \u0275\u0275text(24, "Fecha de Registro");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "th");
    \u0275\u0275text(26, "Estado Cuenta");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "th");
    \u0275\u0275text(28, "Acciones");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "tbody");
    \u0275\u0275template(30, AdminDashboardComponent_div_95_tr_30_Template, 29, 17, "tr", 52)(31, AdminDashboardComponent_div_95_tr_31_Template, 3, 0, "tr", 53);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.searchUsuarios);
    \u0275\u0275advance(22);
    \u0275\u0275property("ngForOf", ctx_r0.usuariosFiltrados);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.usuariosFiltrados.length === 0);
  }
}
function AdminDashboardComponent_div_96_div_1_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 101)(1, "span", 102);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 103);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "strong", 104);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const a_r12 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r12.producto == null ? null : a_r12.producto.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("Talla ", a_r12.talla, " | ", a_r12.color, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Quedan ", a_r12.stock, " unid.");
  }
}
function AdminDashboardComponent_div_96_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 96)(1, "div", 97);
    \u0275\u0275text(2, "\u26A0\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 98)(4, "h3");
    \u0275\u0275text(5, "Alertas de Stock Bajo (Reposici\xF3n Requerida)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, "Las siguientes variantes han alcanzado el umbral m\xEDnimo (\u2264 5 unidades):");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 99);
    \u0275\u0275template(9, AdminDashboardComponent_div_96_div_1_div_9_Template, 7, 4, "div", 100);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngForOf", ctx_r0.alertasStock);
  }
}
function AdminDashboardComponent_div_96_tr_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "span", 105);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "span", 55);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td")(9, "strong", 106);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 107);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td")(14, "span", 108);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td")(17, "strong");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "td");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td")(22, "strong", 109);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "td")(25, "span", 110);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const k_r13 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("#KDX-", k_r13.idMovimiento, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 12, k_r13.fechaMovimiento, "dd/MM/yyyy HH:mm:ss"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(k_r13.variante == null ? null : k_r13.variante.producto == null ? null : k_r13.variante.producto.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" (Talla ", k_r13.variante == null ? null : k_r13.variante.talla, " - ", k_r13.variante == null ? null : k_r13.variante.color, ")");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("salida", (k_r13.tipoMovimiento || "").includes("SALIDA"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", k_r13.tipoMovimiento, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(k_r13.cantidad);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(k_r13.stockAnterior);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(k_r13.stockActual);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(k_r13.observacion || "-");
  }
}
function AdminDashboardComponent_div_96_tr_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 111);
    \u0275\u0275text(2, "No se registraron movimientos en el Kardex.");
    \u0275\u0275elementEnd()();
  }
}
function AdminDashboardComponent_div_96_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275template(1, AdminDashboardComponent_div_96_div_1_Template, 10, 1, "div", 93);
    \u0275\u0275elementStart(2, "div", 39)(3, "div")(4, "h2");
    \u0275\u0275text(5, "Historial de Movimientos Kardex & Control de Inventario");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 40);
    \u0275\u0275text(7, "Registro auditable de entradas, salidas y ajustes de stock en tiempo real");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 65)(9, "input", 94);
    \u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_div_96_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.searchKardex, $event) || (ctx_r0.searchKardex = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 95);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_96_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.abrirModalMovimientoStock());
    });
    \u0275\u0275text(11, " \u2795 Registrar Entrada / Salida ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 50)(13, "table", 51)(14, "thead")(15, "tr")(16, "th");
    \u0275\u0275text(17, "ID Mov.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th");
    \u0275\u0275text(19, "Fecha / Hora");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th");
    \u0275\u0275text(21, "Producto y Variante");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "th");
    \u0275\u0275text(23, "Tipo Movimiento");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "th");
    \u0275\u0275text(25, "Cant.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "th");
    \u0275\u0275text(27, "Stock Anterior");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "th");
    \u0275\u0275text(29, "Stock Nuevo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "th");
    \u0275\u0275text(31, "Observaci\xF3n");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "tbody");
    \u0275\u0275template(33, AdminDashboardComponent_div_96_tr_33_Template, 27, 15, "tr", 52)(34, AdminDashboardComponent_div_96_tr_34_Template, 3, 0, "tr", 53);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.alertasStock.length > 0);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.searchKardex);
    \u0275\u0275advance(24);
    \u0275\u0275property("ngForOf", ctx_r0.kardexFiltrado);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.kardexFiltrado.length === 0);
  }
}
function AdminDashboardComponent_div_97_tr_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "strong", 113);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "span", 114);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td")(10, "span", 85);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td")(15, "span", 80);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "td")(18, "div", 76)(19, "button", 115);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_97_tr_30_Template_button_click_19_listener() {
      const prov_r16 = \u0275\u0275restoreView(_r15).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.editarProveedor(prov_r16));
    });
    \u0275\u0275text(20, "\u270F\uFE0F Editar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 116);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_97_tr_30_Template_button_click_21_listener() {
      const prov_r16 = \u0275\u0275restoreView(_r15).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.eliminarProveedor(prov_r16.idProveedor));
    });
    \u0275\u0275text(22, "\u{1F5D1}\uFE0F Eliminar");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const prov_r16 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(prov_r16.razonSocial);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(prov_r16.ruc);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(prov_r16.telefono || "No registrado");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(prov_r16.correo || "No registrado");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(prov_r16.direccion || "No registrada");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(prov_r16.estado);
  }
}
function AdminDashboardComponent_div_97_tr_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 64);
    \u0275\u0275text(2, "No se encontraron proveedores registrados.");
    \u0275\u0275elementEnd()();
  }
}
function AdminDashboardComponent_div_97_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38)(1, "div", 39)(2, "div")(3, "h2");
    \u0275\u0275text(4, "Gesti\xF3n de Proveedores de Calzado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 40);
    \u0275\u0275text(6, "Administra los datos de contacto y RUC de empresas proveedoras");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 65)(8, "input", 112);
    \u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_div_97_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.searchProveedores, $event) || (ctx_r0.searchProveedores = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 67);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_97_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.abrirModalProveedor());
    });
    \u0275\u0275text(10, " \u{1F3E2} Registrar Proveedor ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 50)(12, "table", 51)(13, "thead")(14, "tr")(15, "th");
    \u0275\u0275text(16, "Raz\xF3n Social");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "RUC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th");
    \u0275\u0275text(20, "Tel\xE9fono");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th");
    \u0275\u0275text(22, "Correo Electr\xF3nico");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th");
    \u0275\u0275text(24, "Direcci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "th");
    \u0275\u0275text(26, "Estado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "th");
    \u0275\u0275text(28, "Acciones");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "tbody");
    \u0275\u0275template(30, AdminDashboardComponent_div_97_tr_30_Template, 23, 6, "tr", 52)(31, AdminDashboardComponent_div_97_tr_31_Template, 3, 0, "tr", 53);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.searchProveedores);
    \u0275\u0275advance(22);
    \u0275\u0275property("ngForOf", ctx_r0.proveedoresFiltrados);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.proveedoresFiltrados.length === 0);
  }
}
function AdminDashboardComponent_div_98_tr_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "span", 119);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "strong", 106);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td")(8, "span", 72);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td")(11, "strong", 120);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td")(14, "strong", 109);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "number");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const top_r18 = ctx.$implicit;
    const i_r19 = ctx.index;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("#", i_r19 + 1, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(top_r18.nombre);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(top_r18.marca);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", top_r18.cantidadVendida, " pares");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("S/ ", \u0275\u0275pipeBind2(16, 5, top_r18.totalGenerado, "1.2-2"), "");
  }
}
function AdminDashboardComponent_div_98_tr_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 121);
    \u0275\u0275text(2, "No hay datos suficientes para calcular la rotaci\xF3n.");
    \u0275\u0275elementEnd()();
  }
}
function AdminDashboardComponent_div_98_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38)(1, "div", 39)(2, "div")(3, "h2");
    \u0275\u0275text(4, "Reportes Estad\xEDsticos y Exportaci\xF3n de Ventas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 40);
    \u0275\u0275text(6, "Analiza la rotaci\xF3n de inventarios y exporta datos consolidados");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 95);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_98_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.exportarCSV());
    });
    \u0275\u0275text(8, " \u{1F4E5} Exportar Reporte CSV ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "h3", 117);
    \u0275\u0275text(10, "\u{1F525} Productos de Mayor Rotaci\xF3n (Top M\xE1s Vendidos)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 118)(12, "table", 51)(13, "thead")(14, "tr")(15, "th");
    \u0275\u0275text(16, "Posici\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "Producto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th");
    \u0275\u0275text(20, "Marca");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th");
    \u0275\u0275text(22, "Pares Vendidos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th");
    \u0275\u0275text(24, "Total Generado");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "tbody");
    \u0275\u0275template(26, AdminDashboardComponent_div_98_tr_26_Template, 17, 8, "tr", 52)(27, AdminDashboardComponent_div_98_tr_27_Template, 3, 0, "tr", 53);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(26);
    \u0275\u0275property("ngForOf", ctx_r0.topProductos);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.topProductos.length === 0);
  }
}
function AdminDashboardComponent_div_99_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 147);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.prodFormErrors.nombre);
  }
}
function AdminDashboardComponent_div_99_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 148)(1, "span", 149);
    \u0275\u0275text(2, "Previsualizaci\xF3n de Imagen:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 150)(4, "img", 151);
    \u0275\u0275listener("error", function AdminDashboardComponent_div_99_div_20_Template_img_error_4_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onErrorImagen($event));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("src", ctx_r0.nuevoProducto.urlImagen, \u0275\u0275sanitizeUrl);
  }
}
function AdminDashboardComponent_div_99_span_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 147);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.prodFormErrors.marca);
  }
}
function AdminDashboardComponent_div_99_span_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 147);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.prodFormErrors.material);
  }
}
function AdminDashboardComponent_div_99_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 122);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_99_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cerrarModalProducto());
    });
    \u0275\u0275elementStart(1, "div", 123);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_99_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r20);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 124)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 125);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_99_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cerrarModalProducto());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "form", 126);
    \u0275\u0275listener("ngSubmit", function AdminDashboardComponent_div_99_Template_form_ngSubmit_7_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.guardarProducto());
    });
    \u0275\u0275elementStart(8, "div", 127)(9, "div", 128)(10, "label");
    \u0275\u0275text(11, "Nombre del Producto *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 129);
    \u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_div_99_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.nuevoProducto.nombre, $event) || (ctx_r0.nuevoProducto.nombre = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, AdminDashboardComponent_div_99_span_13_Template, 2, 1, "span", 130);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 128)(15, "label");
    \u0275\u0275text(16, "URL de Imagen Principal del Producto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 131);
    \u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_div_99_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.nuevoProducto.urlImagen, $event) || (ctx_r0.nuevoProducto.urlImagen = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "p", 132);
    \u0275\u0275text(19, "Ingresa la URL de la imagen del calzado para visualizarla en el cat\xE1logo.");
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, AdminDashboardComponent_div_99_div_20_Template, 5, 1, "div", 133);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 134)(22, "label");
    \u0275\u0275text(23, "Marca *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "input", 135);
    \u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_div_99_Template_input_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.nuevoProducto.marca, $event) || (ctx_r0.nuevoProducto.marca = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(25, AdminDashboardComponent_div_99_span_25_Template, 2, 1, "span", 130);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 134)(27, "label");
    \u0275\u0275text(28, "Material *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "input", 136);
    \u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_div_99_Template_input_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.nuevoProducto.material, $event) || (ctx_r0.nuevoProducto.material = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(30, AdminDashboardComponent_div_99_span_30_Template, 2, 1, "span", 130);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 134)(32, "label");
    \u0275\u0275text(33, "G\xE9nero");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "select", 137);
    \u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_div_99_Template_select_ngModelChange_34_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.nuevoProducto.genero, $event) || (ctx_r0.nuevoProducto.genero = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(35, "option", 138);
    \u0275\u0275text(36, "Hombre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "option", 139);
    \u0275\u0275text(38, "Mujer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "option", 140);
    \u0275\u0275text(40, "Unisex");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(41, "div", 134)(42, "label");
    \u0275\u0275text(43, "Categor\xEDa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "select", 141);
    \u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_div_99_Template_select_ngModelChange_44_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.catIdForm, $event) || (ctx_r0.catIdForm = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(45, "option", 142);
    \u0275\u0275text(46, "Urbano");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "option", 142);
    \u0275\u0275text(48, "Deportivo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "option", 142);
    \u0275\u0275text(50, "Formal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "option", 142);
    \u0275\u0275text(52, "Sandalias");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "option", 142);
    \u0275\u0275text(54, "Botas");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(55, "div", 128)(56, "label");
    \u0275\u0275text(57, "Descripci\xF3n del Calzado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "textarea", 143);
    \u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_div_99_Template_textarea_ngModelChange_58_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.nuevoProducto.descripcion, $event) || (ctx_r0.nuevoProducto.descripcion = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(59, "div", 144)(60, "button", 145);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_99_Template_button_click_60_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cerrarModalProducto());
    });
    \u0275\u0275text(61, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "button", 146);
    \u0275\u0275text(63, "Guardar Producto");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.editProdId ? "\u270F\uFE0F Editar Producto" : "\u2795 Crear Nuevo Producto");
    \u0275\u0275advance(8);
    \u0275\u0275classProp("invalid", ctx_r0.prodFormErrors.nombre);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.nuevoProducto.nombre);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.prodFormErrors.nombre);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.nuevoProducto.urlImagen);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.nuevoProducto.urlImagen);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("invalid", ctx_r0.prodFormErrors.marca);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.nuevoProducto.marca);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.prodFormErrors.marca);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("invalid", ctx_r0.prodFormErrors.material);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.nuevoProducto.material);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.prodFormErrors.material);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.nuevoProducto.genero);
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.catIdForm);
    \u0275\u0275advance();
    \u0275\u0275property("value", 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 2);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 3);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 4);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 5);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.nuevoProducto.descripcion);
  }
}
function AdminDashboardComponent_div_100_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 147);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.provFormErrors.razonSocial);
  }
}
function AdminDashboardComponent_div_100_span_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 147);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.provFormErrors.ruc);
  }
}
function AdminDashboardComponent_div_100_span_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 147);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.provFormErrors.telefono);
  }
}
function AdminDashboardComponent_div_100_span_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 147);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.provFormErrors.correo);
  }
}
function AdminDashboardComponent_div_100_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 122);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_100_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cerrarModalProveedor());
    });
    \u0275\u0275elementStart(1, "div", 123);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_100_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r22);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 124)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 125);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_100_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cerrarModalProveedor());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "form", 126);
    \u0275\u0275listener("ngSubmit", function AdminDashboardComponent_div_100_Template_form_ngSubmit_7_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.guardarProveedor());
    });
    \u0275\u0275elementStart(8, "div", 127)(9, "div", 128)(10, "label");
    \u0275\u0275text(11, "Raz\xF3n Social / Nombre Comercial *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 152);
    \u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_div_100_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r22);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.nuevoProveedor.razonSocial, $event) || (ctx_r0.nuevoProveedor.razonSocial = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, AdminDashboardComponent_div_100_span_13_Template, 2, 1, "span", 130);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 134)(15, "label");
    \u0275\u0275text(16, "RUC (11 d\xEDgitos num\xE9ricos) *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 153);
    \u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_div_100_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r22);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.nuevoProveedor.ruc, $event) || (ctx_r0.nuevoProveedor.ruc = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, AdminDashboardComponent_div_100_span_18_Template, 2, 1, "span", 130);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 134)(20, "label");
    \u0275\u0275text(21, "Tel\xE9fono de Contacto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "input", 154);
    \u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_div_100_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r22);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.nuevoProveedor.telefono, $event) || (ctx_r0.nuevoProveedor.telefono = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(23, AdminDashboardComponent_div_100_span_23_Template, 2, 1, "span", 130);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 128)(25, "label");
    \u0275\u0275text(26, "Correo Electr\xF3nico de Ventas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "input", 155);
    \u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_div_100_Template_input_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r22);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.nuevoProveedor.correo, $event) || (ctx_r0.nuevoProveedor.correo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(28, AdminDashboardComponent_div_100_span_28_Template, 2, 1, "span", 130);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 128)(30, "label");
    \u0275\u0275text(31, "Direcci\xF3n Fiscal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "input", 156);
    \u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_div_100_Template_input_ngModelChange_32_listener($event) {
      \u0275\u0275restoreView(_r22);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.nuevoProveedor.direccion, $event) || (ctx_r0.nuevoProveedor.direccion = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "div", 144)(34, "button", 145);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_100_Template_button_click_34_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cerrarModalProveedor());
    });
    \u0275\u0275text(35, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "button", 146);
    \u0275\u0275text(37, "Guardar Proveedor");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.editProvId ? "\u270F\uFE0F Editar Proveedor" : "\u{1F3E2} Registrar Nuevo Proveedor");
    \u0275\u0275advance(8);
    \u0275\u0275classProp("invalid", ctx_r0.provFormErrors.razonSocial);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.nuevoProveedor.razonSocial);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.provFormErrors.razonSocial);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("invalid", ctx_r0.provFormErrors.ruc);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.nuevoProveedor.ruc);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.provFormErrors.ruc);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("invalid", ctx_r0.provFormErrors.telefono);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.nuevoProveedor.telefono);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.provFormErrors.telefono);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("invalid", ctx_r0.provFormErrors.correo);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.nuevoProveedor.correo);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.provFormErrors.correo);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.nuevoProveedor.direccion);
  }
}
function AdminDashboardComponent_div_101_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 147);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.userFormErrors.nombre);
  }
}
function AdminDashboardComponent_div_101_span_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 147);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.userFormErrors.email);
  }
}
function AdminDashboardComponent_div_101_span_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 147);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.userFormErrors.password);
  }
}
function AdminDashboardComponent_div_101_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 122);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_101_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cerrarModalUsuario());
    });
    \u0275\u0275elementStart(1, "div", 123);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_101_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r23);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 124)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 125);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_101_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cerrarModalUsuario());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "form", 126);
    \u0275\u0275listener("ngSubmit", function AdminDashboardComponent_div_101_Template_form_ngSubmit_7_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.guardarUsuario());
    });
    \u0275\u0275elementStart(8, "div", 127)(9, "div", 128)(10, "label");
    \u0275\u0275text(11, "Nombre Completo del Usuario *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 157);
    \u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_div_101_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.nuevoUsuario.nombre, $event) || (ctx_r0.nuevoUsuario.nombre = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, AdminDashboardComponent_div_101_span_13_Template, 2, 1, "span", 130);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 128)(15, "label");
    \u0275\u0275text(16, "Correo Electr\xF3nico *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 158);
    \u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_div_101_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.nuevoUsuario.email, $event) || (ctx_r0.nuevoUsuario.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, AdminDashboardComponent_div_101_span_18_Template, 2, 1, "span", 130);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 128)(20, "label");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "input", 159);
    \u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_div_101_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.nuevoUsuario.password, $event) || (ctx_r0.nuevoUsuario.password = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(23, AdminDashboardComponent_div_101_span_23_Template, 2, 1, "span", 130);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 134)(25, "label");
    \u0275\u0275text(26, "Rol de Acceso *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "select", 160);
    \u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_div_101_Template_select_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.nuevoUsuario.rol, $event) || (ctx_r0.nuevoUsuario.rol = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(28, "option", 87);
    \u0275\u0275text(29, "CLIENTE");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "option", 88);
    \u0275\u0275text(31, "ADMINISTRADOR");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "div", 134)(33, "label");
    \u0275\u0275text(34, "Estado de Cuenta");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "select", 161);
    \u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_div_101_Template_select_ngModelChange_35_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.nuevoUsuario.activo, $event) || (ctx_r0.nuevoUsuario.activo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(36, "option", 162);
    \u0275\u0275text(37, "ACTIVO");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "option", 162);
    \u0275\u0275text(39, "INACTIVO");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(40, "div", 144)(41, "button", 145);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_101_Template_button_click_41_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cerrarModalUsuario());
    });
    \u0275\u0275text(42, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "button", 146);
    \u0275\u0275text(44, "Guardar Datos de Usuario");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.editUserId ? "\u270F\uFE0F Editar Datos de Usuario" : "\u{1F464} Crear Nuevo Usuario");
    \u0275\u0275advance(8);
    \u0275\u0275classProp("invalid", ctx_r0.userFormErrors.nombre);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.nuevoUsuario.nombre);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.userFormErrors.nombre);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("invalid", ctx_r0.userFormErrors.email);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.nuevoUsuario.email);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.userFormErrors.email);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Contrase\xF1a ", ctx_r0.editUserId ? "(Dejar en blanco para mantener contrase\xF1a actual)" : "*", "");
    \u0275\u0275advance();
    \u0275\u0275classProp("invalid", ctx_r0.userFormErrors.password);
    \u0275\u0275propertyInterpolate("placeholder", ctx_r0.editUserId ? "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022 (Opcional)" : "Ingresa la contrase\xF1a de acceso");
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.nuevoUsuario.password);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.userFormErrors.password);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.nuevoUsuario.rol);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.nuevoUsuario.activo);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngValue", false);
  }
}
function AdminDashboardComponent_div_102_tr_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "span", 119);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td")(8, "span", 70);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td")(11, "input", 173);
    \u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_div_102_tr_34_Template_input_ngModelChange_11_listener($event) {
      const varItem_r26 = \u0275\u0275restoreView(_r25).$implicit;
      \u0275\u0275twoWayBindingSet(varItem_r26.precio, $event) || (varItem_r26.precio = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td")(13, "input", 174);
    \u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_div_102_tr_34_Template_input_ngModelChange_13_listener($event) {
      const varItem_r26 = \u0275\u0275restoreView(_r25).$implicit;
      \u0275\u0275twoWayBindingSet(varItem_r26.stock, $event) || (varItem_r26.stock = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td")(15, "button", 175);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_102_tr_34_Template_button_click_15_listener() {
      const varItem_r26 = \u0275\u0275restoreView(_r25).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.guardarCambiosVariante(varItem_r26));
    });
    \u0275\u0275text(16, " \u{1F4BE} Guardar ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const varItem_r26 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Talla ", varItem_r26.talla, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(varItem_r26.color);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(varItem_r26.sku || "-");
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", varItem_r26.precio);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", varItem_r26.stock);
  }
}
function AdminDashboardComponent_div_102_tr_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 176);
    \u0275\u0275text(2, "Este producto a\xFAn no tiene variantes ni stock de tallas registradas.");
    \u0275\u0275elementEnd()();
  }
}
function AdminDashboardComponent_div_102_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 122);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_102_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cerrarModalStock());
    });
    \u0275\u0275elementStart(1, "div", 163);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_102_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r24);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 124)(3, "div")(4, "span", 73);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h3");
    \u0275\u0275text(7, "\u{1F4E6} Gesti\xF3n de Stock e Inventario por Talla / Variante");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 132);
    \u0275\u0275text(9, "Producto: ");
    \u0275\u0275elementStart(10, "strong");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "button", 125);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_102_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cerrarModalStock());
    });
    \u0275\u0275text(13, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 164)(15, "h4", 165);
    \u0275\u0275text(16, "Variantes de Stock Registradas en SQL Server");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 118)(18, "table", 51)(19, "thead")(20, "tr")(21, "th");
    \u0275\u0275text(22, "Talla");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th");
    \u0275\u0275text(24, "Color");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "th");
    \u0275\u0275text(26, "SKU");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "th");
    \u0275\u0275text(28, "Precio Venta");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "th");
    \u0275\u0275text(30, "Stock Actual");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "th");
    \u0275\u0275text(32, "Guardar / Ajustar");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "tbody");
    \u0275\u0275template(34, AdminDashboardComponent_div_102_tr_34_Template, 17, 5, "tr", 52)(35, AdminDashboardComponent_div_102_tr_35_Template, 3, 0, "tr", 53);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "div", 166)(37, "h4", 165);
    \u0275\u0275text(38, "\u2795 A\xF1adir Nueva Talla / Variante de Stock");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 167)(40, "div", 134)(41, "label");
    \u0275\u0275text(42, "Talla *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "input", 168);
    \u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_div_102_Template_input_ngModelChange_43_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.nuevaVarianteForm.talla, $event) || (ctx_r0.nuevaVarianteForm.talla = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 134)(45, "label");
    \u0275\u0275text(46, "Color *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "input", 169);
    \u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_div_102_Template_input_ngModelChange_47_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.nuevaVarianteForm.color, $event) || (ctx_r0.nuevaVarianteForm.color = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div", 134)(49, "label");
    \u0275\u0275text(50, "Stock Inicial *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "input", 170);
    \u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_div_102_Template_input_ngModelChange_51_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.nuevaVarianteForm.stock, $event) || (ctx_r0.nuevaVarianteForm.stock = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "div", 134)(53, "label");
    \u0275\u0275text(54, "Precio S/ *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "input", 171);
    \u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_div_102_Template_input_ngModelChange_55_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.nuevaVarianteForm.precio, $event) || (ctx_r0.nuevaVarianteForm.precio = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(56, "button", 172);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_102_Template_button_click_56_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.crearNuevaVariante());
    });
    \u0275\u0275text(57, " \u2728 Agregar Talla y Guardar Stock ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(58, "div", 144)(59, "button", 145);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_102_Template_button_click_59_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cerrarModalStock());
    });
    \u0275\u0275text(60, "Cerrar Ventana");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.productoStockModal.marca);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.productoStockModal.nombre);
    \u0275\u0275advance(23);
    \u0275\u0275property("ngForOf", ctx_r0.productoStockModal.variantes);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.productoStockModal.variantes || ctx_r0.productoStockModal.variantes.length === 0);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.nuevaVarianteForm.talla);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.nuevaVarianteForm.color);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.nuevaVarianteForm.stock);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.nuevaVarianteForm.precio);
  }
}
function AdminDashboardComponent_div_103_ng_container_15_option_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 142);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const v_r28 = ctx.$implicit;
    const p_r29 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("value", v_r28.idVariante);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate4(" ", p_r29.nombre, " - Talla ", v_r28.talla, " (", v_r28.color, ") | Stock Actual: ", v_r28.stock, " unid. ");
  }
}
function AdminDashboardComponent_div_103_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, AdminDashboardComponent_div_103_ng_container_15_option_1_Template, 2, 5, "option", 184);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const p_r29 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", p_r29.variantes);
  }
}
function AdminDashboardComponent_div_103_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 122);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_103_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cerrarModalMovimientoStock());
    });
    \u0275\u0275elementStart(1, "div", 123);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_103_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r27);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 124)(3, "h3");
    \u0275\u0275text(4, "\u2795 Registrar Entrada / Salida de Inventario (Kardex)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 125);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_103_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cerrarModalMovimientoStock());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "form", 126);
    \u0275\u0275listener("ngSubmit", function AdminDashboardComponent_div_103_Template_form_ngSubmit_7_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.guardarMovimientoStock());
    });
    \u0275\u0275elementStart(8, "div", 127)(9, "div", 128)(10, "label");
    \u0275\u0275text(11, "Selecciona Producto y Talla/Variante *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "select", 177);
    \u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_div_103_Template_select_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r27);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.movimientoForm.idVariante, $event) || (ctx_r0.movimientoForm.idVariante = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(13, "option", 162);
    \u0275\u0275text(14, "-- Seleccionar Variante de Calzado --");
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, AdminDashboardComponent_div_103_ng_container_15_Template, 2, 1, "ng-container", 52);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 134)(17, "label");
    \u0275\u0275text(18, "Tipo de Movimiento *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "select", 178);
    \u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_div_103_Template_select_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r27);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.movimientoForm.tipoMovimiento, $event) || (ctx_r0.movimientoForm.tipoMovimiento = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(20, "option", 179);
    \u0275\u0275text(21, "\u{1F7E2} ENTRADA_COMPRA (Reposici\xF3n / Importaci\xF3n)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "option", 180);
    \u0275\u0275text(23, "\u{1F535} AJUSTE_ENTRADA (Sobrante / Correcci\xF3n (+))");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "option", 181);
    \u0275\u0275text(25, "\u{1F534} AJUSTE_SALIDA (Merma / P\xE9rdida (-))");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 134)(27, "label");
    \u0275\u0275text(28, "Cantidad de Unidades *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "input", 182);
    \u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_div_103_Template_input_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r27);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.movimientoForm.cantidad, $event) || (ctx_r0.movimientoForm.cantidad = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 128)(31, "label");
    \u0275\u0275text(32, "Observaci\xF3n / Motivo del Movimiento");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "input", 183);
    \u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_div_103_Template_input_ngModelChange_33_listener($event) {
      \u0275\u0275restoreView(_r27);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.movimientoForm.observacion, $event) || (ctx_r0.movimientoForm.observacion = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "div", 144)(35, "button", 145);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_103_Template_button_click_35_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cerrarModalMovimientoStock());
    });
    \u0275\u0275text(36, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "button", 146);
    \u0275\u0275text(38, "Registrar Movimiento en Kardex");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.movimientoForm.idVariante);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.productos);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.movimientoForm.tipoMovimiento);
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.movimientoForm.cantidad);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.movimientoForm.observacion);
  }
}
var AdminDashboardComponent = class _AdminDashboardComponent {
  constructor(productoService, ventaService, proveedorService, usuarioService, reporteService, notificationService, http) {
    this.productoService = productoService;
    this.ventaService = ventaService;
    this.proveedorService = proveedorService;
    this.usuarioService = usuarioService;
    this.reporteService = reporteService;
    this.notificationService = notificationService;
    this.http = http;
    this.tabActiva = "pedidos";
    this.resumen = null;
    this.topProductos = [];
    this.ventas = [];
    this.productos = [];
    this.proveedores = [];
    this.usuarios = [];
    this.alertasStock = [];
    this.kardex = [];
    this.searchPedidos = "";
    this.filtroEstadoPedido = "TODOS";
    this.searchCatalogo = "";
    this.searchUsuarios = "";
    this.searchKardex = "";
    this.searchProveedores = "";
    this.mostrarModalProd = false;
    this.editProdId = null;
    this.nuevoProducto = { nombre: "", marca: "", material: "", genero: "Hombre", descripcion: "", urlImagen: "" };
    this.catIdForm = 1;
    this.prodFormErrors = {};
    this.mostrarModalProv = false;
    this.editProvId = null;
    this.nuevoProveedor = { razonSocial: "", ruc: "", telefono: "", correo: "", direccion: "", estado: "ACTIVO" };
    this.provFormErrors = {};
    this.mostrarModalUser = false;
    this.editUserId = null;
    this.nuevoUsuario = { nombre: "", email: "", password: "", rol: "CLIENTE", activo: true };
    this.userFormErrors = {};
    this.mostrarModalStock = false;
    this.productoStockModal = null;
    this.nuevaVarianteForm = { talla: "", color: "\xDAnico", stock: 10, precio: 0 };
    this.mostrarModalMovStock = false;
    this.movimientoForm = { idVariante: null, tipoMovimiento: "ENTRADA_COMPRA", cantidad: 1, observacion: "" };
    this.ejecutandoBackup = false;
    this.fallbackImage = "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=150";
  }
  ngOnInit() {
    this.cargarTodo();
  }
  cargarTodo() {
    this.reporteService.obtenerResumen().subscribe((data) => this.resumen = data);
    this.reporteService.obtenerTopProductos().subscribe((data) => this.topProductos = data);
    this.ventaService.obtenerTodas().subscribe((data) => this.ventas = data);
    this.productoService.obtenerTodos().subscribe((data) => this.productos = data);
    this.proveedorService.listar().subscribe((data) => this.proveedores = data);
    this.usuarioService.listarTodos().subscribe((data) => this.usuarios = data);
    this.http.get("http://localhost:8080/api/v1/admin/inventario/alertas").subscribe((data) => this.alertasStock = data);
    this.http.get("http://localhost:8080/api/v1/admin/inventario/kardex").subscribe((data) => this.kardex = data);
  }
  // Helper Methods for Product Images
  obtenerUrlImagen(p) {
    if (p.imagenes && p.imagenes.length > 0 && p.imagenes[0].urlImagen) {
      return p.imagenes[0].urlImagen;
    }
    return this.fallbackImage;
  }
  onErrorImagen(event) {
    event.target.src = this.fallbackImage;
  }
  // Filtered Getters
  get ventasFiltradas() {
    return this.ventas.filter((v) => {
      const matchState = this.filtroEstadoPedido === "TODOS" || v.estadoPedido === this.filtroEstadoPedido;
      const term = this.searchPedidos.toLowerCase().trim();
      const matchSearch = !term || (v.usuario?.nombre || "").toLowerCase().includes(term) || (v.usuario?.email || "").toLowerCase().includes(term) || (v.distritoEnvio || "").toLowerCase().includes(term) || `zap-${v.idVenta}`.includes(term);
      return matchState && matchSearch;
    });
  }
  get productosFiltrados() {
    const term = this.searchCatalogo.toLowerCase().trim();
    if (!term)
      return this.productos;
    return this.productos.filter((p) => (p.nombre || "").toLowerCase().includes(term) || (p.marca || "").toLowerCase().includes(term) || (p.material || "").toLowerCase().includes(term) || (p.categoria?.nombre || "").toLowerCase().includes(term));
  }
  get usuariosFiltrados() {
    const term = this.searchUsuarios.toLowerCase().trim();
    if (!term)
      return this.usuarios;
    return this.usuarios.filter((u) => (u.nombre || "").toLowerCase().includes(term) || (u.email || "").toLowerCase().includes(term) || (u.rol || "").toLowerCase().includes(term));
  }
  get kardexFiltrado() {
    const term = this.searchKardex.toLowerCase().trim();
    if (!term)
      return this.kardex;
    return this.kardex.filter((k) => (k.variante?.producto?.nombre || "").toLowerCase().includes(term) || (k.tipoMovimiento || "").toLowerCase().includes(term) || (k.observacion || "").toLowerCase().includes(term));
  }
  get proveedoresFiltrados() {
    const term = this.searchProveedores.toLowerCase().trim();
    if (!term)
      return this.proveedores;
    return this.proveedores.filter((pr) => (pr.razonSocial || "").toLowerCase().includes(term) || (pr.ruc || "").includes(term) || (pr.correo || "").toLowerCase().includes(term));
  }
  // Order Actions
  cambiarEstadoPedido(idVenta, nuevoEstado) {
    this.ventaService.actualizarEstado(idVenta, nuevoEstado).subscribe({
      next: () => {
        this.notificationService.showSuccess(`Estado del pedido #ZAP-${idVenta} actualizado a "${nuevoEstado}"`);
        this.cargarTodo();
      },
      error: () => this.notificationService.showError("No se pudo actualizar el estado del pedido")
    });
  }
  // User Actions
  cambiarRolUsuario(idUsuario, nuevoRol) {
    this.usuarioService.cambiarRol(idUsuario, nuevoRol).subscribe({
      next: () => {
        this.notificationService.showSuccess(`Rol de usuario actualizado a "${nuevoRol}" con \xE9xito`);
        this.cargarTodo();
      },
      error: () => this.notificationService.showError("No se pudo modificar el rol del usuario")
    });
  }
  toggleEstadoUsuario(u) {
    const nuevoEstado = !u.activo;
    const accion = nuevoEstado ? "activar" : "desactivar";
    if (confirm(`\xBFDesea ${accion} la cuenta del usuario "${u.nombre}"?`)) {
      this.usuarioService.cambiarEstado(u.idUsuario, nuevoEstado).subscribe({
        next: () => {
          this.notificationService.showWarning(`Cuenta de usuario "${u.nombre}" ${nuevoEstado ? "activada" : "desactivada"}`);
          this.cargarTodo();
        },
        error: () => this.notificationService.showError("No se pudo cambiar el estado de la cuenta")
      });
    }
  }
  // User Modal Actions & Validations
  abrirModalUsuario() {
    this.editUserId = null;
    this.nuevoUsuario = { nombre: "", email: "", password: "", rol: "CLIENTE", activo: true };
    this.userFormErrors = {};
    this.mostrarModalUser = true;
  }
  // Stock Management Actions & Modals
  gestionarStockProducto(p) {
    this.productoStockModal = p;
    const precioBase = p.variantes && p.variantes.length > 0 ? p.variantes[0].precio : 250;
    this.nuevaVarianteForm = { talla: "", color: "\xDAnico", stock: 10, precio: precioBase };
    this.mostrarModalStock = true;
  }
  cerrarModalStock() {
    this.mostrarModalStock = false;
    this.productoStockModal = null;
  }
  guardarCambiosVariante(v) {
    if (!v.idVariante)
      return;
    this.http.put(`http://localhost:8080/api/v1/admin/inventario/variantes/${v.idVariante}`, v).subscribe({
      next: () => {
        this.notificationService.showSuccess(`Stock (Talla ${v.talla}) actualizado a ${v.stock} unidades en SQL Server`);
        this.cargarTodo();
      },
      error: () => this.notificationService.showError("Ocurri\xF3 un error al actualizar la variante")
    });
  }
  crearNuevaVariante() {
    if (!this.productoStockModal || !this.productoStockModal.idProducto)
      return;
    if (!this.nuevaVarianteForm.talla || !this.nuevaVarianteForm.talla.toString().trim()) {
      this.notificationService.showError("La talla es requerida");
      return;
    }
    const payload = {
      talla: this.nuevaVarianteForm.talla.toString().trim(),
      color: (this.nuevaVarianteForm.color || "\xDAnico").trim(),
      stock: Number(this.nuevaVarianteForm.stock || 0),
      precio: Number(this.nuevaVarianteForm.precio || 0)
    };
    this.http.post(`http://localhost:8080/api/v1/admin/inventario/productos/${this.productoStockModal.idProducto}/variantes`, payload).subscribe({
      next: () => {
        this.notificationService.showSuccess(`Nueva variante Talla ${payload.talla} agregada con ${payload.stock} unidades de stock`);
        this.cargarTodo();
        this.cerrarModalStock();
      },
      error: (err) => this.notificationService.showError(err.error?.message || "Error al agregar variante de stock")
    });
  }
  abrirModalMovimientoStock() {
    this.movimientoForm = { idVariante: null, tipoMovimiento: "ENTRADA_COMPRA", cantidad: 1, observacion: "" };
    this.mostrarModalMovStock = true;
  }
  cerrarModalMovimientoStock() {
    this.mostrarModalMovStock = false;
  }
  guardarMovimientoStock() {
    if (!this.movimientoForm.idVariante) {
      this.notificationService.showError("Debe seleccionar una variante de producto.");
      return;
    }
    if (!this.movimientoForm.cantidad || this.movimientoForm.cantidad < 1) {
      this.notificationService.showError("La cantidad debe ser mayor a 0.");
      return;
    }
    this.http.post("http://localhost:8080/api/v1/admin/inventario/movimiento", this.movimientoForm).subscribe({
      next: () => {
        this.notificationService.showSuccess("Movimiento de inventario registrado con \xE9xito en Kardex y SQL Server");
        this.cargarTodo();
        this.cerrarModalMovimientoStock();
      },
      error: (err) => this.notificationService.showError(err.error?.message || "Error al registrar movimiento en Kardex")
    });
  }
  cerrarModalUsuario() {
    this.mostrarModalUser = false;
    this.userFormErrors = {};
  }
  editarUsuario(u) {
    this.editUserId = u.idUsuario;
    this.nuevoUsuario = {
      nombre: u.nombre,
      email: u.email,
      password: "",
      rol: u.rol || "CLIENTE",
      activo: u.activo !== void 0 ? u.activo : true
    };
    this.userFormErrors = {};
    this.mostrarModalUser = true;
  }
  guardarUsuario() {
    this.userFormErrors = {};
    let isValid = true;
    if (!this.nuevoUsuario.nombre || !this.nuevoUsuario.nombre.trim()) {
      this.userFormErrors.nombre = "El nombre completo es obligatorio.";
      isValid = false;
    }
    const emailClean = (this.nuevoUsuario.email || "").trim();
    if (!emailClean) {
      this.userFormErrors.email = "El correo electr\xF3nico es obligatorio.";
      isValid = false;
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailClean)) {
        this.userFormErrors.email = "Ingrese un correo electr\xF3nico v\xE1lido.";
        isValid = false;
      }
    }
    if (!this.editUserId && (!this.nuevoUsuario.password || !this.nuevoUsuario.password.trim())) {
      this.userFormErrors.password = "La contrase\xF1a es obligatoria para nuevos usuarios.";
      isValid = false;
    }
    if (!isValid) {
      this.notificationService.showError("Por favor complete los campos obligatorios del usuario.");
      return;
    }
    const payload = {
      nombre: this.nuevoUsuario.nombre.trim(),
      email: this.nuevoUsuario.email.trim(),
      rol: this.nuevoUsuario.rol,
      activo: this.nuevoUsuario.activo
    };
    if (this.nuevoUsuario.password && this.nuevoUsuario.password.trim()) {
      payload.password = this.nuevoUsuario.password.trim();
    }
    if (this.editUserId) {
      this.usuarioService.actualizarUsuario(this.editUserId, payload).subscribe({
        next: () => {
          this.notificationService.showSuccess(`Datos de "${this.nuevoUsuario.nombre}" actualizados correctamente`);
          this.cargarTodo();
          this.cerrarModalUsuario();
        },
        error: (err) => this.notificationService.showError(err.error?.message || "Error al actualizar usuario")
      });
    } else {
      this.usuarioService.crearUsuario(payload).subscribe({
        next: () => {
          this.notificationService.showSuccess(`Usuario "${this.nuevoUsuario.nombre}" registrado exitosamente`);
          this.cargarTodo();
          this.cerrarModalUsuario();
        },
        error: (err) => this.notificationService.showError(err.error?.message || "Error al registrar el nuevo usuario")
      });
    }
  }
  // Product Modal Actions & Validations (incluye urlImagen)
  abrirModalProducto() {
    this.editProdId = null;
    this.nuevoProducto = {
      nombre: "",
      marca: "",
      material: "",
      genero: "Hombre",
      descripcion: "",
      urlImagen: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800"
    };
    this.catIdForm = 1;
    this.prodFormErrors = {};
    this.mostrarModalProd = true;
  }
  cerrarModalProducto() {
    this.mostrarModalProd = false;
    this.prodFormErrors = {};
  }
  editarProducto(p) {
    this.editProdId = p.idProducto;
    const mainImg = p.imagenes && p.imagenes.length > 0 ? p.imagenes[0].urlImagen : "";
    this.nuevoProducto = {
      nombre: p.nombre,
      marca: p.marca,
      material: p.material,
      genero: p.genero,
      descripcion: p.descripcion,
      urlImagen: mainImg
    };
    this.catIdForm = p.categoria?.idCategoria || 1;
    this.prodFormErrors = {};
    this.mostrarModalProd = true;
  }
  guardarProducto() {
    this.prodFormErrors = {};
    let isValid = true;
    if (!this.nuevoProducto.nombre || !this.nuevoProducto.nombre.trim()) {
      this.prodFormErrors.nombre = "El nombre del producto es obligatorio.";
      isValid = false;
    }
    if (!this.nuevoProducto.marca || !this.nuevoProducto.marca.trim()) {
      this.prodFormErrors.marca = "La marca es obligatoria.";
      isValid = false;
    }
    if (!this.nuevoProducto.material || !this.nuevoProducto.material.trim()) {
      this.prodFormErrors.material = "El material es obligatorio.";
      isValid = false;
    }
    if (!isValid) {
      this.notificationService.showError("Por favor complete los campos obligatorios del producto");
      return;
    }
    const payload = {
      nombre: this.nuevoProducto.nombre,
      marca: this.nuevoProducto.marca,
      material: this.nuevoProducto.material,
      genero: this.nuevoProducto.genero,
      descripcion: this.nuevoProducto.descripcion,
      activo: this.nuevoProducto.activo !== void 0 ? this.nuevoProducto.activo : true,
      categoria: { idCategoria: Number(this.catIdForm) }
    };
    if (this.nuevoProducto.urlImagen && this.nuevoProducto.urlImagen.trim()) {
      payload.imagenes = [
        {
          urlImagen: this.nuevoProducto.urlImagen.trim(),
          esPrincipal: true,
          ordenVisualizacion: 1
        }
      ];
    }
    if (this.editProdId) {
      this.productoService.actualizarProducto(this.editProdId, payload).subscribe({
        next: () => {
          this.notificationService.showSuccess(`Producto e imagen de "${this.nuevoProducto.nombre}" actualizados correctamente`);
          this.cargarTodo();
          this.cerrarModalProducto();
        },
        error: () => this.notificationService.showError("Ocurri\xF3 un error al actualizar el producto")
      });
    } else {
      this.productoService.crearProducto(payload).subscribe({
        next: () => {
          this.notificationService.showSuccess(`Producto "${this.nuevoProducto.nombre}" creado exitosamente`);
          this.cargarTodo();
          this.cerrarModalProducto();
        },
        error: () => this.notificationService.showError("Ocurri\xF3 un error al crear el producto")
      });
    }
  }
  eliminarProducto(id) {
    if (!id)
      return;
    if (confirm("\xBFDesea desactivar este producto del cat\xE1logo?")) {
      this.productoService.desactivarProducto(id).subscribe({
        next: () => {
          this.notificationService.showWarning("Producto desactivado del cat\xE1logo");
          this.cargarTodo();
        },
        error: () => this.notificationService.showError("No se pudo desactivar el producto")
      });
    }
  }
  // Supplier Modal Actions & RUC Validations
  abrirModalProveedor() {
    this.editProvId = null;
    this.nuevoProveedor = { razonSocial: "", ruc: "", telefono: "", correo: "", direccion: "", estado: "ACTIVO" };
    this.provFormErrors = {};
    this.mostrarModalProv = true;
  }
  cerrarModalProveedor() {
    this.mostrarModalProv = false;
    this.provFormErrors = {};
  }
  editarProveedor(prov) {
    this.editProvId = prov.idProveedor;
    this.nuevoProveedor = __spreadValues({}, prov);
    this.provFormErrors = {};
    this.mostrarModalProv = true;
  }
  guardarProveedor() {
    this.provFormErrors = {};
    let isValid = true;
    if (!this.nuevoProveedor.razonSocial || !this.nuevoProveedor.razonSocial.trim()) {
      this.provFormErrors.razonSocial = "La Raz\xF3n Social es requerida.";
      isValid = false;
    }
    const rucClean = (this.nuevoProveedor.ruc || "").trim();
    if (!rucClean) {
      this.provFormErrors.ruc = "El RUC es requerido.";
      isValid = false;
    } else if (!/^[0-9]{11}$/.test(rucClean)) {
      this.provFormErrors.ruc = "El RUC debe ser un n\xFAmero de exactamente 11 d\xEDgitos (Ej. 20512345678).";
      this.notificationService.showError("El RUC ingresado es incorrecto. Debe contener exactamente 11 d\xEDgitos num\xE9ricos.", "Error de RUC");
      isValid = false;
    }
    if (this.nuevoProveedor.correo && this.nuevoProveedor.correo.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(this.nuevoProveedor.correo.trim())) {
        this.provFormErrors.correo = "Ingrese una direcci\xF3n de correo electr\xF3nico v\xE1lida.";
        this.notificationService.showError("El correo electr\xF3nico tiene un formato incorrecto");
        isValid = false;
      }
    }
    if (this.nuevoProveedor.telefono && this.nuevoProveedor.telefono.trim()) {
      if (!/^[0-9]{7,15}$/.test(this.nuevoProveedor.telefono.trim())) {
        this.provFormErrors.telefono = "El tel\xE9fono debe contener solo n\xFAmeros.";
        isValid = false;
      }
    }
    if (!isValid) {
      if (!this.provFormErrors.ruc) {
        this.notificationService.showError("Por favor corrija los errores marcados en el formulario");
      }
      return;
    }
    if (this.editProvId) {
      this.proveedorService.actualizar(this.editProvId, this.nuevoProveedor).subscribe({
        next: () => {
          this.notificationService.showSuccess(`Proveedor "${this.nuevoProveedor.razonSocial}" actualizado correctamente`);
          this.cargarTodo();
          this.cerrarModalProveedor();
        },
        error: (err) => this.notificationService.showError(err.error?.message || "Error al actualizar proveedor")
      });
    } else {
      this.proveedorService.crear(this.nuevoProveedor).subscribe({
        next: () => {
          this.notificationService.showSuccess(`Proveedor "${this.nuevoProveedor.razonSocial}" registrado con \xE9xito`);
          this.cargarTodo();
          this.cerrarModalProveedor();
        },
        error: (err) => this.notificationService.showError(err.error?.message || "Error al registrar el proveedor")
      });
    }
  }
  eliminarProveedor(id) {
    if (confirm("\xBFDesea eliminar este proveedor de la base de datos?")) {
      this.proveedorService.eliminar(id).subscribe({
        next: () => {
          this.notificationService.showWarning("Proveedor eliminado correctamente");
          this.cargarTodo();
        },
        error: () => this.notificationService.showError("No se pudo eliminar el proveedor seleccionado")
      });
    }
  }
  // Export & Backup Actions
  exportarCSV() {
    this.reporteService.exportarCSV().subscribe({
      next: (blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "reporte_ventas_joselito.csv";
        a.click();
        this.notificationService.showSuccess("Reporte de ventas exportado exitosamente en formato CSV");
      },
      error: () => this.notificationService.showError("Ocurri\xF3 un error al generar el reporte CSV")
    });
  }
  ejecutarBackup() {
    this.ejecutandoBackup = true;
    this.http.post("http://localhost:8080/api/v1/admin/backup", {}).subscribe({
      next: (res) => {
        this.ejecutandoBackup = false;
        this.notificationService.showSuccess(res.mensaje || "Copia de seguridad (Backup) de la base de datos SQL Server generada con \xE9xito");
      },
      error: () => {
        this.ejecutandoBackup = false;
        this.notificationService.showError("Ocurri\xF3 un error al procesar la copia de seguridad");
      }
    });
  }
  static {
    this.\u0275fac = function AdminDashboardComponent_Factory(t) {
      return new (t || _AdminDashboardComponent)(\u0275\u0275directiveInject(ProductoService), \u0275\u0275directiveInject(VentaService), \u0275\u0275directiveInject(ProveedorService), \u0275\u0275directiveInject(UsuarioService), \u0275\u0275directiveInject(ReporteService), \u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(HttpClient));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminDashboardComponent, selectors: [["app-admin-dashboard"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 104, vars: 42, consts: [[1, "admin-wrapper"], [1, "dashboard-header", "glass-card"], [1, "header-title-box"], [1, "status-indicator"], [1, "pulse-dot"], [1, "status-text"], [1, "glow-title"], [1, "subtitle"], [1, "header-actions"], [1, "btn-secondary-action", 3, "click"], [1, "icon"], [1, "btn-backup-action", 3, "click", "disabled"], [1, "kpi-grid", "margin-top"], [1, "kpi-card", "glass-card", "kpi-emerald"], [1, "kpi-header"], [1, "kpi-label"], [1, "kpi-icon", "emerald"], [1, "kpi-value", "text-emerald"], [1, "kpi-footer"], [1, "badge-sub", "text-emerald-light"], [1, "kpi-card", "glass-card", "kpi-indigo"], [1, "kpi-icon", "indigo"], [1, "kpi-value", "text-indigo"], [1, "badge-sub", "text-indigo-light"], [1, "kpi-card", "glass-card", "kpi-purple"], [1, "kpi-icon", "purple"], [1, "kpi-value", "text-purple"], [1, "badge-sub", "text-purple-light"], [1, "kpi-card", "glass-card", "kpi-rose"], [1, "kpi-icon", "rose"], [1, "kpi-value", "text-rose"], [1, "badge-sub"], [1, "admin-nav-tabs", "margin-top"], [3, "click"], ["class", "tab-badge", 4, "ngIf"], ["class", "tab-pane glass-card", 4, "ngIf"], ["class", "modal-backdrop", 3, "click", 4, "ngIf"], [1, "tab-badge"], [1, "tab-pane", "glass-card"], [1, "pane-header-bar"], [1, "pane-subtitle"], [1, "search-filter-box"], ["type", "text", "placeholder", "Buscar por cliente, ID o distrito...", 1, "search-input", 3, "ngModelChange", "ngModel"], [1, "filter-select", 3, "ngModelChange", "ngModel"], ["value", "TODOS"], ["value", "PENDIENTE"], ["value", "EN_PREPARACION"], ["value", "ENVIADO"], ["value", "ENTREGADO"], ["value", "CANCELADO"], [1, "table-responsive", "margin-top"], [1, "modern-table"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "order-code"], [1, "date-text"], [1, "user-cell"], [1, "user-name"], [1, "user-email-sub"], [1, "shipping-cell"], [1, "agency-tag"], [1, "amount-cell", "text-emerald"], [1, "status-pill", 3, "ngClass"], [1, "action-select", 3, "change", "ngModel"], ["colspan", "7", 1, "empty-table"], [1, "actions-group"], ["type", "text", "placeholder", "Buscar por nombre, marca o material...", 1, "search-input", 3, "ngModelChange", "ngModel"], [1, "btn-primary-action", 3, "click"], [1, "img-thumb-wrapper"], [1, "product-thumb", 3, "error", "src", "alt"], [1, "id-tag"], [1, "product-title-text"], [1, "brand-chip"], [1, "category-chip"], ["class", "status-pill active", 4, "ngIf"], ["class", "status-pill inactive", 4, "ngIf"], [1, "table-actions"], ["title", "Gestionar Stock de Variantes", 1, "btn-icon-btn", "stock", 3, "click"], ["title", "Editar", 1, "btn-icon-btn", "edit", 3, "click"], ["title", "Eliminar", 1, "btn-icon-btn", "delete", 3, "click"], [1, "status-pill", "active"], [1, "status-pill", "inactive"], ["colspan", "9", 1, "empty-table"], ["type", "text", "placeholder", "Buscar usuario por nombre, email o rol...", 1, "search-input", 3, "ngModelChange", "ngModel"], [1, "user-name-text"], [1, "email-text"], [1, "action-select", "role-select", 3, "change", "ngModel"], ["value", "CLIENTE"], ["value", "ADMIN"], ["class", "status-pill cancelado", 4, "ngIf"], ["title", "Editar datos del usuario", 1, "btn-icon-btn", "edit", 3, "click"], [1, "btn-icon-btn", 3, "click"], [1, "status-pill", "cancelado"], ["class", "alert-banner danger margin-bottom", 4, "ngIf"], ["type", "text", "placeholder", "Buscar en Kardex por producto, tipo u observaci\xF3n...", 1, "search-input", 3, "ngModelChange", "ngModel"], [1, "btn-emerald-action", 3, "click"], [1, "alert-banner", "danger", "margin-bottom"], [1, "banner-icon"], [1, "banner-content"], [1, "alert-chips-grid", "margin-top-sm"], ["class", "stock-chip", 4, "ngFor", "ngForOf"], [1, "stock-chip"], [1, "chip-title"], [1, "chip-meta"], [1, "chip-qty"], [1, "kardex-code"], [1, "text-bright"], [1, "variant-meta"], [1, "kardex-type-pill"], [1, "text-emerald"], [1, "obs-text"], ["colspan", "8", 1, "empty-table"], ["type", "text", "placeholder", "Buscar por Raz\xF3n Social o RUC...", 1, "search-input", 3, "ngModelChange", "ngModel"], [1, "company-name"], [1, "ruc-tag"], [1, "btn-icon-btn", "edit", 3, "click"], [1, "btn-icon-btn", "delete", 3, "click"], [1, "section-subtitle", "margin-top"], [1, "table-responsive", "margin-top-sm"], [1, "rank-badge"], [1, "text-indigo"], ["colspan", "5", 1, "empty-table"], [1, "modal-backdrop", 3, "click"], [1, "modal-card", "glass-modal", 3, "click"], [1, "modal-header"], [1, "btn-close-modal", 3, "click"], [1, "modal-form", "margin-top", 3, "ngSubmit"], [1, "form-grid-2"], [1, "form-group", "span-2"], ["type", "text", "name", "nombre", "placeholder", "Ej. Zapatillas Nike Air Jordan Street", 1, "form-control", 3, "ngModelChange", "ngModel"], ["class", "field-error", 4, "ngIf"], ["type", "text", "name", "urlImagen", "placeholder", "Ej. https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "field-hint"], ["class", "image-preview-container margin-top-sm", 4, "ngIf"], [1, "form-group"], ["type", "text", "name", "marca", "placeholder", "Ej. Nike, Adidas, Joselito", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "material", "placeholder", "Ej. Cuero Vacuno, Malla", 1, "form-control", 3, "ngModelChange", "ngModel"], ["name", "genero", 1, "form-control", 3, "ngModelChange", "ngModel"], ["value", "Hombre"], ["value", "Mujer"], ["value", "Unisex"], ["name", "catId", 1, "form-control", 3, "ngModelChange", "ngModel"], [3, "value"], ["name", "descripcion", "rows", "3", "placeholder", "Detalla las caracter\xEDsticas t\xE9cnicas y beneficios del calzado...", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "modal-footer", "margin-top"], ["type", "button", 1, "btn-cancel", 3, "click"], ["type", "submit", 1, "btn-save"], [1, "field-error"], [1, "image-preview-container", "margin-top-sm"], [1, "preview-title"], [1, "preview-box"], ["alt", "Previsualizaci\xF3n", 3, "error", "src"], ["type", "text", "name", "razonSocial", "placeholder", "Ej. Distribuidora Calzados El Sol S.A.C.", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "ruc", "maxlength", "11", "placeholder", "Ej. 20512345678", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "telefono", "placeholder", "Ej. 987654321", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "email", "name", "correo", "placeholder", "Ej. ventas@calzadoselsol.pe", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "direccion", "placeholder", "Ej. Av. Argentina 1450, Cercado de Lima", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "nombre", "placeholder", "Ej. Juan P\xE9rez", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "email", "name", "email", "placeholder", "Ej. usuario@zapateriajoselito.com", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "password", "name", "password", 1, "form-control", 3, "ngModelChange", "ngModel", "placeholder"], ["name", "rol", 1, "form-control", 3, "ngModelChange", "ngModel"], ["name", "activo", 1, "form-control", 3, "ngModelChange", "ngModel"], [3, "ngValue"], [1, "modal-card", "glass-modal", "modal-lg", 3, "click"], [1, "modal-body", "margin-top"], [1, "section-sub"], [1, "new-variant-box", "margin-top"], [1, "form-grid-4", "margin-top-sm"], ["type", "text", "placeholder", "Ej. 42", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Ej. Negro", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "number", "placeholder", "Ej. 15", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "number", "placeholder", "Ej. 299.00", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "btn-primary-action", "margin-top-sm", 3, "click"], ["type", "number", 1, "form-control", "form-inline", 2, "width", "100px", 3, "ngModelChange", "ngModel"], ["type", "number", 1, "form-control", "form-inline", 2, "width", "90px", 3, "ngModelChange", "ngModel"], [1, "btn-emerald-action", "btn-sm", 3, "click"], ["colspan", "6", 1, "empty-table"], ["name", "idVariante", 1, "form-control", 3, "ngModelChange", "ngModel"], ["name", "tipoMovimiento", 1, "form-control", 3, "ngModelChange", "ngModel"], ["value", "ENTRADA_COMPRA"], ["value", "AJUSTE_ENTRADA"], ["value", "AJUSTE_SALIDA"], ["type", "number", "name", "cantidad", "min", "1", "placeholder", "Ej. 10", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "observacion", "placeholder", "Ej. Lote recibido de proveedor / Reposici\xF3n de almac\xE9n", 1, "form-control", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"]], template: function AdminDashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "div", 2)(3, "div", 3);
        \u0275\u0275element(4, "span", 4);
        \u0275\u0275elementStart(5, "span", 5);
        \u0275\u0275text(6, "\u{1F7E2} Base de Datos SQL Server Conectada & Operativa");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "h1", 6);
        \u0275\u0275text(8, "Panel de Administraci\xF3n General");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "p", 7);
        \u0275\u0275text(10, "Gesti\xF3n centralizada de cat\xE1logo, usuarios, inventarios, proveedores y finanzas");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 8)(12, "button", 9);
        \u0275\u0275listener("click", function AdminDashboardComponent_Template_button_click_12_listener() {
          return ctx.cargarTodo();
        });
        \u0275\u0275elementStart(13, "span", 10);
        \u0275\u0275text(14, "\u{1F504}");
        \u0275\u0275elementEnd();
        \u0275\u0275text(15, " Actualizar Datos ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "button", 11);
        \u0275\u0275listener("click", function AdminDashboardComponent_Template_button_click_16_listener() {
          return ctx.ejecutarBackup();
        });
        \u0275\u0275elementStart(17, "span", 10);
        \u0275\u0275text(18, "\u{1F4BE}");
        \u0275\u0275elementEnd();
        \u0275\u0275text(19);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(20, "div", 12)(21, "div", 13)(22, "div", 14)(23, "span", 15);
        \u0275\u0275text(24, "Ingresos Totales");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "div", 16);
        \u0275\u0275text(26, "\u{1F4B0}");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "div", 17);
        \u0275\u0275text(28);
        \u0275\u0275pipe(29, "number");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "div", 18)(31, "span", 19);
        \u0275\u0275text(32);
        \u0275\u0275pipe(33, "number");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(34, "div", 20)(35, "div", 14)(36, "span", 15);
        \u0275\u0275text(37, "Total Pedidos");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "div", 21);
        \u0275\u0275text(39, "\u{1F4E6}");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(40, "div", 22);
        \u0275\u0275text(41);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "div", 18)(43, "span", 23);
        \u0275\u0275text(44, "Ventas y Despachos Registrados");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(45, "div", 24)(46, "div", 14)(47, "span", 15);
        \u0275\u0275text(48, "Usuarios Registrados");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "div", 25);
        \u0275\u0275text(50, "\u{1F465}");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(51, "div", 26);
        \u0275\u0275text(52);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "div", 18)(54, "span", 27);
        \u0275\u0275text(55, "Clientes y Administradores");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(56, "div", 28)(57, "div", 14)(58, "span", 15);
        \u0275\u0275text(59, "Alertas Stock Bajo");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "div", 29);
        \u0275\u0275text(61, "\u26A0\uFE0F");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(62, "div", 30);
        \u0275\u0275text(63);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "div", 18)(65, "span", 31);
        \u0275\u0275text(66);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(67, "nav", 32)(68, "button", 33);
        \u0275\u0275listener("click", function AdminDashboardComponent_Template_button_click_68_listener() {
          return ctx.tabActiva = "pedidos";
        });
        \u0275\u0275elementStart(69, "span");
        \u0275\u0275text(70, "\u{1F4E6}");
        \u0275\u0275elementEnd();
        \u0275\u0275text(71, " Pedidos y Despachos ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(72, "button", 33);
        \u0275\u0275listener("click", function AdminDashboardComponent_Template_button_click_72_listener() {
          return ctx.tabActiva = "catalogo";
        });
        \u0275\u0275elementStart(73, "span");
        \u0275\u0275text(74, "\u{1F45F}");
        \u0275\u0275elementEnd();
        \u0275\u0275text(75, " Cat\xE1logo de Productos ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(76, "button", 33);
        \u0275\u0275listener("click", function AdminDashboardComponent_Template_button_click_76_listener() {
          return ctx.tabActiva = "usuarios";
        });
        \u0275\u0275elementStart(77, "span");
        \u0275\u0275text(78, "\u{1F465}");
        \u0275\u0275elementEnd();
        \u0275\u0275text(79, " Gesti\xF3n de Usuarios ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(80, "button", 33);
        \u0275\u0275listener("click", function AdminDashboardComponent_Template_button_click_80_listener() {
          return ctx.tabActiva = "inventario";
        });
        \u0275\u0275elementStart(81, "span");
        \u0275\u0275text(82, "\u26A0\uFE0F");
        \u0275\u0275elementEnd();
        \u0275\u0275text(83, " Inventario & Kardex ");
        \u0275\u0275template(84, AdminDashboardComponent_span_84_Template, 2, 1, "span", 34);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(85, "button", 33);
        \u0275\u0275listener("click", function AdminDashboardComponent_Template_button_click_85_listener() {
          return ctx.tabActiva = "proveedores";
        });
        \u0275\u0275elementStart(86, "span");
        \u0275\u0275text(87, "\u{1F3E2}");
        \u0275\u0275elementEnd();
        \u0275\u0275text(88, " Gesti\xF3n de Proveedores ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(89, "button", 33);
        \u0275\u0275listener("click", function AdminDashboardComponent_Template_button_click_89_listener() {
          return ctx.tabActiva = "reportes";
        });
        \u0275\u0275elementStart(90, "span");
        \u0275\u0275text(91, "\u{1F4CA}");
        \u0275\u0275elementEnd();
        \u0275\u0275text(92, " Reportes & Finanzas ");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(93, AdminDashboardComponent_div_93_Template, 43, 4, "div", 35)(94, AdminDashboardComponent_div_94_Template, 36, 3, "div", 35)(95, AdminDashboardComponent_div_95_Template, 32, 3, "div", 35)(96, AdminDashboardComponent_div_96_Template, 35, 4, "div", 35)(97, AdminDashboardComponent_div_97_Template, 32, 3, "div", 35)(98, AdminDashboardComponent_div_98_Template, 28, 2, "div", 35);
        \u0275\u0275elementEnd();
        \u0275\u0275template(99, AdminDashboardComponent_div_99_Template, 64, 23, "div", 36)(100, AdminDashboardComponent_div_100_Template, 38, 18, "div", 36)(101, AdminDashboardComponent_div_101_Template, 45, 19, "div", 36)(102, AdminDashboardComponent_div_102_Template, 61, 8, "div", 36)(103, AdminDashboardComponent_div_103_Template, 39, 6, "div", 36);
      }
      if (rf & 2) {
        \u0275\u0275advance(16);
        \u0275\u0275property("disabled", ctx.ejecutandoBackup);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.ejecutandoBackup ? "Generando Backup..." : "Generar Backup BD", " ");
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate1("S/ ", \u0275\u0275pipeBind2(29, 36, (ctx.resumen == null ? null : ctx.resumen.ingresosTotales) || 0, "1.2-2"), "");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1("\u25B2 Subtotal General: S/ ", \u0275\u0275pipeBind2(33, 39, (ctx.resumen == null ? null : ctx.resumen.subtotalGeneral) || 0, "1.2-2"), "");
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate((ctx.resumen == null ? null : ctx.resumen.totalVentas) || 0);
        \u0275\u0275advance(11);
        \u0275\u0275textInterpolate(ctx.usuarios.length);
        \u0275\u0275advance(4);
        \u0275\u0275classProp("stock-warning", ctx.alertasStock.length > 0);
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(ctx.alertasStock.length);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("text-rose-light", ctx.alertasStock.length > 0);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.alertasStock.length > 0 ? "Variantes \u2264 5 unidades requieren reposici\xF3n" : "Niveles \xF3ptimos de stock", " ");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.tabActiva === "pedidos");
        \u0275\u0275advance(4);
        \u0275\u0275classProp("active", ctx.tabActiva === "catalogo");
        \u0275\u0275advance(4);
        \u0275\u0275classProp("active", ctx.tabActiva === "usuarios");
        \u0275\u0275advance(4);
        \u0275\u0275classProp("active", ctx.tabActiva === "inventario");
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", ctx.alertasStock.length > 0);
        \u0275\u0275advance();
        \u0275\u0275classProp("active", ctx.tabActiva === "proveedores");
        \u0275\u0275advance(4);
        \u0275\u0275classProp("active", ctx.tabActiva === "reportes");
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", ctx.tabActiva === "pedidos");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.tabActiva === "catalogo");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.tabActiva === "usuarios");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.tabActiva === "inventario");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.tabActiva === "proveedores");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.tabActiva === "reportes");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.mostrarModalProd);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.mostrarModalProv);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.mostrarModalUser);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.mostrarModalStock && ctx.productoStockModal);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.mostrarModalMovStock);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, DecimalPipe, DatePipe, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, MinValidator, NgModel, NgForm], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  background-color: #0b0f19;\n  color: #f8fafc;\n  min-height: 100vh;\n  font-family:\n    "Outfit",\n    "Segoe UI",\n    system-ui,\n    sans-serif;\n}\n.admin-wrapper[_ngcontent-%COMP%] {\n  max-width: 1320px;\n  margin: 0 auto;\n  padding: 2rem 1.5rem 4rem 1.5rem;\n}\n.glass-card[_ngcontent-%COMP%] {\n  background: rgba(17, 24, 39, 0.75);\n  backdrop-filter: blur(16px);\n  -webkit-backdrop-filter: blur(16px);\n  border-radius: 1.25rem;\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);\n  padding: 1.75rem;\n  transition: all 0.3s ease;\n}\n.margin-top[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n}\n.margin-top-sm[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n.margin-bottom[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.dashboard-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 1.5rem;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(17, 24, 39, 0.9) 0%,\n      rgba(30, 41, 59, 0.8) 100%);\n  border: 1px solid rgba(99, 102, 241, 0.25);\n  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.6), 0 0 25px rgba(99, 102, 241, 0.1);\n}\n.status-indicator[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  background: rgba(16, 185, 129, 0.15);\n  border: 1px solid rgba(16, 185, 129, 0.3);\n  padding: 0.3rem 0.85rem;\n  border-radius: 2rem;\n  margin-bottom: 0.75rem;\n}\n.pulse-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  background-color: #10b981;\n  border-radius: 50%;\n  box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.8);\n  animation: _ngcontent-%COMP%_pulse 1.8s infinite;\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0% {\n    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.8);\n  }\n  70% {\n    box-shadow: 0 0 0 6px rgba(16, 185, 129, 0);\n  }\n  100% {\n    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0);\n  }\n}\n.status-text[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 700;\n  color: #34d399;\n}\n.glow-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.85rem;\n  font-weight: 800;\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff 0%,\n      #a5b4fc 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  letter-spacing: -0.02em;\n}\n.subtitle[_ngcontent-%COMP%] {\n  margin: 0.3rem 0 0 0;\n  color: #94a3b8;\n  font-size: 0.92rem;\n}\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.85rem;\n}\n.btn-secondary-action[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.08);\n  color: #f1f5f9;\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  padding: 0.7rem 1.25rem;\n  border-radius: 0.85rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.25s ease;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.btn-secondary-action[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.18);\n  border-color: rgba(255, 255, 255, 0.3);\n}\n.btn-backup-action[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1 0%,\n      #4f46e5 100%);\n  color: white;\n  border: none;\n  padding: 0.7rem 1.35rem;\n  border-radius: 0.85rem;\n  font-weight: 800;\n  cursor: pointer;\n  box-shadow: 0 6px 20px rgba(99, 102, 241, 0.35);\n  transition: all 0.25s ease;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.btn-backup-action[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 10px 25px rgba(99, 102, 241, 0.5);\n}\n.kpi-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));\n  gap: 1.25rem;\n}\n.kpi-card[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  position: relative;\n  overflow: hidden;\n}\n.kpi-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n}\n.kpi-emerald[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(16, 185, 129, 0.12) 0%,\n      rgba(17, 24, 39, 0.8) 100%);\n  border-color: rgba(16, 185, 129, 0.3);\n}\n.kpi-indigo[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(99, 102, 241, 0.12) 0%,\n      rgba(17, 24, 39, 0.8) 100%);\n  border-color: rgba(99, 102, 241, 0.3);\n}\n.kpi-purple[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(168, 85, 247, 0.12) 0%,\n      rgba(17, 24, 39, 0.8) 100%);\n  border-color: rgba(168, 85, 247, 0.3);\n}\n.kpi-rose[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(244, 63, 94, 0.12) 0%,\n      rgba(17, 24, 39, 0.8) 100%);\n  border-color: rgba(244, 63, 94, 0.3);\n}\n.kpi-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.kpi-label[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 800;\n  color: #94a3b8;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n}\n.kpi-icon[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: 0.85rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.3rem;\n}\n.kpi-icon.emerald[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.2);\n}\n.kpi-icon.indigo[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.2);\n}\n.kpi-icon.purple[_ngcontent-%COMP%] {\n  background: rgba(168, 85, 247, 0.2);\n}\n.kpi-icon.rose[_ngcontent-%COMP%] {\n  background: rgba(244, 63, 94, 0.2);\n}\n.kpi-value[_ngcontent-%COMP%] {\n  font-size: 2.1rem;\n  font-weight: 900;\n  margin: 0.6rem 0;\n  letter-spacing: -0.03em;\n}\n.badge-sub[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 600;\n}\n.text-emerald[_ngcontent-%COMP%] {\n  color: #34d399;\n}\n.text-emerald-light[_ngcontent-%COMP%] {\n  color: #6ee7b7;\n}\n.text-indigo[_ngcontent-%COMP%] {\n  color: #818cf8;\n}\n.text-indigo-light[_ngcontent-%COMP%] {\n  color: #a5b4fc;\n}\n.text-purple[_ngcontent-%COMP%] {\n  color: #c084fc;\n}\n.text-purple-light[_ngcontent-%COMP%] {\n  color: #e9d5ff;\n}\n.text-rose[_ngcontent-%COMP%] {\n  color: #fb7185;\n}\n.text-rose-light[_ngcontent-%COMP%] {\n  color: #fca5a5;\n}\n.text-bright[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n.admin-nav-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.6rem;\n  overflow-x: auto;\n  padding: 0.4rem;\n  background: rgba(15, 23, 42, 0.8);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 1rem;\n}\n.admin-nav-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  padding: 0.75rem 1.25rem;\n  border-radius: 0.75rem;\n  font-weight: 700;\n  font-size: 0.88rem;\n  color: #94a3b8;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: all 0.25s ease;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.admin-nav-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.06);\n  color: #f8fafc;\n}\n.admin-nav-tabs[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1 0%,\n      #4f46e5 100%);\n  color: white;\n  box-shadow: 0 4px 15px rgba(99, 102, 241, 0.4);\n}\n.tab-badge[_ngcontent-%COMP%] {\n  background: #ef4444;\n  color: white;\n  font-size: 0.7rem;\n  padding: 0.15rem 0.5rem;\n  border-radius: 1rem;\n  font-weight: 900;\n}\n.tab-pane[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #ffffff;\n  letter-spacing: -0.01em;\n}\n.pane-subtitle[_ngcontent-%COMP%] {\n  margin: 0.3rem 0 0 0;\n  font-size: 0.88rem;\n  color: #94a3b8;\n}\n.pane-header-bar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 1rem;\n}\n.actions-group[_ngcontent-%COMP%], .search-filter-box[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.search-input[_ngcontent-%COMP%] {\n  padding: 0.7rem 1.1rem;\n  border-radius: 0.75rem;\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  background: rgba(31, 41, 55, 0.8);\n  color: #f8fafc;\n  font-size: 0.88rem;\n  min-width: 280px;\n  outline: none;\n  transition: all 0.2s;\n}\n.search-input[_ngcontent-%COMP%]:focus {\n  border-color: #6366f1;\n  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.25);\n}\n.filter-select[_ngcontent-%COMP%], .action-select[_ngcontent-%COMP%] {\n  padding: 0.65rem 1rem;\n  border-radius: 0.75rem;\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  background: #1f2937;\n  color: #f8fafc;\n  font-size: 0.85rem;\n  font-weight: 600;\n  outline: none;\n  cursor: pointer;\n}\n.action-select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  background: #111827;\n  color: #f8fafc;\n}\n.role-select.admin-role[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.2);\n  border-color: rgba(245, 158, 11, 0.4);\n  color: #fbbf24;\n  font-weight: 800;\n}\n.btn-primary-action[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1 0%,\n      #4f46e5 100%);\n  color: white;\n  border: none;\n  padding: 0.7rem 1.3rem;\n  border-radius: 0.75rem;\n  font-weight: 800;\n  font-size: 0.88rem;\n  cursor: pointer;\n  box-shadow: 0 4px 14px rgba(99, 102, 241, 0.35);\n  transition: all 0.25s ease;\n}\n.btn-primary-action[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 6px 18px rgba(99, 102, 241, 0.5);\n}\n.btn-emerald-action[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #10b981 0%,\n      #059669 100%);\n  color: white;\n  border: none;\n  padding: 0.7rem 1.3rem;\n  border-radius: 0.75rem;\n  font-weight: 800;\n  font-size: 0.88rem;\n  cursor: pointer;\n  box-shadow: 0 4px 14px rgba(16, 185, 129, 0.35);\n  transition: all 0.25s ease;\n}\n.btn-emerald-action[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 6px 18px rgba(16, 185, 129, 0.5);\n}\n.table-responsive[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  border-radius: 0.85rem;\n  border: 1px solid rgba(255, 255, 255, 0.08);\n}\n.modern-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  text-align: left;\n  font-size: 0.88rem;\n}\n.modern-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: rgba(30, 41, 59, 0.8);\n  padding: 0.95rem 1.1rem;\n  border-bottom: 2px solid rgba(255, 255, 255, 0.08);\n  color: #94a3b8;\n  font-weight: 800;\n  font-size: 0.78rem;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.modern-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 1rem 1.1rem;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.06);\n  color: #cbd5e1;\n  vertical-align: middle;\n}\n.modern-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: background 0.2s ease;\n}\n.modern-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: rgba(99, 102, 241, 0.08);\n}\n.img-thumb-wrapper[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  border-radius: 0.75rem;\n  overflow: hidden;\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  background: #1f2937;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.product-thumb[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.3s;\n}\n.img-thumb-wrapper[_ngcontent-%COMP%]:hover   .product-thumb[_ngcontent-%COMP%] {\n  transform: scale(1.15);\n}\n.order-code[_ngcontent-%COMP%], .id-tag[_ngcontent-%COMP%], .kardex-code[_ngcontent-%COMP%] {\n  font-weight: 800;\n  color: #818cf8;\n  font-family: monospace;\n  font-size: 0.9rem;\n}\n.user-name-text[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-size: 0.92rem;\n}\n.product-title-text[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-size: 0.95rem;\n}\n.email-text[_ngcontent-%COMP%] {\n  font-family: monospace;\n  color: #94a3b8;\n  font-size: 0.85rem;\n}\n.date-text[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: #94a3b8;\n}\n.table-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.45rem;\n}\n.btn-icon-btn[_ngcontent-%COMP%] {\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  background: rgba(31, 41, 55, 0.8);\n  color: #f8fafc;\n  padding: 0.4rem 0.75rem;\n  border-radius: 0.6rem;\n  font-size: 0.78rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn-icon-btn.edit[_ngcontent-%COMP%]:hover {\n  background: rgba(99, 102, 241, 0.25);\n  color: #a5b4fc;\n  border-color: rgba(99, 102, 241, 0.4);\n}\n.btn-icon-btn.delete[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.25);\n  color: #fca5a5;\n  border-color: rgba(239, 68, 68, 0.4);\n}\n.btn-icon-btn.stock[_ngcontent-%COMP%]:hover {\n  background: rgba(16, 185, 129, 0.25);\n  color: #6ee7b7;\n  border-color: rgba(16, 185, 129, 0.4);\n}\n.glass-modal.modal-lg[_ngcontent-%COMP%] {\n  max-width: 840px;\n}\n.form-grid-4[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 0.75rem;\n}\n.btn-sm[_ngcontent-%COMP%] {\n  padding: 0.35rem 0.75rem;\n  font-size: 0.78rem;\n  border-radius: 0.5rem;\n}\n.section-sub[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 800;\n  color: #ffffff;\n  margin-bottom: 0.5rem;\n}\n.new-variant-box[_ngcontent-%COMP%] {\n  background: rgba(31, 41, 55, 0.5);\n  border: 1px dashed rgba(255, 255, 255, 0.15);\n  padding: 1.25rem;\n  border-radius: 0.85rem;\n}\n.status-pill[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.3rem 0.75rem;\n  border-radius: 1rem;\n  font-size: 0.72rem;\n  font-weight: 800;\n  text-transform: uppercase;\n}\n.status-pill.pendiente[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.2);\n  color: #fbbf24;\n  border: 1px solid rgba(245, 158, 11, 0.3);\n}\n.status-pill.en_preparacion[_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, 0.2);\n  color: #60a5fa;\n  border: 1px solid rgba(59, 130, 246, 0.3);\n}\n.status-pill.enviado[_ngcontent-%COMP%] {\n  background: rgba(168, 85, 247, 0.2);\n  color: #c084fc;\n  border: 1px solid rgba(168, 85, 247, 0.3);\n}\n.status-pill.entregado[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.2);\n  color: #34d399;\n  border: 1px solid rgba(16, 185, 129, 0.3);\n}\n.status-pill.cancelado[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.2);\n  color: #f87171;\n  border: 1px solid rgba(239, 68, 68, 0.3);\n}\n.status-pill.active[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.2);\n  color: #34d399;\n  border: 1px solid rgba(16, 185, 129, 0.3);\n}\n.status-pill.inactive[_ngcontent-%COMP%] {\n  background: rgba(100, 116, 139, 0.2);\n  color: #94a3b8;\n  border: 1px solid rgba(100, 116, 139, 0.3);\n}\n.brand-chip[_ngcontent-%COMP%], .category-chip[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.08);\n  color: #e2e8f0;\n  font-size: 0.78rem;\n  font-weight: 700;\n  padding: 0.25rem 0.6rem;\n  border-radius: 0.5rem;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n}\n.ruc-tag[_ngcontent-%COMP%] {\n  font-family: monospace;\n  font-weight: 700;\n  color: #38bdf8;\n}\n.kardex-type-pill[_ngcontent-%COMP%] {\n  padding: 0.3rem 0.7rem;\n  border-radius: 0.5rem;\n  font-size: 0.75rem;\n  font-weight: 800;\n  background: rgba(59, 130, 246, 0.2);\n  color: #60a5fa;\n  border: 1px solid rgba(59, 130, 246, 0.3);\n}\n.kardex-type-pill.salida[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.2);\n  color: #f87171;\n  border: 1px solid rgba(239, 68, 68, 0.3);\n}\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background: rgba(0, 0, 0, 0.75);\n  -webkit-backdrop-filter: blur(12px);\n  backdrop-filter: blur(12px);\n  z-index: 9999;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 1.5rem;\n}\n.glass-modal[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 650px;\n  max-height: 90vh;\n  overflow-y: auto;\n  background: #111827;\n  border-radius: 1.5rem;\n  padding: 2rem;\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.8);\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n  padding-bottom: 1rem;\n}\n.modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.3rem;\n  font-weight: 800;\n  color: #ffffff;\n}\n.btn-close-modal[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  font-size: 1.3rem;\n  cursor: pointer;\n  color: #94a3b8;\n  transition: color 0.2s;\n}\n.btn-close-modal[_ngcontent-%COMP%]:hover {\n  color: #ffffff;\n}\n.form-grid-2[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 1rem;\n}\n.span-2[_ngcontent-%COMP%] {\n  grid-column: span 2;\n}\nlabel[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.82rem;\n  font-weight: 700;\n  color: #cbd5e1;\n  margin-bottom: 0.4rem;\n}\n.field-hint[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #94a3b8;\n  margin-top: 0.25rem;\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.7rem 0.9rem;\n  border-radius: 0.75rem;\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  background: #1f2937;\n  color: #ffffff;\n  font-size: 0.9rem;\n  outline: none;\n  transition: all 0.2s;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  border-color: #6366f1;\n  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.25);\n}\n.form-control.invalid[_ngcontent-%COMP%] {\n  border-color: #ef4444;\n  background: rgba(239, 68, 68, 0.1);\n}\n.field-error[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #f87171;\n  font-weight: 600;\n  margin-top: 0.25rem;\n  display: block;\n}\n.image-preview-container[_ngcontent-%COMP%] {\n  background: rgba(31, 41, 55, 0.6);\n  border: 1px dashed rgba(255, 255, 255, 0.2);\n  padding: 1rem;\n  border-radius: 0.85rem;\n}\n.preview-title[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 700;\n  color: #94a3b8;\n  display: block;\n  margin-bottom: 0.5rem;\n}\n.preview-box[_ngcontent-%COMP%] {\n  width: 100%;\n  max-height: 170px;\n  overflow: hidden;\n  border-radius: 0.6rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #0b0f19;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n}\n.preview-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 170px;\n  width: auto;\n  object-fit: contain;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.75rem;\n  border-top: 1px solid rgba(255, 255, 255, 0.1);\n  padding-top: 1.25rem;\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.08);\n  color: #cbd5e1;\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  padding: 0.7rem 1.3rem;\n  border-radius: 0.75rem;\n  font-weight: 700;\n  cursor: pointer;\n}\n.btn-save[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #10b981 0%,\n      #059669 100%);\n  color: white;\n  border: none;\n  padding: 0.7rem 1.6rem;\n  border-radius: 0.75rem;\n  font-weight: 800;\n  cursor: pointer;\n  box-shadow: 0 4px 14px rgba(16, 185, 129, 0.4);\n}\n.empty-table[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 2.5rem;\n  color: #94a3b8;\n  font-weight: 600;\n}\n.alert-banner[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  padding: 1.25rem;\n  border-radius: 1rem;\n  background: rgba(239, 68, 68, 0.12);\n  border: 1px solid rgba(239, 68, 68, 0.3);\n  color: #fca5a5;\n}\n.alert-banner.danger[_ngcontent-%COMP%]   .banner-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.alert-banner[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 0.25rem 0;\n  font-size: 1.05rem;\n  color: #f87171;\n  font-weight: 800;\n}\n.alert-banner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.85rem;\n  color: #fca5a5;\n}\n.alert-chips-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.6rem;\n}\n.stock-chip[_ngcontent-%COMP%] {\n  background: rgba(17, 24, 39, 0.9);\n  border: 1px solid rgba(239, 68, 68, 0.4);\n  padding: 0.4rem 0.8rem;\n  border-radius: 0.6rem;\n  font-size: 0.78rem;\n  display: flex;\n  flex-direction: column;\n}\n.chip-title[_ngcontent-%COMP%] {\n  font-weight: 800;\n  color: #ffffff;\n}\n.chip-meta[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  font-size: 0.72rem;\n}\n.chip-qty[_ngcontent-%COMP%] {\n  color: #f87171;\n  font-weight: 800;\n}\n.rank-badge[_ngcontent-%COMP%] {\n  background: #6366f1;\n  color: white;\n  font-weight: 900;\n  padding: 0.2rem 0.55rem;\n  border-radius: 0.5rem;\n  font-size: 0.8rem;\n}\n/*# sourceMappingURL=admin-dashboard.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminDashboardComponent, { className: "AdminDashboardComponent", filePath: "src\\app\\features\\admin\\admin-dashboard.component.ts", lineNumber: 1187 });
})();
export {
  AdminDashboardComponent
};
//# sourceMappingURL=chunk-TUXNYCV5.js.map
