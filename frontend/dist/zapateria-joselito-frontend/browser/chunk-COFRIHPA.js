import {
  BehaviorSubject,
  ɵɵdefineInjectable
} from "./chunk-LIYF5RMP.js";

// src/app/core/services/notification.service.ts
var NotificationService = class _NotificationService {
  constructor() {
    this.toastsSubject = new BehaviorSubject([]);
    this.toasts$ = this.toastsSubject.asObservable();
  }
  show(message, type = "info", title, duration = 4500) {
    const id = Math.random().toString(36).substring(2, 9);
    const toast = { id, type, title, message, duration };
    const current = this.toastsSubject.value;
    this.toastsSubject.next([...current, toast]);
    if (duration > 0) {
      setTimeout(() => {
        this.remove(id);
      }, duration);
    }
  }
  showSuccess(message, title = "\xA1\xC9xito!") {
    this.show(message, "success", title);
  }
  showError(message, title = "Error de Validaci\xF3n") {
    this.show(message, "error", title, 6e3);
  }
  showWarning(message, title = "Advertencia") {
    this.show(message, "warning", title);
  }
  showInfo(message, title = "Informaci\xF3n") {
    this.show(message, "info", title);
  }
  remove(id) {
    const updated = this.toastsSubject.value.filter((t) => t.id !== id);
    this.toastsSubject.next(updated);
  }
  static {
    this.\u0275fac = function NotificationService_Factory(t) {
      return new (t || _NotificationService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _NotificationService, factory: _NotificationService.\u0275fac, providedIn: "root" });
  }
};

export {
  NotificationService
};
//# sourceMappingURL=chunk-COFRIHPA.js.map
