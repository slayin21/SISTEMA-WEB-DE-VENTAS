import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

export interface UserSession {
  token: string;
  idUsuario: number;
  nombre: string;
  email: string;
  rol: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/v1/auth';
  private currentUserSubject = new BehaviorSubject<UserSession | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  private inactivityTimer: any;
  private readonly TIMEOUT_MS = 30 * 60 * 1000; // 30 minutos (RNF-02)

  constructor(private http: HttpClient) {
    const savedUser = localStorage.getItem('zapateria_user');
    if (savedUser) {
      try {
        const userObj = JSON.parse(savedUser);
        this.currentUserSubject.next(userObj);
        this.resetInactivityTimer();
      } catch (e) {
        localStorage.removeItem('zapateria_user');
      }
    }

    this.setupInactivityListeners();
  }

  register(data: any): Observable<UserSession> {
    return this.http.post<UserSession>(`${this.apiUrl}/register`, data).pipe(
      tap(user => this.handleAuthSuccess(user))
    );
  }

  login(credentials: any): Observable<UserSession> {
    return this.http.post<UserSession>(`${this.apiUrl}/login`, credentials).pipe(
      tap(user => this.handleAuthSuccess(user))
    );
  }

  forgotPassword(email: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/forgot-password`, { email });
  }

  resetPassword(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/reset-password`, data);
  }

  logout() {
    localStorage.removeItem('zapateria_user');
    this.currentUserSubject.next(null);
    if (this.inactivityTimer) clearTimeout(this.inactivityTimer);
  }

  getCurrentUser(): UserSession | null {
    return this.currentUserSubject.value;
  }

  isLoggedIn(): boolean {
    return this.currentUserSubject.value !== null;
  }

  isAdmin(): boolean {
    const user = this.currentUserSubject.value;
    return user !== null && user.rol === 'ADMIN';
  }

  private handleAuthSuccess(user: UserSession) {
    localStorage.setItem('zapateria_user', JSON.stringify(user));
    this.currentUserSubject.next(user);
    this.resetInactivityTimer();
  }

  private setupInactivityListeners() {
    window.addEventListener('mousemove', () => this.resetInactivityTimer());
    window.addEventListener('keypress', () => this.resetInactivityTimer());
    window.addEventListener('click', () => this.resetInactivityTimer());
  }

  private resetInactivityTimer() {
    if (this.inactivityTimer) clearTimeout(this.inactivityTimer);
    if (this.isLoggedIn()) {
      this.inactivityTimer = setTimeout(() => {
        alert('Tu sesión ha expirado por 30 minutos de inactividad.');
        this.logout();
      }, this.TIMEOUT_MS);
    }
  }
}
