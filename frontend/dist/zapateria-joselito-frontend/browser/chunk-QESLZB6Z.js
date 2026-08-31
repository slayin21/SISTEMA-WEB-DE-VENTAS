import {
  VentaService
} from "./chunk-FKKLMHON.js";
import {
  CarritoService
} from "./chunk-F7US5IUQ.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  RadioControlValueAccessor,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-J5QRST4F.js";
import {
  AuthService
} from "./chunk-BODVM5WY.js";
import {
  Router,
  RouterLink
} from "./chunk-M3LPOL3F.js";
import {
  CommonModule,
  DatePipe,
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
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-EH6AJVCA.js";

// src/app/features/checkout/checkout.component.ts
function CheckoutComponent_div_1_tr_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const d_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r2.cantidad);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3("", d_r2.variante == null ? null : d_r2.variante.producto == null ? null : d_r2.variante.producto.nombre, " (Talla: ", d_r2.variante == null ? null : d_r2.variante.talla, ", ", d_r2.variante == null ? null : d_r2.variante.color, ")");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("S/ ", \u0275\u0275pipeBind2(7, 6, d_r2.precioUnitario, "1.2-2"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("S/ ", \u0275\u0275pipeBind2(10, 9, d_r2.subtotal, "1.2-2"), "");
  }
}
function CheckoutComponent_div_1_p_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "Descuento Cup\xF3n: ");
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("-S/ ", \u0275\u0275pipeBind2(4, 1, ctx_r2.ventaRealizada.descuentoMonto, "1.2-2"), "");
  }
}
function CheckoutComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 5);
    \u0275\u0275element(3, "path", 6)(4, "polyline", 7);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "h1");
    \u0275\u0275text(6, "\xA1Venta Confirmada y Registrada!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 8);
    \u0275\u0275text(8, "N\xFAmero de Pedido: ");
    \u0275\u0275elementStart(9, "strong");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "p");
    \u0275\u0275text(12, "Se ha enviado autom\xE1ticamente la ");
    \u0275\u0275elementStart(13, "strong");
    \u0275\u0275text(14, "Boleta Digital Electr\xF3nica");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " al correo de ");
    \u0275\u0275elementStart(16, "strong");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275text(18, ".");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 9)(20, "div", 10)(21, "h2");
    \u0275\u0275text(22, "ZAPATER\xCDA JOSELITO S.A.C.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "p");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 11)(26, "p")(27, "strong");
    \u0275\u0275text(28, "Cliente:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "p")(31, "strong");
    \u0275\u0275text(32, "Fecha:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "p")(36, "strong");
    \u0275\u0275text(37, "Direcci\xF3n:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "p")(40, "strong");
    \u0275\u0275text(41, "M\xE9todo de Pago:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "table", 12)(44, "thead")(45, "tr")(46, "th");
    \u0275\u0275text(47, "Cant.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "th");
    \u0275\u0275text(49, "Producto / Variante");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "th");
    \u0275\u0275text(51, "P. Unit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "th");
    \u0275\u0275text(53, "Subtotal");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(54, "tbody");
    \u0275\u0275template(55, CheckoutComponent_div_1_tr_55_Template, 11, 12, "tr", 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "div", 14)(57, "p");
    \u0275\u0275text(58, "Subtotal: ");
    \u0275\u0275elementStart(59, "span");
    \u0275\u0275text(60);
    \u0275\u0275pipe(61, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(62, "p");
    \u0275\u0275text(63, "IGV (18% Incluido): ");
    \u0275\u0275elementStart(64, "span");
    \u0275\u0275text(65);
    \u0275\u0275pipe(66, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(67, CheckoutComponent_div_1_p_67_Template, 5, 4, "p", 15);
    \u0275\u0275elementStart(68, "p");
    \u0275\u0275text(69, "Costo de Env\xEDo: ");
    \u0275\u0275elementStart(70, "span");
    \u0275\u0275text(71);
    \u0275\u0275pipe(72, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(73, "h3", 16);
    \u0275\u0275text(74);
    \u0275\u0275pipe(75, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(76, "div", 17)(77, "button", 18);
    \u0275\u0275listener("click", function CheckoutComponent_div_1_Template_button_click_77_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.imprimirBoleta());
    });
    \u0275\u0275text(78, "\u{1F5A8}\uFE0F Imprimir / Guardar Boleta");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "a", 19);
    \u0275\u0275text(80, "Volver al Cat\xE1logo");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1("#ZAP-", ctx_r2.ventaRealizada.idVenta, "");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.ventaRealizada.usuario == null ? null : ctx_r2.ventaRealizada.usuario.email);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("RUC: 20601234567 | Boleta de Venta Electr\xF3nica N\xB0 B001-", ctx_r2.ventaRealizada.idVenta, "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r2.ventaRealizada.usuario == null ? null : ctx_r2.ventaRealizada.usuario.nombre, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(34, 14, ctx_r2.ventaRealizada.fecha, "dd/MM/yyyy HH:mm"), "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2(" ", ctx_r2.ventaRealizada.direccionEnvio, ", ", ctx_r2.ventaRealizada.distritoEnvio, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", (ctx_r2.ventaRealizada.metodoPago == null ? null : ctx_r2.ventaRealizada.metodoPago.nombre) || "Yape/Plin", "");
    \u0275\u0275advance(13);
    \u0275\u0275property("ngForOf", ctx_r2.ventaRealizada.detalles);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("S/ ", \u0275\u0275pipeBind2(61, 17, ctx_r2.ventaRealizada.subtotal, "1.2-2"), "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("S/ ", \u0275\u0275pipeBind2(66, 20, (ctx_r2.ventaRealizada.subtotal || 0) * 0.18, "1.2-2"), "");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.ventaRealizada.descuentoMonto);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("S/ ", \u0275\u0275pipeBind2(72, 23, ctx_r2.ventaRealizada.costoEnvio, "1.2-2"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("TOTAL: S/ ", \u0275\u0275pipeBind2(75, 26, (ctx_r2.ventaRealizada.subtotal || 0) + (ctx_r2.ventaRealizada.costoEnvio || 0) - (ctx_r2.ventaRealizada.descuentoMonto || 0), "1.2-2"), "");
  }
}
function CheckoutComponent_div_2_div_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.mensajeError, " ");
  }
}
function CheckoutComponent_div_2_div_52_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48)(1, "span", 49);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 50);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3("", item_r5.cantidad, "x ", item_r5.variante == null ? null : item_r5.variante.producto == null ? null : item_r5.variante.producto.nombre, " (Talla ", item_r5.variante == null ? null : item_r5.variante.talla, ")");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("S/ ", \u0275\u0275pipeBind2(5, 4, ((item_r5.variante == null ? null : item_r5.variante.precio) || 0) * item_r5.cantidad, "1.2-2"), "");
  }
}
function CheckoutComponent_div_2_div_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275template(1, CheckoutComponent_div_2_div_52_div_1_Template, 6, 7, "div", 47);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.carrito.items);
  }
}
function CheckoutComponent_div_2_div_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40)(1, "span", 51);
    \u0275\u0275text(2, "Descuento Aplicado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 51);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("-S/ ", \u0275\u0275pipeBind2(5, 1, ctx_r2.descuentoAplicado, "1.2-2"), "");
  }
}
function CheckoutComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 21)(2, "h2");
    \u0275\u0275text(3, "1. Direcci\xF3n de Entrega");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 22)(5, "label");
    \u0275\u0275text(6, "Direcci\xF3n Completa de Env\xEDo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 23);
    \u0275\u0275twoWayListener("ngModelChange", function CheckoutComponent_div_2_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.direccionEnvio, $event) || (ctx_r2.direccionEnvio = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 24)(9, "div", 22)(10, "label");
    \u0275\u0275text(11, "Distrito");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 25);
    \u0275\u0275twoWayListener("ngModelChange", function CheckoutComponent_div_2_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.distritoEnvio, $event) || (ctx_r2.distritoEnvio = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 22)(14, "label");
    \u0275\u0275text(15, "Agencia de Despacho");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "select", 26);
    \u0275\u0275twoWayListener("ngModelChange", function CheckoutComponent_div_2_Template_select_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.despachadorAgencia, $event) || (ctx_r2.despachadorAgencia = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(17, "option", 27);
    \u0275\u0275text(18, "Shalom / Olva Courier");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "option", 28);
    \u0275\u0275text(20, "Delivery Directo Lima");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "option", 29);
    \u0275\u0275text(22, "Recojo en Tienda");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(23, "h2");
    \u0275\u0275text(24, "2. M\xE9todo de Pago");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 30)(26, "label", 31)(27, "input", 32);
    \u0275\u0275twoWayListener("ngModelChange", function CheckoutComponent_div_2_Template_input_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.idMetodoPago, $event) || (ctx_r2.idMetodoPago = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span");
    \u0275\u0275text(29, "\u{1F4F1} Yape / Plin");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "label", 31)(31, "input", 32);
    \u0275\u0275twoWayListener("ngModelChange", function CheckoutComponent_div_2_Template_input_ngModelChange_31_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.idMetodoPago, $event) || (ctx_r2.idMetodoPago = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span");
    \u0275\u0275text(33, "\u{1F3E6} Transferencia Bancaria (BCP / BBVA / Interbank)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "label", 31)(35, "input", 32);
    \u0275\u0275twoWayListener("ngModelChange", function CheckoutComponent_div_2_Template_input_ngModelChange_35_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.idMetodoPago, $event) || (ctx_r2.idMetodoPago = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "span");
    \u0275\u0275text(37, "\u{1F4B3} Tarjeta de Cr\xE9dito / D\xE9bito (Visa / Mastercard)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "label", 31)(39, "input", 32);
    \u0275\u0275twoWayListener("ngModelChange", function CheckoutComponent_div_2_Template_input_ngModelChange_39_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.idMetodoPago, $event) || (ctx_r2.idMetodoPago = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "span");
    \u0275\u0275text(41, "\u{1F4B5} Pago en Efectivo (Contra Entrega / Tienda)");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(42, "h2");
    \u0275\u0275text(43, "3. Cup\xF3n de Descuento");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 33)(45, "input", 34);
    \u0275\u0275twoWayListener("ngModelChange", function CheckoutComponent_div_2_Template_input_ngModelChange_45_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.codigoCupon, $event) || (ctx_r2.codigoCupon = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "button", 35);
    \u0275\u0275listener("click", function CheckoutComponent_div_2_Template_button_click_46_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.aplicarCupon());
    });
    \u0275\u0275text(47, "Aplicar Cup\xF3n");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(48, CheckoutComponent_div_2_div_48_Template, 2, 1, "div", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "div", 37)(50, "h2");
    \u0275\u0275text(51, "Desglose Financiero");
    \u0275\u0275elementEnd();
    \u0275\u0275template(52, CheckoutComponent_div_2_div_52_Template, 2, 1, "div", 38);
    \u0275\u0275element(53, "div", 39);
    \u0275\u0275elementStart(54, "div", 40)(55, "span");
    \u0275\u0275text(56, "Subtotal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "span");
    \u0275\u0275text(58);
    \u0275\u0275pipe(59, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "div", 40)(61, "span");
    \u0275\u0275text(62, "IGV (18% Incluido)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "span");
    \u0275\u0275text(64);
    \u0275\u0275pipe(65, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(66, CheckoutComponent_div_2_div_66_Template, 6, 4, "div", 41);
    \u0275\u0275elementStart(67, "div", 40)(68, "span");
    \u0275\u0275text(69, "Costo de Env\xEDo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "span");
    \u0275\u0275text(71);
    \u0275\u0275pipe(72, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(73, "div", 39);
    \u0275\u0275elementStart(74, "div", 42)(75, "span");
    \u0275\u0275text(76, "Total a Pagar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "span", 43);
    \u0275\u0275text(78);
    \u0275\u0275pipe(79, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(80, "button", 44);
    \u0275\u0275listener("click", function CheckoutComponent_div_2_Template_button_click_80_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.confirmarVenta());
    });
    \u0275\u0275text(81);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.direccionEnvio);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.distritoEnvio);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.despachadorAgencia);
    \u0275\u0275advance(10);
    \u0275\u0275classProp("selected", ctx_r2.idMetodoPago === 1);
    \u0275\u0275advance();
    \u0275\u0275property("value", 1);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.idMetodoPago);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("selected", ctx_r2.idMetodoPago === 2);
    \u0275\u0275advance();
    \u0275\u0275property("value", 2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.idMetodoPago);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("selected", ctx_r2.idMetodoPago === 3);
    \u0275\u0275advance();
    \u0275\u0275property("value", 3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.idMetodoPago);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("selected", ctx_r2.idMetodoPago === 4);
    \u0275\u0275advance();
    \u0275\u0275property("value", 4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.idMetodoPago);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.codigoCupon);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r2.mensajeError);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r2.carrito && ctx_r2.carrito.items);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("S/ ", \u0275\u0275pipeBind2(59, 29, ctx_r2.calcularSubtotal(), "1.2-2"), "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("S/ ", \u0275\u0275pipeBind2(65, 32, ctx_r2.calcularIgv(), "1.2-2"), "");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.descuentoAplicado > 0);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("S/ ", \u0275\u0275pipeBind2(72, 35, ctx_r2.calcularEnvio(), "1.2-2"), "");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("S/ ", \u0275\u0275pipeBind2(79, 38, ctx_r2.calcularTotal(), "1.2-2"), "");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.procesando);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.procesando ? "Procesando Compra y Boleta..." : "Confirmar Compra y Generar Boleta", " ");
  }
}
var CheckoutComponent = class _CheckoutComponent {
  constructor(carritoService, ventaService, authService, router) {
    this.carritoService = carritoService;
    this.ventaService = ventaService;
    this.authService = authService;
    this.router = router;
    this.carrito = null;
    this.cargando = true;
    this.procesando = false;
    this.idUsuario = 1;
    this.direccionEnvio = "Av. Larco 456";
    this.distritoEnvio = "Miraflores";
    this.despachadorAgencia = "Shalom / Olva Courier";
    this.idMetodoPago = 1;
    this.codigoCupon = "";
    this.descuentoAplicado = 0;
    this.ventaRealizada = null;
    this.mensajeError = "";
  }
  ngOnInit() {
    const currentUser = this.authService.getCurrentUser();
    this.idUsuario = currentUser && currentUser.idUsuario ? currentUser.idUsuario : 1;
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
  aplicarCupon() {
    if (this.codigoCupon.trim().toUpperCase() === "JOSELITO10") {
      this.descuentoAplicado = this.calcularSubtotal() * 0.1;
      alert("\xA1Cup\xF3n JOSELITO10 aplicado! Descuento del 10%.");
    } else if (this.codigoCupon.trim().toUpperCase() === "PROMO20") {
      this.descuentoAplicado = 20;
      alert("\xA1Cup\xF3n PROMO20 aplicado! Descuento de S/ 20.00.");
    } else {
      alert("Cup\xF3n inv\xE1lido o expirado.");
    }
  }
  calcularSubtotal() {
    if (!this.carrito || !this.carrito.items)
      return 0;
    return this.carrito.items.reduce((acc, item) => {
      const precio = item.variante ? item.variante.precio : 0;
      return acc + precio * item.cantidad;
    }, 0);
  }
  calcularIgv() {
    return this.calcularSubtotal() * 0.18;
  }
  calcularEnvio() {
    const sub = this.calcularSubtotal();
    if (sub === 0)
      return 0;
    return sub > 200 ? 0 : 15;
  }
  calcularTotal() {
    const sub = this.calcularSubtotal();
    if (sub === 0)
      return 0;
    return Math.max(0, sub + this.calcularEnvio() - this.descuentoAplicado);
  }
  confirmarVenta() {
    if (!this.carrito || !this.carrito.items || this.carrito.items.length === 0) {
      this.mensajeError = "Tu carrito est\xE1 vac\xEDo.";
      return;
    }
    if (!this.direccionEnvio || !this.distritoEnvio) {
      this.mensajeError = "Por favor completa la direcci\xF3n y distrito de env\xEDo.";
      return;
    }
    this.procesando = true;
    this.mensajeError = "";
    const detalles = this.carrito.items.map((item) => ({
      variante: item.variante,
      idVariante: item.variante?.idVariante,
      cantidad: item.cantidad,
      precioUnitario: item.variante?.precio || 0,
      subtotal: (item.variante?.precio || 0) * item.cantidad
    }));
    const user = this.authService.getCurrentUser();
    const payloadVenta = {
      usuario: { idUsuario: this.idUsuario, nombre: user?.nombre || "Cliente Zapater\xEDa", email: user?.email || "cliente@zapateriajoselito.com", rol: "CLIENTE", activo: true },
      idUsuario: this.idUsuario,
      metodoPago: { idMetodoPago: this.idMetodoPago, nombre: this.getNombreMetodoPago(), activo: true },
      idMetodoPago: this.idMetodoPago,
      subtotal: this.calcularSubtotal(),
      costoEnvio: this.calcularEnvio(),
      descuentoMonto: this.descuentoAplicado,
      direccionEnvio: this.direccionEnvio,
      distritoEnvio: this.distritoEnvio,
      provinciaEnvio: "Lima",
      departamentoEnvio: "Lima",
      despachadorAgencia: this.despachadorAgencia,
      estadoPedido: "PAGADO",
      detalles
    };
    this.ventaService.registrarVenta(payloadVenta).subscribe({
      next: (venta) => {
        this.procesando = false;
        this.ventaRealizada = venta;
      },
      error: (err) => {
        this.procesando = false;
        this.mensajeError = err.error?.message || "Error al procesar la compra.";
      }
    });
  }
  getNombreMetodoPago() {
    switch (this.idMetodoPago) {
      case 1:
        return "Yape / Plin";
      case 2:
        return "Transferencia Bancaria";
      case 3:
        return "Tarjeta de Cr\xE9dito/D\xE9bito";
      case 4:
        return "Efectivo";
      default:
        return "Yape / Plin";
    }
  }
  imprimirBoleta() {
    window.print();
  }
  static {
    this.\u0275fac = function CheckoutComponent_Factory(t) {
      return new (t || _CheckoutComponent)(\u0275\u0275directiveInject(CarritoService), \u0275\u0275directiveInject(VentaService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CheckoutComponent, selectors: [["app-checkout"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 3, vars: 2, consts: [[1, "checkout-container"], ["class", "success-screen", 4, "ngIf"], ["class", "checkout-layout", 4, "ngIf"], [1, "success-screen"], [1, "success-icon"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M22 11.08V12a10 10 0 1 1-5.93-9.14"], ["points", "22 4 12 14.01 9 11.01"], [1, "order-id"], [1, "boleta-digital-card"], [1, "boleta-header"], [1, "boleta-info"], [1, "boleta-table"], [4, "ngFor", "ngForOf"], [1, "boleta-summary"], [4, "ngIf"], [1, "boleta-total"], [1, "success-actions"], [1, "btn-secondary", 3, "click"], ["routerLink", "/catalogo", 1, "btn-primary"], [1, "checkout-layout"], [1, "form-section"], [1, "form-group"], ["type", "text", "placeholder", "Ej: Av. Larco 456, Dpto 201", 3, "ngModelChange", "ngModel"], [1, "form-row"], ["type", "text", "placeholder", "Ej: Miraflores", 3, "ngModelChange", "ngModel"], [3, "ngModelChange", "ngModel"], ["value", "Shalom / Olva Courier"], ["value", "Delivery Directo Lima"], ["value", "Recojo en Tienda"], [1, "payment-methods"], [1, "payment-option"], ["type", "radio", "name", "payment", 3, "ngModelChange", "value", "ngModel"], [1, "coupon-box"], ["type", "text", "placeholder", "Ingresa c\xF3digo (ej: JOSELITO10)", 1, "coupon-input", 3, "ngModelChange", "ngModel"], ["type", "button", 1, "btn-apply-coupon", 3, "click"], ["class", "alert-error", 4, "ngIf"], [1, "summary-section"], ["class", "items-list", 4, "ngIf"], [1, "divider"], [1, "calc-row"], ["class", "calc-row", 4, "ngIf"], [1, "calc-row", "total"], [1, "total-price"], [1, "btn-confirm", 3, "click", "disabled"], [1, "alert-error"], [1, "items-list"], ["class", "item-row", 4, "ngFor", "ngForOf"], [1, "item-row"], [1, "item-name"], [1, "item-price"], [1, "text-discount"]], template: function CheckoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, CheckoutComponent_div_1_Template, 81, 29, "div", 1)(2, CheckoutComponent_div_2_Template, 82, 41, "div", 2);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.ventaRealizada);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.ventaRealizada);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, DecimalPipe, DatePipe, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgModel, RouterLink], styles: ['\n\n[_nghost-%COMP%] {\n  font-family: "Outfit", sans-serif;\n  display: block;\n  background-color: #0b0f19;\n  color: #f3f4f6;\n  min-height: 100vh;\n}\n.checkout-container[_ngcontent-%COMP%] {\n  max-width: 1100px;\n  margin: 0 auto;\n  padding: 3rem 1.5rem;\n}\n.checkout-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 380px;\n  gap: 2.5rem;\n}\n@media (max-width: 850px) {\n  .checkout-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.form-section[_ngcontent-%COMP%] {\n  background: #111827;\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 20px;\n  padding: 2rem;\n}\n.form-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  font-weight: 700;\n  margin-top: 0;\n  margin-bottom: 1.5rem;\n  color: #818cf8;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  margin-bottom: 1.25rem;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #d1d5db;\n  font-weight: 500;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 0.85rem 1rem;\n  background: #1f2937;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 12px;\n  color: #fff;\n  font-size: 0.95rem;\n  outline: none;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  border-color: #6366f1;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n}\n.payment-methods[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.8rem;\n  margin-bottom: 2rem;\n}\n.payment-option[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 1rem 1.25rem;\n  background: #1f2937;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 12px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  font-weight: 600;\n}\n.payment-option.selected[_ngcontent-%COMP%] {\n  border-color: #10b981;\n  background: rgba(16, 185, 129, 0.12);\n  color: #10b981;\n}\n.coupon-box[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  margin-bottom: 1.5rem;\n}\n.coupon-input[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 0.75rem 1rem;\n  background: #1f2937;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 10px;\n  color: white;\n}\n.btn-apply-coupon[_ngcontent-%COMP%] {\n  background: #6366f1;\n  color: white;\n  border: none;\n  padding: 0 1rem;\n  border-radius: 10px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.summary-section[_ngcontent-%COMP%] {\n  background: #111827;\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 20px;\n  padding: 2rem;\n  height: fit-content;\n}\n.summary-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  margin-top: 0;\n  margin-bottom: 1.5rem;\n  color: #818cf8;\n}\n.items-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.item-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.85rem;\n  color: #9ca3af;\n}\n.divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background: rgba(255, 255, 255, 0.08);\n  margin: 1.25rem 0;\n}\n.calc-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.95rem;\n  color: #9ca3af;\n  margin-bottom: 0.75rem;\n}\n.text-discount[_ngcontent-%COMP%] {\n  color: #10b981;\n  font-weight: 600;\n}\n.calc-row.total[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: #fff;\n}\n.total-price[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: #10b981;\n}\n.btn-confirm[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 1rem;\n  background:\n    linear-gradient(\n      135deg,\n      #10b981 0%,\n      #059669 100%);\n  color: #fff;\n  border: none;\n  border-radius: 12px;\n  font-size: 1.05rem;\n  font-weight: 700;\n  cursor: pointer;\n  margin-top: 1.5rem;\n  box-shadow: 0 10px 20px rgba(16, 185, 129, 0.35);\n  transition: all 0.25s ease;\n}\n.btn-confirm[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.success-screen[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 3rem 2rem;\n  background: #111827;\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 24px;\n  max-width: 750px;\n  margin: 0 auto;\n}\n.success-icon[_ngcontent-%COMP%] {\n  width: 70px;\n  height: 70px;\n  border-radius: 50%;\n  background: rgba(16, 185, 129, 0.15);\n  color: #10b981;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 1.5rem auto;\n}\n.success-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n}\n.boleta-digital-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  color: #1f2937;\n  border-radius: 16px;\n  padding: 2rem;\n  text-align: left;\n  margin: 2rem 0;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);\n}\n.boleta-header[_ngcontent-%COMP%] {\n  text-align: center;\n  border-bottom: 2px dashed #d1d5db;\n  padding-bottom: 1rem;\n  margin-bottom: 1.5rem;\n}\n.boleta-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #4f46e5;\n  font-size: 1.5rem;\n}\n.boleta-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.3rem 0;\n  font-size: 0.9rem;\n  color: #4b5563;\n}\n.boleta-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  margin: 1.5rem 0;\n}\n.boleta-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  padding: 0.6rem;\n  text-align: left;\n  font-size: 0.85rem;\n}\n.boleta-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.6rem;\n  border-bottom: 1px solid #e5e7eb;\n  font-size: 0.85rem;\n}\n.boleta-summary[_ngcontent-%COMP%] {\n  text-align: right;\n  border-top: 2px dashed #d1d5db;\n  padding-top: 1rem;\n}\n.boleta-summary[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.3rem 0;\n  font-size: 0.9rem;\n  color: #4b5563;\n}\n.boleta-summary[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100px;\n}\n.boleta-total[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  color: #10b981;\n  margin-top: 0.5rem;\n}\n.success-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  justify-content: center;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: #6366f1;\n  color: white;\n  padding: 0.8rem 1.5rem;\n  border-radius: 12px;\n  text-decoration: none;\n  font-weight: 600;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: #374151;\n  color: white;\n  border: none;\n  padding: 0.8rem 1.5rem;\n  border-radius: 12px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.alert-error[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.15);\n  color: #f87171;\n  padding: 1rem;\n  border-radius: 12px;\n  border: 1px solid rgba(239, 68, 68, 0.3);\n  margin-top: 1rem;\n}\n/*# sourceMappingURL=checkout.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CheckoutComponent, { className: "CheckoutComponent", filePath: "src\\app\\features\\checkout\\checkout.component.ts", lineNumber: 17 });
})();
export {
  CheckoutComponent
};
//# sourceMappingURL=chunk-QESLZB6Z.js.map
