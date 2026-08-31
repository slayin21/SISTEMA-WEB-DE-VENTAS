import {
  CarritoService
} from "./chunk-F7US5IUQ.js";
import {
  AuthService
} from "./chunk-BODVM5WY.js";
import {
  RouterLink
} from "./chunk-M3LPOL3F.js";
import {
  CommonModule,
  DecimalPipe,
  NgForOf,
  NgIf,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-EH6AJVCA.js";

// src/app/features/cart/carrito.component.ts
function CarritoComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "div", 6);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Cargando elementos de tu carrito...");
    \u0275\u0275elementEnd()();
  }
}
function CarritoComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 8);
    \u0275\u0275element(2, "circle", 9)(3, "circle", 10)(4, "path", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "h2");
    \u0275\u0275text(6, "Tu carrito est\xE1 vac\xEDo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8, "Explora nuestras exclusivas colecciones de calzado y a\xF1ade tus favoritos.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "a", 12);
    \u0275\u0275text(10, "Ver Cat\xE1logo");
    \u0275\u0275elementEnd()();
  }
}
function CarritoComponent_div_5_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 30)(2, "img", 31);
    \u0275\u0275listener("error", function CarritoComponent_div_5_div_7_Template_img_error_2_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onErrorImagen($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "div", 32)(4, "h3");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 33);
    \u0275\u0275text(7, " Talla: ");
    \u0275\u0275elementStart(8, "strong");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, " | Color: ");
    \u0275\u0275elementStart(11, "strong");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 34);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 35)(18, "span");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 36)(21, "span");
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "button", 37);
    \u0275\u0275listener("click", function CarritoComponent_div_5_div_7_Template_button_click_24_listener() {
      const item_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.eliminarItem(item_r4.idCarritoItem));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(25, "svg", 26);
    \u0275\u0275element(26, "polyline", 38)(27, "path", 39);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r1.obtenerImagenItem(item_r4), \u0275\u0275sanitizeUrl)("alt", (item_r4.variante == null ? null : item_r4.variante.producto == null ? null : item_r4.variante.producto.nombre) || "Calzado");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r4.variante == null ? null : item_r4.variante.producto == null ? null : item_r4.variante.producto.nombre);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(item_r4.variante == null ? null : item_r4.variante.talla);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r4.variante == null ? null : item_r4.variante.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" | SKU: ", item_r4.variante == null ? null : item_r4.variante.sku, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Precio unitario: S/ ", \u0275\u0275pipeBind2(16, 9, item_r4.variante == null ? null : item_r4.variante.precio, "1.2-2"), "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Cant: ", item_r4.cantidad, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("S/ ", \u0275\u0275pipeBind2(23, 12, ((item_r4.variante == null ? null : item_r4.variante.precio) || 0) * item_r4.cantidad, "1.2-2"), "");
  }
}
function CarritoComponent_div_5_span_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 40);
    \u0275\u0275text(1, "\xA1GRATIS!");
    \u0275\u0275elementEnd();
  }
}
function CarritoComponent_div_5_span_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("S/ ", \u0275\u0275pipeBind2(2, 1, ctx_r1.calcularCostoEnvio(), "1.2-2"), "");
  }
}
function CarritoComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 14)(2, "div", 15)(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 16);
    \u0275\u0275listener("click", function CarritoComponent_div_5_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.vaciarCarrito());
    });
    \u0275\u0275text(6, "Vaciar Carrito");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, CarritoComponent_div_5_div_7_Template, 28, 15, "div", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 18)(9, "h2");
    \u0275\u0275text(10, "Resumen del Pedido");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 19)(12, "span");
    \u0275\u0275text(13, "Subtotal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span");
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 19)(18, "span");
    \u0275\u0275text(19, "Env\xEDo estimado");
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, CarritoComponent_div_5_span_20_Template, 2, 0, "span", 20)(21, CarritoComponent_div_5_span_21_Template, 3, 4, "span", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275element(22, "div", 22);
    \u0275\u0275elementStart(23, "div", 23)(24, "span");
    \u0275\u0275text(25, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span", 24);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "a", 25);
    \u0275\u0275text(30, " Proceder al Pago (Checkout) ");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(31, "svg", 26);
    \u0275\u0275element(32, "line", 27)(33, "polyline", 28);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r1.carrito.items.length, " producto(s) en tu carrito");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.carrito.items);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("S/ ", \u0275\u0275pipeBind2(16, 6, ctx_r1.calcularSubtotal(), "1.2-2"), "");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.calcularCostoEnvio() === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.calcularCostoEnvio() > 0);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("S/ ", \u0275\u0275pipeBind2(28, 9, ctx_r1.calcularTotal(), "1.2-2"), "");
  }
}
var CarritoComponent = class _CarritoComponent {
  constructor(carritoService, authService) {
    this.carritoService = carritoService;
    this.authService = authService;
    this.carrito = null;
    this.cargando = true;
    this.idUsuario = 1;
  }
  ngOnInit() {
    const user = this.authService.getCurrentUser();
    this.idUsuario = user && user.idUsuario ? user.idUsuario : 1;
    this.cargarCarrito();
  }
  cargarCarrito() {
    this.cargando = true;
    this.carritoService.obtenerCarrito(this.idUsuario).subscribe({
      next: (data) => {
        if ((!data || !data.items || data.items.length === 0) && this.idUsuario !== 1) {
          this.carritoService.obtenerCarrito(1).subscribe({
            next: (dataDefault) => {
              this.carrito = dataDefault;
              this.cargando = false;
            },
            error: () => {
              this.carrito = data;
              this.cargando = false;
            }
          });
        } else {
          this.carrito = data;
          this.cargando = false;
        }
      },
      error: (err) => {
        console.error(err);
        this.cargando = false;
      }
    });
  }
  eliminarItem(idItem) {
    if (!idItem)
      return;
    this.carritoService.eliminarItem(idItem, this.idUsuario).subscribe({
      next: () => this.cargarCarrito()
    });
  }
  vaciarCarrito() {
    this.carritoService.vaciarCarrito(this.idUsuario).subscribe({
      next: () => this.carrito = null
    });
  }
  obtenerImagenItem(item) {
    const fallback = "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=600";
    if (!item.variante || !item.variante.producto)
      return fallback;
    const prod = item.variante.producto;
    if (prod.imagenes && prod.imagenes.length > 0) {
      const principal = prod.imagenes.find((i) => i.esPrincipal);
      const url = principal ? principal.urlImagen : prod.imagenes[0].urlImagen;
      return url || fallback;
    }
    return fallback;
  }
  onErrorImagen(event) {
    event.target.src = "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=600";
  }
  calcularSubtotal() {
    if (!this.carrito || !this.carrito.items)
      return 0;
    return this.carrito.items.reduce((acc, item) => {
      const precio = item.variante ? item.variante.precio : 0;
      return acc + precio * item.cantidad;
    }, 0);
  }
  calcularCostoEnvio() {
    return this.calcularSubtotal() > 200 || this.calcularSubtotal() === 0 ? 0 : 15;
  }
  calcularTotal() {
    return this.calcularSubtotal() + this.calcularCostoEnvio();
  }
  static {
    this.\u0275fac = function CarritoComponent_Factory(t) {
      return new (t || _CarritoComponent)(\u0275\u0275directiveInject(CarritoService), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CarritoComponent, selectors: [["app-carrito"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 6, vars: 3, consts: [[1, "cart-container"], [1, "cart-title"], ["class", "loading-state", 4, "ngIf"], ["class", "empty-cart", 4, "ngIf"], ["class", "cart-grid", 4, "ngIf"], [1, "loading-state"], [1, "spinner"], [1, "empty-cart"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5"], ["cx", "9", "cy", "21", "r", "1"], ["cx", "20", "cy", "21", "r", "1"], ["d", "M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"], ["routerLink", "/catalogo", 1, "btn-primary"], [1, "cart-grid"], [1, "cart-items-section"], [1, "section-header"], [1, "btn-clear", 3, "click"], ["class", "cart-item-card", 4, "ngFor", "ngForOf"], [1, "cart-summary-card"], [1, "summary-line"], ["class", "free-shipping", 4, "ngIf"], [4, "ngIf"], [1, "divider"], [1, "summary-line", "total-line"], [1, "total-amount"], ["routerLink", "/checkout", 1, "btn-checkout"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x1", "5", "y1", "12", "x2", "19", "y2", "12"], ["points", "12 5 19 12 12 19"], [1, "cart-item-card"], [1, "item-img"], [3, "error", "src", "alt"], [1, "item-details"], [1, "specs"], [1, "unit-price"], [1, "item-qty"], [1, "item-total"], ["title", "Eliminar del carrito", 1, "btn-remove", 3, "click"], ["points", "3 6 5 6 21 6"], ["d", "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"], [1, "free-shipping"]], template: function CarritoComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
        \u0275\u0275text(2, "Tu Carrito de Compras");
        \u0275\u0275elementEnd();
        \u0275\u0275template(3, CarritoComponent_div_3_Template, 4, 0, "div", 2)(4, CarritoComponent_div_4_Template, 11, 0, "div", 3)(5, CarritoComponent_div_5_Template, 34, 12, "div", 4);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.cargando);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.cargando && (!ctx.carrito || !ctx.carrito.items || ctx.carrito.items.length === 0));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.cargando && ctx.carrito && ctx.carrito.items && ctx.carrito.items.length > 0);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, DecimalPipe, RouterLink], styles: ['@import "https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap";\n\n\n\n[_nghost-%COMP%] {\n  font-family: "Outfit", sans-serif;\n  display: block;\n  background-color: #0b0f19;\n  color: #f3f4f6;\n  min-height: 100vh;\n}\n.cart-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 2.5rem 1.5rem;\n}\n.cart-title[_ngcontent-%COMP%] {\n  font-size: 2.25rem;\n  font-weight: 700;\n  margin-bottom: 2rem;\n}\n.cart-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 340px;\n  gap: 2.5rem;\n}\n@media (max-width: 900px) {\n  .cart-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.cart-items-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n}\n.section-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: #9ca3af;\n  font-size: 0.95rem;\n  padding-bottom: 0.5rem;\n}\n.btn-clear[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  color: #ef4444;\n  cursor: pointer;\n  font-weight: 600;\n  font-size: 0.85rem;\n}\n.btn-clear[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.cart-item-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1.25rem;\n  background: #111827;\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 18px;\n  padding: 1.25rem;\n}\n.item-img[_ngcontent-%COMP%] {\n  width: 90px;\n  height: 90px;\n  border-radius: 12px;\n  overflow: hidden;\n  background: #1f2937;\n  flex-shrink: 0;\n}\n.item-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.item-details[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.item-details[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 600;\n  margin: 0 0 0.25rem 0;\n}\n.specs[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #9ca3af;\n  margin: 0 0 0.5rem 0;\n}\n.unit-price[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #818cf8;\n}\n.item-qty[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #e5e7eb;\n  padding: 0 1rem;\n}\n.item-total[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 700;\n  color: #10b981;\n  min-width: 100px;\n  text-align: right;\n}\n.btn-remove[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.1);\n  border: none;\n  color: #ef4444;\n  width: 38px;\n  height: 38px;\n  border-radius: 10px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease;\n}\n.btn-remove[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n}\n.btn-remove[_ngcontent-%COMP%]:hover {\n  background: #ef4444;\n  color: #fff;\n}\n.cart-summary-card[_ngcontent-%COMP%] {\n  background: #111827;\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 20px;\n  padding: 1.75rem;\n  height: fit-content;\n  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);\n}\n.cart-summary-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  font-weight: 700;\n  margin-top: 0;\n  margin-bottom: 1.5rem;\n  padding-bottom: 0.75rem;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n}\n.summary-line[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 1rem;\n  color: #9ca3af;\n  font-size: 0.95rem;\n}\n.free-shipping[_ngcontent-%COMP%] {\n  color: #10b981;\n  font-weight: 700;\n}\n.divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background: rgba(255, 255, 255, 0.08);\n  margin: 1.25rem 0;\n}\n.total-line[_ngcontent-%COMP%] {\n  color: #f3f4f6;\n  font-size: 1.1rem;\n  font-weight: 600;\n}\n.total-amount[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  font-weight: 700;\n  color: #10b981;\n}\n.btn-checkout[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  width: 100%;\n  background:\n    linear-gradient(\n      135deg,\n      #10b981 0%,\n      #059669 100%);\n  color: #fff;\n  text-decoration: none;\n  padding: 0.9rem;\n  border-radius: 12px;\n  font-weight: 700;\n  margin-top: 1.5rem;\n  box-shadow: 0 10px 20px rgba(16, 185, 129, 0.3);\n  transition: all 0.25s ease;\n}\n.btn-checkout[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n.btn-checkout[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 14px 28px rgba(16, 185, 129, 0.45);\n}\n.empty-cart[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 5rem 1rem;\n}\n.empty-cart[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 72px;\n  stroke: #4b5563;\n  margin-bottom: 1.5rem;\n}\n.empty-cart[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  margin-bottom: 0.5rem;\n}\n.empty-cart[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #9ca3af;\n  margin-bottom: 2rem;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: #6366f1;\n  color: #fff;\n  padding: 0.85rem 2rem;\n  border-radius: 12px;\n  text-decoration: none;\n  font-weight: 600;\n}\n/*# sourceMappingURL=carrito.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CarritoComponent, { className: "CarritoComponent", filePath: "src\\app\\features\\cart\\carrito.component.ts", lineNumber: 15 });
})();
export {
  CarritoComponent
};
//# sourceMappingURL=chunk-RVXI5JQL.js.map
