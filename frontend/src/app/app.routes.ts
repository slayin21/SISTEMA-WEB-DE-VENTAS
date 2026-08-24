import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { adminGuard } from './core/guards/admin.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'catalogo', pathMatch: 'full' },
  { 
    path: 'catalogo', 
    loadComponent: () => import('./features/catalog/catalogo.component').then(m => m.CatalogoComponent) 
  },
  { 
    path: 'tendencias', 
    loadComponent: () => import('./features/trends/tendencias.component').then(m => m.TendenciasComponent) 
  },
  { 
    path: 'producto/:id', 
    loadComponent: () => import('./features/catalog/producto-detalle.component').then(m => m.ProductoDetalleComponent) 
  },
  { 
    path: 'carrito', 
    loadComponent: () => import('./features/cart/carrito.component').then(m => m.CarritoComponent) 
  },
  { 
    path: 'checkout', 
    loadComponent: () => import('./features/checkout/checkout.component').then(m => m.CheckoutComponent) 
  },
  { 
    path: 'auth/login', 
    loadComponent: () => import('./features/auth/login.component').then(m => m.LoginComponent) 
  },
  { 
    path: 'auth/register', 
    loadComponent: () => import('./features/auth/register.component').then(m => m.RegisterComponent) 
  },
  { 
    path: 'auth/forgot-password', 
    loadComponent: () => import('./features/auth/forgot-password.component').then(m => m.ForgotPasswordComponent) 
  },
  { 
    path: 'perfil', 
    loadComponent: () => import('./features/profile/perfil.component').then(m => m.PerfilComponent),
    canActivate: [authGuard]
  },
  { 
    path: 'admin', 
    loadComponent: () => import('./features/admin/admin-dashboard.component').then(m => m.AdminDashboardComponent),
    canActivate: [adminGuard]
  },
  { path: '**', redirectTo: 'catalogo' }
];
