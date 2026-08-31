import {
  NotificationService
} from "./chunk-MRZIMWW3.js";
import {
  AuthService
} from "./chunk-BODVM5WY.js";
import {
  Router,
  RouterLink,
  RouterOutlet,
  bootstrapApplication,
  provideRouter
} from "./chunk-M3LPOL3F.js";
import {
  AsyncPipe,
  CommonModule,
  NgClass,
  NgForOf,
  NgIf,
  inject,
  provideHttpClient,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-EH6AJVCA.js";

// src/app/core/guards/auth.guard.ts
var authGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);
  if (authService.isLoggedIn()) {
    return true;
  }
  router.navigate(["/auth/login"]);
  return false;
};

// src/app/core/guards/admin.guard.ts
var adminGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);
  if (authService.isAdmin()) {
    return true;
  }
  alert("Acceso restringido \xFAnicamente para Administradores");
  router.navigate(["/catalog"]);
  return false;
};

// src/app/app.routes.ts
var routes = [
  { path: "", redirectTo: "catalogo", pathMatch: "full" },
  {
    path: "catalogo",
    loadComponent: () => import("./chunk-QP6GMVK3.js").then((m) => m.CatalogoComponent)
  },
  {
    path: "tendencias",
    loadComponent: () => import("./chunk-AUXI7MO4.js").then((m) => m.TendenciasComponent)
  },
  {
    path: "producto/:id",
    loadComponent: () => import("./chunk-FJ4NML64.js").then((m) => m.ProductoDetalleComponent)
  },
  {
    path: "carrito",
    loadComponent: () => import("./chunk-RVXI5JQL.js").then((m) => m.CarritoComponent)
  },
  {
    path: "checkout",
    loadComponent: () => import("./chunk-QESLZB6Z.js").then((m) => m.CheckoutComponent)
  },
  {
    path: "auth/login",
    loadComponent: () => import("./chunk-POD5NQJU.js").then((m) => m.LoginComponent)
  },
  {
    path: "auth/register",
    loadComponent: () => import("./chunk-6YIIAXKC.js").then((m) => m.RegisterComponent)
  },
  {
    path: "auth/forgot-password",
    loadComponent: () => import("./chunk-LHHMO564.js").then((m) => m.ForgotPasswordComponent)
  },
  {
    path: "perfil",
    loadComponent: () => import("./chunk-23SLBMP6.js").then((m) => m.PerfilComponent),
    canActivate: [authGuard]
  },
  {
    path: "admin",
    loadComponent: () => import("./chunk-TUXNYCV5.js").then((m) => m.AdminDashboardComponent),
    canActivate: [adminGuard]
  },
  { path: "**", redirectTo: "catalogo" }
];

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient()
  ]
};

