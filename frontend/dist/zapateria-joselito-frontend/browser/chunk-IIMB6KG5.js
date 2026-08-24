import {
  AuthService
} from "./chunk-XN6ZWLTO.js";
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
} from "./chunk-GNS5ANLM.js";
import {
  Router,
  RouterLink
} from "./chunk-NPNYKBRK.js";
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
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-LIYF5RMP.js";

// src/app/features/auth/forgot-password.component.ts
function ForgotPasswordComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.msg);
  }
}
function ForgotPasswordComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorMsg);
  }
}
function ForgotPasswordComponent_form_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 12, 0);
    \u0275\u0275listener("ngSubmit", function ForgotPasswordComponent_form_8_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onSubmit());
    });
    \u0275\u0275elementStart(2, "div", 13)(3, "label");
    \u0275\u0275text(4, "Correo Electr\xF3nico");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 14);
    \u0275\u0275twoWayListener("ngModelChange", function ForgotPasswordComponent_form_8_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.email, $event) || (ctx_r0.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 15);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const forgotForm_r3 = \u0275\u0275reference(1);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.email);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.loading || !forgotForm_r3.valid);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.loading ? "Enviando..." : "Enviar Token de Recuperaci\xF3n", " ");
  }
}
function ForgotPasswordComponent_form_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 12, 1);
    \u0275\u0275listener("ngSubmit", function ForgotPasswordComponent_form_9_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onResetSubmit());
    });
    \u0275\u0275elementStart(2, "div", 13)(3, "label");
    \u0275\u0275text(4, "C\xF3digo Token de Recuperaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 16);
    \u0275\u0275twoWayListener("ngModelChange", function ForgotPasswordComponent_form_9_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.token, $event) || (ctx_r0.token = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 13)(7, "label");
    \u0275\u0275text(8, "Nueva Contrase\xF1a");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 17);
    \u0275\u0275twoWayListener("ngModelChange", function ForgotPasswordComponent_form_9_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.newPassword, $event) || (ctx_r0.newPassword = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 15);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const resetForm_r5 = \u0275\u0275reference(1);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.token);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.newPassword);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.loading || !resetForm_r5.valid);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.loading ? "Actualizando..." : "Cambiar Contrase\xF1a", " ");
  }
}
var ForgotPasswordComponent = class _ForgotPasswordComponent {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
    this.email = "";
    this.token = "";
    this.newPassword = "";
    this.loading = false;
    this.stepReset = false;
    this.msg = "";
    this.errorMsg = "";
  }
  onSubmit() {
    this.loading = true;
    this.msg = "";
    this.errorMsg = "";
    this.authService.forgotPassword(this.email).subscribe({
      next: (res) => {
        this.loading = false;
        this.stepReset = true;
        this.msg = res.mensaje || "Se ha enviado un c\xF3digo de recuperaci\xF3n a su correo.";
      },
      error: (err) => {
        this.loading = false;
        this.errorMsg = err.error?.message || "Ocurri\xF3 un error al procesar la solicitud.";
      }
    });
  }
  onResetSubmit() {
    this.loading = true;
    this.msg = "";
    this.errorMsg = "";
    this.authService.resetPassword({
      email: this.email,
      token: this.token,
      newPassword: this.newPassword
    }).subscribe({
      next: (res) => {
        this.loading = false;
        alert(res.mensaje || "Contrase\xF1a restablecida exitosamente.");
        this.router.navigate(["/auth/login"]);
      },
      error: (err) => {
        this.loading = false;
        this.errorMsg = err.error?.message || "Error al cambiar la contrase\xF1a. Verifique el token.";
      }
    });
  }
  static {
    this.\u0275fac = function ForgotPasswordComponent_Factory(t) {
      return new (t || _ForgotPasswordComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ForgotPasswordComponent, selectors: [["app-forgot-password"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 13, vars: 4, consts: [["forgotForm", "ngForm"], ["resetForm", "ngForm"], [1, "auth-container"], [1, "auth-card", "glass-panel"], [1, "subtitle"], ["class", "alert-banner success", 4, "ngIf"], ["class", "alert-banner danger", 4, "ngIf"], [3, "ngSubmit", 4, "ngIf"], [1, "footer-note"], ["routerLink", "/auth/login", 1, "link-bold"], [1, "alert-banner", "success"], [1, "alert-banner", "danger"], [3, "ngSubmit"], [1, "form-group"], ["type", "email", "name", "email", "required", "", "placeholder", "correo@ejemplo.com", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "btn-primary", 3, "disabled"], ["type", "text", "name", "token", "required", "", "placeholder", "Token de 8 caracteres", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "password", "name", "newPassword", "required", "", "minlength", "6", "placeholder", "M\xEDnimo 6 caracteres", 1, "form-control", 3, "ngModelChange", "ngModel"]], template: function ForgotPasswordComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "h2");
        \u0275\u0275text(3, "Recuperar Contrase\xF1a");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 4);
        \u0275\u0275text(5, "Ingresa tu correo para recibir las instrucciones de restablecimiento.");
        \u0275\u0275elementEnd();
        \u0275\u0275template(6, ForgotPasswordComponent_div_6_Template, 2, 1, "div", 5)(7, ForgotPasswordComponent_div_7_Template, 2, 1, "div", 6)(8, ForgotPasswordComponent_form_8_Template, 8, 3, "form", 7)(9, ForgotPasswordComponent_form_9_Template, 12, 4, "form", 7);
        \u0275\u0275elementStart(10, "div", 8)(11, "a", 9);
        \u0275\u0275text(12, "\u2190 Volver al Inicio de Sesi\xF3n");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275property("ngIf", ctx.msg);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.errorMsg);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.stepReset);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.stepReset);
      }
    }, dependencies: [CommonModule, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, NgModel, NgForm, RouterLink], styles: ["\n\n.auth-container[_ngcontent-%COMP%] {\n  min-height: 80vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem;\n}\n.auth-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 440px;\n  padding: 2.5rem;\n  border-radius: 1.5rem;\n  background: rgba(255, 255, 255, 0.85);\n  -webkit-backdrop-filter: blur(16px);\n  backdrop-filter: blur(16px);\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);\n  border: 1px solid rgba(255, 255, 255, 0.5);\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  font-weight: 700;\n  color: #1f2937;\n  text-align: center;\n  margin-bottom: 0.2rem;\n}\n.subtitle[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #6b7280;\n  margin-bottom: 1.5rem;\n  font-size: 0.9rem;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 1.2rem;\n}\nlabel[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 600;\n  margin-bottom: 0.4rem;\n  color: #374151;\n  font-size: 0.9rem;\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.8rem 1rem;\n  border-radius: 0.75rem;\n  border: 1px solid #d1d5db;\n  font-size: 0.95rem;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #4f46e5;\n  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.15);\n}\n.btn-primary[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.9rem;\n  background:\n    linear-gradient(\n      135deg,\n      #4f46e5 0%,\n      #3b82f6 100%);\n  color: white;\n  border: none;\n  border-radius: 0.75rem;\n  font-size: 1rem;\n  font-weight: 600;\n  cursor: pointer;\n}\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.footer-note[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 1.5rem;\n  font-size: 0.9rem;\n}\n.link-bold[_ngcontent-%COMP%] {\n  color: #4f46e5;\n  font-weight: 700;\n  text-decoration: none;\n}\n.alert-banner[_ngcontent-%COMP%] {\n  padding: 0.8rem;\n  border-radius: 0.5rem;\n  font-size: 0.85rem;\n  margin-bottom: 1rem;\n}\n.alert-banner.success[_ngcontent-%COMP%] {\n  background-color: #d1fae5;\n  color: #065f46;\n  border: 1px solid #a7f3d0;\n}\n.alert-banner.danger[_ngcontent-%COMP%] {\n  background-color: #fee2e2;\n  color: #dc2626;\n  border: 1px solid #fca5a5;\n}\n/*# sourceMappingURL=forgot-password.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ForgotPasswordComponent, { className: "ForgotPasswordComponent", filePath: "src\\app\\features\\auth\\forgot-password.component.ts", lineNumber: 78 });
})();
export {
  ForgotPasswordComponent
};
//# sourceMappingURL=chunk-IIMB6KG5.js.map
