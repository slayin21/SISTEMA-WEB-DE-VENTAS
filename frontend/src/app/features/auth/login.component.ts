import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <div class="auth-container">
      <div class="auth-card glass-panel">
        <h2>Iniciar Sesión</h2>
        <p class="subtitle">Zapatería Joselito - Calzado de Calidad</p>

        <div *ngIf="errorMsg" class="alert-banner danger">
          {{ errorMsg }}
        </div>

        <form (ngSubmit)="onSubmit()" #loginForm="ngForm">
          <div class="form-group">
            <label>Correo Electrónico</label>
            <input type="email" [(ngModel)]="email" name="email" required placeholder="correo@ejemplo.com" class="form-control" />
          </div>

          <div class="form-group">
            <label>Contraseña</label>
            <input type="password" [(ngModel)]="password" name="password" required placeholder="••••••••" class="form-control" />
          </div>

          <div class="auth-links">
            <a routerLink="/auth/forgot-password" class="link">¿Olvidaste tu contraseña?</a>
          </div>

          <button type="submit" [disabled]="loading || !loginForm.valid" class="btn-primary">
            {{ loading ? 'Ingresando...' : 'Iniciar Sesión' }}
          </button>
        </form>

        <div class="footer-note">
          ¿No tienes una cuenta? <a routerLink="/auth/register" class="link-bold">Regístrate gratis</a>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .auth-container {
      min-height: 80vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2rem;
    }
    .auth-card {
      width: 100%;
      max-width: 420px;
      padding: 2.5rem;
      border-radius: 1.5rem;
      background: rgba(255, 255, 255, 0.85);
      backdrop-filter: blur(16px);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
      border: 1px solid rgba(255, 255, 255, 0.5);
    }
    h2 { font-size: 1.8rem; font-weight: 700; color: #1f2937; text-align: center; margin-bottom: 0.2rem; }
    .subtitle { text-align: center; color: #6b7280; margin-bottom: 1.5rem; font-size: 0.95rem; }
    .form-group { margin-bottom: 1.2rem; }
    label { display: block; font-weight: 600; margin-bottom: 0.4rem; color: #374151; font-size: 0.9rem; }
    .form-control {
      width: 100%;
      padding: 0.8rem 1rem;
      border-radius: 0.75rem;
      border: 1px solid #d1d5db;
      font-size: 0.95rem;
      transition: all 0.2s;
    }
    .form-control:focus { outline: none; border-color: #4f46e5; box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.15); }
    .auth-links { text-align: right; margin-bottom: 1.5rem; }
    .link { color: #4f46e5; text-decoration: none; font-size: 0.85rem; font-weight: 500; }
    .link:hover { text-decoration: underline; }
    .btn-primary {
      width: 100%;
      padding: 0.9rem;
      background: linear-gradient(135deg, #4f46e5 0%, #3b82f6 100%);
      color: white;
      border: none;
      border-radius: 0.75rem;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);
    }
    .btn-primary:disabled { opacity: 0.6; cursor: not-allowed; }
    .footer-note { text-align: center; margin-top: 1.5rem; font-size: 0.9rem; color: #6b7280; }
    .link-bold { color: #4f46e5; font-weight: 700; text-decoration: none; }
    .alert-banner { padding: 0.8rem; border-radius: 0.5rem; font-size: 0.85rem; margin-bottom: 1rem; }
    .alert-banner.danger { background-color: #fee2e2; color: #dc2626; border: 1px solid #fca5a5; }
  `]
})
export class LoginComponent {
  email = '';
  password = '';
  loading = false;
  errorMsg = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.loading = true;
    this.errorMsg = '';

    this.authService.login({ email: this.email, password: this.password }).subscribe({
      next: (res) => {
        this.loading = false;
        if (res.rol === 'ADMIN') {
          this.router.navigate(['/admin']);
        } else {
          this.router.navigate(['/catalog']);
        }
      },
      error: (err) => {
        this.loading = false;
        this.errorMsg = err.error?.message || 'Error al iniciar sesión. Verifique sus credenciales.';
      }
    });
  }
}