// src/app/shared/components/toast-container.component.ts
function ToastContainerComponent_div_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u2705");
    \u0275\u0275elementEnd();
  }
}
function ToastContainerComponent_div_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u274C");
    \u0275\u0275elementEnd();
  }
}
function ToastContainerComponent_div_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u26A0\uFE0F");
    \u0275\u0275elementEnd();
  }
}
function ToastContainerComponent_div_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u2139\uFE0F");
    \u0275\u0275elementEnd();
  }
}
function ToastContainerComponent_div_1_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const toast_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(toast_r2.title);
  }
}
function ToastContainerComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3);
    \u0275\u0275template(2, ToastContainerComponent_div_1_span_2_Template, 2, 0, "span", 4)(3, ToastContainerComponent_div_1_span_3_Template, 2, 0, "span", 4)(4, ToastContainerComponent_div_1_span_4_Template, 2, 0, "span", 4)(5, ToastContainerComponent_div_1_span_5_Template, 2, 0, "span", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 5);
    \u0275\u0275template(7, ToastContainerComponent_div_1_div_7_Template, 2, 1, "div", 6);
    \u0275\u0275elementStart(8, "div", 7);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 8);
    \u0275\u0275listener("click", function ToastContainerComponent_div_1_Template_button_click_10_listener() {
      const toast_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.dismiss(toast_r2.id));
    });
    \u0275\u0275text(11, "\u2715");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const toast_r2 = ctx.$implicit;
    \u0275\u0275property("ngClass", toast_r2.type);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", toast_r2.type === "success");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", toast_r2.type === "error");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", toast_r2.type === "warning");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", toast_r2.type === "info");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", toast_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(toast_r2.message);
  }
}
var ToastContainerComponent = class _ToastContainerComponent {
  constructor(notificationService) {
    this.notificationService = notificationService;
    this.toasts$ = this.notificationService.toasts$;
  }
  dismiss(id) {
    this.notificationService.remove(id);
  }
  static {
    this.\u0275fac = function ToastContainerComponent_Factory(t) {
      return new (t || _ToastContainerComponent)(\u0275\u0275directiveInject(NotificationService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ToastContainerComponent, selectors: [["app-toast-container"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 3, vars: 3, consts: [[1, "toast-wrapper"], ["class", "toast-item", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "toast-item", 3, "ngClass"], [1, "toast-icon"], [4, "ngIf"], [1, "toast-body"], ["class", "toast-title", 4, "ngIf"], [1, "toast-message"], ["aria-label", "Cerrar", 1, "toast-close", 3, "click"], [1, "toast-title"]], template: function ToastContainerComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, ToastContainerComponent_div_1_Template, 12, 7, "div", 1);
        \u0275\u0275pipe(2, "async");
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(2, 1, ctx.toasts$));
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, AsyncPipe], styles: ["\n\n.toast-wrapper[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 1.5rem;\n  right: 1.5rem;\n  z-index: 99999;\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  max-width: 420px;\n  width: calc(100% - 3rem);\n  pointer-events: none;\n}\n.toast-item[_ngcontent-%COMP%] {\n  pointer-events: auto;\n  display: flex;\n  align-items: flex-start;\n  gap: 0.85rem;\n  padding: 1rem 1.25rem;\n  border-radius: 1rem;\n  background: rgba(255, 255, 255, 0.96);\n  -webkit-backdrop-filter: blur(16px);\n  backdrop-filter: blur(16px);\n  box-shadow: 0 14px 35px rgba(0, 0, 0, 0.15), 0 2px 6px rgba(0, 0, 0, 0.05);\n  border: 1px solid rgba(229, 231, 235, 0.9);\n  animation: _ngcontent-%COMP%_slideInRight 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;\n  transition: all 0.25s ease;\n}\n.toast-item.success[_ngcontent-%COMP%] {\n  border-left: 5px solid #10b981;\n  background: #f0fdf4;\n}\n.toast-item.error[_ngcontent-%COMP%] {\n  border-left: 5px solid #ef4444;\n  background: #fef2f2;\n}\n.toast-item.warning[_ngcontent-%COMP%] {\n  border-left: 5px solid #f59e0b;\n  background: #fffbeb;\n}\n.toast-item.info[_ngcontent-%COMP%] {\n  border-left: 5px solid #3b82f6;\n  background: #eff6ff;\n}\n.toast-icon[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  line-height: 1;\n  padding-top: 0.1rem;\n}\n.toast-body[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.toast-title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 0.9rem;\n  color: #1f2937;\n  margin-bottom: 0.2rem;\n}\n.toast-message[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #4b5563;\n  line-height: 1.4;\n}\n.toast-close[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  color: #9ca3af;\n  font-size: 1rem;\n  cursor: pointer;\n  padding: 0.2rem 0.4rem;\n  border-radius: 0.375rem;\n  transition: background 0.2s, color 0.2s;\n}\n.toast-close[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.06);\n  color: #374151;\n}\n@keyframes _ngcontent-%COMP%_slideInRight {\n  from {\n    opacity: 0;\n    transform: translateX(100px) scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0) scale(1);\n  }\n}\n/*# sourceMappingURL=toast-container.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ToastContainerComponent, { className: "ToastContainerComponent", filePath: "src\\app\\shared\\components\\toast-container.component.ts", lineNumber: 115 });
})();

// src/app/app.component.ts
function AppComponent_ng_container_21_a_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 19);
    \u0275\u0275text(1, " \u2699\uFE0F Admin ");
    \u0275\u0275elementEnd();
  }
}
function AppComponent_ng_container_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "a", 16);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, AppComponent_ng_container_21_a_3_Template, 2, 0, "a", 17);
    \u0275\u0275elementStart(4, "button", 18);
    \u0275\u0275listener("click", function AppComponent_ng_container_21_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.logout());
    });
    \u0275\u0275text(5, "Salir");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const user_r3 = ctx.ngIf;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" \u{1F464} ", user_r3.nombre, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", user_r3.rol === "ADMIN");
  }
}
function AppComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 20);
    \u0275\u0275text(1, "Iniciar Sesi\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "a", 21);
    \u0275\u0275text(3, "Registrarse");
    \u0275\u0275elementEnd();
  }
}
var AppComponent = class _AppComponent {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
    this.title = "Zapater\xEDa Joselito";
    this.currentUser$ = this.authService.currentUser$;
  }
  logout() {
    this.authService.logout();
    this.router.navigate(["/catalogo"]);
  }
  static {
    this.\u0275fac = function AppComponent_Factory(t) {
      return new (t || _AppComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 30, vars: 4, consts: [["noAuth", ""], [1, "main-navbar"], [1, "nav-container"], ["routerLink", "/catalogo", 1, "nav-brand"], [1, "brand-logo"], [1, "brand-name"], [1, "nav-links"], ["routerLink", "/catalogo", "routerLinkActive", "active"], ["routerLink", "/tendencias", "routerLinkActive", "active", 1, "nav-trends-link"], ["routerLink", "/carrito", "routerLinkActive", "active", 1, "nav-cart-btn"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["cx", "9", "cy", "21", "r", "1"], ["cx", "20", "cy", "21", "r", "1"], ["d", "M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"], [4, "ngIf", "ngIfElse"], [1, "main-footer"], ["routerLink", "/perfil", "routerLinkActive", "active", 1, "nav-user-link"], ["routerLink", "/admin", "routerLinkActive", "active", "class", "nav-admin-btn", 4, "ngIf"], [1, "nav-logout-btn", 3, "click"], ["routerLink", "/admin", "routerLinkActive", "active", 1, "nav-admin-btn"], ["routerLink", "/auth/login", 1, "nav-login-btn"], ["routerLink", "/auth/register", 1, "nav-register-btn"]], template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-toast-container");
        \u0275\u0275elementStart(1, "nav", 1)(2, "div", 2)(3, "a", 3)(4, "span", 4);
        \u0275\u0275text(5, "\u{1F45E}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "span", 5);
        \u0275\u0275text(7, "Zapater\xEDa ");
        \u0275\u0275elementStart(8, "strong");
        \u0275\u0275text(9, "Joselito");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(10, "div", 6)(11, "a", 7);
        \u0275\u0275text(12, "Cat\xE1logo");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "a", 8);
        \u0275\u0275text(14, "\u{1F525} Tendencias");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "a", 9);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(16, "svg", 10);
        \u0275\u0275element(17, "circle", 11)(18, "circle", 12)(19, "path", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275text(20, " Carrito ");
        \u0275\u0275elementEnd();
        \u0275\u0275template(21, AppComponent_ng_container_21_Template, 6, 2, "ng-container", 14);
        \u0275\u0275pipe(22, "async");
        \u0275\u0275template(23, AppComponent_ng_template_23_Template, 4, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(25, "main");
        \u0275\u0275element(26, "router-outlet");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "footer", 15)(28, "p");
        \u0275\u0275text(29, "\xA9 2026 Zapater\xEDa Joselito - Calzado de Alta Calidad. Todos los derechos reservados.");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        const noAuth_r4 = \u0275\u0275reference(24);
        \u0275\u0275advance(21);
        \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(22, 2, ctx.currentUser$))("ngIfElse", noAuth_r4);
      }
    }, dependencies: [CommonModule, NgIf, AsyncPipe, RouterOutlet, RouterLink, ToastContainerComponent], styles: ['\n\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\nbody[_ngcontent-%COMP%] {\n  background-color: #0b0f19;\n  color: #f3f4f6;\n  font-family: "Outfit", sans-serif;\n}\n.main-navbar[_ngcontent-%COMP%] {\n  background: rgba(17, 24, 39, 0.85);\n  -webkit-backdrop-filter: blur(16px);\n  backdrop-filter: blur(16px);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n  position: sticky;\n  top: 0;\n  z-index: 1000;\n}\n.nav-container[_ngcontent-%COMP%] {\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 1rem 1.5rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.nav-brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  text-decoration: none;\n  color: #fff;\n  font-size: 1.25rem;\n}\n.brand-logo[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n}\n.brand-name[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #818cf8;\n}\n.nav-links[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1.2rem;\n}\n.nav-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #9ca3af;\n  text-decoration: none;\n  font-weight: 500;\n  transition: color 0.25s ease;\n}\n.nav-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .nav-links[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  color: #6366f1;\n}\n.nav-trends-link[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(236, 72, 153, 0.2),\n      rgba(99, 102, 241, 0.2));\n  color: #f472b6 !important;\n  padding: 0.4rem 0.85rem;\n  border-radius: 8px;\n  border: 1px solid rgba(236, 72, 153, 0.35);\n  font-weight: 700;\n  transition: all 0.3s ease;\n}\n.nav-trends-link[_ngcontent-%COMP%]:hover, .nav-trends-link.active[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ec4899,\n      #8b5cf6);\n  color: #ffffff !important;\n  box-shadow: 0 0 15px rgba(236, 72, 153, 0.5);\n}\n.nav-cart-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  background: rgba(99, 102, 241, 0.15);\n  color: #818cf8 !important;\n  padding: 0.5rem 1rem;\n  border-radius: 10px;\n  border: 1px solid rgba(99, 102, 241, 0.3);\n}\n.nav-cart-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n}\n.nav-user-link[_ngcontent-%COMP%] {\n  color: #f3f4f6 !important;\n  font-weight: 600;\n}\n.nav-admin-btn[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.15);\n  color: #fbbf24 !important;\n  padding: 0.4rem 0.8rem;\n  border-radius: 8px;\n  border: 1px solid rgba(245, 158, 11, 0.3);\n  font-weight: 600;\n}\n.nav-logout-btn[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.15);\n  color: #f87171;\n  border: 1px solid rgba(239, 68, 68, 0.3);\n  padding: 0.4rem 0.8rem;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.nav-login-btn[_ngcontent-%COMP%] {\n  color: #e5e7eb !important;\n  font-weight: 600;\n}\n.nav-register-btn[_ngcontent-%COMP%] {\n  background: #6366f1;\n  color: white !important;\n  padding: 0.45rem 0.9rem;\n  border-radius: 8px;\n  font-weight: 600;\n}\n.main-footer[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 2rem 1rem;\n  border-top: 1px solid rgba(255, 255, 255, 0.08);\n  color: #6b7280;\n  font-size: 0.85rem;\n  background: #0b0f19;\n}\n/*# sourceMappingURL=app.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src\\app\\app.component.ts", lineNumber: 15 });
})();

// src/main.ts
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
