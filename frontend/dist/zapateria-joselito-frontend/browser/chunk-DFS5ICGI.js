import {
  AuthService
} from "./chunk-BODVM5WY.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MinLengthValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  RequiredValidator,
  ɵNgNoValidate
} from "./chunk-J5QRST4F.js";
import {
  Router,
  RouterLink
} from "./chunk-M3LPOL3F.js";
import {
  CommonModule,
  NgIf,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-EH6AJVCA.js";

// src/app/features/auth/register.component.ts
function RegisterComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.errorMsg, " ");
  }
}
var RegisterComponent = class _RegisterComponent {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
    this.nombre = "";
    this.email = "";
    this.password = "";
    this.loading = false;
    this.errorMsg = "";
  }
  onSubmit() {
    this.loading = true;
    this.errorMsg = "";
    this.authService.register({
      nombre: this.nombre,
      email: this.email,
      password: this.password,
      rol: "CLIENTE"
    }).subscribe({
      next: () => {
        this.loading = false;
        this.router.navigate(["/catalog"]);
      },
      error: (err) => {
        this.loading = false;
        this.errorMsg = err.error?.message || "Error al registrar la cuenta.";
      }
    });
  }
  static {
    this.\u0275fac = function RegisterComponent_Factory(t) {
      return new (t || _RegisterComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegisterComponent, selectors: [["app-register"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 27, vars: 6, consts: [["registerForm", "ngForm"], [1, "auth-container"], [1, "auth-card", "glass-panel"], [1, "subtitle"], ["class", "alert-banner danger", 4, "ngIf"], [3, "ngSubmit"], [1, "form-group"], ["type", "text", "name", "nombre", "required", "", "placeholder", "Juan P\xE9rez", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "email", "name", "email", "required", "", "placeholder", "correo@ejemplo.com", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "password", "name", "password", "required", "", "minlength", "6", "placeholder", "M\xEDnimo 6 caracteres", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "btn-primary", 3, "disabled"], [1, "footer-note"], ["routerLink", "/auth/login", 1, "link-bold"], [1, "alert-banner", "danger"]], template: function RegisterComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "h2");
        \u0275\u0275text(3, "Crear Cuenta");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 3);
        \u0275\u0275text(5, "\xDAnete a Zapater\xEDa Joselito");
        \u0275\u0275elementEnd();
        \u0275\u0275template(6, RegisterComponent_div_6_Template, 2, 1, "div", 4);
        \u0275\u0275elementStart(7, "form", 5, 0);
        \u0275\u0275listener("ngSubmit", function RegisterComponent_Template_form_ngSubmit_7_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onSubmit());
        });
        \u0275\u0275elementStart(9, "div", 6)(10, "label");
        \u0275\u0275text(11, "Nombre Completo");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "input", 7);
        \u0275\u0275twoWayListener("ngModelChange", function RegisterComponent_Template_input_ngModelChange_12_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.nombre, $event) || (ctx.nombre = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "div", 6)(14, "label");
        \u0275\u0275text(15, "Correo Electr\xF3nico");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "input", 8);
        \u0275\u0275twoWayListener("ngModelChange", function RegisterComponent_Template_input_ngModelChange_16_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.email, $event) || (ctx.email = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "div", 6)(18, "label");
        \u0275\u0275text(19, "Contrase\xF1a");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "input", 9);
        \u0275\u0275twoWayListener("ngModelChange", function RegisterComponent_Template_input_ngModelChange_20_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.password, $event) || (ctx.password = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "button", 10);
        \u0275\u0275text(22);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "div", 11);
        \u0275\u0275text(24, " \xBFYa tienes una cuenta? ");
        \u0275\u0275elementStart(25, "a", 12);
        \u0275\u0275text(26, "Inicia Sesi\xF3n");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        const registerForm_r3 = \u0275\u0275reference(8);
        \u0275\u0275advance(6);
        \u0275\u0275property("ngIf", ctx.errorMsg);
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.nombre);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.email);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.password);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.loading || !registerForm_r3.valid);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.loading ? "Registrando..." : "Registrarse", " ");
      }
    }, dependencies: [CommonModule, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, NgModel, NgForm, RouterLink], styles: ["\n\n.auth-container[_ngcontent-%COMP%] {\n  min-height: 80vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem;\n}\n.auth-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 440px;\n  padding: 2.5rem;\n  border-radius: 1.5rem;\n  background: rgba(255, 255, 255, 0.85);\n  -webkit-backdrop-filter: blur(16px);\n  backdrop-filter: blur(16px);\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);\n  border: 1px solid rgba(255, 255, 255, 0.5);\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  font-weight: 700;\n  color: #1f2937;\n  text-align: center;\n  margin-bottom: 0.2rem;\n}\n.subtitle[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #6b7280;\n  margin-bottom: 1.5rem;\n  font-size: 0.95rem;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 1.2rem;\n}\nlabel[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 600;\n  margin-bottom: 0.4rem;\n  color: #374151;\n  font-size: 0.9rem;\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.8rem 1rem;\n  border-radius: 0.75rem;\n  border: 1px solid #d1d5db;\n  font-size: 0.95rem;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #4f46e5;\n  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.15);\n}\n.btn-primary[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.9rem;\n  background:\n    linear-gradient(\n      135deg,\n      #4f46e5 0%,\n      #3b82f6 100%);\n  color: white;\n  border: none;\n  border-radius: 0.75rem;\n  font-size: 1rem;\n  font-weight: 600;\n  cursor: pointer;\n}\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.footer-note[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 1.5rem;\n  font-size: 0.9rem;\n  color: #6b7280;\n}\n.link-bold[_ngcontent-%COMP%] {\n  color: #4f46e5;\n  font-weight: 700;\n  text-decoration: none;\n}\n.alert-banner[_ngcontent-%COMP%] {\n  padding: 0.8rem;\n  border-radius: 0.5rem;\n  font-size: 0.85rem;\n  margin-bottom: 1rem;\n}\n.alert-banner.danger[_ngcontent-%COMP%] {\n  background-color: #fee2e2;\n  color: #dc2626;\n  border: 1px solid #fca5a5;\n}\n/*# sourceMappingURL=register.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegisterComponent, { className: "RegisterComponent", filePath: "src\\app\\features\\auth\\register.component.ts", lineNumber: 72 });
})();
export {
  RegisterComponent
};
//# sourceMappingURL=chunk-DFS5ICGI.js.map
