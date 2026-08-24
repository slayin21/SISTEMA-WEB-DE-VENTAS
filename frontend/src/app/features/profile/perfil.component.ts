import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService, UserSession } from '../../core/services/auth.service';
import { DireccionService } from '../../core/services/direccion.service';
import { Direccion } from '../../core/models';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="profile-container">
      <div class="profile-header glass-panel">
        <div class="user-avatar">{{ user?.nombre?.charAt(0) || 'U' }}</div>
        <div class="user-info">
          <h2>{{ user?.nombre }}</h2>
          <p class="user-email">{{ user?.email }}</p>
          <span class="badge" [class.admin]="user?.rol === 'ADMIN'">{{ user?.rol }}</span>
        </div>
      </div>

      <div class="section-card glass-panel margin-top">
        <div class="section-header">
          <h3>Mis Direcciones de Envío</h3>
          <button class="btn-add" (click)="toggleNuevaDireccionForm()">
            {{ mostrarForm ? 'Cancelar' : '+ Agregar Nueva Dirección' }}
          </button>
        </div>

        <!-- Formulario para Nueva Dirección -->
        <div *ngIf="mostrarForm" class="direccion-form-card">
          <h4>{{ editandoId ? 'Editar Dirección' : 'Nueva Dirección de Entrega' }}</h4>
          <form (ngSubmit)="guardarDireccion()">
            <div class="form-grid">
              <div class="form-group span-2">
                <label>Dirección / Calle / Av.</label>
                <input type="text" [(ngModel)]="nuevaDireccion.direccion" name="direccion" required class="form-control" placeholder="Av. Larco 123, Dpto 401" />
              </div>
              <div class="form-group">
                <label>Distrito</label>
                <input type="text" [(ngModel)]="nuevaDireccion.distrito" name="distrito" required class="form-control" placeholder="Miraflores" />
              </div>
              <div class="form-group">
                <label>Provincia</label>
                <input type="text" [(ngModel)]="nuevaDireccion.provincia" name="provincia" required class="form-control" placeholder="Lima" />
              </div>
              <div class="form-group">
                <label>Departamento</label>
                <input type="text" [(ngModel)]="nuevaDireccion.departamento" name="departamento" required class="form-control" placeholder="Lima" />
              </div>
              <div class="form-group span-2">
                <label>Referencia</label>
                <input type="text" [(ngModel)]="nuevaDireccion.referencia" name="referencia" class="form-control" placeholder="Frente al parque central" />
              </div>
              <div class="form-group span-2 checkbox-group">
                <label>
                  <input type="checkbox" [(ngModel)]="nuevaDireccion.principal" name="principal" />
                  Marcar como dirección principal de envío
                </label>
              </div>
            </div>
            <button type="submit" class="btn-submit">Guardar Dirección</button>
          </form>
        </div>

        <!-- Listado de Direcciones del Cliente -->
        <div class="direcciones-grid">
          <div *ngFor="let dir of direcciones" class="direccion-card" [class.is-principal]="dir.principal">
            <div class="dir-header">
              <span class="dir-title">{{ dir.direccion }}</span>
              <span *ngIf="dir.principal" class="badge-principal">Principal</span>
            </div>
            <p class="dir-body">{{ dir.distrito }}, {{ dir.provincia }} - {{ dir.departamento }}</p>
            <p *ngIf="dir.referencia" class="dir-ref"><b>Ref:</b> {{ dir.referencia }}</p>
            <div class="dir-actions">
              <button class="btn-action edit" (click)="editarDireccion(dir)">Editar</button>
              <button class="btn-action delete" (click)="eliminarDireccion(dir.idDireccion)">Eliminar</button>
            </div>
          </div>

          <div *ngIf="direcciones.length === 0 && !mostrarForm" class="empty-state">
            No tienes direcciones registradas. Agrega una para facilitar tu proceso de compra.
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .profile-container { max-width: 900px; margin: 2rem auto; padding: 0 1rem; }
    .glass-panel {
      background: rgba(255, 255, 255, 0.85); backdrop-filter: blur(16px);
      border-radius: 1.25rem; padding: 2rem; border: 1px solid rgba(255,255,255,0.5);
      box-shadow: 0 10px 30px rgba(0,0,0,0.05);
    }
    .margin-top { margin-top: 2rem; }
    .profile-header { display: flex; align-items: center; gap: 1.5rem; }
    .user-avatar {
      width: 70px; height: 70px; border-radius: 50%;
      background: linear-gradient(135deg, #4f46e5, #3b82f6); color: white;
      font-size: 2rem; font-weight: 700; display: flex; align-items: center; justify-content: center;
    }
    .user-info h2 { margin: 0; font-size: 1.5rem; color: #1f2937; }
    .user-email { color: #6b7280; margin: 0.2rem 0 0.5rem 0; }
    .badge { padding: 0.2rem 0.6rem; border-radius: 0.5rem; background: #e0e7ff; color: #4338ca; font-size: 0.75rem; font-weight: 700; }
    .badge.admin { background: #fef3c7; color: #b45309; }
    .section-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; }
    .section-header h3 { margin: 0; font-size: 1.3rem; color: #1f2937; }
    .btn-add {
      background: #4f46e5; color: white; border: none; padding: 0.6rem 1.2rem;
      border-radius: 0.75rem; font-weight: 600; cursor: pointer; transition: all 0.2s;
    }
    .btn-add:hover { background: #4338ca; }
    .direccion-form-card {
      background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 1rem;
      padding: 1.5rem; margin-bottom: 1.5rem;
    }
    .form-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; }
    .span-2 { grid-column: span 2; }
    label { display: block; font-weight: 600; font-size: 0.85rem; color: #374151; margin-bottom: 0.3rem; }
    .form-control { width: 100%; padding: 0.7rem 0.9rem; border-radius: 0.6rem; border: 1px solid #d1d5db; }
    .btn-submit {
      margin-top: 1rem; background: #10b981; color: white; border: none;
      padding: 0.7rem 1.5rem; border-radius: 0.6rem; font-weight: 600; cursor: pointer;
    }
    .direcciones-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 1rem; }
    .direccion-card {
      border: 1px solid #e5e7eb; border-radius: 1rem; padding: 1.2rem; background: white;
      display: flex; flex-direction: column; justify-content: space-between; transition: all 0.2s;
    }
    .direccion-card.is-principal { border-color: #4f46e5; background: #f5f3ff; }
    .dir-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.5rem; }
    .dir-title { font-weight: 700; color: #1f2937; font-size: 0.95rem; }
    .badge-principal { background: #4f46e5; color: white; font-size: 0.65rem; padding: 0.15rem 0.4rem; border-radius: 0.3rem; font-weight: 700; }
    .dir-body { font-size: 0.85rem; color: #4b5563; margin: 0.2rem 0; }
    .dir-ref { font-size: 0.8rem; color: #6b7280; }
    .dir-actions { display: flex; gap: 0.5rem; margin-top: 1rem; }
    .btn-action { flex: 1; border: none; padding: 0.4rem; border-radius: 0.5rem; font-size: 0.8rem; font-weight: 600; cursor: pointer; }
    .btn-action.edit { background: #e0e7ff; color: #4338ca; }
    .btn-action.delete { background: #fee2e2; color: #dc2626; }
    .empty-state { text-align: center; color: #6b7280; padding: 2rem; grid-column: span 2; }
  `]
})
export class PerfilComponent implements OnInit {
  user: UserSession | null = null;
  direcciones: Direccion[] = [];
  mostrarForm = false;
  editandoId: number | null | undefined = null;

  nuevaDireccion = {
    direccion: '',
    distrito: '',
    provincia: '',
    departamento: '',
    referencia: '',
    principal: false
  };

  constructor(
    private authService: AuthService,
    private direccionService: DireccionService
  ) {}

  ngOnInit() {
    this.user = this.authService.getCurrentUser();
    if (this.user) {
      this.cargarDirecciones();
    }
  }

  cargarDirecciones() {
    if (!this.user) return;
    this.direccionService.listarPorUsuario(this.user.idUsuario).subscribe(data => {
      this.direcciones = data;
    });
  }

  toggleNuevaDireccionForm() {
    this.mostrarForm = !this.mostrarForm;
    this.editandoId = null;
    this.resetForm();
  }

  guardarDireccion() {
    if (!this.user) return;

    if (this.editandoId) {
      this.direccionService.actualizar(this.editandoId, this.nuevaDireccion).subscribe(() => {
        this.cargarDirecciones();
        this.toggleNuevaDireccionForm();
      });
    } else {
      this.direccionService.crear(this.user.idUsuario, this.nuevaDireccion).subscribe(() => {
        this.cargarDirecciones();
        this.toggleNuevaDireccionForm();
      });
    }
  }

  editarDireccion(dir: Direccion) {
    this.editandoId = dir.idDireccion;
    this.nuevaDireccion = {
      direccion: dir.direccion,
      distrito: dir.distrito,
      provincia: dir.provincia,
      departamento: dir.departamento,
      referencia: dir.referencia || '',
      principal: dir.principal || false
    };
    this.mostrarForm = true;
  }

  eliminarDireccion(id?: number) {
    if (!id) return;
    if (confirm('¿Desea eliminar esta dirección?')) {
      this.direccionService.eliminar(id).subscribe(() => {
        this.cargarDirecciones();
      });
    }
  }

  private resetForm() {
    this.nuevaDireccion = {
      direccion: '',
      distrito: '',
      provincia: '',
      departamento: '',
      referencia: '',
      principal: false
    };
  }
}
