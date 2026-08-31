import {
  ProductoService
} from "./chunk-7IYHPI4O.js";
import {
  CarritoService
} from "./chunk-F7US5IUQ.js";
import {
  FormsModule
} from "./chunk-J5QRST4F.js";
import {
  AuthService
} from "./chunk-BODVM5WY.js";
import {
  ActivatedRoute,
  Router,
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
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
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
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-EH6AJVCA.js";

// src/app/features/catalog/producto-detalle.component.ts
function ProductoDetalleComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "div", 7);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Cargando detalle del calzado...");
    \u0275\u0275elementEnd()();
  }
}
function ProductoDetalleComponent_div_6_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275listener("click", function ProductoDetalleComponent_div_6_div_6_div_1_Template_div_click_0_listener() {
      const img_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.imagenSeleccionada = img_r2.urlImagen);
    });
    \u0275\u0275element(1, "img", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const img_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", img_r2.urlImagen === ctx_r2.imagenSeleccionada);
    \u0275\u0275advance();
    \u0275\u0275property("src", img_r2.urlImagen, \u0275\u0275sanitizeUrl);
  }
}
function ProductoDetalleComponent_div_6_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275template(1, ProductoDetalleComponent_div_6_div_6_div_1_Template, 2, 3, "div", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.producto.imagenes);
  }
}
function ProductoDetalleComponent_div_6_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.producto.marca);
  }
}
function ProductoDetalleComponent_div_6_p_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 32)(1, "strong");
    \u0275\u0275text(2, "Material:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.producto.material, "");
  }
}
function ProductoDetalleComponent_div_6_div_22_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 36);
    \u0275\u0275listener("click", function ProductoDetalleComponent_div_6_div_22_button_4_Template_button_click_0_listener() {
      const v_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.seleccionarVariante(v_r5));
    });
    \u0275\u0275elementStart(1, "span", 37);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 38);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const v_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("selected", (ctx_r2.varianteSeleccionada == null ? null : ctx_r2.varianteSeleccionada.idVariante) === v_r5.idVariante);
    \u0275\u0275property("disabled", v_r5.stock === 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Talla ", v_r5.talla, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(v_r5.color);
  }
}
function ProductoDetalleComponent_div_6_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "h3");
    \u0275\u0275text(2, "Selecciona Talla y Color:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 34);
    \u0275\u0275template(4, ProductoDetalleComponent_div_6_div_22_button_4_Template, 5, 5, "button", 35);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r2.producto.variantes);
  }
}
function ProductoDetalleComponent_div_6_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 39)(1, "div", 40)(2, "button", 41);
    \u0275\u0275listener("click", function ProductoDetalleComponent_div_6_div_23_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.cantidad = ctx_r2.cantidad > 1 ? ctx_r2.cantidad - 1 : 1);
    });
    \u0275\u0275text(3, "-");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 41);
    \u0275\u0275listener("click", function ProductoDetalleComponent_div_6_div_23_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.cantidad = ctx_r2.cantidad < ctx_r2.varianteSeleccionada.stock ? ctx_r2.cantidad + 1 : ctx_r2.cantidad);
    });
    \u0275\u0275text(7, "+");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 42);
    \u0275\u0275listener("click", function ProductoDetalleComponent_div_6_div_23_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.agregarAlCarrito());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(9, "svg", 2);
    \u0275\u0275element(10, "path", 43)(11, "line", 44)(12, "path", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.cantidad);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r2.agregando);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r2.agregando ? "A\xF1adiendo..." : "A\xF1adir al Carrito", " ");
  }
}
function ProductoDetalleComponent_div_6_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.mensajeExito);
  }
}
function ProductoDetalleComponent_div_6_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.mensajeError);
  }
}
function ProductoDetalleComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "a", 9);
    \u0275\u0275text(2, "\u2715");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 10)(4, "div", 11);
    \u0275\u0275element(5, "img", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, ProductoDetalleComponent_div_6_div_6_Template, 2, 1, "div", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 14);
    \u0275\u0275template(8, ProductoDetalleComponent_div_6_div_8_Template, 2, 1, "div", 15);
    \u0275\u0275elementStart(9, "h1", 16);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 17);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 18)(14, "span", 19);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 20);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "p", 21);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, ProductoDetalleComponent_div_6_p_21_Template, 4, 1, "p", 22)(22, ProductoDetalleComponent_div_6_div_22_Template, 5, 1, "div", 23)(23, ProductoDetalleComponent_div_6_div_23_Template, 14, 3, "div", 24)(24, ProductoDetalleComponent_div_6_div_24_Template, 2, 1, "div", 25)(25, ProductoDetalleComponent_div_6_div_25_Template, 2, 1, "div", 26);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("src", ctx_r2.imagenSeleccionada, \u0275\u0275sanitizeUrl)("alt", ctx_r2.producto.nombre);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.producto.imagenes && ctx_r2.producto.imagenes.length > 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.producto.marca);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.producto.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r2.producto.categoria == null ? null : ctx_r2.producto.categoria.nombre, " | Genero: ", ctx_r2.producto.genero || "Unisex", "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" S/ ", \u0275\u0275pipeBind2(16, 17, ctx_r2.varianteSeleccionada ? ctx_r2.varianteSeleccionada.precio : 0, "1.2-2"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("out-of-stock", !ctx_r2.varianteSeleccionada || ctx_r2.varianteSeleccionada.stock === 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.varianteSeleccionada && ctx_r2.varianteSeleccionada.stock > 0 ? ctx_r2.varianteSeleccionada.stock + " unidades disponibles" : "Agotado", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.producto.descripcion || "Sin descripci\xF3n disponible.");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.producto.material);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.producto.variantes && ctx_r2.producto.variantes.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.varianteSeleccionada && ctx_r2.varianteSeleccionada.stock > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.mensajeExito);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.mensajeError);
  }
}
var ProductoDetalleComponent = class _ProductoDetalleComponent {
  constructor(route, router, productoService, carritoService, authService) {
    this.route = route;
    this.router = router;
    this.productoService = productoService;
    this.carritoService = carritoService;
    this.authService = authService;
    this.producto = null;
    this.varianteSeleccionada = null;
    this.imagenSeleccionada = "";
    this.cantidad = 1;
    this.cargando = true;
    this.agregando = false;
    this.mensajeExito = "";
    this.mensajeError = "";
  }
  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    if (id) {
      this.cargarProducto(id);
    }
  }
  cargarProducto(id) {
    this.cargando = true;
    this.productoService.obtenerPorId(id).subscribe({
      next: (data) => {
        this.producto = data;
        this.cargando = false;
        if (data.imagenes && data.imagenes.length > 0) {
          const principal = data.imagenes.find((i) => i.esPrincipal);
          this.imagenSeleccionada = principal ? principal.urlImagen : data.imagenes[0].urlImagen;
        } else {
          this.imagenSeleccionada = "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=600";
        }
        if (data.variantes && data.variantes.length > 0) {
          this.varianteSeleccionada = data.variantes[0];
        }
      },
      error: (err) => {
        console.error(err);
        this.cargando = false;
      }
    });
  }
  seleccionarVariante(v) {
    this.varianteSeleccionada = v;
    this.cantidad = 1;
  }
  agregarAlCarrito() {
    if (!this.varianteSeleccionada || !this.varianteSeleccionada.idVariante) {
      this.mensajeError = "Debes seleccionar una talla/variante.";
      return;
    }
    this.agregando = true;
    this.mensajeExito = "";
    this.mensajeError = "";
    const user = this.authService.getCurrentUser();
    const idUsuario = user && user.idUsuario ? user.idUsuario : 1;
    this.carritoService.agregarItem(idUsuario, this.varianteSeleccionada.idVariante, this.cantidad).subscribe({
      next: () => {
        this.agregando = false;
        this.mensajeExito = "\xA1Producto agregado al carrito exitosamente!";
        setTimeout(() => this.mensajeExito = "", 4e3);
      },
      error: (err) => {
        this.agregando = false;
        this.mensajeError = err.error?.message || "Ocurri\xF3 un error al agregar al carrito";
      }
    });
  }
  static {
    this.\u0275fac = function ProductoDetalleComponent_Factory(t) {
      return new (t || _ProductoDetalleComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ProductoService), \u0275\u0275directiveInject(CarritoService), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductoDetalleComponent, selectors: [["app-producto-detalle"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 7, vars: 2, consts: [[1, "detail-container"], ["routerLink", "/catalogo", 1, "btn-back"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["points", "15 18 9 12 15 6"], ["class", "loading-state", 4, "ngIf"], ["class", "product-detail-layout", 4, "ngIf"], [1, "loading-state"], [1, "spinner"], [1, "product-detail-layout"], ["routerLink", "/catalogo", "title", "Cerrar y volver al cat\xE1logo", 1, "btn-close-detail"], [1, "gallery-section"], [1, "main-image"], [3, "src", "alt"], ["class", "thumbnail-list", 4, "ngIf"], [1, "info-section"], ["class", "brand-tag", 4, "ngIf"], [1, "product-name"], [1, "category-name"], [1, "price-box"], [1, "price-val"], [1, "stock-badge"], [1, "description"], ["class", "material-info", 4, "ngIf"], ["class", "variant-selector", 4, "ngIf"], ["class", "purchase-controls", 4, "ngIf"], ["class", "alert alert-success", 4, "ngIf"], ["class", "alert alert-danger", 4, "ngIf"], [1, "thumbnail-list"], ["class", "thumb", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "thumb", 3, "click"], [3, "src"], [1, "brand-tag"], [1, "material-info"], [1, "variant-selector"], [1, "variant-chips"], [3, "selected", "disabled", "click", 4, "ngFor", "ngForOf"], [3, "click", "disabled"], [1, "chip-size"], [1, "chip-color"], [1, "purchase-controls"], [1, "quantity-selector"], [3, "click"], [1, "btn-add-cart", 3, "click", "disabled"], ["d", "M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"], ["x1", "3", "y1", "6", "x2", "21", "y2", "6"], ["d", "M16 10a4 4 0 0 1-8 0"], [1, "alert", "alert-success"], [1, "alert", "alert-danger"]], template: function ProductoDetalleComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "a", 1);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(2, "svg", 2);
        \u0275\u0275element(3, "polyline", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275text(4, " Volver al Cat\xE1logo ");
        \u0275\u0275elementEnd();
        \u0275\u0275template(5, ProductoDetalleComponent_div_5_Template, 4, 0, "div", 4)(6, ProductoDetalleComponent_div_6_Template, 26, 20, "div", 5);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275property("ngIf", ctx.cargando);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.cargando && ctx.producto);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, DecimalPipe, FormsModule, RouterLink], styles: ['@import "https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap";\n\n\n\n[_nghost-%COMP%] {\n  font-family: "Outfit", sans-serif;\n  display: block;\n  background-color: #0b0f19;\n  color: #f3f4f6;\n  min-height: 100vh;\n}\n.detail-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 2.5rem 1.5rem;\n}\n.btn-back[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  color: #9ca3af;\n  text-decoration: none;\n  font-weight: 500;\n  margin-bottom: 2rem;\n  transition: color 0.25s ease;\n}\n.btn-back[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n}\n.btn-back[_ngcontent-%COMP%]:hover {\n  color: #6366f1;\n}\n.product-detail-layout[_ngcontent-%COMP%] {\n  position: relative;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 3.5rem;\n  background: #111827;\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 24px;\n  padding: 2.5rem;\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);\n}\n.btn-close-detail[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1.25rem;\n  right: 1.25rem;\n  width: 42px;\n  height: 42px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.08);\n  border: 1px solid rgba(255, 255, 255, 0.18);\n  color: #cbd5e1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.35rem;\n  font-weight: 700;\n  text-decoration: none;\n  cursor: pointer;\n  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n  z-index: 10;\n}\n.btn-close-detail[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.25);\n  color: #ffffff;\n  border-color: rgba(239, 68, 68, 0.5);\n  transform: scale(1.1) rotate(90deg);\n  box-shadow: 0 0 15px rgba(239, 68, 68, 0.4);\n}\n@media (max-width: 868px) {\n  .product-detail-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 2rem;\n    padding: 1.5rem;\n  }\n}\n.gallery-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.main-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 420px;\n  background: #1f2937;\n  border-radius: 20px;\n  overflow: hidden;\n  border: 1px solid rgba(255, 255, 255, 0.06);\n}\n.main-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.thumbnail-list[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  overflow-x: auto;\n}\n.thumb[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border-radius: 12px;\n  overflow: hidden;\n  border: 2px solid transparent;\n  cursor: pointer;\n  background: #1f2937;\n  transition: all 0.2s ease;\n}\n.thumb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.thumb.active[_ngcontent-%COMP%], .thumb[_ngcontent-%COMP%]:hover {\n  border-color: #6366f1;\n}\n.info-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.brand-tag[_ngcontent-%COMP%] {\n  color: #818cf8;\n  font-weight: 600;\n  text-transform: uppercase;\n  font-size: 0.85rem;\n  letter-spacing: 1px;\n  margin-bottom: 0.5rem;\n}\n.product-name[_ngcontent-%COMP%] {\n  font-size: 2.2rem;\n  font-weight: 700;\n  margin: 0 0 0.5rem 0;\n}\n.category-name[_ngcontent-%COMP%] {\n  color: #9ca3af;\n  font-size: 0.95rem;\n  margin-bottom: 1.5rem;\n}\n.price-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n  margin-bottom: 1.5rem;\n  padding: 1rem;\n  background: rgba(255, 255, 255, 0.03);\n  border-radius: 14px;\n}\n.price-val[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #10b981;\n}\n.stock-badge[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.15);\n  color: #34d399;\n  font-size: 0.85rem;\n  font-weight: 600;\n  padding: 0.4rem 0.85rem;\n  border-radius: 8px;\n}\n.stock-badge.out-of-stock[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.15);\n  color: #f87171;\n}\n.description[_ngcontent-%COMP%] {\n  color: #d1d5db;\n  line-height: 1.6;\n  margin-bottom: 1rem;\n}\n.material-info[_ngcontent-%COMP%] {\n  color: #9ca3af;\n  font-size: 0.95rem;\n  margin-bottom: 2rem;\n}\n.variant-selector[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  margin-bottom: 0.75rem;\n  color: #e5e7eb;\n}\n.variant-chips[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n  margin-bottom: 2rem;\n}\n.variant-chips[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: #1f2937;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  padding: 0.65rem 1rem;\n  border-radius: 12px;\n  color: #f3f4f6;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  transition: all 0.25s ease;\n}\n.variant-chips[_ngcontent-%COMP%]   button.selected[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.2);\n  border-color: #6366f1;\n  box-shadow: 0 0 12px rgba(99, 102, 241, 0.4);\n}\n.variant-chips[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.chip-size[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 0.95rem;\n}\n.chip-color[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #9ca3af;\n}\n.purchase-controls[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1.25rem;\n  align-items: center;\n  margin-top: 1rem;\n}\n.quantity-selector[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background: #1f2937;\n  border-radius: 12px;\n  overflow: hidden;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n}\n.quantity-selector[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  color: #fff;\n  width: 40px;\n  height: 48px;\n  font-size: 1.2rem;\n  cursor: pointer;\n  transition: background 0.2s ease;\n}\n.quantity-selector[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.1);\n}\n.quantity-selector[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding: 0 1rem;\n  font-weight: 700;\n  font-size: 1.1rem;\n}\n.btn-add-cart[_ngcontent-%COMP%] {\n  flex: 1;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.75rem;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1 0%,\n      #4f46e5 100%);\n  color: #fff;\n  border: none;\n  height: 48px;\n  border-radius: 12px;\n  font-size: 1rem;\n  font-weight: 600;\n  cursor: pointer;\n  box-shadow: 0 10px 20px rgba(99, 102, 241, 0.35);\n  transition: all 0.25s ease;\n}\n.btn-add-cart[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n.btn-add-cart[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 14px 28px rgba(99, 102, 241, 0.5);\n}\n.alert[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n  padding: 1rem;\n  border-radius: 12px;\n  font-size: 0.95rem;\n}\n.alert-success[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.15);\n  color: #34d399;\n  border: 1px solid rgba(16, 185, 129, 0.3);\n}\n.alert-danger[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.15);\n  color: #f87171;\n  border: 1px solid rgba(239, 68, 68, 0.3);\n}\n/*# sourceMappingURL=producto-detalle.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductoDetalleComponent, { className: "ProductoDetalleComponent", filePath: "src\\app\\features\\catalog\\producto-detalle.component.ts", lineNumber: 17 });
})();
export {
  ProductoDetalleComponent
};
//# sourceMappingURL=chunk-FJ4NML64.js.map
