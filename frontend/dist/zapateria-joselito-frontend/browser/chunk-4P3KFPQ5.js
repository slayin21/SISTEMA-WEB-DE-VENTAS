import {
  AuthService
} from "./chunk-BODVM5WY.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  RequiredValidator,
  ɵNgNoValidate
} from "./chunk-J5QRST4F.js";
import {
  CommonModule,
  HttpClient,
  NgForOf,
  NgIf,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-EH6AJVCA.js";

// src/app/core/services/direccion.service.ts
var DireccionService = class _DireccionService {
  constructor(http) {
    this.http = http;
    this.apiUrl = "http://localhost:8080/api/v1/direcciones";
  }
  listarPorUsuario(idUsuario) {
    return this.http.get(`${this.apiUrl}/usuario/${idUsuario}`);
  }
  crear(idUsuario, direccion) {
    return this.http.post(`${this.apiUrl}/usuario/${idUsuario}`, direccion);
  }
  actualizar(idDireccion, direccion) {
    return this.http.put(`${this.apiUrl}/${idDireccion}`, direccion);
  }
  eliminar(idDireccion) {
    return this.http.delete(`${this.apiUrl}/${idDireccion}`);
  }
  static {
    this.\u0275fac = function DireccionService_Factory(t) {
      return new (t || _DireccionService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DireccionService, factory: _DireccionService.\u0275fac, providedIn: "root" });
  }
};

// src/app/features/profile/perfil.component.ts
function PerfilComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "h4");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "form", 14);
    \u0275\u0275listener("ngSubmit", function PerfilComponent_div_17_Template_form_ngSubmit_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.guardarDireccion());
    });
    \u0275\u0275elementStart(4, "div", 15)(5, "div", 16)(6, "label");
    \u0275\u0275text(7, "Direcci\xF3n / Calle / Av.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 17);
    \u0275\u0275twoWayListener("ngModelChange", function PerfilComponent_div_17_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.nuevaDireccion.direccion, $event) || (ctx_r1.nuevaDireccion.direccion = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 18)(10, "label");
    \u0275\u0275text(11, "Distrito");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 19);
    \u0275\u0275twoWayListener("ngModelChange", function PerfilComponent_div_17_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.nuevaDireccion.distrito, $event) || (ctx_r1.nuevaDireccion.distrito = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 18)(14, "label");
    \u0275\u0275text(15, "Provincia");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "input", 20);
    \u0275\u0275twoWayListener("ngModelChange", function PerfilComponent_div_17_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.nuevaDireccion.provincia, $event) || (ctx_r1.nuevaDireccion.provincia = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 18)(18, "label");
    \u0275\u0275text(19, "Departamento");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "input", 21);
    \u0275\u0275twoWayListener("ngModelChange", function PerfilComponent_div_17_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.nuevaDireccion.departamento, $event) || (ctx_r1.nuevaDireccion.departamento = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 16)(22, "label");
    \u0275\u0275text(23, "Referencia");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "input", 22);
    \u0275\u0275twoWayListener("ngModelChange", function PerfilComponent_div_17_Template_input_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.nuevaDireccion.referencia, $event) || (ctx_r1.nuevaDireccion.referencia = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 23)(26, "label")(27, "input", 24);
    \u0275\u0275twoWayListener("ngModelChange", function PerfilComponent_div_17_Template_input_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.nuevaDireccion.principal, $event) || (ctx_r1.nuevaDireccion.principal = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(28, " Marcar como direcci\xF3n principal de env\xEDo ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "button", 25);
    \u0275\u0275text(30, "Guardar Direcci\xF3n");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.editandoId ? "Editar Direcci\xF3n" : "Nueva Direcci\xF3n de Entrega");
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.nuevaDireccion.direccion);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.nuevaDireccion.distrito);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.nuevaDireccion.provincia);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.nuevaDireccion.departamento);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.nuevaDireccion.referencia);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.nuevaDireccion.principal);
  }
}
function PerfilComponent_div_19_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
    \u0275\u0275text(1, "Principal");
    \u0275\u0275elementEnd();
  }
}
function PerfilComponent_div_19_p_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 36)(1, "b");
    \u0275\u0275text(2, "Ref:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dir_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", dir_r4.referencia, "");
  }
}
function PerfilComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 27)(2, "span", 28);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, PerfilComponent_div_19_span_4_Template, 2, 0, "span", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 30);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, PerfilComponent_div_19_p_7_Template, 4, 1, "p", 31);
    \u0275\u0275elementStart(8, "div", 32)(9, "button", 33);
    \u0275\u0275listener("click", function PerfilComponent_div_19_Template_button_click_9_listener() {
      const dir_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editarDireccion(dir_r4));
    });
    \u0275\u0275text(10, "Editar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 34);
    \u0275\u0275listener("click", function PerfilComponent_div_19_Template_button_click_11_listener() {
      const dir_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.eliminarDireccion(dir_r4.idDireccion));
    });
    \u0275\u0275text(12, "Eliminar");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const dir_r4 = ctx.$implicit;
    \u0275\u0275classProp("is-principal", dir_r4.principal);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(dir_r4.direccion);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", dir_r4.principal);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3("", dir_r4.distrito, ", ", dir_r4.provincia, " - ", dir_r4.departamento, "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", dir_r4.referencia);
  }
}
function PerfilComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275text(1, " No tienes direcciones registradas. Agrega una para facilitar tu proceso de compra. ");
    \u0275\u0275elementEnd();
  }
}
var PerfilComponent = class _PerfilComponent {
  constructor(authService, direccionService) {
    this.authService = authService;
    this.direccionService = direccionService;
    this.user = null;
    this.direcciones = [];
    this.mostrarForm = false;
    this.editandoId = null;
    this.nuevaDireccion = {
      direccion: "",
      distrito: "",
      provincia: "",
      departamento: "",
      referencia: "",
      principal: false
    };
  }
  ngOnInit() {
    this.user = this.authService.getCurrentUser();
    if (this.user) {
      this.cargarDirecciones();
    }
  }
  cargarDirecciones() {
    if (!this.user)
      return;
    this.direccionService.listarPorUsuario(this.user.idUsuario).subscribe((data) => {
      this.direcciones = data;
    });
  }
  toggleNuevaDireccionForm() {
    this.mostrarForm = !this.mostrarForm;
    this.editandoId = null;
    this.resetForm();
  }
  guardarDireccion() {
    if (!this.user)
      return;
    if (this.editandoId) {
      this.direccionService.actualizar(this.editandoId, this.nuevaDireccion).subscribe(() => {
        this.cargarDirecciones();
        this.toggleNuevaDireccionForm();
      });
    } else {
      this.direccionService.crear(this.user.idUsuario, this.nuevaDireccion).subscribe(() => {
        this.cargarDirecciones();
        this.toggleNuevaDireccionForm();
      });
    }
  }
  editarDireccion(dir) {
    this.editandoId = dir.idDireccion;
    this.nuevaDireccion = {
      direccion: dir.direccion,
      distrito: dir.distrito,
      provincia: dir.provincia,
      departamento: dir.departamento,
      referencia: dir.referencia || "",
      principal: dir.principal || false
    };
    this.mostrarForm = true;
  }
  eliminarDireccion(id) {
    if (!id)
      return;
    if (confirm("\xBFDesea eliminar esta direcci\xF3n?")) {
      this.direccionService.eliminar(id).subscribe(() => {
        this.cargarDirecciones();
      });
    }
  }
  resetForm() {
    this.nuevaDireccion = {
      direccion: "",
      distrito: "",
      provincia: "",
      departamento: "",
      referencia: "",
      principal: false
    };
  }
  static {
    this.\u0275fac = function PerfilComponent_Factory(t) {
      return new (t || _PerfilComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(DireccionService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PerfilComponent, selectors: [["app-perfil"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 21, vars: 10, consts: [[1, "profile-container"], [1, "profile-header", "glass-panel"], [1, "user-avatar"], [1, "user-info"], [1, "user-email"], [1, "badge"], [1, "section-card", "glass-panel", "margin-top"], [1, "section-header"], [1, "btn-add", 3, "click"], ["class", "direccion-form-card", 4, "ngIf"], [1, "direcciones-grid"], ["class", "direccion-card", 3, "is-principal", 4, "ngFor", "ngForOf"], ["class", "empty-state", 4, "ngIf"], [1, "direccion-form-card"], [3, "ngSubmit"], [1, "form-grid"], [1, "form-group", "span-2"], ["type", "text", "name", "direccion", "required", "", "placeholder", "Av. Larco 123, Dpto 401", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-group"], ["type", "text", "name", "distrito", "required", "", "placeholder", "Miraflores", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "provincia", "required", "", "placeholder", "Lima", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "departamento", "required", "", "placeholder", "Lima", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "referencia", "placeholder", "Frente al parque central", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-group", "span-2", "checkbox-group"], ["type", "checkbox", "name", "principal", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "btn-submit"], [1, "direccion-card"], [1, "dir-header"], [1, "dir-title"], ["class", "badge-principal", 4, "ngIf"], [1, "dir-body"], ["class", "dir-ref", 4, "ngIf"], [1, "dir-actions"], [1, "btn-action", "edit", 3, "click"], [1, "btn-action", "delete", 3, "click"], [1, "badge-principal"], [1, "dir-ref"], [1, "empty-state"]], template: function PerfilComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
        \u0275\u0275text(3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 3)(5, "h2");
        \u0275\u0275text(6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "p", 4);
        \u0275\u0275text(8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "span", 5);
        \u0275\u0275text(10);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(11, "div", 6)(12, "div", 7)(13, "h3");
        \u0275\u0275text(14, "Mis Direcciones de Env\xEDo");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "button", 8);
        \u0275\u0275listener("click", function PerfilComponent_Template_button_click_15_listener() {
          return ctx.toggleNuevaDireccionForm();
        });
        \u0275\u0275text(16);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(17, PerfilComponent_div_17_Template, 31, 7, "div", 9);
        \u0275\u0275elementStart(18, "div", 10);
        \u0275\u0275template(19, PerfilComponent_div_19_Template, 13, 8, "div", 11)(20, PerfilComponent_div_20_Template, 2, 0, "div", 12);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate((ctx.user == null ? null : ctx.user.nombre == null ? null : ctx.user.nombre.charAt(0)) || "U");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.user == null ? null : ctx.user.nombre);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.user == null ? null : ctx.user.email);
        \u0275\u0275advance();
        \u0275\u0275classProp("admin", (ctx.user == null ? null : ctx.user.rol) === "ADMIN");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx.user == null ? null : ctx.user.rol);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", ctx.mostrarForm ? "Cancelar" : "+ Agregar Nueva Direcci\xF3n", " ");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.mostrarForm);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.direcciones);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.direcciones.length === 0 && !ctx.mostrarForm);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm], styles: ["\n\n.profile-container[_ngcontent-%COMP%] {\n  max-width: 900px;\n  margin: 2rem auto;\n  padding: 0 1rem;\n}\n.glass-panel[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.85);\n  -webkit-backdrop-filter: blur(16px);\n  backdrop-filter: blur(16px);\n  border-radius: 1.25rem;\n  padding: 2rem;\n  border: 1px solid rgba(255, 255, 255, 0.5);\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);\n}\n.margin-top[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n.profile-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n}\n.user-avatar[_ngcontent-%COMP%] {\n  width: 70px;\n  height: 70px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #4f46e5,\n      #3b82f6);\n  color: white;\n  font-size: 2rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.user-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.5rem;\n  color: #1f2937;\n}\n.user-email[_ngcontent-%COMP%] {\n  color: #6b7280;\n  margin: 0.2rem 0 0.5rem 0;\n}\n.badge[_ngcontent-%COMP%] {\n  padding: 0.2rem 0.6rem;\n  border-radius: 0.5rem;\n  background: #e0e7ff;\n  color: #4338ca;\n  font-size: 0.75rem;\n  font-weight: 700;\n}\n.badge.admin[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #b45309;\n}\n.section-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1.5rem;\n}\n.section-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.3rem;\n  color: #1f2937;\n}\n.btn-add[_ngcontent-%COMP%] {\n  background: #4f46e5;\n  color: white;\n  border: none;\n  padding: 0.6rem 1.2rem;\n  border-radius: 0.75rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn-add[_ngcontent-%COMP%]:hover {\n  background: #4338ca;\n}\n.direccion-form-card[_ngcontent-%COMP%] {\n  background: #f9fafb;\n  border: 1px solid #e5e7eb;\n  border-radius: 1rem;\n  padding: 1.5rem;\n  margin-bottom: 1.5rem;\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 1rem;\n}\n.span-2[_ngcontent-%COMP%] {\n  grid-column: span 2;\n}\nlabel[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 600;\n  font-size: 0.85rem;\n  color: #374151;\n  margin-bottom: 0.3rem;\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.7rem 0.9rem;\n  border-radius: 0.6rem;\n  border: 1px solid #d1d5db;\n}\n.btn-submit[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  background: #10b981;\n  color: white;\n  border: none;\n  padding: 0.7rem 1.5rem;\n  border-radius: 0.6rem;\n  font-weight: 600;\n  cursor: pointer;\n}\n.direcciones-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));\n  gap: 1rem;\n}\n.direccion-card[_ngcontent-%COMP%] {\n  border: 1px solid #e5e7eb;\n  border-radius: 1rem;\n  padding: 1.2rem;\n  background: white;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  transition: all 0.2s;\n}\n.direccion-card.is-principal[_ngcontent-%COMP%] {\n  border-color: #4f46e5;\n  background: #f5f3ff;\n}\n.dir-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 0.5rem;\n}\n.dir-title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #1f2937;\n  font-size: 0.95rem;\n}\n.badge-principal[_ngcontent-%COMP%] {\n  background: #4f46e5;\n  color: white;\n  font-size: 0.65rem;\n  padding: 0.15rem 0.4rem;\n  border-radius: 0.3rem;\n  font-weight: 700;\n}\n.dir-body[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #4b5563;\n  margin: 0.2rem 0;\n}\n.dir-ref[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #6b7280;\n}\n.dir-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  margin-top: 1rem;\n}\n.btn-action[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  padding: 0.4rem;\n  border-radius: 0.5rem;\n  font-size: 0.8rem;\n  font-weight: 600;\n  cursor: pointer;\n}\n.btn-action.edit[_ngcontent-%COMP%] {\n  background: #e0e7ff;\n  color: #4338ca;\n}\n.btn-action.delete[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #6b7280;\n  padding: 2rem;\n  grid-column: span 2;\n}\n/*# sourceMappingURL=perfil.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PerfilComponent, { className: "PerfilComponent", filePath: "src\\app\\features\\profile\\perfil.component.ts", lineNumber: 144 });
})();
export {
  PerfilComponent
};
//# sourceMappingURL=chunk-4P3KFPQ5.js.map
