import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationService, ToastMessage } from '../../core/services/notification.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-toast-container',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="toast-wrapper">
      <div *ngFor="let toast of toasts$ | async" class="toast-item" [ngClass]="toast.type">
        <div class="toast-icon">
          <span *ngIf="toast.type === 'success'">✅</span>
          <span *ngIf="toast.type === 'error'">❌</span>
          <span *ngIf="toast.type === 'warning'">⚠️</span>
          <span *ngIf="toast.type === 'info'">ℹ️</span>
        </div>
        <div class="toast-body">
          <div class="toast-title" *ngIf="toast.title">{{ toast.title }}</div>
          <div class="toast-message">{{ toast.message }}</div>
        </div>
        <button class="toast-close" (click)="dismiss(toast.id)" aria-label="Cerrar">✕</button>
      </div>
    </div>
  `,
  styles: [`
    .toast-wrapper {
      position: fixed;
      top: 1.5rem;
      right: 1.5rem;
      z-index: 99999;
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      max-width: 420px;
      width: calc(100% - 3rem);
      pointer-events: none;
    }
    .toast-item {
      pointer-events: auto;
      display: flex;
      align-items: flex-start;
      gap: 0.85rem;
      padding: 1rem 1.25rem;
      border-radius: 1rem;
      background: rgba(255, 255, 255, 0.96);
      backdrop-filter: blur(16px);
      box-shadow: 0 14px 35px rgba(0, 0, 0, 0.15), 0 2px 6px rgba(0, 0, 0, 0.05);
      border: 1px solid rgba(229, 231, 235, 0.9);
      animation: slideInRight 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
      transition: all 0.25s ease;
    }
    .toast-item.success {
      border-left: 5px solid #10b981;
      background: #f0fdf4;
    }
    .toast-item.error {
      border-left: 5px solid #ef4444;
      background: #fef2f2;
    }
    .toast-item.warning {
      border-left: 5px solid #f59e0b;
      background: #fffbeb;
    }
    .toast-item.info {
      border-left: 5px solid #3b82f6;
      background: #eff6ff;
    }
    .toast-icon {
      font-size: 1.2rem;
      line-height: 1;
      padding-top: 0.1rem;
    }
    .toast-body {
      flex: 1;
    }
    .toast-title {
      font-weight: 700;
      font-size: 0.9rem;
      color: #1f2937;
      margin-bottom: 0.2rem;
    }
    .toast-message {
      font-size: 0.85rem;
      color: #4b5563;
      line-height: 1.4;
    }
    .toast-close {
      background: transparent;
      border: none;
      color: #9ca3af;
      font-size: 1rem;
      cursor: pointer;
      padding: 0.2rem 0.4rem;
      border-radius: 0.375rem;
      transition: background 0.2s, color 0.2s;
    }
    .toast-close:hover {
      background: rgba(0, 0, 0, 0.06);
      color: #374151;
    }
    @keyframes slideInRight {
      from {
        opacity: 0;
        transform: translateX(100px) scale(0.95);
      }
      to {
        opacity: 1;
        transform: translateX(0) scale(1);
      }
    }
  `]
})
export class ToastContainerComponent {
  toasts$: Observable<ToastMessage[]>;

  constructor(private notificationService: NotificationService) {
    this.toasts$ = this.notificationService.toasts$;
  }

  dismiss(id: string) {
    this.notificationService.remove(id);
  }
}
