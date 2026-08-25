import {
  NotificationService
} from "./chunk-MRZIMWW3.js";
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
  RouterModule
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
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3
} from "./chunk-EH6AJVCA.js";

// src/app/features/trends/tendencias.component.ts
function TendenciasComponent_section_4_div_25_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 49);
    \u0275\u0275listener("click", function TendenciasComponent_section_4_div_25_button_4_Template_button_click_0_listener() {
      const v_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.varianteHero = v_r3);
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const v_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", (ctx_r3.varianteHero == null ? null : ctx_r3.varianteHero.idVariante) === v_r3.idVariante);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Talla ", v_r3.talla, " ");
  }
}
function TendenciasComponent_section_4_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45)(1, "span", 46);
    \u0275\u0275text(2, "Selecciona tu Talla:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 47);
    \u0275\u0275template(4, TendenciasComponent_section_4_div_25_button_4_Template, 2, 3, "button", 48);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r3.productoHero.variantes);
  }
}
function TendenciasComponent_section_4_div_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275listener("click", function TendenciasComponent_section_4_div_44_Template_div_click_0_listener() {
      const prod_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.seleccionarProductoHero(prod_r6));
    });
    \u0275\u0275elementStart(1, "img", 51);
    \u0275\u0275listener("error", function TendenciasComponent_section_4_div_44_Template_img_error_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.onErrorImagen($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 52)(3, "span", 53);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 54);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "number");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const prod_r6 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r3.productoHero.idProducto === prod_r6.idProducto);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r3.obtenerImagenPrincipal(prod_r6), \u0275\u0275sanitizeUrl)("alt", prod_r6.nombre);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(prod_r6.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("S/ ", \u0275\u0275pipeBind2(7, 6, ctx_r3.obtenerPrecioMinimo(prod_r6), "1.2-2"), "");
  }
}
function TendenciasComponent_section_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 13)(1, "div", 14)(2, "span");
    \u0275\u0275text(3, "FUTURE");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 15);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 16)(7, "div", 17)(8, "span", 18);
    \u0275\u0275text(9, "\u{1F525} TENDENCIA DE TEMPORADA 2026");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "h1", 19);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 20);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 21)(15, "span", 22);
    \u0275\u0275text(16, "S/");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 23);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 24);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "p", 25);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275template(25, TendenciasComponent_section_4_div_25_Template, 5, 1, "div", 26);
    \u0275\u0275elementStart(26, "div", 27)(27, "button", 28);
    \u0275\u0275listener("click", function TendenciasComponent_section_4_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.agregarHeroAlCarrito());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(28, "svg", 29);
    \u0275\u0275element(29, "circle", 30)(30, "circle", 31)(31, "path", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275text(32);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(33, "button", 33);
    \u0275\u0275listener("click", function TendenciasComponent_section_4_Template_button_click_33_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.toggleFavorito());
    });
    \u0275\u0275text(34, "\u2764\uFE0F");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(35, "div", 34);
    \u0275\u0275element(36, "div", 35);
    \u0275\u0275elementStart(37, "div", 36)(38, "img", 37);
    \u0275\u0275listener("error", function TendenciasComponent_section_4_Template_img_error_38_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onErrorImagen($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275element(39, "div", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 39)(41, "span", 40);
    \u0275\u0275text(42, "M\xC1S MODELOS TENDENCIA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 41);
    \u0275\u0275template(44, TendenciasComponent_section_4_div_44_Template, 8, 9, "div", 42);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(45, "div", 43);
    \u0275\u0275listener("click", function TendenciasComponent_section_4_Template_div_click_45_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.scrollToTrends());
    });
    \u0275\u0275elementStart(46, "span");
    \u0275\u0275text(47, "DESLIZA PARA VER LA COLECCI\xD3N DE TENDENCIAS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "div", 44);
    \u0275\u0275text(49, "\u2193");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((ctx_r3.productoHero.marca == null ? null : ctx_r3.productoHero.marca.toUpperCase()) || "ULTRABOOST");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r3.productoHero.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" ", ctx_r3.productoHero.marca, " \u2022 ", (ctx_r3.productoHero.categoria == null ? null : ctx_r3.productoHero.categoria.nombre) || "Calzado Urbano", " \u2022 ", ctx_r3.productoHero.genero, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(19, 14, ctx_r3.obtenerPrecioMinimo(ctx_r3.productoHero), "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("S/ ", \u0275\u0275pipeBind2(22, 17, ctx_r3.obtenerPrecioMinimo(ctx_r3.productoHero) * 1.25, "1.2-2"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r3.productoHero.descripcion || "Dise\xF1o de alta velocidad con amortiguaci\xF3n fluida, m\xE1xima ligereza y tejido transpirable de alta respuesta.", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.productoHero.variantes && ctx_r3.productoHero.variantes.length > 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r3.agregandoCarrito);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r3.agregandoCarrito ? "A\xD1ADIENDO..." : "ADD TO CART", " ");
    \u0275\u0275advance(6);
    \u0275\u0275property("src", ctx_r3.imagenHeroActual, \u0275\u0275sanitizeUrl)("alt", ctx_r3.productoHero.nombre);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", ctx_r3.productosDB);
  }
}
function TendenciasComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 55)(1, "div", 56);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 57);
    \u0275\u0275listener("click", function TendenciasComponent_div_14_Template_div_click_3_listener() {
      const item_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.seleccionarProductoHero(item_r8));
    });
    \u0275\u0275elementStart(4, "img", 51);
    \u0275\u0275listener("error", function TendenciasComponent_div_14_Template_img_error_4_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onErrorImagen($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 58)(6, "span", 59);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "h3", 60);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 61)(11, "span", 62);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 63);
    \u0275\u0275listener("click", function TendenciasComponent_div_14_Template_button_click_14_listener() {
      const item_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.abrirModalDetalle(item_r8));
    });
    \u0275\u0275text(15, "Ver Detalle \u2192");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r8.marca);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r3.obtenerImagenPrincipal(item_r8), \u0275\u0275sanitizeUrl)("alt", item_r8.nombre);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", (item_r8.categoria == null ? null : item_r8.categoria.nombre) || "Calzado", " \u2022 ", item_r8.genero, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r8.nombre);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("S/ ", \u0275\u0275pipeBind2(13, 7, ctx_r3.obtenerPrecioMinimo(item_r8), "1.2-2"), "");
  }
}
function TendenciasComponent_div_15_div_32_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 49);
    \u0275\u0275listener("click", function TendenciasComponent_div_15_div_32_button_4_Template_button_click_0_listener() {
      const v_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.varianteModal = v_r11);
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const v_r11 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", (ctx_r3.varianteModal == null ? null : ctx_r3.varianteModal.idVariante) === v_r11.idVariante);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" Talla ", v_r11.talla, " (", v_r11.color, ") ");
  }
}
function TendenciasComponent_div_15_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 83)(1, "label");
    \u0275\u0275text(2, "Tallas Disponibles:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 47);
    \u0275\u0275template(4, TendenciasComponent_div_15_div_32_button_4_Template, 2, 4, "button", 48);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r3.productoModal.variantes);
  }
}
function TendenciasComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 64);
    \u0275\u0275listener("click", function TendenciasComponent_div_15_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.cerrarModalDetalle());
    });
    \u0275\u0275elementStart(1, "div", 65);
    \u0275\u0275listener("click", function TendenciasComponent_div_15_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r9);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 66)(3, "div", 67)(4, "span", 68);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h3");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 69);
    \u0275\u0275listener("click", function TendenciasComponent_div_15_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.cerrarModalDetalle());
    });
    \u0275\u0275text(9, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 70)(11, "div", 71)(12, "div", 72)(13, "img", 51);
    \u0275\u0275listener("error", function TendenciasComponent_div_15_Template_img_error_13_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onErrorImagen($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 73)(15, "p", 74);
    \u0275\u0275text(16, "Categor\xEDa: ");
    \u0275\u0275elementStart(17, "strong");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, " | G\xE9nero: ");
    \u0275\u0275elementStart(20, "strong");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "p", 75);
    \u0275\u0275text(23, "Material: ");
    \u0275\u0275elementStart(24, "strong");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 76)(27, "span", 77);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "p", 78);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275template(32, TendenciasComponent_div_15_div_32_Template, 5, 1, "div", 79);
    \u0275\u0275elementStart(33, "div", 80)(34, "button", 81);
    \u0275\u0275listener("click", function TendenciasComponent_div_15_Template_button_click_34_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.agregarModalAlCarrito());
    });
    \u0275\u0275text(35, " \u{1F6D2} A\xF1adir al Carrito ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "button", 82);
    \u0275\u0275listener("click", function TendenciasComponent_div_15_Template_button_click_36_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.cerrarModalDetalle());
    });
    \u0275\u0275text(37, " Cerrar ");
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.productoModal.marca);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.productoModal.nombre);
    \u0275\u0275advance(6);
    \u0275\u0275property("src", ctx_r3.obtenerImagenPrincipal(ctx_r3.productoModal), \u0275\u0275sanitizeUrl)("alt", ctx_r3.productoModal.nombre);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((ctx_r3.productoModal.categoria == null ? null : ctx_r3.productoModal.categoria.nombre) || "Calzado");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.productoModal.genero);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r3.productoModal.material);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("S/ ", \u0275\u0275pipeBind2(29, 10, ctx_r3.obtenerPrecioMinimo(ctx_r3.productoModal), "1.2-2"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.productoModal.descripcion || "Excelente calzado con acabados de primera calidad, resistencia y durabilidad garantizada.");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.productoModal.variantes && ctx_r3.productoModal.variantes.length > 0);
  }
}
var TendenciasComponent = class _TendenciasComponent {
  constructor(productoService, carritoService, notificationService) {
    this.productoService = productoService;
    this.carritoService = carritoService;
    this.notificationService = notificationService;
    this.productosDB = [];
    this.productoHero = null;
    this.varianteHero = null;
    this.imagenHeroActual = "";
    this.agregandoCarrito = false;
    this.mostrarModal = false;
    this.productoModal = null;
    this.varianteModal = null;
  }
  ngOnInit() {
    this.cargarProductosDB();
  }
  cargarProductosDB() {
    this.productoService.obtenerTodos().subscribe({
      next: (data) => {
        this.productosDB = data;
        if (data && data.length > 0) {
          this.seleccionarProductoHero(data[0]);
        }
      },
      error: (err) => {
        console.error("Error al cargar productos para tendencias", err);
      }
    });
  }
  seleccionarProductoHero(prod) {
    this.productoHero = prod;
    this.imagenHeroActual = this.obtenerImagenPrincipal(prod);
    if (prod.variantes && prod.variantes.length > 0) {
      this.varianteHero = prod.variantes[0];
    } else {
      this.varianteHero = null;
    }
  }
  obtenerPrecioMinimo(prod) {
    if (!prod.variantes || prod.variantes.length === 0)
      return 0;
    return Math.min(...prod.variantes.map((v) => v.precio));
  }
  obtenerImagenPrincipal(prod) {
    if (!prod.imagenes || prod.imagenes.length === 0) {
      return "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=600";
    }
    const principal = prod.imagenes.find((i) => i.esPrincipal);
    return principal ? principal.urlImagen : prod.imagenes[0].urlImagen;
  }
  agregarHeroAlCarrito() {
    if (!this.productoHero)
      return;
    const idVariante = this.varianteHero?.idVariante || this.productoHero.variantes && this.productoHero.variantes[0]?.idVariante;
    if (!idVariante) {
      this.notificationService.showWarning("Este producto no tiene variantes registradas.", "Atenci\xF3n");
      return;
    }
    this.agregandoCarrito = true;
    const idUsuario = 1;
    this.carritoService.agregarItem(idUsuario, idVariante, 1).subscribe({
      next: () => {
        this.agregandoCarrito = false;
        this.notificationService.showSuccess(`\xA1${this.productoHero?.nombre} (Talla ${this.varianteHero?.talla || ""}) a\xF1adido al carrito!`, "\u{1F6D2} Carrito Actualizado");
      },
      error: (err) => {
        this.agregandoCarrito = false;
        this.notificationService.showError("No se pudo a\xF1adir el producto al carrito.");
      }
    });
  }
  abrirModalDetalle(prod) {
    this.productoModal = prod;
    if (prod.variantes && prod.variantes.length > 0) {
      this.varianteModal = prod.variantes[0];
    } else {
      this.varianteModal = null;
    }
    this.mostrarModal = true;
  }
  cerrarModalDetalle() {
    this.mostrarModal = false;
    this.productoModal = null;
    this.varianteModal = null;
  }
  agregarModalAlCarrito() {
    if (!this.productoModal)
      return;
    const idVariante = this.varianteModal?.idVariante || this.productoModal.variantes && this.productoModal.variantes[0]?.idVariante;
    if (!idVariante) {
      this.notificationService.showWarning("Este producto no tiene variantes de stock.", "Atenci\xF3n");
      return;
    }
    const idUsuario = 1;
    this.carritoService.agregarItem(idUsuario, idVariante, 1).subscribe({
      next: () => {
        this.notificationService.showSuccess(`\xA1${this.productoModal?.nombre} agregado al carrito!`, "\u{1F6D2} Producto A\xF1adido");
        this.cerrarModalDetalle();
      },
      error: (err) => {
        this.notificationService.showError("Ocurri\xF3 un error al agregar al carrito.");
      }
    });
  }
  toggleFavorito() {
    this.notificationService.showInfo(`Guardado en tus favoritos \u2764\uFE0F`, "Favorito A\xF1adido");
  }
  onErrorImagen(event) {
    event.target.src = "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=600";
  }
  scrollToTrends() {
    const el = document.getElementById("trends-grid-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }
  static {
    this.\u0275fac = function TendenciasComponent_Factory(t) {
      return new (t || _TendenciasComponent)(\u0275\u0275directiveInject(ProductoService), \u0275\u0275directiveInject(CarritoService), \u0275\u0275directiveInject(NotificationService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TendenciasComponent, selectors: [["app-tendencias"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 16, vars: 3, consts: [[1, "trends-container"], [1, "fluid-blob", "blob-1"], [1, "fluid-blob", "blob-2"], [1, "fluid-blob", "blob-3"], ["class", "hero-heroic", 4, "ngIf"], ["id", "trends-grid-section", 1, "trends-vertical-section"], [1, "section-title-wrap"], [1, "subtitle-badge"], [1, "section-glow-header"], [1, "section-desc"], [1, "trends-grid"], ["class", "trend-card glass-card-hover", 4, "ngFor", "ngForOf"], ["class", "modal-backdrop", 3, "click", 4, "ngIf"], [1, "hero-heroic"], [1, "giant-glass-title"], [1, "gradient-text"], [1, "hero-main-layout"], [1, "product-info-glass"], [1, "drop-tag"], [1, "main-shoe-title"], [1, "main-shoe-sub"], [1, "price-row"], [1, "price-symbol"], [1, "price-amount"], [1, "old-price"], [1, "description"], ["class", "size-selector-box", 4, "ngIf"], [1, "card-actions", "margin-top-sm"], [1, "btn-cyan-cart", 3, "click", "disabled"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5"], ["cx", "9", "cy", "21", "r", "1"], ["cx", "20", "cy", "21", "r", "1"], ["d", "M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"], [1, "btn-favorite", 3, "click"], [1, "hovering-sneaker-stage"], [1, "glow-ring"], [1, "floating-img-frame"], [1, "floating-sneaker-img", 3, "error", "src", "alt"], [1, "shadow-ellipse"], [1, "thumbnail-carousel-glass"], [1, "carousel-label"], [1, "thumb-list"], ["class", "thumb-item", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "scroll-down-hint", 3, "click"], [1, "arrow-down"], [1, "size-selector-box"], [1, "selector-label"], [1, "size-chips-grid"], ["class", "size-pill", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "size-pill", 3, "click"], [1, "thumb-item", 3, "click"], [3, "error", "src", "alt"], [1, "thumb-meta"], [1, "thumb-title"], [1, "thumb-price"], [1, "trend-card", "glass-card-hover"], [1, "card-badge"], [1, "card-img-box", 3, "click"], [1, "card-details"], [1, "card-subtitle"], [1, "card-title"], [1, "card-price-bar"], [1, "card-price"], [1, "btn-quick-buy", 3, "click"], [1, "modal-backdrop", 3, "click"], [1, "modal-card", "glass-modal", 3, "click"], [1, "modal-header"], [1, "modal-title-box"], [1, "modal-brand-badge"], ["title", "Cerrar ventana de detalles", 1, "btn-close-x", 3, "click"], [1, "modal-body", "margin-top"], [1, "modal-grid-2"], [1, "modal-img-container"], [1, "modal-info-container"], [1, "modal-cat"], [1, "modal-material"], [1, "modal-price-box"], [1, "modal-price"], [1, "modal-desc"], ["class", "modal-tallas-box", 4, "ngIf"], [1, "modal-actions-bar", "margin-top"], [1, "btn-cyan-cart", "flex-1", 3, "click"], [1, "btn-cancel-modal", 3, "click"], [1, "modal-tallas-box"]], template: function TendenciasComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "div", 1)(2, "div", 2)(3, "div", 3);
        \u0275\u0275template(4, TendenciasComponent_section_4_Template, 50, 20, "section", 4);
        \u0275\u0275elementStart(5, "section", 5)(6, "div", 6)(7, "div", 7);
        \u0275\u0275text(8, "CAT\xC1LOGO EN TENDENCIA 2026");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "h2", 8);
        \u0275\u0275text(10, "TENDENCIAS URBANAS");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "p", 9);
        \u0275\u0275text(12, "Selecci\xF3n destacada conectada en tiempo real a tu base de datos SQL Server");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "div", 10);
        \u0275\u0275template(14, TendenciasComponent_div_14_Template, 16, 10, "div", 11);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(15, TendenciasComponent_div_15_Template, 38, 13, "div", 12);
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", ctx.productoHero);
        \u0275\u0275advance(10);
        \u0275\u0275property("ngForOf", ctx.productosDB);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.mostrarModal && ctx.productoModal);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, DecimalPipe, RouterModule, FormsModule], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  background: #060913;\n  color: #ffffff;\n  min-height: 100vh;\n  overflow-x: hidden;\n  font-family:\n    "Outfit",\n    "Segoe UI",\n    system-ui,\n    sans-serif;\n}\n.trends-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  min-height: 100vh;\n  padding-bottom: 5rem;\n}\n.fluid-blob[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  filter: blur(120px);\n  opacity: 0.45;\n  z-index: 0;\n  pointer-events: none;\n  animation: _ngcontent-%COMP%_floatBlob 12s infinite alternate ease-in-out;\n}\n.blob-1[_ngcontent-%COMP%] {\n  width: 550px;\n  height: 550px;\n  background:\n    radial-gradient(\n      circle,\n      #ec4899 0%,\n      #8b5cf6 100%);\n  top: -100px;\n  left: -100px;\n}\n.blob-2[_ngcontent-%COMP%] {\n  width: 600px;\n  height: 600px;\n  background:\n    radial-gradient(\n      circle,\n      #3b82f6 0%,\n      #06b6d4 100%);\n  top: 250px;\n  right: -150px;\n  animation-delay: -4s;\n}\n.blob-3[_ngcontent-%COMP%] {\n  width: 500px;\n  height: 500px;\n  background:\n    radial-gradient(\n      circle,\n      #f97316 0%,\n      #ec4899 100%);\n  bottom: 100px;\n  left: 20%;\n  animation-delay: -8s;\n}\n@keyframes _ngcontent-%COMP%_floatBlob {\n  0% {\n    transform: translate(0, 0) scale(1);\n  }\n  100% {\n    transform: translate(60px, 80px) scale(1.12);\n  }\n}\n.hero-heroic[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: calc(100vh - 80px);\n  padding: 3rem 2rem;\n  max-width: 1380px;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  z-index: 1;\n}\n.giant-glass-title[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -55%);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-size: clamp(3.5rem, 10vw, 9.5rem);\n  font-weight: 900;\n  line-height: 0.85;\n  letter-spacing: -0.04em;\n  opacity: 0.12;\n  pointer-events: none;\n  -webkit-user-select: none;\n  user-select: none;\n  white-space: nowrap;\n  text-transform: uppercase;\n  z-index: 0;\n}\n.gradient-text[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #ec4899,\n      #3b82f6,\n      #f97316);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.hero-main-layout[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  display: grid;\n  grid-template-columns: 380px 1fr 300px;\n  align-items: center;\n  gap: 2rem;\n  margin-top: 1rem;\n}\n@media (max-width: 1180px) {\n  .hero-main-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    justify-items: center;\n  }\n}\n.product-info-glass[_ngcontent-%COMP%] {\n  background: rgba(15, 23, 42, 0.75);\n  backdrop-filter: blur(24px);\n  -webkit-backdrop-filter: blur(24px);\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  border-radius: 1.5rem;\n  padding: 2rem;\n  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);\n}\n.drop-tag[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 0.75rem;\n  font-weight: 800;\n  letter-spacing: 0.12em;\n  color: #06b6d4;\n  background: rgba(6, 182, 212, 0.15);\n  border: 1px solid rgba(6, 182, 212, 0.3);\n  padding: 0.35rem 0.85rem;\n  border-radius: 2rem;\n  margin-bottom: 1rem;\n}\n.main-shoe-title[_ngcontent-%COMP%] {\n  font-size: 2.1rem;\n  font-weight: 900;\n  margin: 0;\n  color: #ffffff;\n  line-height: 1.15;\n}\n.main-shoe-sub[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  font-size: 0.9rem;\n  margin: 0.4rem 0 1rem 0;\n}\n.price-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 0.5rem;\n  margin-bottom: 1rem;\n}\n.price-symbol[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 700;\n  color: #06b6d4;\n}\n.price-amount[_ngcontent-%COMP%] {\n  font-size: 2.2rem;\n  font-weight: 900;\n  color: #ffffff;\n}\n.old-price[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #64748b;\n  text-decoration: line-through;\n  margin-left: 0.5rem;\n}\n.description[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #cbd5e1;\n  line-height: 1.55;\n  margin-bottom: 1.25rem;\n}\n.size-selector-box[_ngcontent-%COMP%] {\n  margin-bottom: 1.25rem;\n}\n.selector-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.78rem;\n  font-weight: 700;\n  color: #94a3b8;\n  margin-bottom: 0.5rem;\n}\n.size-chips-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.size-pill[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.08);\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  color: #f8fafc;\n  padding: 0.35rem 0.75rem;\n  border-radius: 0.6rem;\n  font-size: 0.8rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.size-pill[_ngcontent-%COMP%]:hover, .size-pill.active[_ngcontent-%COMP%] {\n  background: #06b6d4;\n  border-color: #06b6d4;\n  color: #ffffff;\n  box-shadow: 0 0 12px rgba(6, 182, 212, 0.5);\n}\n.card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.85rem;\n}\n.btn-cyan-cart[_ngcontent-%COMP%] {\n  flex: 1;\n  background:\n    linear-gradient(\n      135deg,\n      #06b6d4 0%,\n      #3b82f6 100%);\n  color: #ffffff;\n  border: none;\n  padding: 0.85rem 1.25rem;\n  border-radius: 0.85rem;\n  font-weight: 800;\n  font-size: 0.95rem;\n  letter-spacing: 0.05em;\n  cursor: pointer;\n  box-shadow: 0 8px 25px rgba(6, 182, 212, 0.4);\n  transition: all 0.3s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.6rem;\n}\n.btn-cyan-cart[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n.btn-cyan-cart[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 12px 30px rgba(6, 182, 212, 0.6);\n  background:\n    linear-gradient(\n      135deg,\n      #0891b2 0%,\n      #2563eb 100%);\n}\n.btn-favorite[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  border-radius: 0.85rem;\n  width: 48px;\n  height: 48px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  font-size: 1.2rem;\n  transition: background 0.2s;\n}\n.btn-favorite[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.2);\n}\n.hovering-sneaker-stage[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem 0;\n  width: 100%;\n}\n.glow-ring[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 340px;\n  height: 340px;\n  border-radius: 50%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(236, 72, 153, 0.35) 0%,\n      rgba(6, 182, 212, 0.15) 70%,\n      transparent 100%);\n  filter: blur(35px);\n  animation: _ngcontent-%COMP%_pulseGlow 4s infinite alternate ease-in-out;\n}\n@keyframes _ngcontent-%COMP%_pulseGlow {\n  0% {\n    transform: scale(0.85);\n    opacity: 0.5;\n  }\n  100% {\n    transform: scale(1.15);\n    opacity: 0.9;\n  }\n}\n.floating-img-frame[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  max-width: 500px;\n  height: 340px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 2;\n}\n.floating-sneaker-img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 100%;\n  object-fit: contain;\n  filter: drop-shadow(0 25px 35px rgba(0, 0, 0, 0.75));\n  animation: _ngcontent-%COMP%_levitateSneaker 5s infinite alternate ease-in-out;\n}\n@keyframes _ngcontent-%COMP%_levitateSneaker {\n  0% {\n    transform: translateY(0px) rotate(-4deg);\n  }\n  100% {\n    transform: translateY(-20px) rotate(2deg);\n  }\n}\n.shadow-ellipse[_ngcontent-%COMP%] {\n  width: 280px;\n  height: 20px;\n  background: rgba(0, 0, 0, 0.7);\n  border-radius: 50%;\n  filter: blur(12px);\n  margin-top: 1rem;\n  animation: _ngcontent-%COMP%_shadowPulse 5s infinite alternate ease-in-out;\n}\n@keyframes _ngcontent-%COMP%_shadowPulse {\n  0% {\n    transform: scale(1);\n    opacity: 0.8;\n  }\n  100% {\n    transform: scale(0.65);\n    opacity: 0.3;\n  }\n}\n.thumbnail-carousel-glass[_ngcontent-%COMP%] {\n  background: rgba(15, 23, 42, 0.75);\n  -webkit-backdrop-filter: blur(24px);\n  backdrop-filter: blur(24px);\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  border-radius: 1.5rem;\n  padding: 1.5rem;\n  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);\n  max-height: 480px;\n  overflow-y: auto;\n}\n.carousel-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.75rem;\n  font-weight: 800;\n  letter-spacing: 0.08em;\n  color: #94a3b8;\n  margin-bottom: 1rem;\n}\n.thumb-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.85rem;\n}\n.thumb-item[_ngcontent-%COMP%] {\n  height: 72px;\n  border-radius: 0.85rem;\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  overflow: hidden;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.4rem;\n}\n.thumb-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 60px;\n  width: 60px;\n  object-fit: contain;\n  border-radius: 0.5rem;\n}\n.thumb-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.thumb-title[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 700;\n  color: #ffffff;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.thumb-price[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 800;\n  color: #06b6d4;\n}\n.thumb-item[_ngcontent-%COMP%]:hover, .thumb-item.active[_ngcontent-%COMP%] {\n  border-color: #ec4899;\n  background: rgba(236, 72, 153, 0.18);\n  box-shadow: 0 0 15px rgba(236, 72, 153, 0.4);\n}\n.scroll-down-hint[_ngcontent-%COMP%] {\n  align-self: center;\n  margin-top: 2.5rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.4rem;\n  color: #94a3b8;\n  font-size: 0.78rem;\n  font-weight: 800;\n  letter-spacing: 0.1em;\n  cursor: pointer;\n  transition: color 0.2s;\n  z-index: 2;\n}\n.scroll-down-hint[_ngcontent-%COMP%]:hover {\n  color: #06b6d4;\n}\n.arrow-down[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  animation: _ngcontent-%COMP%_bounceArrow 1.5s infinite ease-in-out;\n}\n@keyframes _ngcontent-%COMP%_bounceArrow {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(6px);\n  }\n}\n.trends-vertical-section[_ngcontent-%COMP%] {\n  max-width: 1380px;\n  margin: 5rem auto 0 auto;\n  padding: 0 2rem;\n  position: relative;\n  z-index: 2;\n}\n.section-title-wrap[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 3.5rem;\n}\n.subtitle-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  background:\n    linear-gradient(\n      90deg,\n      #ec4899,\n      #8b5cf6);\n  color: #ffffff;\n  font-size: 0.78rem;\n  font-weight: 800;\n  padding: 0.35rem 1rem;\n  border-radius: 999px;\n  letter-spacing: 0.15em;\n  margin-bottom: 0.85rem;\n  box-shadow: 0 4px 15px rgba(236, 72, 153, 0.4);\n}\n.section-glow-header[_ngcontent-%COMP%] {\n  font-size: 3.5rem;\n  font-weight: 900;\n  letter-spacing: -0.02em;\n  margin: 0;\n  background:\n    linear-gradient(\n      180deg,\n      #ffffff 0%,\n      #94a3b8 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.section-desc[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  font-size: 1.05rem;\n  margin-top: 0.5rem;\n}\n.trends-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 2rem;\n}\n.trend-card[_ngcontent-%COMP%] {\n  position: relative;\n  background: rgba(15, 23, 42, 0.75);\n  -webkit-backdrop-filter: blur(16px);\n  backdrop-filter: blur(16px);\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  border-radius: 1.5rem;\n  padding: 1.5rem;\n  overflow: hidden;\n  transition: all 0.35s ease;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.trend-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-8px);\n  border-color: rgba(6, 182, 212, 0.5);\n  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.6), 0 0 25px rgba(6, 182, 212, 0.2);\n}\n.card-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1.25rem;\n  left: 1.25rem;\n  background: rgba(255, 255, 255, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  color: #38bdf8;\n  font-size: 0.72rem;\n  font-weight: 800;\n  padding: 0.25rem 0.65rem;\n  border-radius: 0.5rem;\n  z-index: 2;\n}\n.card-img-box[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 210px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 1rem 0;\n  cursor: pointer;\n}\n.card-img-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 100%;\n  max-width: 100%;\n  object-fit: contain;\n  transition: transform 0.35s ease;\n}\n.trend-card[_ngcontent-%COMP%]:hover   .card-img-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: scale(1.1) rotate(-3deg);\n}\n.card-details[_ngcontent-%COMP%] {\n  border-top: 1px solid rgba(255, 255, 255, 0.08);\n  padding-top: 1rem;\n}\n.card-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #94a3b8;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n.card-title[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 800;\n  color: #ffffff;\n  margin: 0.2rem 0 0.85rem 0;\n}\n.card-price-bar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.card-price[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 900;\n  color: #38bdf8;\n}\n.btn-quick-buy[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.08);\n  color: #ffffff;\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  padding: 0.45rem 0.9rem;\n  border-radius: 0.65rem;\n  font-size: 0.82rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.25s ease;\n}\n.btn-quick-buy[_ngcontent-%COMP%]:hover {\n  background: #06b6d4;\n  border-color: #06b6d4;\n  color: #ffffff;\n}\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background: rgba(0, 0, 0, 0.8);\n  -webkit-backdrop-filter: blur(12px);\n  backdrop-filter: blur(12px);\n  z-index: 9999;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 1.5rem;\n}\n.glass-modal[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 780px;\n  max-height: 90vh;\n  overflow-y: auto;\n  background: #111827;\n  border-radius: 1.75rem;\n  padding: 2rem;\n  border: 1px solid rgba(255, 255, 255, 0.18);\n  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.9);\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n  padding-bottom: 1rem;\n}\n.modal-title-box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.2rem;\n}\n.modal-brand-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: rgba(6, 182, 212, 0.15);\n  color: #06b6d4;\n  font-size: 0.72rem;\n  font-weight: 800;\n  padding: 0.2rem 0.6rem;\n  border-radius: 0.4rem;\n  width: fit-content;\n  text-transform: uppercase;\n}\n.modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.5rem;\n  font-weight: 900;\n  color: #ffffff;\n}\n.btn-close-x[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  color: #ffffff;\n  width: 42px;\n  height: 42px;\n  border-radius: 50%;\n  font-size: 1.3rem;\n  font-weight: 700;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.25s ease;\n}\n.btn-close-x[_ngcontent-%COMP%]:hover {\n  background: #ef4444;\n  border-color: #ef4444;\n  color: #ffffff;\n  transform: rotate(90deg) scale(1.1);\n}\n.modal-grid-2[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1.5rem;\n  align-items: center;\n}\n@media (max-width: 768px) {\n  .modal-grid-2[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.modal-img-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 260px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(255, 255, 255, 0.03);\n  border-radius: 1.25rem;\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  padding: 1rem;\n}\n.modal-img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 100%;\n  max-width: 100%;\n  object-fit: contain;\n}\n.modal-cat[_ngcontent-%COMP%], .modal-material[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #94a3b8;\n  margin: 0 0 0.4rem 0;\n}\n.modal-cat[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .modal-material[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #f8fafc;\n}\n.modal-price-box[_ngcontent-%COMP%] {\n  margin: 1rem 0;\n}\n.modal-price[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 900;\n  color: #06b6d4;\n}\n.modal-desc[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #cbd5e1;\n  line-height: 1.55;\n  margin-bottom: 1.25rem;\n}\n.modal-tallas-box[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.78rem;\n  font-weight: 700;\n  color: #94a3b8;\n  margin-bottom: 0.5rem;\n}\n.modal-actions-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.85rem;\n}\n.flex-1[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.btn-cancel-modal[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.08);\n  color: #cbd5e1;\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  padding: 0.85rem 1.3rem;\n  border-radius: 0.85rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn-cancel-modal[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.18);\n  color: #ffffff;\n}\n.margin-top-sm[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n/*# sourceMappingURL=tendencias.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TendenciasComponent, { className: "TendenciasComponent", filePath: "src\\app\\features\\trends\\tendencias.component.ts", lineNumber: 720 });
})();
export {
  TendenciasComponent
};
//# sourceMappingURL=chunk-AUXI7MO4.js.map
