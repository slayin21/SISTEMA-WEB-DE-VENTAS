import {
  ProductoService
} from "./chunk-7IYHPI4O.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-J5QRST4F.js";
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
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-EH6AJVCA.js";

// src/app/features/catalog/catalogo.component.ts
var _c0 = (a0) => ["/producto", a0];
function CatalogoComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 23)(2, "span", 24);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h1");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 25);
    \u0275\u0275listener("click", function CatalogoComponent_div_2_Template_button_click_8_listener() {
      const s_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.filtrarPorSlide(s_r2.categoriaId));
    });
    \u0275\u0275text(9, " Ver Colecci\xF3n ");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(10, "svg", 26);
    \u0275\u0275element(11, "line", 27)(12, "polyline", 28);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const s_r2 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("background-image", "linear-gradient(to right, rgba(15, 23, 42, 0.95), rgba(15, 23, 42, 0.35)), url(" + s_r2.imagen + ")");
    \u0275\u0275classProp("active", i_r4 === ctx_r2.slideActual);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(s_r2.badge);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r2.titulo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r2.subtitulo);
  }
}
function CatalogoComponent_span_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 29);
    \u0275\u0275listener("click", function CatalogoComponent_span_8_Template_span_click_0_listener() {
      const i_r6 = \u0275\u0275restoreView(_r5).index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.irASlide(i_r6));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r6 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", i_r6 === ctx_r2.slideActual);
  }
}
function CatalogoComponent_div_33_option_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r8 = ctx.$implicit;
    \u0275\u0275property("value", m_r8);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(m_r8);
  }
}
function CatalogoComponent_div_33_option_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r9 = ctx.$implicit;
    \u0275\u0275property("value", t_r9);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Talla ", t_r9, "");
  }
}
function CatalogoComponent_div_33_option_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const g_r10 = ctx.$implicit;
    \u0275\u0275property("value", g_r10);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(g_r10);
  }
}
function CatalogoComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 31)(2, "label");
    \u0275\u0275text(3, "Marca");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "select", 32);
    \u0275\u0275twoWayListener("ngModelChange", function CatalogoComponent_div_33_Template_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.marcaSeleccionada, $event) || (ctx_r2.marcaSeleccionada = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function CatalogoComponent_div_33_Template_select_change_4_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.aplicarFiltros());
    });
    \u0275\u0275elementStart(5, "option", 33);
    \u0275\u0275text(6, "Todas las Marcas");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, CatalogoComponent_div_33_option_7_Template, 2, 2, "option", 34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 31)(9, "label");
    \u0275\u0275text(10, "Talla Disponible");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "select", 32);
    \u0275\u0275twoWayListener("ngModelChange", function CatalogoComponent_div_33_Template_select_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.tallaSeleccionada, $event) || (ctx_r2.tallaSeleccionada = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function CatalogoComponent_div_33_Template_select_change_11_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.aplicarFiltros());
    });
    \u0275\u0275elementStart(12, "option", 33);
    \u0275\u0275text(13, "Todas las Tallas");
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, CatalogoComponent_div_33_option_14_Template, 2, 2, "option", 34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 31)(16, "label");
    \u0275\u0275text(17, "G\xE9nero");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "select", 32);
    \u0275\u0275twoWayListener("ngModelChange", function CatalogoComponent_div_33_Template_select_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.generoSeleccionado, $event) || (ctx_r2.generoSeleccionado = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function CatalogoComponent_div_33_Template_select_change_18_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.aplicarFiltros());
    });
    \u0275\u0275elementStart(19, "option", 33);
    \u0275\u0275text(20, "Todos los G\xE9neros");
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, CatalogoComponent_div_33_option_21_Template, 2, 2, "option", 34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 35)(23, "label");
    \u0275\u0275text(24, "Rango de Precio (S/)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 36)(26, "input", 37);
    \u0275\u0275twoWayListener("ngModelChange", function CatalogoComponent_div_33_Template_input_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.minPrecio, $event) || (ctx_r2.minPrecio = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function CatalogoComponent_div_33_Template_input_change_26_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.aplicarFiltros());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span");
    \u0275\u0275text(28, "-");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "input", 38);
    \u0275\u0275twoWayListener("ngModelChange", function CatalogoComponent_div_33_Template_input_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.maxPrecio, $event) || (ctx_r2.maxPrecio = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function CatalogoComponent_div_33_Template_input_change_29_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.aplicarFiltros());
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "div", 39)(31, "button", 40);
    \u0275\u0275listener("click", function CatalogoComponent_div_33_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.limpiarFiltros());
    });
    \u0275\u0275text(32, "Limpiar Filtros");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.marcaSeleccionada);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.marcasDisponibles);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.tallaSeleccionada);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.tallasDisponibles);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.generoSeleccionado);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.generosDisponibles);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.minPrecio);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.maxPrecio);
  }
}
function CatalogoComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275element(1, "div", 43);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Cargando cat\xE1logo...");
    \u0275\u0275elementEnd()();
  }
}
function CatalogoComponent_div_35_div_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 62);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const producto_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(producto_r11.marca);
  }
}
function CatalogoComponent_div_35_div_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const producto_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(producto_r11.genero);
  }
}
function CatalogoComponent_div_35_div_1_p_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 64);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const producto_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Material: ", producto_r11.material, "");
  }
}
function CatalogoComponent_div_35_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46)(1, "div", 47);
    \u0275\u0275element(2, "img", 48);
    \u0275\u0275template(3, CatalogoComponent_div_35_div_1_span_3_Template, 2, 1, "span", 49)(4, CatalogoComponent_div_35_div_1_span_4_Template, 2, 1, "span", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 51)(6, "span", 52);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "h3", 53);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, CatalogoComponent_div_35_div_1_p_10_Template, 2, 1, "p", 54);
    \u0275\u0275elementStart(11, "div", 55)(12, "div", 56)(13, "span", 57);
    \u0275\u0275text(14, "Desde");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 58);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "a", 59);
    \u0275\u0275text(19, " Ver Detalle ");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(20, "svg", 60);
    \u0275\u0275element(21, "polyline", 61);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const producto_r11 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r2.obtenerImagenPrincipal(producto_r11), \u0275\u0275sanitizeUrl)("alt", producto_r11.nombre);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", producto_r11.marca);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", producto_r11.genero);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((producto_r11.categoria == null ? null : producto_r11.categoria.nombre) || "Calzado");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(producto_r11.nombre);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", producto_r11.material);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("S/ ", \u0275\u0275pipeBind2(17, 9, ctx_r2.obtenerPrecioMinimo(producto_r11), "1.2-2"), "");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(12, _c0, producto_r11.idProducto));
  }
}
function CatalogoComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275template(1, CatalogoComponent_div_35_div_1_Template, 22, 14, "div", 45);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.productosFiltrados);
  }
}
function CatalogoComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 65)(1, "p");
    \u0275\u0275text(2, "No se encontraron productos que coincidan con tu b\xFAsqueda.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 66);
    \u0275\u0275listener("click", function CatalogoComponent_div_36_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.limpiarFiltros());
    });
    \u0275\u0275text(4, "Ver todos los productos");
    \u0275\u0275elementEnd()();
  }
}
var CatalogoComponent = class _CatalogoComponent {
  constructor(productoService) {
    this.productoService = productoService;
    this.productos = [];
    this.productosFiltrados = [];
    this.cargando = true;
    this.mostrarFiltrosAvanzados = false;
    this.slides = [
      {
        imagen: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=1400",
        badge: "\u2728 COLECCI\xD3N 2026",
        titulo: "Zapatillas Urbanas de Alta Gama",
        subtitulo: "Estilo contempor\xE1neo, comodidad inigualable y las mejores marcas internacionales.",
        categoriaId: 1
      },
      {
        imagen: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&q=80&w=1400",
        badge: "\u{1F454} L\xCDNEA EJECUTIVA & FORMAL",
        titulo: "100% Cuero Vacuno de Calidad Superior",
        subtitulo: "Elegancia cl\xE1sica y acabado artesanal para tus momentos m\xE1s importantes.",
        categoriaId: 3
      },
      {
        imagen: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=1400",
        badge: "\u26A1 ALTO RENDIMIENTO",
        titulo: "Calzado Deportivo & Running",
        subtitulo: "Tecnolog\xEDa de amortiguaci\xF3n avanzada para superar tus propios l\xEDmites.",
        categoriaId: 2
      },
      {
        imagen: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&q=80&w=1400",
        badge: "\u{1F97E} OUTDOOR & TERTULIA",
        titulo: "Botas T\xE1cticas y Calzado Confort",
        subtitulo: "Resistencia todo terreno y m\xE1xima durabilidad para cada aventura.",
        categoriaId: 5
      }
    ];
    this.slideActual = 0;
    this.query = "";
    this.categoriaId = null;
    this.marcaSeleccionada = "";
    this.minPrecio = null;
    this.maxPrecio = null;
    this.tallaSeleccionada = "";
    this.generoSeleccionado = "";
    this.marcasDisponibles = ["Nike", "Adidas", "Puma", "Vans", "Reebok", "Converse", "Timberland", "Joselito Premium"];
    this.tallasDisponibles = ["36", "37", "38", "39", "40", "41", "42", "43"];
    this.generosDisponibles = ["Hombre", "Mujer", "Unisex"];
  }
  ngOnInit() {
    this.cargarProductos();
    this.iniciarAutoplay();
  }
  ngOnDestroy() {
    if (this.intervaloCarrusel) {
      clearInterval(this.intervaloCarrusel);
    }
  }
  iniciarAutoplay() {
    this.intervaloCarrusel = setInterval(() => {
      this.siguienteSlide();
    }, 5e3);
  }
  resetAutoplay() {
    if (this.intervaloCarrusel) {
      clearInterval(this.intervaloCarrusel);
    }
    this.iniciarAutoplay();
  }
  siguienteSlide() {
    this.slideActual = (this.slideActual + 1) % this.slides.length;
  }
  anteriorSlide() {
    this.slideActual = (this.slideActual - 1 + this.slides.length) % this.slides.length;
    this.resetAutoplay();
  }
  irASlide(index) {
    this.slideActual = index;
    this.resetAutoplay();
  }
  filtrarPorSlide(catId) {
    this.categoriaId = catId;
    this.aplicarFiltros();
  }
  cargarProductos() {
    this.cargando = true;
    this.productoService.obtenerTodos().subscribe({
      next: (data) => {
        this.productos = data;
        this.productosFiltrados = data;
        this.cargando = false;
      },
      error: (err) => {
        console.error("Error al cargar productos", err);
        this.cargando = false;
      }
    });
  }
  aplicarFiltros() {
    this.cargando = true;
    this.productoService.buscarConFiltros({
      query: this.query,
      categoriaId: this.categoriaId || void 0,
      marca: this.marcaSeleccionada || void 0,
      minPrecio: this.minPrecio || void 0,
      maxPrecio: this.maxPrecio || void 0,
      talla: this.tallaSeleccionada || void 0,
      genero: this.generoSeleccionado || void 0
    }).subscribe({
      next: (data) => {
        this.productosFiltrados = data;
        this.cargando = false;
      },
      error: (err) => {
        console.error("Error al filtrar productos", err);
        this.cargando = false;
      }
    });
  }
  limpiarFiltros() {
    this.query = "";
    this.categoriaId = null;
    this.marcaSeleccionada = "";
    this.minPrecio = null;
    this.maxPrecio = null;
    this.tallaSeleccionada = "";
    this.generoSeleccionado = "";
    this.cargarProductos();
  }
  toggleFiltrosAvanzados() {
    this.mostrarFiltrosAvanzados = !this.mostrarFiltrosAvanzados;
  }
  obtenerPrecioMinimo(producto) {
    if (!producto.variantes || producto.variantes.length === 0)
      return 0;
    return Math.min(...producto.variantes.map((v) => v.precio));
  }
  obtenerImagenPrincipal(producto) {
    if (!producto.imagenes || producto.imagenes.length === 0) {
      return "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=600";
    }
    const principal = producto.imagenes.find((img) => img.esPrincipal);
    return principal ? principal.urlImagen : producto.imagenes[0].urlImagen;
  }
  static {
    this.\u0275fac = function CatalogoComponent_Factory(t) {
      return new (t || _CatalogoComponent)(\u0275\u0275directiveInject(ProductoService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CatalogoComponent, selectors: [["app-catalogo"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 37, vars: 20, consts: [[1, "catalog-container"], [1, "catalog-hero-carousel"], ["class", "carousel-slide", 3, "active", "backgroundImage", 4, "ngFor", "ngForOf"], ["aria-label", "Anterior", 1, "carousel-control", "prev", 3, "click"], ["aria-label", "Siguiente", 1, "carousel-control", "next", 3, "click"], [1, "carousel-indicators"], ["class", "dot", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "filter-section", "glass-panel"], [1, "filter-main-bar"], [1, "search-box"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "search-icon"], ["cx", "11", "cy", "11", "r", "8"], ["x1", "21", "y1", "21", "x2", "16.65", "y2", "16.65"], ["type", "text", "placeholder", "Buscar calzado por nombre, marca o material...", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "btn-search", 3, "click"], [1, "btn-toggle-filters", 3, "click"], [1, "category-pills"], [3, "click"], ["class", "advanced-filters-grid", 4, "ngIf"], ["class", "loading-spinner", 4, "ngIf"], ["class", "products-grid", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], [1, "carousel-slide"], [1, "hero-content"], [1, "hero-badge"], [1, "btn-hero-cta", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", 1, "cta-icon"], ["x1", "5", "y1", "12", "x2", "19", "y2", "12"], ["points", "12 5 19 12 12 19"], [1, "dot", 3, "click"], [1, "advanced-filters-grid"], [1, "filter-group"], [1, "filter-select", 3, "ngModelChange", "change", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "filter-group", "price-range"], [1, "price-inputs"], ["type", "number", "placeholder", "Min", 1, "price-control", 3, "ngModelChange", "change", "ngModel"], ["type", "number", "placeholder", "Max", 1, "price-control", 3, "ngModelChange", "change", "ngModel"], [1, "filter-actions"], [1, "btn-clear", 3, "click"], [3, "value"], [1, "loading-spinner"], [1, "spinner"], [1, "products-grid"], ["class", "product-card", 4, "ngFor", "ngForOf"], [1, "product-card"], [1, "card-image-wrapper"], [3, "src", "alt"], ["class", "badge-brand", 4, "ngIf"], ["class", "badge-gender", 4, "ngIf"], [1, "card-body"], [1, "category-label"], [1, "product-title"], ["class", "product-material", 4, "ngIf"], [1, "card-footer"], [1, "price-container"], [1, "price-label"], [1, "price-amount"], [1, "btn-detail", 3, "routerLink"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["points", "9 18 15 12 9 6"], [1, "badge-brand"], [1, "badge-gender"], [1, "product-material"], [1, "empty-state"], [1, "btn-clear-empty", 3, "click"]], template: function CatalogoComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1);
        \u0275\u0275template(2, CatalogoComponent_div_2_Template, 13, 7, "div", 2);
        \u0275\u0275elementStart(3, "button", 3);
        \u0275\u0275listener("click", function CatalogoComponent_Template_button_click_3_listener() {
          return ctx.anteriorSlide();
        });
        \u0275\u0275text(4, "\u2039");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "button", 4);
        \u0275\u0275listener("click", function CatalogoComponent_Template_button_click_5_listener() {
          return ctx.siguienteSlide();
        });
        \u0275\u0275text(6, "\u203A");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 5);
        \u0275\u0275template(8, CatalogoComponent_span_8_Template, 1, 2, "span", 6);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 7)(10, "div", 8)(11, "div", 9);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(12, "svg", 10);
        \u0275\u0275element(13, "circle", 11)(14, "line", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(15, "input", 13);
        \u0275\u0275twoWayListener("ngModelChange", function CatalogoComponent_Template_input_ngModelChange_15_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.query, $event) || (ctx.query = $event);
          return $event;
        });
        \u0275\u0275listener("keyup.enter", function CatalogoComponent_Template_input_keyup_enter_15_listener() {
          return ctx.aplicarFiltros();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "button", 14);
        \u0275\u0275listener("click", function CatalogoComponent_Template_button_click_16_listener() {
          return ctx.aplicarFiltros();
        });
        \u0275\u0275text(17, "Buscar");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "button", 15);
        \u0275\u0275listener("click", function CatalogoComponent_Template_button_click_18_listener() {
          return ctx.toggleFiltrosAvanzados();
        });
        \u0275\u0275text(19);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 16)(21, "button", 17);
        \u0275\u0275listener("click", function CatalogoComponent_Template_button_click_21_listener() {
          ctx.categoriaId = null;
          return ctx.aplicarFiltros();
        });
        \u0275\u0275text(22, "Todos");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "button", 17);
        \u0275\u0275listener("click", function CatalogoComponent_Template_button_click_23_listener() {
          ctx.categoriaId = 1;
          return ctx.aplicarFiltros();
        });
        \u0275\u0275text(24, "Urbano");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "button", 17);
        \u0275\u0275listener("click", function CatalogoComponent_Template_button_click_25_listener() {
          ctx.categoriaId = 2;
          return ctx.aplicarFiltros();
        });
        \u0275\u0275text(26, "Deportivo");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "button", 17);
        \u0275\u0275listener("click", function CatalogoComponent_Template_button_click_27_listener() {
          ctx.categoriaId = 3;
          return ctx.aplicarFiltros();
        });
        \u0275\u0275text(28, "Formal");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "button", 17);
        \u0275\u0275listener("click", function CatalogoComponent_Template_button_click_29_listener() {
          ctx.categoriaId = 4;
          return ctx.aplicarFiltros();
        });
        \u0275\u0275text(30, "Sandalias");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "button", 17);
        \u0275\u0275listener("click", function CatalogoComponent_Template_button_click_31_listener() {
          ctx.categoriaId = 5;
          return ctx.aplicarFiltros();
        });
        \u0275\u0275text(32, "Botas");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(33, CatalogoComponent_div_33_Template, 33, 8, "div", 18);
        \u0275\u0275elementEnd();
        \u0275\u0275template(34, CatalogoComponent_div_34_Template, 4, 0, "div", 19)(35, CatalogoComponent_div_35_Template, 2, 1, "div", 20)(36, CatalogoComponent_div_36_Template, 5, 0, "div", 21);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.slides);
        \u0275\u0275advance(6);
        \u0275\u0275property("ngForOf", ctx.slides);
        \u0275\u0275advance(7);
        \u0275\u0275twoWayProperty("ngModel", ctx.query);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", ctx.mostrarFiltrosAvanzados ? "Ocultar Filtros" : "Filtros Avanzados", " ");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.categoriaId === null);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.categoriaId === 1);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.categoriaId === 2);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.categoriaId === 3);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.categoriaId === 4);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.categoriaId === 5);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.mostrarFiltrosAvanzados);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.cargando);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.cargando);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.cargando && ctx.productosFiltrados.length === 0);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, DecimalPipe, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, RouterLink], styles: ['\n\n[_nghost-%COMP%] {\n  font-family: "Outfit", sans-serif;\n  display: block;\n  background-color: #0b0f19;\n  color: #f3f4f6;\n  min-height: 100vh;\n}\n.catalog-container[_ngcontent-%COMP%] {\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 2rem 1.5rem;\n}\n.catalog-hero-carousel[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 400px;\n  border-radius: 24px;\n  overflow: hidden;\n  margin-bottom: 2.5rem;\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5), 0 0 30px rgba(99, 102, 241, 0.15);\n  border: 1px solid rgba(255, 255, 255, 0.12);\n}\n.carousel-slide[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-size: cover;\n  background-position: center;\n  opacity: 0;\n  transition: opacity 0.8s ease-in-out, transform 0.8s ease;\n  transform: scale(1.03);\n  display: flex;\n  align-items: center;\n  padding: 0 4rem;\n  pointer-events: none;\n}\n.carousel-slide.active[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: scale(1);\n  pointer-events: auto;\n}\n.hero-content[_ngcontent-%COMP%] {\n  max-width: 640px;\n  z-index: 2;\n}\n.hero-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  background:\n    linear-gradient(\n      90deg,\n      #6366f1,\n      #a855f7);\n  color: #fff;\n  font-size: 0.8rem;\n  font-weight: 700;\n  padding: 0.4rem 1.1rem;\n  border-radius: 999px;\n  text-transform: uppercase;\n  letter-spacing: 1.5px;\n  margin-bottom: 1.25rem;\n  box-shadow: 0 4px 15px rgba(99, 102, 241, 0.4);\n}\n.hero-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2.6rem;\n  font-weight: 800;\n  line-height: 1.15;\n  margin: 0 0 1rem 0;\n  color: #ffffff;\n  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.6);\n  letter-spacing: -0.02em;\n}\n.hero-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #cbd5e1;\n  font-size: 1.1rem;\n  line-height: 1.5;\n  margin-bottom: 1.75rem;\n  text-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);\n}\n.btn-hero-cta[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.65rem;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1 0%,\n      #4f46e5 100%);\n  color: #ffffff;\n  border: none;\n  padding: 0.85rem 1.75rem;\n  border-radius: 14px;\n  font-size: 1rem;\n  font-weight: 700;\n  cursor: pointer;\n  box-shadow: 0 8px 24px rgba(99, 102, 241, 0.4);\n  transition: all 0.3s ease;\n}\n.btn-hero-cta[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 12px 30px rgba(99, 102, 241, 0.6);\n  background:\n    linear-gradient(\n      135deg,\n      #4f46e5 0%,\n      #4338ca 100%);\n}\n.cta-icon[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  transition: transform 0.2s ease;\n}\n.btn-hero-cta[_ngcontent-%COMP%]:hover   .cta-icon[_ngcontent-%COMP%] {\n  transform: translateX(4px);\n}\n.carousel-control[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  background: rgba(15, 23, 42, 0.6);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  color: #ffffff;\n  font-size: 1.75rem;\n  line-height: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  z-index: 5;\n  transition: all 0.25s ease;\n}\n.carousel-control[_ngcontent-%COMP%]:hover {\n  background: rgba(99, 102, 241, 0.85);\n  border-color: #6366f1;\n  transform: translateY(-50%) scale(1.1);\n}\n.carousel-control.prev[_ngcontent-%COMP%] {\n  left: 1.25rem;\n}\n.carousel-control.next[_ngcontent-%COMP%] {\n  right: 1.25rem;\n}\n.carousel-indicators[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 1.25rem;\n  left: 50%;\n  transform: translateX(-50%);\n  display: flex;\n  gap: 0.6rem;\n  z-index: 5;\n}\n.carousel-indicators[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.35);\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.carousel-indicators[_ngcontent-%COMP%]   .dot.active[_ngcontent-%COMP%] {\n  width: 32px;\n  background: #6366f1;\n  box-shadow: 0 0 10px rgba(99, 102, 241, 0.8);\n}\n.filter-section[_ngcontent-%COMP%] {\n  background: #111827;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 20px;\n  padding: 1.5rem;\n  margin-bottom: 2.5rem;\n}\n.filter-main-bar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1rem;\n}\n.search-box[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1;\n  min-width: 280px;\n  display: flex;\n  gap: 0.5rem;\n}\n.search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 1.25rem;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 18px;\n  height: 18px;\n  stroke: #6b7280;\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 0.85rem 1rem 0.85rem 3rem;\n  background: #1f2937;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 14px;\n  color: #fff;\n  font-size: 0.95rem;\n  outline: none;\n}\n.btn-search[_ngcontent-%COMP%] {\n  background: #6366f1;\n  color: white;\n  border: none;\n  padding: 0 1.25rem;\n  border-radius: 12px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.btn-toggle-filters[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.08);\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  color: #e5e7eb;\n  padding: 0.85rem 1.25rem;\n  border-radius: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn-toggle-filters[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.15);\n}\n.category-pills[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  overflow-x: auto;\n  padding-bottom: 0.5rem;\n}\n.category-pills[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: #1f2937;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  color: #9ca3af;\n  padding: 0.55rem 1.25rem;\n  border-radius: 12px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.25s ease;\n}\n.category-pills[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background: #6366f1;\n  color: #fff;\n  border-color: #6366f1;\n}\n.advanced-filters-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 1.25rem;\n  margin-top: 1.25rem;\n  padding-top: 1.25rem;\n  border-top: 1px solid rgba(255, 255, 255, 0.1);\n}\n.filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: #9ca3af;\n  margin-bottom: 0.4rem;\n}\n.filter-select[_ngcontent-%COMP%], .price-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.65rem 0.85rem;\n  background: #1f2937;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 10px;\n  color: white;\n  outline: none;\n}\n.price-inputs[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.filter-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n}\n.btn-clear[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.65rem;\n  background: #ef4444;\n  color: white;\n  border: none;\n  border-radius: 10px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.products-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 2rem;\n}\n.product-card[_ngcontent-%COMP%] {\n  background: #111827;\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 20px;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n}\n.product-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-6px);\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6), 0 0 20px rgba(99, 102, 241, 0.2);\n  border-color: rgba(99, 102, 241, 0.4);\n}\n.card-image-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  height: 240px;\n  overflow: hidden;\n  background: #1f2937;\n}\n.card-image-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.5s ease;\n}\n.product-card[_ngcontent-%COMP%]:hover   .card-image-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: scale(1.08);\n}\n.badge-brand[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  background: rgba(17, 24, 39, 0.85);\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n  color: #e5e7eb;\n  padding: 0.3rem 0.75rem;\n  border-radius: 8px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n}\n.badge-gender[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1rem;\n  left: 1rem;\n  background: rgba(79, 70, 229, 0.85);\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n  color: white;\n  padding: 0.3rem 0.75rem;\n  border-radius: 8px;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.card-body[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\n.category-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  color: #818cf8;\n  font-weight: 600;\n  letter-spacing: 0.5px;\n  margin-bottom: 0.35rem;\n}\n.product-title[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 600;\n  margin: 0 0 0.5rem 0;\n  color: #f9fafb;\n}\n.product-material[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #6b7280;\n  margin-bottom: 1.25rem;\n}\n.card-footer[_ngcontent-%COMP%] {\n  margin-top: auto;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-top: 1rem;\n  border-top: 1px solid rgba(255, 255, 255, 0.06);\n}\n.price-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.price-label[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: #9ca3af;\n  text-transform: uppercase;\n}\n.price-amount[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #10b981;\n}\n.btn-detail[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  background: rgba(99, 102, 241, 0.15);\n  color: #818cf8;\n  padding: 0.55rem 1rem;\n  border-radius: 10px;\n  font-size: 0.85rem;\n  font-weight: 600;\n  text-decoration: none;\n  transition: all 0.25s ease;\n}\n.btn-detail[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n.btn-detail[_ngcontent-%COMP%]:hover {\n  background: #6366f1;\n  color: #fff;\n}\n.loading-spinner[_ngcontent-%COMP%], .empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 4rem 1rem;\n  color: #9ca3af;\n}\n.btn-clear-empty[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  background: #6366f1;\n  color: white;\n  border: none;\n  padding: 0.6rem 1.2rem;\n  border-radius: 10px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 4px solid rgba(255, 255, 255, 0.1);\n  border-top-color: #6366f1;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s infinite linear;\n  margin: 0 auto 1rem auto;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=catalogo.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CatalogoComponent, { className: "CatalogoComponent", filePath: "src\\app\\features\\catalog\\catalogo.component.ts", lineNumber: 15 });
})();
export {
  CatalogoComponent
};
//# sourceMappingURL=chunk-QP6GMVK3.js.map
