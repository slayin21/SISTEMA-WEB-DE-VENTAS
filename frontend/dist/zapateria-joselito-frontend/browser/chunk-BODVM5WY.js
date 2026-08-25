import {
  BehaviorSubject,
  HttpClient,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-EH6AJVCA.js";

// src/app/core/services/auth.service.ts
var AuthService = class _AuthService {
  constructor(http) {
    this.http = http;
    this.apiUrl = "http://localhost:8080/api/v1/auth";
    this.currentUserSubject = new BehaviorSubject(null);
    this.currentUser$ = this.currentUserSubject.asObservable();
    this.TIMEOUT_MS = 30 * 60 * 1e3;
    const savedUser = localStorage.getItem("zapateria_user");
    if (savedUser) {
      try {
        const userObj = JSON.parse(savedUser);
        this.currentUserSubject.next(userObj);
        this.resetInactivityTimer();
      } catch (e) {
        localStorage.removeItem("zapateria_user");
      }
    }
    this.setupInactivityListeners();
  }
  register(data) {
    return this.http.post(`${this.apiUrl}/register`, data).pipe(tap((user) => this.handleAuthSuccess(user)));
  }
  login(credentials) {
    return this.http.post(`${this.apiUrl}/login`, credentials).pipe(tap((user) => this.handleAuthSuccess(user)));
  }
  forgotPassword(email) {
    return this.http.post(`${this.apiUrl}/forgot-password`, { email });
  }
  resetPassword(data) {
    return this.http.post(`${this.apiUrl}/reset-password`, data);
  }
  logout() {
    localStorage.removeItem("zapateria_user");
    this.currentUserSubject.next(null);
    if (this.inactivityTimer)
      clearTimeout(this.inactivityTimer);
  }
  getCurrentUser() {
    return this.currentUserSubject.value;
  }
  isLoggedIn() {
    return this.currentUserSubject.value !== null;
  }
  isAdmin() {
    const user = this.currentUserSubject.value;
    return user !== null && user.rol === "ADMIN";
  }
  handleAuthSuccess(user) {
    localStorage.setItem("zapateria_user", JSON.stringify(user));
    this.currentUserSubject.next(user);
    this.resetInactivityTimer();
  }
  setupInactivityListeners() {
    window.addEventListener("mousemove", () => this.resetInactivityTimer());
    window.addEventListener("keypress", () => this.resetInactivityTimer());
    window.addEventListener("click", () => this.resetInactivityTimer());
  }
  resetInactivityTimer() {
    if (this.inactivityTimer)
      clearTimeout(this.inactivityTimer);
    if (this.isLoggedIn()) {
      this.inactivityTimer = setTimeout(() => {
        alert("Tu sesi\xF3n ha expirado por 30 minutos de inactividad.");
        this.logout();
      }, this.TIMEOUT_MS);
    }
  }
  static {
    this.\u0275fac = function AuthService_Factory(t) {
      return new (t || _AuthService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
  }
};

export {
  AuthService
};
//# sourceMappingURL=chunk-BODVM5WY.js.map
