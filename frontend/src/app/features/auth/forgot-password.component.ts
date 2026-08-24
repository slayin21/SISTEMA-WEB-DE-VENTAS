import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <div class="auth-container">
      <div class="auth-card glass-panel">
        <h2>Recuperar Contraseña</h2>
        <p class="subtitle">Ingresa tu correo para recibir las instrucciones de restablecimiento.</p>

        <div *ngIf="msg" class="alert-banner success">{{ msg }}</div>
        <div *ngIf="errorMsg" class="alert-banner danger">{{ errorMsg }}</div>

        <form (ngSubmit)="onSubmit()" #forgotForm="ngForm" *ngIf="!stepReset">
          <div class="form-group">
            <label>Correo Electrónico</label>
            <input type="email" [(ngModel)]="email" name="email" required placeholder="correo@ejemplo.com" class="form-control" />
          </div>

          <button type="submit" [disabled]="loading || !forgotForm.valid" class="btn-primary">
            {{ loading ? 'Enviando...' : 'Enviar Token de Recuperación' }}
          </button>
        </form>

        <form (ngSubmit)="onResetSubmit()" #resetForm="ngForm" *ngIf="stepReset">
          <div class="form-group">
            <label>Código Token de Recuperación</label>
            <input type="text" [(ngModel)]="token" name="token" required placeholder="Token de 8 caracteres" class="form-control" />
          </div>

          <div class="form-group">
            <label>Nueva Contraseña</label>
            <input type="password" [(ngModel)]="newPassword" name="newPassword" required minlength="6" placeholder="Mínimo 6 caracteres" class="form-control" />
          </div>

          <button type="submit" [disabled]="loading || !resetForm.valid" class="btn-primary">
            {{ loading ? 'Actualizando...' : 'Cambiar Contraseña' }}
          </button>
        </form>

        <div class="footer-note">
          <a routerLink="/auth/login" class="link-bold">← Volver al Inicio de Sesión</a>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .auth-container { min-height: 80vh; display: flex; align-items: center; justify-content: center; padding: 2rem; }
    .auth-card {
      width: 100%; max-width: 440px; padding: 2.5rem; border-radius: 1.5rem;
      background: rgba(255, 255, 255, 0.85); backdrop-filter: blur(16px);
      box-shadow: 0 20px 40px rgba(0,0,0,0.08); border: 1px solid rgba(255,255,255,0.5);
    }
    h2 { font-size: 1.8rem; font-weight: 700; color: #1f2937; text-align: center; margin-bottom: 0.2rem; }
    .subtitle { text-align: center; color: #6b7280; margin-bottom: 1.5rem; font-size: 0.9rem; }
    .form-group { margin-bottom: 1.2rem; }
    label { display: block; font-weight: 600; margin-bottom: 0.4rem; color: #374151; font-size: 0.9rem; }
    .form-control { width: 100%; padding: 0.8rem 1rem; border-radius: 0.75rem; border: 1px solid #d1d5db; font-size: 0.95rem; }
    .form-control:focus { outline: none; border-color: #4f46e5; box-shadow: 0 0 0 3px rgba(79,70,229,0.15); }
    .btn-primary {
      width: 100%; padding: 0.9rem; background: linear-gradient(135deg, #4f46e5 0%, #3b82f6 100%);
      color: white; border: none; border-radius: 0.75rem; font-size: 1rem; font-weight: 600; cursor: pointer;
    }
    .btn-primary:disabled { opacity: 0.6; cursor: not-allowed; }
    .footer-note { text-align: center; margin-top: 1.5rem; font-size: 0.9rem; }
    .link-bold { color: #4f46e5; font-weight: 700; text-decoration: none; }
    .alert-banner { padding: 0.8rem; border-radius: 0.5rem; font-size: 0.85rem; margin-bottom: 1rem; }
    .alert-banner.success { background-color: #d1fae5; color: #065f46; border: 1px solid #a7f3d0; }
    .alert-banner.danger { background-color: #fee2e2; color: #dc2626; border: 1px solid #fca5a5; }
  `]
})
export class ForgotPasswordComponent {
  email = '';
  token = '';
  newPassword = '';
  loading = false;
  stepReset = false;
  msg = '';
  errorMsg = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.loading = true;
    this.msg = '';
    this.errorMsg = '';

    this.authService.forgotPassword(this.email).subscribe({
      next: (res) => {
        this.loading = false;
        this.stepReset = true;
        this.msg = res.mensaje || 'Se ha enviado un código de recuperación a su correo.';
      },
      error: (err) => {
        this.loading = false;
        this.errorMsg = err.error?.message || 'Ocurrió un error al procesar la solicitud.';
      }
    });
  }

  onResetSubmit() {
    this.loading = true;
    this.msg = '';
    this.errorMsg = '';

    this.authService.resetPassword({
      email: this.email,
      token: this.token,
      newPassword: this.newPassword
    }).subscribe({
      next: (res) => {
        this.loading = false;
        alert(res.mensaje || 'Contraseña restablecida exitosamente.');
        this.router.navigate(['/auth/login']);
      },
      error: (err) => {
        this.loading = false;
        this.errorMsg = err.error?.message || 'Error al cambiar la contraseña. Verifique el token.';
      }
    });
  }
}
