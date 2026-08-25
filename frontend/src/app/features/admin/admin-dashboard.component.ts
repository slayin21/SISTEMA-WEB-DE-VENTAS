import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductoService } from '../../core/services/producto.service';
import { VentaService } from '../../core/services/venta.service';
import { ProveedorService, Proveedor } from '../../core/services/proveedor.service';
import { UsuarioService } from '../../core/services/usuario.service';
import { ReporteService, ReporteVentasSummary, ProductoTop } from '../../core/services/reporte.service';
import { NotificationService } from '../../core/services/notification.service';
import { HttpClient } from '@angular/common/http';
import { Producto, Venta, ProductoVariante, Usuario } from '../../core/models';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="admin-wrapper">
      <!-- Top Control Bar con Gradient Mesh Glow -->
      <header class="dashboard-header glass-card">
        <div class="header-title-box">
          <div class="status-indicator">
            <span class="pulse-dot"></span>
            <span class="status-text">🟢 Base de Datos SQL Server Conectada & Operativa</span>
          </div>
          <h1 class="glow-title">Panel de Administración General</h1>
          <p class="subtitle">Gestión centralizada de catálogo, usuarios, inventarios, proveedores y finanzas</p>
        </div>

        <div class="header-actions">
          <button class="btn-secondary-action" (click)="cargarTodo()">
            <span class="icon">🔄</span> Actualizar Datos
          </button>
          <button class="btn-backup-action" (click)="ejecutarBackup()" [disabled]="ejecutandoBackup">
            <span class="icon">💾</span> {{ ejecutandoBackup ? 'Generando Backup...' : 'Generar Backup BD' }}
          </button>
        </div>
      </header>

      <!-- KPI / Stats Cards de Alta Fidelidad -->
      <div class="kpi-grid margin-top">
        <div class="kpi-card glass-card kpi-emerald">
          <div class="kpi-header">
            <span class="kpi-label">Ingresos Totales</span>
            <div class="kpi-icon emerald">💰</div>
          </div>
          <div class="kpi-value text-emerald">S/ {{ resumen?.ingresosTotales || 0 | number:'1.2-2' }}</div>
          <div class="kpi-footer">
            <span class="badge-sub text-emerald-light">▲ Subtotal General: S/ {{ resumen?.subtotalGeneral || 0 | number:'1.2-2' }}</span>
          </div>
        </div>

        <div class="kpi-card glass-card kpi-indigo">
          <div class="kpi-header">
            <span class="kpi-label">Total Pedidos</span>
            <div class="kpi-icon indigo">📦</div>
          </div>
          <div class="kpi-value text-indigo">{{ resumen?.totalVentas || 0 }}</div>
          <div class="kpi-footer">
            <span class="badge-sub text-indigo-light">Ventas y Despachos Registrados</span>
          </div>
        </div>

        <div class="kpi-card glass-card kpi-purple">
          <div class="kpi-header">
            <span class="kpi-label">Usuarios Registrados</span>
            <div class="kpi-icon purple">👥</div>
          </div>
          <div class="kpi-value text-purple">{{ usuarios.length }}</div>
          <div class="kpi-footer">
            <span class="badge-sub text-purple-light">Clientes y Administradores</span>
          </div>
        </div>

        <div class="kpi-card glass-card kpi-rose" [class.stock-warning]="alertasStock.length > 0">
          <div class="kpi-header">
            <span class="kpi-label">Alertas Stock Bajo</span>
            <div class="kpi-icon rose">⚠️</div>
          </div>
          <div class="kpi-value text-rose">{{ alertasStock.length }}</div>
          <div class="kpi-footer">
            <span class="badge-sub" [class.text-rose-light]="alertasStock.length > 0">
              {{ alertasStock.length > 0 ? 'Variantes ≤ 5 unidades requieren reposición' : 'Niveles óptimos de stock' }}
            </span>
          </div>
        </div>
      </div>

      <!-- Segmented Navigation Tabs Bar -->
      <nav class="admin-nav-tabs margin-top">
        <button [class.active]="tabActiva === 'pedidos'" (click)="tabActiva = 'pedidos'">
          <span>📦</span> Pedidos y Despachos
        </button>
        <button [class.active]="tabActiva === 'catalogo'" (click)="tabActiva = 'catalogo'">
          <span>👟</span> Catálogo de Productos
        </button>
        <button [class.active]="tabActiva === 'usuarios'" (click)="tabActiva = 'usuarios'">
          <span>👥</span> Gestión de Usuarios
        </button>
        <button [class.active]="tabActiva === 'inventario'" (click)="tabActiva = 'inventario'">
          <span>⚠️</span> Inventario & Kardex
          <span *ngIf="alertasStock.length > 0" class="tab-badge">{{ alertasStock.length }}</span>
        </button>
        <button [class.active]="tabActiva === 'proveedores'" (click)="tabActiva = 'proveedores'">
          <span>🏢</span> Gestión de Proveedores
        </button>
        <button [class.active]="tabActiva === 'reportes'" (click)="tabActiva = 'reportes'">
          <span>📊</span> Reportes & Finanzas
        </button>
      </nav>

      <!-- TAB 1: GESTIÓN DE PEDIDOS -->
      <div *ngIf="tabActiva === 'pedidos'" class="tab-pane glass-card">
        <div class="pane-header-bar">
          <div>
            <h2>Gestión de Pedidos y Estado de Despacho</h2>
            <p class="pane-subtitle">Supervisa y actualiza el ciclo de vida de los pedidos registrados</p>
          </div>
          <div class="search-filter-box">
            <input 
              type="text" 
              [(ngModel)]="searchPedidos" 
              placeholder="Buscar por cliente, ID o distrito..." 
              class="search-input" />
            <select [(ngModel)]="filtroEstadoPedido" class="filter-select">
              <option value="TODOS">Todos los Estados</option>
              <option value="PENDIENTE">PENDIENTE</option>
              <option value="EN_PREPARACION">EN PREPARACIÓN</option>
              <option value="ENVIADO">ENVIADO</option>
              <option value="ENTREGADO">ENTREGADO</option>
              <option value="CANCELADO">CANCELADO</option>
            </select>
          </div>
        </div>

        <div class="table-responsive margin-top">
          <table class="modern-table">
            <thead>
              <tr>
                <th>Código Pedido</th>
                <th>Fecha y Hora</th>
                <th>Cliente</th>
                <th>Dirección & Agencia</th>
                <th>Monto Total</th>
                <th>Estado Actual</th>
                <th>Actualizar Estado</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let v of ventasFiltradas">
                <td><span class="order-code">#ZAP-{{ v.idVenta }}</span></td>
                <td><span class="date-text">{{ v.fecha | date:'dd/MM/yyyy HH:mm' }}</span></td>
                <td>
                  <div class="user-cell">
                    <span class="user-name">👤 {{ v.usuario?.nombre || 'Cliente General' }}</span>
                    <span class="user-email-sub">{{ v.usuario?.email }}</span>
                  </div>
                </td>
                <td>
                  <div class="shipping-cell">
                    <strong>📍 {{ v.distritoEnvio }}</strong>
                    <span class="agency-tag">{{ v.despachadorAgencia || 'Envío Regular' }}</span>
                  </div>
                </td>
                <td>
                  <span class="amount-cell text-emerald">
                    S/ {{ ((v.subtotal || 0) + (v.costoEnvio || 0) - (v.descuentoMonto || 0)) | number:'1.2-2' }}
                  </span>
                </td>
                <td>
                  <span class="status-pill" [ngClass]="v.estadoPedido.toLowerCase()">
                    {{ v.estadoPedido.replace('_', ' ') }}
                  </span>
                </td>
                <td>
                  <select 
                    [ngModel]="v.estadoPedido" 
                    (change)="cambiarEstadoPedido(v.idVenta!, $any($event.target).value)" 
                    class="action-select">
                    <option value="PENDIENTE">PENDIENTE</option>
                    <option value="EN_PREPARACION">EN PREPARACIÓN</option>
                    <option value="ENVIADO">ENVIADO</option>
                    <option value="ENTREGADO">ENTREGADO</option>
                    <option value="CANCELADO">CANCELADO</option>
                  </select>
                </td>
              </tr>
              <tr *ngIf="ventasFiltradas.length === 0">
                <td colspan="7" class="empty-table">No se encontraron pedidos que coincidan con la búsqueda.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- TAB 2: CATÁLOGO Y PRODUCTOS -->
      <div *ngIf="tabActiva === 'catalogo'" class="tab-pane glass-card">
        <div class="pane-header-bar">
          <div>
            <h2>Gestión de Catálogo de Productos</h2>
            <p class="pane-subtitle">Crea, edita, visualiza imágenes y administra los modelos de calzado</p>
          </div>
          <div class="actions-group">
            <input 
              type="text" 
              [(ngModel)]="searchCatalogo" 
              placeholder="Buscar por nombre, marca o material..." 
              class="search-input" />
            <button class="btn-primary-action" (click)="abrirModalProducto()">
              ➕ Crear Nuevo Producto
            </button>
          </div>
        </div>

        <div class="table-responsive margin-top">
          <table class="modern-table">
            <thead>
              <tr>
                <th>Imagen</th>
                <th>ID</th>
                <th>Nombre del Producto</th>
                <th>Marca</th>
                <th>Categoría</th>
                <th>Género</th>
                <th>Material</th>
                <th>Estado</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let p of productosFiltrados">
                <td>
                  <div class="img-thumb-wrapper">
                    <img 
                      [src]="obtenerUrlImagen(p)" 
                      [alt]="p.nombre" 
                      class="product-thumb" 
                      (error)="onErrorImagen($event)" />
                  </div>
                </td>
                <td><span class="id-tag">#{{ p.idProducto }}</span></td>
                <td><strong class="product-title-text">{{ p.nombre }}</strong></td>
                <td><span class="brand-chip">{{ p.marca }}</span></td>
                <td><span class="category-chip">{{ p.categoria?.nombre || 'General' }}</span></td>
                <td>{{ p.genero }}</td>
                <td>{{ p.material }}</td>
                <td>
                  <span class="status-pill active" *ngIf="p.activo">Activo</span>
                  <span class="status-pill inactive" *ngIf="!p.activo">Inactivo</span>
                </td>
                <td>
                  <div class="table-actions">
                    <button class="btn-icon-btn stock" (click)="gestionarStockProducto(p)" title="Gestionar Stock de Variantes">📦 Stock</button>
                    <button class="btn-icon-btn edit" (click)="editarProducto(p)" title="Editar">✏️ Editar</button>
                    <button class="btn-icon-btn delete" (click)="eliminarProducto(p.idProducto)" title="Eliminar">🗑️ Desactivar</button>
                  </div>
                </td>
              </tr>
              <tr *ngIf="productosFiltrados.length === 0">
                <td colspan="9" class="empty-table">No se encontraron productos registrados.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- TAB 3: GESTIÓN DE USUARIOS REGISTRADOS -->
      <div *ngIf="tabActiva === 'usuarios'" class="tab-pane glass-card">
        <div class="pane-header-bar">
          <div>
            <h2>Gestión de Usuarios Registrados</h2>
            <p class="pane-subtitle">Visualiza, crea, edita datos de cuenta, modifica roles y administra accesos</p>
          </div>
          <div class="actions-group">
            <input 
              type="text" 
              [(ngModel)]="searchUsuarios" 
              placeholder="Buscar usuario por nombre, email o rol..." 
              class="search-input" />
            <button class="btn-primary-action" (click)="abrirModalUsuario()">
              👤 Crear Nuevo Usuario
            </button>
          </div>
        </div>

        <div class="table-responsive margin-top">
          <table class="modern-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre del Usuario</th>
                <th>Correo Electrónico</th>
                <th>Rol de Acceso</th>
                <th>Fecha de Registro</th>
                <th>Estado Cuenta</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let u of usuariosFiltrados">
                <td><span class="id-tag">#USR-{{ u.idUsuario }}</span></td>
                <td><strong class="user-name-text">👤 {{ u.nombre }}</strong></td>
                <td><span class="email-text">{{ u.email }}</span></td>
                <td>
                  <select 
                    [ngModel]="u.rol" 
                    (change)="cambiarRolUsuario(u.idUsuario!, $any($event.target).value)" 
                    class="action-select role-select"
                    [class.admin-role]="u.rol === 'ADMIN'">
                    <option value="CLIENTE">CLIENTE</option>
                    <option value="ADMIN">ADMINISTRADOR</option>
                  </select>
                </td>
                <td><span class="date-text">{{ u.fechaRegistro | date:'dd/MM/yyyy HH:mm' }}</span></td>
                <td>
                  <span class="status-pill active" *ngIf="u.activo">ACTIVO</span>
                  <span class="status-pill cancelado" *ngIf="!u.activo">INACTIVO</span>
                </td>
                <td>
                  <div class="table-actions">
                    <button class="btn-icon-btn edit" (click)="editarUsuario(u)" title="Editar datos del usuario">✏️ Editar</button>
                    <button 
                      class="btn-icon-btn" 
                      [class.delete]="u.activo" 
                      [class.edit]="!u.activo" 
                      (click)="toggleEstadoUsuario(u)">
                      {{ u.activo ? '🚫 Desactivar' : '✅ Activar' }}
                    </button>
                  </div>
                </td>
              </tr>
              <tr *ngIf="usuariosFiltrados.length === 0">
                <td colspan="7" class="empty-table">No se encontraron usuarios registrados que coincidan con la búsqueda.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- TAB 4: INVENTARIO & KARDEX -->
      <div *ngIf="tabActiva === 'inventario'" class="tab-pane glass-card">
        <div class="alert-banner danger margin-bottom" *ngIf="alertasStock.length > 0">
          <div class="banner-icon">⚠️</div>
          <div class="banner-content">
            <h3>Alertas de Stock Bajo (Reposición Requerida)</h3>
            <p>Las siguientes variantes han alcanzado el umbral mínimo (≤ 5 unidades):</p>
            <div class="alert-chips-grid margin-top-sm">
              <div *ngFor="let a of alertasStock" class="stock-chip">
                <span class="chip-title">{{ a.producto?.nombre }}</span>
                <span class="chip-meta">Talla {{ a.talla }} | {{ a.color }}</span>
                <strong class="chip-qty">Quedan {{ a.stock }} unid.</strong>
              </div>
            </div>
          </div>
        </div>

        <div class="pane-header-bar">
          <div>
            <h2>Historial de Movimientos Kardex & Control de Inventario</h2>
            <p class="pane-subtitle">Registro auditable de entradas, salidas y ajustes de stock en tiempo real</p>
          </div>
          <div class="actions-group">
            <input 
              type="text" 
              [(ngModel)]="searchKardex" 
              placeholder="Buscar en Kardex por producto, tipo u observación..." 
              class="search-input" />
            <button class="btn-emerald-action" (click)="abrirModalMovimientoStock()">
              ➕ Registrar Entrada / Salida
            </button>
          </div>
        </div>

        <div class="table-responsive margin-top">
          <table class="modern-table">
            <thead>
              <tr>
                <th>ID Mov.</th>
                <th>Fecha / Hora</th>
                <th>Producto y Variante</th>
                <th>Tipo Movimiento</th>
                <th>Cant.</th>
                <th>Stock Anterior</th>
                <th>Stock Nuevo</th>
                <th>Observación</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let k of kardexFiltrado">
                <td><span class="kardex-code">#KDX-{{ k.idMovimiento }}</span></td>
                <td><span class="date-text">{{ k.fechaMovimiento | date:'dd/MM/yyyy HH:mm:ss' }}</span></td>
                <td>
                  <strong class="text-bright">{{ k.variante?.producto?.nombre }}</strong>
                  <span class="variant-meta"> (Talla {{ k.variante?.talla }} - {{ k.variante?.color }})</span>
                </td>
                <td>
                  <span class="kardex-type-pill" [class.salida]="(k.tipoMovimiento || '').includes('SALIDA')">
                    {{ k.tipoMovimiento }}
                  </span>
                </td>
                <td><strong>{{ k.cantidad }}</strong></td>
                <td>{{ k.stockAnterior }}</td>
                <td><strong class="text-emerald">{{ k.stockActual }}</strong></td>
                <td><span class="obs-text">{{ k.observacion || '-' }}</span></td>
              </tr>
              <tr *ngIf="kardexFiltrado.length === 0">
                <td colspan="8" class="empty-table">No se registraron movimientos en el Kardex.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- TAB 5: GESTIÓN DE PROVEEDORES -->
      <div *ngIf="tabActiva === 'proveedores'" class="tab-pane glass-card">
        <div class="pane-header-bar">
          <div>
            <h2>Gestión de Proveedores de Calzado</h2>
            <p class="pane-subtitle">Administra los datos de contacto y RUC de empresas proveedoras</p>
          </div>
          <div class="actions-group">
            <input 
              type="text" 
              [(ngModel)]="searchProveedores" 
              placeholder="Buscar por Razón Social o RUC..." 
              class="search-input" />
            <button class="btn-primary-action" (click)="abrirModalProveedor()">
              🏢 Registrar Proveedor
            </button>
          </div>
        </div>

        <div class="table-responsive margin-top">
          <table class="modern-table">
            <thead>
              <tr>
                <th>Razón Social</th>
                <th>RUC</th>
                <th>Teléfono</th>
                <th>Correo Electrónico</th>
                <th>Dirección</th>
                <th>Estado</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let prov of proveedoresFiltrados">
                <td><strong class="company-name">{{ prov.razonSocial }}</strong></td>
                <td><span class="ruc-tag">{{ prov.ruc }}</span></td>
                <td>{{ prov.telefono || 'No registrado' }}</td>
                <td><span class="email-text">{{ prov.correo || 'No registrado' }}</span></td>
                <td>{{ prov.direccion || 'No registrada' }}</td>
                <td><span class="status-pill active">{{ prov.estado }}</span></td>
                <td>
                  <div class="table-actions">
                    <button class="btn-icon-btn edit" (click)="editarProveedor(prov)">✏️ Editar</button>
                    <button class="btn-icon-btn delete" (click)="eliminarProveedor(prov.idProveedor!)">🗑️ Eliminar</button>
                  </div>
                </td>
              </tr>
              <tr *ngIf="proveedoresFiltrados.length === 0">
                <td colspan="7" class="empty-table">No se encontraron proveedores registrados.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- TAB 6: REPORTES & MÉTRICAS -->
      <div *ngIf="tabActiva === 'reportes'" class="tab-pane glass-card">
        <div class="pane-header-bar">
          <div>
            <h2>Reportes Estadísticos y Exportación de Ventas</h2>
            <p class="pane-subtitle">Analiza la rotación de inventarios y exporta datos consolidados</p>
          </div>
          <button class="btn-emerald-action" (click)="exportarCSV()">
            📥 Exportar Reporte CSV
          </button>
        </div>

        <h3 class="section-subtitle margin-top">🔥 Productos de Mayor Rotación (Top Más Vendidos)</h3>
        <div class="table-responsive margin-top-sm">
          <table class="modern-table">
            <thead>
              <tr>
                <th>Posición</th>
                <th>Producto</th>
                <th>Marca</th>
                <th>Pares Vendidos</th>
                <th>Total Generado</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let top of topProductos; let i = index">
                <td><span class="rank-badge">#{{ i + 1 }}</span></td>
                <td><strong class="text-bright">{{ top.nombre }}</strong></td>
                <td><span class="brand-chip">{{ top.marca }}</span></td>
                <td><strong class="text-indigo">{{ top.cantidadVendida }} pares</strong></td>
                <td><strong class="text-emerald">S/ {{ top.totalGenerado | number:'1.2-2' }}</strong></td>
              </tr>
              <tr *ngIf="topProductos.length === 0">
                <td colspan="5" class="empty-table">No hay datos suficientes para calcular la rotación.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- MODAL: CREAR / EDITAR PRODUCTO -->
    <div *ngIf="mostrarModalProd" class="modal-backdrop" (click)="cerrarModalProducto()">
      <div class="modal-card glass-modal" (click)="$event.stopPropagation()">
        <div class="modal-header">
          <h3>{{ editProdId ? '✏️ Editar Producto' : '➕ Crear Nuevo Producto' }}</h3>
          <button class="btn-close-modal" (click)="cerrarModalProducto()">✕</button>
        </div>
        <form (ngSubmit)="guardarProducto()" class="modal-form margin-top">
          <div class="form-grid-2">
            <div class="form-group span-2">
              <label>Nombre del Producto *</label>
              <input 
                type="text" 
                [(ngModel)]="nuevoProducto.nombre" 
                name="nombre" 
                class="form-control" 
                [class.invalid]="prodFormErrors.nombre"
                placeholder="Ej. Zapatillas Nike Air Jordan Street" />
              <span class="field-error" *ngIf="prodFormErrors.nombre">{{ prodFormErrors.nombre }}</span>
            </div>

            <!-- CAMPO Y PREVISUALIZACIÓN DE IMAGEN -->
            <div class="form-group span-2">
              <label>URL de Imagen Principal del Producto</label>
              <input 
                type="text" 
                [(ngModel)]="nuevoProducto.urlImagen" 
                name="urlImagen" 
                class="form-control" 
                placeholder="Ej. https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800" />
              <p class="field-hint">Ingresa la URL de la imagen del calzado para visualizarla en el catálogo.</p>
              
              <!-- Live Image Preview Box -->
              <div class="image-preview-container margin-top-sm" *ngIf="nuevoProducto.urlImagen">
                <span class="preview-title">Previsualización de Imagen:</span>
                <div class="preview-box">
                  <img [src]="nuevoProducto.urlImagen" alt="Previsualización" (error)="onErrorImagen($event)" />
                </div>
              </div>
            </div>

            <div class="form-group">
              <label>Marca *</label>
              <input 
                type="text" 
                [(ngModel)]="nuevoProducto.marca" 
                name="marca" 
                class="form-control" 
                [class.invalid]="prodFormErrors.marca"
                placeholder="Ej. Nike, Adidas, Joselito" />
              <span class="field-error" *ngIf="prodFormErrors.marca">{{ prodFormErrors.marca }}</span>
            </div>

            <div class="form-group">
              <label>Material *</label>
              <input 
                type="text" 
                [(ngModel)]="nuevoProducto.material" 
                name="material" 
                class="form-control" 
                [class.invalid]="prodFormErrors.material"
                placeholder="Ej. Cuero Vacuno, Malla" />
              <span class="field-error" *ngIf="prodFormErrors.material">{{ prodFormErrors.material }}</span>
            </div>

            <div class="form-group">
              <label>Género</label>
              <select [(ngModel)]="nuevoProducto.genero" name="genero" class="form-control">
                <option value="Hombre">Hombre</option>
                <option value="Mujer">Mujer</option>
                <option value="Unisex">Unisex</option>
              </select>
            </div>

            <div class="form-group">
              <label>Categoría</label>
              <select [(ngModel)]="catIdForm" name="catId" class="form-control">
                <option [value]="1">Urbano</option>
                <option [value]="2">Deportivo</option>
                <option [value]="3">Formal</option>
                <option [value]="4">Sandalias</option>
                <option [value]="5">Botas</option>
              </select>
            </div>

            <div class="form-group span-2">
              <label>Descripción del Calzado</label>
              <textarea 
                [(ngModel)]="nuevoProducto.descripcion" 
                name="descripcion" 
                rows="3" 
                class="form-control" 
                placeholder="Detalla las características técnicas y beneficios del calzado..."></textarea>
            </div>
          </div>

          <div class="modal-footer margin-top">
            <button type="button" class="btn-cancel" (click)="cerrarModalProducto()">Cancelar</button>
            <button type="submit" class="btn-save">Guardar Producto</button>
          </div>
        </form>
      </div>
    </div>

    <!-- MODAL: REGISTRAR / EDITAR PROVEEDOR -->
    <div *ngIf="mostrarModalProv" class="modal-backdrop" (click)="cerrarModalProveedor()">
      <div class="modal-card glass-modal" (click)="$event.stopPropagation()">
        <div class="modal-header">
          <h3>{{ editProvId ? '✏️ Editar Proveedor' : '🏢 Registrar Nuevo Proveedor' }}</h3>
          <button class="btn-close-modal" (click)="cerrarModalProveedor()">✕</button>
        </div>
        <form (ngSubmit)="guardarProveedor()" class="modal-form margin-top">
          <div class="form-grid-2">
            <div class="form-group span-2">
              <label>Razón Social / Nombre Comercial *</label>
              <input 
                type="text" 
                [(ngModel)]="nuevoProveedor.razonSocial" 
                name="razonSocial" 
                class="form-control" 
                [class.invalid]="provFormErrors.razonSocial"
                placeholder="Ej. Distribuidora Calzados El Sol S.A.C." />
              <span class="field-error" *ngIf="provFormErrors.razonSocial">{{ provFormErrors.razonSocial }}</span>
            </div>

            <div class="form-group">
              <label>RUC (11 dígitos numéricos) *</label>
              <input 
                type="text" 
                [(ngModel)]="nuevoProveedor.ruc" 
                name="ruc" 
                maxlength="11" 
                class="form-control" 
                [class.invalid]="provFormErrors.ruc"
                placeholder="Ej. 20512345678" />
              <span class="field-error" *ngIf="provFormErrors.ruc">{{ provFormErrors.ruc }}</span>
            </div>

            <div class="form-group">
              <label>Teléfono de Contacto</label>
              <input 
                type="text" 
                [(ngModel)]="nuevoProveedor.telefono" 
                name="telefono" 
                class="form-control" 
                [class.invalid]="provFormErrors.telefono"
                placeholder="Ej. 987654321" />
              <span class="field-error" *ngIf="provFormErrors.telefono">{{ provFormErrors.telefono }}</span>
            </div>

            <div class="form-group span-2">
              <label>Correo Electrónico de Ventas</label>
              <input 
                type="email" 
                [(ngModel)]="nuevoProveedor.correo" 
                name="correo" 
                class="form-control" 
                [class.invalid]="provFormErrors.correo"
                placeholder="Ej. ventas@calzadoselsol.pe" />
              <span class="field-error" *ngIf="provFormErrors.correo">{{ provFormErrors.correo }}</span>
            </div>

            <div class="form-group span-2">
              <label>Dirección Fiscal</label>
              <input 
                type="text" 
                [(ngModel)]="nuevoProveedor.direccion" 
                name="direccion" 
                class="form-control" 
                placeholder="Ej. Av. Argentina 1450, Cercado de Lima" />
            </div>
          </div>

          <div class="modal-footer margin-top">
            <button type="button" class="btn-cancel" (click)="cerrarModalProveedor()">Cancelar</button>
            <button type="submit" class="btn-save">Guardar Proveedor</button>
          </div>
        </form>
      </div>
    </div>

    <!-- MODAL: CREAR / EDITAR USUARIO -->
    <div *ngIf="mostrarModalUser" class="modal-backdrop" (click)="cerrarModalUsuario()">
      <div class="modal-card glass-modal" (click)="$event.stopPropagation()">
        <div class="modal-header">
          <h3>{{ editUserId ? '✏️ Editar Datos de Usuario' : '👤 Crear Nuevo Usuario' }}</h3>
          <button class="btn-close-modal" (click)="cerrarModalUsuario()">✕</button>
        </div>
        <form (ngSubmit)="guardarUsuario()" class="modal-form margin-top">
          <div class="form-grid-2">
            <div class="form-group span-2">
              <label>Nombre Completo del Usuario *</label>
              <input 
                type="text" 
                [(ngModel)]="nuevoUsuario.nombre" 
                name="nombre" 
                class="form-control" 
                [class.invalid]="userFormErrors.nombre"
                placeholder="Ej. Juan Pérez" />
              <span class="field-error" *ngIf="userFormErrors.nombre">{{ userFormErrors.nombre }}</span>
            </div>

            <div class="form-group span-2">
              <label>Correo Electrónico *</label>
              <input 
                type="email" 
                [(ngModel)]="nuevoUsuario.email" 
                name="email" 
                class="form-control" 
                [class.invalid]="userFormErrors.email"
                placeholder="Ej. usuario@zapateriajoselito.com" />
              <span class="field-error" *ngIf="userFormErrors.email">{{ userFormErrors.email }}</span>
            </div>

            <div class="form-group span-2">
              <label>Contraseña {{ editUserId ? '(Dejar en blanco para mantener contraseña actual)' : '*' }}</label>
              <input 
                type="password" 
                [(ngModel)]="nuevoUsuario.password" 
                name="password" 
                class="form-control" 
                [class.invalid]="userFormErrors.password"
                placeholder="{{ editUserId ? '•••••••• (Opcional)' : 'Ingresa la contraseña de acceso' }}" />
              <span class="field-error" *ngIf="userFormErrors.password">{{ userFormErrors.password }}</span>
            </div>

            <div class="form-group">
              <label>Rol de Acceso *</label>
              <select [(ngModel)]="nuevoUsuario.rol" name="rol" class="form-control">
                <option value="CLIENTE">CLIENTE</option>
                <option value="ADMIN">ADMINISTRADOR</option>
              </select>
            </div>

            <div class="form-group">
              <label>Estado de Cuenta</label>
              <select [(ngModel)]="nuevoUsuario.activo" name="activo" class="form-control">
                <option [ngValue]="true">ACTIVO</option>
                <option [ngValue]="false">INACTIVO</option>
              </select>
            </div>
          </div>

          <div class="modal-footer margin-top">
            <button type="button" class="btn-cancel" (click)="cerrarModalUsuario()">Cancelar</button>
            <button type="submit" class="btn-save">Guardar Datos de Usuario</button>
          </div>
        </form>
      </div>
    </div>

    <!-- MODAL: GESTIÓN DE STOCK POR VARIANTE -->
    <div *ngIf="mostrarModalStock && productoStockModal" class="modal-backdrop" (click)="cerrarModalStock()">
      <div class="modal-card glass-modal modal-lg" (click)="$event.stopPropagation()">
        <div class="modal-header">
          <div>
            <span class="category-chip">{{ productoStockModal.marca }}</span>
            <h3>📦 Gestión de Stock e Inventario por Talla / Variante</h3>
            <p class="field-hint">Producto: <strong>{{ productoStockModal.nombre }}</strong></p>
          </div>
          <button class="btn-close-modal" (click)="cerrarModalStock()">✕</button>
        </div>

        <div class="modal-body margin-top">
          <h4 class="section-sub">Variantes de Stock Registradas en SQL Server</h4>
          
          <div class="table-responsive margin-top-sm">
            <table class="modern-table">
              <thead>
                <tr>
                  <th>Talla</th>
                  <th>Color</th>
                  <th>SKU</th>
                  <th>Precio Venta</th>
                  <th>Stock Actual</th>
                  <th>Guardar / Ajustar</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let varItem of productoStockModal.variantes">
                  <td><span class="rank-badge">Talla {{ varItem.talla }}</span></td>
                  <td><strong>{{ varItem.color }}</strong></td>
                  <td><span class="id-tag">{{ varItem.sku || '-' }}</span></td>
                  <td>
                    <input 
                      type="number" 
                      [(ngModel)]="varItem.precio" 
                      class="form-control form-inline" 
                      style="width: 100px;" />
                  </td>
                  <td>
                    <input 
                      type="number" 
                      [(ngModel)]="varItem.stock" 
                      class="form-control form-inline" 
                      style="width: 90px;" />
                  </td>
                  <td>
                    <button class="btn-emerald-action btn-sm" (click)="guardarCambiosVariante(varItem)">
                      💾 Guardar
                    </button>
                  </td>
                </tr>
                <tr *ngIf="!productoStockModal.variantes || productoStockModal.variantes.length === 0">
                  <td colspan="6" class="empty-table">Este producto aún no tiene variantes ni stock de tallas registradas.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- FORMULARIO PARA CREAR NUEVA VARIANTE/TALLA -->
          <div class="new-variant-box margin-top">
            <h4 class="section-sub">➕ Añadir Nueva Talla / Variante de Stock</h4>
            <div class="form-grid-4 margin-top-sm">
              <div class="form-group">
                <label>Talla *</label>
                <input type="text" [(ngModel)]="nuevaVarianteForm.talla" placeholder="Ej. 42" class="form-control" />
              </div>
              <div class="form-group">
                <label>Color *</label>
                <input type="text" [(ngModel)]="nuevaVarianteForm.color" placeholder="Ej. Negro" class="form-control" />
              </div>
              <div class="form-group">
                <label>Stock Inicial *</label>
                <input type="number" [(ngModel)]="nuevaVarianteForm.stock" placeholder="Ej. 15" class="form-control" />
              </div>
              <div class="form-group">
                <label>Precio S/ *</label>
                <input type="number" [(ngModel)]="nuevaVarianteForm.precio" placeholder="Ej. 299.00" class="form-control" />
              </div>
            </div>
            <button class="btn-primary-action margin-top-sm" (click)="crearNuevaVariante()">
              ✨ Agregar Talla y Guardar Stock
            </button>
          </div>
        </div>

        <div class="modal-footer margin-top">
          <button type="button" class="btn-cancel" (click)="cerrarModalStock()">Cerrar Ventana</button>
        </div>
      </div>
    </div>

    <!-- MODAL: REGISTRAR MOVIMIENTO KARDEX DE INVENTARIO -->
    <div *ngIf="mostrarModalMovStock" class="modal-backdrop" (click)="cerrarModalMovimientoStock()">
      <div class="modal-card glass-modal" (click)="$event.stopPropagation()">
        <div class="modal-header">
          <h3>➕ Registrar Entrada / Salida de Inventario (Kardex)</h3>
          <button class="btn-close-modal" (click)="cerrarModalMovimientoStock()">✕</button>
        </div>

        <form (ngSubmit)="guardarMovimientoStock()" class="modal-form margin-top">
          <div class="form-grid-2">
            <div class="form-group span-2">
              <label>Selecciona Producto y Talla/Variante *</label>
              <select [(ngModel)]="movimientoForm.idVariante" name="idVariante" class="form-control">
                <option [ngValue]="null">-- Seleccionar Variante de Calzado --</option>
                <ng-container *ngFor="let p of productos">
                  <option *ngFor="let v of p.variantes" [value]="v.idVariante">
                    {{ p.nombre }} - Talla {{ v.talla }} ({{ v.color }}) | Stock Actual: {{ v.stock }} unid.
                  </option>
                </ng-container>
              </select>
            </div>

            <div class="form-group">
              <label>Tipo de Movimiento *</label>
              <select [(ngModel)]="movimientoForm.tipoMovimiento" name="tipoMovimiento" class="form-control">
                <option value="ENTRADA_COMPRA">🟢 ENTRADA_COMPRA (Reposición / Importación)</option>
                <option value="AJUSTE_ENTRADA">🔵 AJUSTE_ENTRADA (Sobrante / Corrección (+))</option>
                <option value="AJUSTE_SALIDA">🔴 AJUSTE_SALIDA (Merma / Pérdida (-))</option>
              </select>
            </div>

            <div class="form-group">
              <label>Cantidad de Unidades *</label>
              <input 
                type="number" 
                [(ngModel)]="movimientoForm.cantidad" 
                name="cantidad" 
                min="1" 
                class="form-control" 
                placeholder="Ej. 10" />
            </div>

            <div class="form-group span-2">
              <label>Observación / Motivo del Movimiento</label>
              <input 
                type="text" 
                [(ngModel)]="movimientoForm.observacion" 
                name="observacion" 
                class="form-control" 
                placeholder="Ej. Lote recibido de proveedor / Reposición de almacén" />
            </div>
          </div>

          <div class="modal-footer margin-top">
            <button type="button" class="btn-cancel" (click)="cerrarModalMovimientoStock()">Cancelar</button>
            <button type="submit" class="btn-save">Registrar Movimiento en Kardex</button>
          </div>
        </form>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      background-color: #0b0f19;
      color: #f8fafc;
      min-height: 100vh;
      font-family: 'Outfit', 'Segoe UI', system-ui, sans-serif;
    }
    .admin-wrapper {
      max-width: 1320px;
      margin: 0 auto;
      padding: 2rem 1.5rem 4rem 1.5rem;
    }
    .glass-card {
      background: rgba(17, 24, 39, 0.75);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border-radius: 1.25rem;
      border: 1px solid rgba(255, 255, 255, 0.08);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
      padding: 1.75rem;
      transition: all 0.3s ease;
    }
    .margin-top { margin-top: 1.5rem; }
    .margin-top-sm { margin-top: 1rem; }
    .margin-bottom { margin-bottom: 1.5rem; }

    /* Header Styling */
    .dashboard-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 1.5rem;
      background: linear-gradient(135deg, rgba(17, 24, 39, 0.9) 0%, rgba(30, 41, 59, 0.8) 100%);
      border: 1px solid rgba(99, 102, 241, 0.25);
      box-shadow: 0 15px 35px rgba(0, 0, 0, 0.6), 0 0 25px rgba(99, 102, 241, 0.1);
    }
    .status-indicator {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      background: rgba(16, 185, 129, 0.15);
      border: 1px solid rgba(16, 185, 129, 0.3);
      padding: 0.3rem 0.85rem;
      border-radius: 2rem;
      margin-bottom: 0.75rem;
    }
    .pulse-dot {
      width: 8px;
      height: 8px;
      background-color: #10b981;
      border-radius: 50%;
      box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.8);
      animation: pulse 1.8s infinite;
    }
    @keyframes pulse {
      0% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.8); }
      70% { box-shadow: 0 0 0 6px rgba(16, 185, 129, 0); }
      100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
    }
    .status-text { font-size: 0.78rem; font-weight: 700; color: #34d399; }
    .glow-title {
      margin: 0; font-size: 1.85rem; font-weight: 800;
      background: linear-gradient(135deg, #ffffff 0%, #a5b4fc 100%);
      -webkit-background-clip: text; -webkit-text-fill-color: transparent;
      letter-spacing: -0.02em;
    }
    .subtitle { margin: 0.3rem 0 0 0; color: #94a3b8; font-size: 0.92rem; }
    .header-actions { display: flex; gap: 0.85rem; }
    .btn-secondary-action {
      background: rgba(255, 255, 255, 0.08); color: #f1f5f9; border: 1px solid rgba(255, 255, 255, 0.15);
      padding: 0.7rem 1.25rem; border-radius: 0.85rem; font-weight: 700; cursor: pointer; transition: all 0.25s ease;
      display: flex; align-items: center; gap: 0.5rem;
    }
    .btn-secondary-action:hover { background: rgba(255, 255, 255, 0.18); border-color: rgba(255, 255, 255, 0.3); }
    .btn-backup-action {
      background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%); color: white; border: none;
      padding: 0.7rem 1.35rem; border-radius: 0.85rem; font-weight: 800; cursor: pointer;
      box-shadow: 0 6px 20px rgba(99, 102, 241, 0.35); transition: all 0.25s ease;
      display: flex; align-items: center; gap: 0.5rem;
    }
    .btn-backup-action:hover { transform: translateY(-2px); box-shadow: 0 10px 25px rgba(99, 102, 241, 0.5); }

    /* Next-Gen KPI Cards */
    .kpi-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); gap: 1.25rem; }
    .kpi-card { padding: 1.5rem; display: flex; flex-direction: column; justify-content: space-between; position: relative; overflow: hidden; }
    .kpi-card:hover { transform: translateY(-4px); }
    
    .kpi-emerald { background: linear-gradient(135deg, rgba(16, 185, 129, 0.12) 0%, rgba(17, 24, 39, 0.8) 100%); border-color: rgba(16, 185, 129, 0.3); }
    .kpi-indigo { background: linear-gradient(135deg, rgba(99, 102, 241, 0.12) 0%, rgba(17, 24, 39, 0.8) 100%); border-color: rgba(99, 102, 241, 0.3); }
    .kpi-purple { background: linear-gradient(135deg, rgba(168, 85, 247, 0.12) 0%, rgba(17, 24, 39, 0.8) 100%); border-color: rgba(168, 85, 247, 0.3); }
    .kpi-rose { background: linear-gradient(135deg, rgba(244, 63, 94, 0.12) 0%, rgba(17, 24, 39, 0.8) 100%); border-color: rgba(244, 63, 94, 0.3); }

    .kpi-header { display: flex; justify-content: space-between; align-items: center; }
    .kpi-label { font-size: 0.78rem; font-weight: 800; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.08em; }
    .kpi-icon { width: 42px; height: 42px; border-radius: 0.85rem; display: flex; align-items: center; justify-content: center; font-size: 1.3rem; }
    .kpi-icon.emerald { background: rgba(16, 185, 129, 0.2); }
    .kpi-icon.indigo { background: rgba(99, 102, 241, 0.2); }
    .kpi-icon.purple { background: rgba(168, 85, 247, 0.2); }
    .kpi-icon.rose { background: rgba(244, 63, 94, 0.2); }

    .kpi-value { font-size: 2.1rem; font-weight: 900; margin: 0.6rem 0; letter-spacing: -0.03em; }
    .badge-sub { font-size: 0.78rem; font-weight: 600; }
    .text-emerald { color: #34d399; }
    .text-emerald-light { color: #6ee7b7; }
    .text-indigo { color: #818cf8; }
    .text-indigo-light { color: #a5b4fc; }
    .text-purple { color: #c084fc; }
    .text-purple-light { color: #e9d5ff; }
    .text-rose { color: #fb7185; }
    .text-rose-light { color: #fca5a5; }
    .text-bright { color: #ffffff; }

    /* Navigation Tabs Bar */
    .admin-nav-tabs {
      display: flex; gap: 0.6rem; overflow-x: auto; padding: 0.4rem;
      background: rgba(15, 23, 42, 0.8); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 1rem;
    }
    .admin-nav-tabs button {
      background: transparent; border: none; padding: 0.75rem 1.25rem;
      border-radius: 0.75rem; font-weight: 700; font-size: 0.88rem; color: #94a3b8; cursor: pointer;
      white-space: nowrap; transition: all 0.25s ease; display: flex; align-items: center; gap: 0.5rem;
    }
    .admin-nav-tabs button:hover { background: rgba(255, 255, 255, 0.06); color: #f8fafc; }
    .admin-nav-tabs button.active {
      background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%); color: white;
      box-shadow: 0 4px 15px rgba(99, 102, 241, 0.4);
    }
    .tab-badge { background: #ef4444; color: white; font-size: 0.7rem; padding: 0.15rem 0.5rem; border-radius: 1rem; font-weight: 900; }

    /* Tab Panes & Header Bar */
    .tab-pane h2 { margin: 0; font-size: 1.4rem; font-weight: 800; color: #ffffff; letter-spacing: -0.01em; }
    .pane-subtitle { margin: 0.3rem 0 0 0; font-size: 0.88rem; color: #94a3b8; }
    .pane-header-bar { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; }
    .actions-group, .search-filter-box { display: flex; gap: 0.75rem; align-items: center; flex-wrap: wrap; }
    .search-input {
      padding: 0.7rem 1.1rem; border-radius: 0.75rem; border: 1px solid rgba(255, 255, 255, 0.12);
      background: rgba(31, 41, 55, 0.8); color: #f8fafc; font-size: 0.88rem; min-width: 280px; outline: none; transition: all 0.2s;
    }
    .search-input:focus { border-color: #6366f1; box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.25); }
    .filter-select, .action-select {
      padding: 0.65rem 1rem; border-radius: 0.75rem; border: 1px solid rgba(255, 255, 255, 0.12);
      background: #1f2937; color: #f8fafc; font-size: 0.85rem; font-weight: 600; outline: none; cursor: pointer;
    }
    .action-select option { background: #111827; color: #f8fafc; }
    .role-select.admin-role { background: rgba(245, 158, 11, 0.2); border-color: rgba(245, 158, 11, 0.4); color: #fbbf24; font-weight: 800; }
    
    .btn-primary-action {
      background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%); color: white; border: none;
      padding: 0.7rem 1.3rem; border-radius: 0.75rem; font-weight: 800; font-size: 0.88rem; cursor: pointer;
      box-shadow: 0 4px 14px rgba(99, 102, 241, 0.35); transition: all 0.25s ease;
    }
    .btn-primary-action:hover { transform: translateY(-1px); box-shadow: 0 6px 18px rgba(99, 102, 241, 0.5); }
    .btn-emerald-action {
      background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: white; border: none;
      padding: 0.7rem 1.3rem; border-radius: 0.75rem; font-weight: 800; font-size: 0.88rem; cursor: pointer;
      box-shadow: 0 4px 14px rgba(16, 185, 129, 0.35); transition: all 0.25s ease;
    }
    .btn-emerald-action:hover { transform: translateY(-1px); box-shadow: 0 6px 18px rgba(16, 185, 129, 0.5); }

    /* Tables & Thumbnail Image Styling */
    .table-responsive { overflow-x: auto; border-radius: 0.85rem; border: 1px solid rgba(255, 255, 255, 0.08); }
    .modern-table { width: 100%; border-collapse: collapse; text-align: left; font-size: 0.88rem; }
    .modern-table th {
      background: rgba(30, 41, 59, 0.8); padding: 0.95rem 1.1rem; border-bottom: 2px solid rgba(255, 255, 255, 0.08);
      color: #94a3b8; font-weight: 800; font-size: 0.78rem; text-transform: uppercase; letter-spacing: 0.05em;
    }
    .modern-table td { padding: 1rem 1.1rem; border-bottom: 1px solid rgba(255, 255, 255, 0.06); color: #cbd5e1; vertical-align: middle; }
    .modern-table tbody tr { transition: background 0.2s ease; }
    .modern-table tbody tr:hover { background: rgba(99, 102, 241, 0.08); }

    .img-thumb-wrapper {
      width: 52px; height: 52px; border-radius: 0.75rem; overflow: hidden;
      border: 1px solid rgba(255, 255, 255, 0.15); background: #1f2937;
      display: flex; align-items: center; justify-content: center;
    }
    .product-thumb { width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s; }
    .img-thumb-wrapper:hover .product-thumb { transform: scale(1.15); }

    .order-code, .id-tag, .kardex-code { font-weight: 800; color: #818cf8; font-family: monospace; font-size: 0.9rem; }
    .user-name-text { color: #ffffff; font-size: 0.92rem; }
    .product-title-text { color: #ffffff; font-size: 0.95rem; }
    .email-text { font-family: monospace; color: #94a3b8; font-size: 0.85rem; }
    .date-text { font-size: 0.82rem; color: #94a3b8; }
    .table-actions { display: flex; gap: 0.45rem; }
    .btn-icon-btn {
      border: 1px solid rgba(255, 255, 255, 0.12); background: rgba(31, 41, 55, 0.8); color: #f8fafc;
      padding: 0.4rem 0.75rem; border-radius: 0.6rem; font-size: 0.78rem; font-weight: 700; cursor: pointer; transition: all 0.2s;
    }
    .btn-icon-btn.edit:hover { background: rgba(99, 102, 241, 0.25); color: #a5b4fc; border-color: rgba(99, 102, 241, 0.4); }
    .btn-icon-btn.delete:hover { background: rgba(239, 68, 68, 0.25); color: #fca5a5; border-color: rgba(239, 68, 68, 0.4); }
    .btn-icon-btn.stock:hover { background: rgba(16, 185, 129, 0.25); color: #6ee7b7; border-color: rgba(16, 185, 129, 0.4); }

    .glass-modal.modal-lg { max-width: 840px; }
    .form-grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0.75rem; }
    .btn-sm { padding: 0.35rem 0.75rem; font-size: 0.78rem; border-radius: 0.5rem; }
    .section-sub { font-size: 0.95rem; font-weight: 800; color: #ffffff; margin-bottom: 0.5rem; }
    .new-variant-box { background: rgba(31, 41, 55, 0.5); border: 1px dashed rgba(255, 255, 255, 0.15); padding: 1.25rem; border-radius: 0.85rem; }

    .status-pill { display: inline-block; padding: 0.3rem 0.75rem; border-radius: 1rem; font-size: 0.72rem; font-weight: 800; text-transform: uppercase; }
    .status-pill.pendiente { background: rgba(245, 158, 11, 0.2); color: #fbbf24; border: 1px solid rgba(245, 158, 11, 0.3); }
    .status-pill.en_preparacion { background: rgba(59, 130, 246, 0.2); color: #60a5fa; border: 1px solid rgba(59, 130, 246, 0.3); }
    .status-pill.enviado { background: rgba(168, 85, 247, 0.2); color: #c084fc; border: 1px solid rgba(168, 85, 247, 0.3); }
    .status-pill.entregado { background: rgba(16, 185, 129, 0.2); color: #34d399; border: 1px solid rgba(16, 185, 129, 0.3); }
    .status-pill.cancelado { background: rgba(239, 68, 68, 0.2); color: #f87171; border: 1px solid rgba(239, 68, 68, 0.3); }
    .status-pill.active { background: rgba(16, 185, 129, 0.2); color: #34d399; border: 1px solid rgba(16, 185, 129, 0.3); }
    .status-pill.inactive { background: rgba(100, 116, 139, 0.2); color: #94a3b8; border: 1px solid rgba(100, 116, 139, 0.3); }

    .brand-chip, .category-chip { background: rgba(255, 255, 255, 0.08); color: #e2e8f0; font-size: 0.78rem; font-weight: 700; padding: 0.25rem 0.6rem; border-radius: 0.5rem; border: 1px solid rgba(255, 255, 255, 0.1); }
    .ruc-tag { font-family: monospace; font-weight: 700; color: #38bdf8; }
    .kardex-type-pill { padding: 0.3rem 0.7rem; border-radius: 0.5rem; font-size: 0.75rem; font-weight: 800; background: rgba(59, 130, 246, 0.2); color: #60a5fa; border: 1px solid rgba(59, 130, 246, 0.3); }
    .kardex-type-pill.salida { background: rgba(239, 68, 68, 0.2); color: #f87171; border: 1px solid rgba(239, 68, 68, 0.3); }

    /* Glass Modals Styling */
    .modal-backdrop {
      position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(0, 0, 0, 0.75); backdrop-filter: blur(12px);
      z-index: 9999; display: flex; align-items: center; justify-content: center; padding: 1.5rem;
    }
    .glass-modal {
      width: 100%; max-width: 650px; max-height: 90vh; overflow-y: auto; background: #111827;
      border-radius: 1.5rem; padding: 2rem; border: 1px solid rgba(255, 255, 255, 0.15); box-shadow: 0 25px 50px rgba(0, 0, 0, 0.8);
    }
    .modal-header { display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255, 255, 255, 0.1); padding-bottom: 1rem; }
    .modal-header h3 { margin: 0; font-size: 1.3rem; font-weight: 800; color: #ffffff; }
    .btn-close-modal { background: transparent; border: none; font-size: 1.3rem; cursor: pointer; color: #94a3b8; transition: color 0.2s; }
    .btn-close-modal:hover { color: #ffffff; }

    .form-grid-2 { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; }
    .span-2 { grid-column: span 2; }
    label { display: block; font-size: 0.82rem; font-weight: 700; color: #cbd5e1; margin-bottom: 0.4rem; }
    .field-hint { font-size: 0.75rem; color: #94a3b8; margin-top: 0.25rem; }
    .form-control {
      width: 100%; padding: 0.7rem 0.9rem; border-radius: 0.75rem; border: 1px solid rgba(255, 255, 255, 0.12);
      background: #1f2937; color: #ffffff; font-size: 0.9rem; outline: none; transition: all 0.2s;
    }
    .form-control:focus { border-color: #6366f1; box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.25); }
    .form-control.invalid { border-color: #ef4444; background: rgba(239, 68, 68, 0.1); }
    .field-error { font-size: 0.78rem; color: #f87171; font-weight: 600; margin-top: 0.25rem; display: block; }

    .image-preview-container {
      background: rgba(31, 41, 55, 0.6); border: 1px dashed rgba(255, 255, 255, 0.2); padding: 1rem; border-radius: 0.85rem;
    }
    .preview-title { font-size: 0.78rem; font-weight: 700; color: #94a3b8; display: block; margin-bottom: 0.5rem; }
    .preview-box {
      width: 100%; max-height: 170px; overflow: hidden; border-radius: 0.6rem; display: flex; align-items: center; justify-content: center; background: #0b0f19; border: 1px solid rgba(255, 255, 255, 0.1);
    }
    .preview-box img { max-height: 170px; width: auto; object-fit: contain; }

    .modal-footer { display: flex; justify-content: flex-end; gap: 0.75rem; border-top: 1px solid rgba(255, 255, 255, 0.1); padding-top: 1.25rem; }
    .btn-cancel { background: rgba(255, 255, 255, 0.08); color: #cbd5e1; border: 1px solid rgba(255, 255, 255, 0.12); padding: 0.7rem 1.3rem; border-radius: 0.75rem; font-weight: 700; cursor: pointer; }
    .btn-save { background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: white; border: none; padding: 0.7rem 1.6rem; border-radius: 0.75rem; font-weight: 800; cursor: pointer; box-shadow: 0 4px 14px rgba(16, 185, 129, 0.4); }
    .empty-table { text-align: center; padding: 2.5rem; color: #94a3b8; font-weight: 600; }

    /* Alert Banner */
    .alert-banner {
      display: flex; gap: 1rem; padding: 1.25rem; border-radius: 1rem;
      background: rgba(239, 68, 68, 0.12); border: 1px solid rgba(239, 68, 68, 0.3); color: #fca5a5;
    }
    .alert-banner.danger .banner-icon { font-size: 1.5rem; }
    .alert-banner h3 { margin: 0 0 0.25rem 0; font-size: 1.05rem; color: #f87171; font-weight: 800; }
    .alert-banner p { margin: 0; font-size: 0.85rem; color: #fca5a5; }
    .alert-chips-grid { display: flex; flex-wrap: wrap; gap: 0.6rem; }
    .stock-chip {
      background: rgba(17, 24, 39, 0.9); border: 1px solid rgba(239, 68, 68, 0.4); padding: 0.4rem 0.8rem;
      border-radius: 0.6rem; font-size: 0.78rem; display: flex; flex-direction: column;
    }
    .chip-title { font-weight: 800; color: #ffffff; }
    .chip-meta { color: #94a3b8; font-size: 0.72rem; }
    .chip-qty { color: #f87171; font-weight: 800; }
    .rank-badge { background: #6366f1; color: white; font-weight: 900; padding: 0.2rem 0.55rem; border-radius: 0.5rem; font-size: 0.8rem; }
  `]
})
export class AdminDashboardComponent implements OnInit {
  tabActiva = 'pedidos';

  resumen: ReporteVentasSummary | null = null;
  topProductos: ProductoTop[] = [];
  ventas: Venta[] = [];
  productos: Producto[] = [];
  proveedores: Proveedor[] = [];
  usuarios: Usuario[] = [];
  alertasStock: ProductoVariante[] = [];
  kardex: any[] = [];

  // Search Filters
  searchPedidos = '';
  filtroEstadoPedido = 'TODOS';
  searchCatalogo = '';
  searchUsuarios = '';
  searchKardex = '';
  searchProveedores = '';

  // Modals & Validation States
  mostrarModalProd = false;
  editProdId: number | null | undefined = null;
  nuevoProducto: any = { nombre: '', marca: '', material: '', genero: 'Hombre', descripcion: '', urlImagen: '' };
  catIdForm: number = 1;
  prodFormErrors: { nombre?: string; marca?: string; material?: string } = {};

  mostrarModalProv = false;
  editProvId: number | null | undefined = null;
  nuevoProveedor: Proveedor = { razonSocial: '', ruc: '', telefono: '', correo: '', direccion: '', estado: 'ACTIVO' };
  provFormErrors: { razonSocial?: string; ruc?: string; telefono?: string; correo?: string } = {};

  mostrarModalUser = false;
  editUserId: number | null | undefined = null;
  nuevoUsuario: any = { nombre: '', email: '', password: '', rol: 'CLIENTE', activo: true };
  userFormErrors: { nombre?: string; email?: string; password?: string } = {};

  mostrarModalStock = false;
  productoStockModal: Producto | null = null;
  nuevaVarianteForm: any = { talla: '', color: 'Único', stock: 10, precio: 0 };

  mostrarModalMovStock = false;
  movimientoForm: any = { idVariante: null, tipoMovimiento: 'ENTRADA_COMPRA', cantidad: 1, observacion: '' };

  ejecutandoBackup = false;
  fallbackImage = 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=150';

  constructor(
    private productoService: ProductoService,
    private ventaService: VentaService,
    private proveedorService: ProveedorService,
    private usuarioService: UsuarioService,
    private reporteService: ReporteService,
    private notificationService: NotificationService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.cargarTodo();
  }

  cargarTodo() {
    this.reporteService.obtenerResumen().subscribe(data => this.resumen = data);
    this.reporteService.obtenerTopProductos().subscribe(data => this.topProductos = data);
    this.ventaService.obtenerTodas().subscribe(data => this.ventas = data);
    this.productoService.obtenerTodos().subscribe(data => this.productos = data);
    this.proveedorService.listar().subscribe(data => this.proveedores = data);
    this.usuarioService.listarTodos().subscribe(data => this.usuarios = data);

    this.http.get<any[]>('http://localhost:8080/api/v1/admin/inventario/alertas').subscribe(data => this.alertasStock = data);
    this.http.get<any[]>('http://localhost:8080/api/v1/admin/inventario/kardex').subscribe(data => this.kardex = data);
  }

  // Helper Methods for Product Images
  obtenerUrlImagen(p: Producto): String {
    if (p.imagenes && p.imagenes.length > 0 && p.imagenes[0].urlImagen) {
      return p.imagenes[0].urlImagen;
    }
    return this.fallbackImage;
  }

  onErrorImagen(event: any) {
    event.target.src = this.fallbackImage;
  }

  // Filtered Getters
  get ventasFiltradas(): Venta[] {
    return this.ventas.filter(v => {
      const matchState = this.filtroEstadoPedido === 'TODOS' || v.estadoPedido === this.filtroEstadoPedido;
      const term = this.searchPedidos.toLowerCase().trim();
      const matchSearch = !term || 
        (v.usuario?.nombre || '').toLowerCase().includes(term) ||
        (v.usuario?.email || '').toLowerCase().includes(term) ||
        (v.distritoEnvio || '').toLowerCase().includes(term) ||
        `zap-${v.idVenta}`.includes(term);
      return matchState && matchSearch;
    });
  }

  get productosFiltrados(): Producto[] {
    const term = this.searchCatalogo.toLowerCase().trim();
    if (!term) return this.productos;
    return this.productos.filter(p => 
      (p.nombre || '').toLowerCase().includes(term) ||
      (p.marca || '').toLowerCase().includes(term) ||
      (p.material || '').toLowerCase().includes(term) ||
      (p.categoria?.nombre || '').toLowerCase().includes(term)
    );
  }

  get usuariosFiltrados(): Usuario[] {
    const term = this.searchUsuarios.toLowerCase().trim();
    if (!term) return this.usuarios;
    return this.usuarios.filter(u => 
      (u.nombre || '').toLowerCase().includes(term) ||
      (u.email || '').toLowerCase().includes(term) ||
      (u.rol || '').toLowerCase().includes(term)
    );
  }

  get kardexFiltrado(): any[] {
    const term = this.searchKardex.toLowerCase().trim();
    if (!term) return this.kardex;
    return this.kardex.filter(k => 
      (k.variante?.producto?.nombre || '').toLowerCase().includes(term) ||
      (k.tipoMovimiento || '').toLowerCase().includes(term) ||
      (k.observacion || '').toLowerCase().includes(term)
    );
  }

  get proveedoresFiltrados(): Proveedor[] {
    const term = this.searchProveedores.toLowerCase().trim();
    if (!term) return this.proveedores;
    return this.proveedores.filter(pr => 
      (pr.razonSocial || '').toLowerCase().includes(term) ||
      (pr.ruc || '').includes(term) ||
      (pr.correo || '').toLowerCase().includes(term)
    );
  }

  // Order Actions
  cambiarEstadoPedido(idVenta: number, nuevoEstado: string) {
    this.ventaService.actualizarEstado(idVenta, nuevoEstado).subscribe({
      next: () => {
        this.notificationService.showSuccess(`Estado del pedido #ZAP-${idVenta} actualizado a "${nuevoEstado}"`);
        this.cargarTodo();
      },
      error: () => this.notificationService.showError('No se pudo actualizar el estado del pedido')
    });
  }

  // User Actions
  cambiarRolUsuario(idUsuario: number, nuevoRol: string) {
    this.usuarioService.cambiarRol(idUsuario, nuevoRol).subscribe({
      next: () => {
        this.notificationService.showSuccess(`Rol de usuario actualizado a "${nuevoRol}" con éxito`);
        this.cargarTodo();
      },
      error: () => this.notificationService.showError('No se pudo modificar el rol del usuario')
    });
  }

  toggleEstadoUsuario(u: Usuario) {
    const nuevoEstado = !u.activo;
    const accion = nuevoEstado ? 'activar' : 'desactivar';
    if (confirm(`¿Desea ${accion} la cuenta del usuario "${u.nombre}"?`)) {
      this.usuarioService.cambiarEstado(u.idUsuario!, nuevoEstado).subscribe({
        next: () => {
          this.notificationService.showWarning(`Cuenta de usuario "${u.nombre}" ${nuevoEstado ? 'activada' : 'desactivada'}`);
          this.cargarTodo();
        },
        error: () => this.notificationService.showError('No se pudo cambiar el estado de la cuenta')
      });
    }
  }

  // User Modal Actions & Validations
  abrirModalUsuario() {
    this.editUserId = null;
    this.nuevoUsuario = { nombre: '', email: '', password: '', rol: 'CLIENTE', activo: true };
    this.userFormErrors = {};
    this.mostrarModalUser = true;
  }

  // Stock Management Actions & Modals
  gestionarStockProducto(p: Producto) {
    this.productoStockModal = p;
    const precioBase = p.variantes && p.variantes.length > 0 ? p.variantes[0].precio : 250;
    this.nuevaVarianteForm = { talla: '', color: 'Único', stock: 10, precio: precioBase };
    this.mostrarModalStock = true;
  }

  cerrarModalStock() {
    this.mostrarModalStock = false;
    this.productoStockModal = null;
  }

  guardarCambiosVariante(v: ProductoVariante) {
    if (!v.idVariante) return;
    this.http.put<any>(`http://localhost:8080/api/v1/admin/inventario/variantes/${v.idVariante}`, v).subscribe({
      next: () => {
        this.notificationService.showSuccess(`Stock (Talla ${v.talla}) actualizado a ${v.stock} unidades en SQL Server`);
        this.cargarTodo();
      },
      error: () => this.notificationService.showError('Ocurrió un error al actualizar la variante')
    });
  }

  crearNuevaVariante() {
    if (!this.productoStockModal || !this.productoStockModal.idProducto) return;
    if (!this.nuevaVarianteForm.talla || !this.nuevaVarianteForm.talla.toString().trim()) {
      this.notificationService.showError('La talla es requerida');
      return;
    }

    const payload = {
      talla: this.nuevaVarianteForm.talla.toString().trim(),
      color: (this.nuevaVarianteForm.color || 'Único').trim(),
      stock: Number(this.nuevaVarianteForm.stock || 0),
      precio: Number(this.nuevaVarianteForm.precio || 0)
    };

    this.http.post<any>(`http://localhost:8080/api/v1/admin/inventario/productos/${this.productoStockModal.idProducto}/variantes`, payload).subscribe({
      next: () => {
        this.notificationService.showSuccess(`Nueva variante Talla ${payload.talla} agregada con ${payload.stock} unidades de stock`);
        this.cargarTodo();
        this.cerrarModalStock();
      },
      error: (err) => this.notificationService.showError(err.error?.message || 'Error al agregar variante de stock')
    });
  }

  abrirModalMovimientoStock() {
    this.movimientoForm = { idVariante: null, tipoMovimiento: 'ENTRADA_COMPRA', cantidad: 1, observacion: '' };
    this.mostrarModalMovStock = true;
  }

  cerrarModalMovimientoStock() {
    this.mostrarModalMovStock = false;
  }

  guardarMovimientoStock() {
    if (!this.movimientoForm.idVariante) {
      this.notificationService.showError('Debe seleccionar una variante de producto.');
      return;
    }
    if (!this.movimientoForm.cantidad || this.movimientoForm.cantidad < 1) {
      this.notificationService.showError('La cantidad debe ser mayor a 0.');
      return;
    }

    this.http.post<any>('http://localhost:8080/api/v1/admin/inventario/movimiento', this.movimientoForm).subscribe({
      next: () => {
        this.notificationService.showSuccess('Movimiento de inventario registrado con éxito en Kardex y SQL Server');
        this.cargarTodo();
        this.cerrarModalMovimientoStock();
      },
      error: (err) => this.notificationService.showError(err.error?.message || 'Error al registrar movimiento en Kardex')
    });
  }

  cerrarModalUsuario() {
    this.mostrarModalUser = false;
    this.userFormErrors = {};
  }

  editarUsuario(u: Usuario) {
    this.editUserId = u.idUsuario;
    this.nuevoUsuario = {
      nombre: u.nombre,
      email: u.email,
      password: '',
      rol: u.rol || 'CLIENTE',
      activo: u.activo !== undefined ? u.activo : true
    };
    this.userFormErrors = {};
    this.mostrarModalUser = true;
  }

  guardarUsuario() {
    this.userFormErrors = {};
    let isValid = true;

    if (!this.nuevoUsuario.nombre || !this.nuevoUsuario.nombre.trim()) {
      this.userFormErrors.nombre = 'El nombre completo es obligatorio.';
      isValid = false;
    }

    const emailClean = (this.nuevoUsuario.email || '').trim();
    if (!emailClean) {
      this.userFormErrors.email = 'El correo electrónico es obligatorio.';
      isValid = false;
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailClean)) {
        this.userFormErrors.email = 'Ingrese un correo electrónico válido.';
        isValid = false;
      }
    }

    if (!this.editUserId && (!this.nuevoUsuario.password || !this.nuevoUsuario.password.trim())) {
      this.userFormErrors.password = 'La contraseña es obligatoria para nuevos usuarios.';
      isValid = false;
    }

    if (!isValid) {
      this.notificationService.showError('Por favor complete los campos obligatorios del usuario.');
      return;
    }

    const payload: any = {
      nombre: this.nuevoUsuario.nombre.trim(),
      email: this.nuevoUsuario.email.trim(),
      rol: this.nuevoUsuario.rol,
      activo: this.nuevoUsuario.activo
    };

    if (this.nuevoUsuario.password && this.nuevoUsuario.password.trim()) {
      payload.password = this.nuevoUsuario.password.trim();
    }

    if (this.editUserId) {
      this.usuarioService.actualizarUsuario(this.editUserId, payload).subscribe({
        next: () => {
          this.notificationService.showSuccess(`Datos de "${this.nuevoUsuario.nombre}" actualizados correctamente`);
          this.cargarTodo();
          this.cerrarModalUsuario();
        },
        error: (err) => this.notificationService.showError(err.error?.message || 'Error al actualizar usuario')
      });
    } else {
      this.usuarioService.crearUsuario(payload).subscribe({
        next: () => {
          this.notificationService.showSuccess(`Usuario "${this.nuevoUsuario.nombre}" registrado exitosamente`);
          this.cargarTodo();
          this.cerrarModalUsuario();
        },
        error: (err) => this.notificationService.showError(err.error?.message || 'Error al registrar el nuevo usuario')
      });
    }
  }

  // Product Modal Actions & Validations (incluye urlImagen)
  abrirModalProducto() {
    this.editProdId = null;
    this.nuevoProducto = { 
      nombre: '', 
      marca: '', 
      material: '', 
      genero: 'Hombre', 
      descripcion: '',
      urlImagen: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800' 
    };
    this.catIdForm = 1;
    this.prodFormErrors = {};
    this.mostrarModalProd = true;
  }

  cerrarModalProducto() {
    this.mostrarModalProd = false;
    this.prodFormErrors = {};
  }

  editarProducto(p: Producto) {
    this.editProdId = p.idProducto;
    const mainImg = (p.imagenes && p.imagenes.length > 0) ? p.imagenes[0].urlImagen : '';
    this.nuevoProducto = {
      nombre: p.nombre,
      marca: p.marca,
      material: p.material,
      genero: p.genero,
      descripcion: p.descripcion,
      urlImagen: mainImg
    };
    this.catIdForm = p.categoria?.idCategoria || 1;
    this.prodFormErrors = {};
    this.mostrarModalProd = true;
  }

  guardarProducto() {
    this.prodFormErrors = {};
    let isValid = true;

    if (!this.nuevoProducto.nombre || !this.nuevoProducto.nombre.trim()) {
      this.prodFormErrors.nombre = 'El nombre del producto es obligatorio.';
      isValid = false;
    }
    if (!this.nuevoProducto.marca || !this.nuevoProducto.marca.trim()) {
      this.prodFormErrors.marca = 'La marca es obligatoria.';
      isValid = false;
    }
    if (!this.nuevoProducto.material || !this.nuevoProducto.material.trim()) {
      this.prodFormErrors.material = 'El material es obligatorio.';
      isValid = false;
    }

    if (!isValid) {
      this.notificationService.showError('Por favor complete los campos obligatorios del producto');
      return;
    }

    const payload: any = {
      nombre: this.nuevoProducto.nombre,
      marca: this.nuevoProducto.marca,
      material: this.nuevoProducto.material,
      genero: this.nuevoProducto.genero,
      descripcion: this.nuevoProducto.descripcion,
      activo: this.nuevoProducto.activo !== undefined ? this.nuevoProducto.activo : true,
      categoria: { idCategoria: Number(this.catIdForm) }
    };

    if (this.nuevoProducto.urlImagen && this.nuevoProducto.urlImagen.trim()) {
      payload.imagenes = [
        {
          urlImagen: this.nuevoProducto.urlImagen.trim(),
          esPrincipal: true,
          ordenVisualizacion: 1
        }
      ];
    }

    if (this.editProdId) {
      this.productoService.actualizarProducto(this.editProdId, payload).subscribe({
        next: () => {
          this.notificationService.showSuccess(`Producto e imagen de "${this.nuevoProducto.nombre}" actualizados correctamente`);
          this.cargarTodo();
          this.cerrarModalProducto();
        },
        error: () => this.notificationService.showError('Ocurrió un error al actualizar el producto')
      });
    } else {
      this.productoService.crearProducto(payload).subscribe({
        next: () => {
          this.notificationService.showSuccess(`Producto "${this.nuevoProducto.nombre}" creado exitosamente`);
          this.cargarTodo();
          this.cerrarModalProducto();
        },
        error: () => this.notificationService.showError('Ocurrió un error al crear el producto')
      });
    }
  }

  eliminarProducto(id?: number) {
    if (!id) return;
    if (confirm('¿Desea desactivar este producto del catálogo?')) {
      this.productoService.desactivarProducto(id).subscribe({
        next: () => {
          this.notificationService.showWarning('Producto desactivado del catálogo');
          this.cargarTodo();
        },
        error: () => this.notificationService.showError('No se pudo desactivar el producto')
      });
    }
  }

  // Supplier Modal Actions & RUC Validations
  abrirModalProveedor() {
    this.editProvId = null;
    this.nuevoProveedor = { razonSocial: '', ruc: '', telefono: '', correo: '', direccion: '', estado: 'ACTIVO' };
    this.provFormErrors = {};
    this.mostrarModalProv = true;
  }

  cerrarModalProveedor() {
    this.mostrarModalProv = false;
    this.provFormErrors = {};
  }

  editarProveedor(prov: Proveedor) {
    this.editProvId = prov.idProveedor;
    this.nuevoProveedor = { ...prov };
    this.provFormErrors = {};
    this.mostrarModalProv = true;
  }

  guardarProveedor() {
    this.provFormErrors = {};
    let isValid = true;

    if (!this.nuevoProveedor.razonSocial || !this.nuevoProveedor.razonSocial.trim()) {
      this.provFormErrors.razonSocial = 'La Razón Social es requerida.';
      isValid = false;
    }

    const rucClean = (this.nuevoProveedor.ruc || '').trim();
    if (!rucClean) {
      this.provFormErrors.ruc = 'El RUC es requerido.';
      isValid = false;
    } else if (!/^[0-9]{11}$/.test(rucClean)) {
      this.provFormErrors.ruc = 'El RUC debe ser un número de exactamente 11 dígitos (Ej. 20512345678).';
      this.notificationService.showError('El RUC ingresado es incorrecto. Debe contener exactamente 11 dígitos numéricos.', 'Error de RUC');
      isValid = false;
    }

    if (this.nuevoProveedor.correo && this.nuevoProveedor.correo.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(this.nuevoProveedor.correo.trim())) {
        this.provFormErrors.correo = 'Ingrese una dirección de correo electrónico válida.';
        this.notificationService.showError('El correo electrónico tiene un formato incorrecto');
        isValid = false;
      }
    }

    if (this.nuevoProveedor.telefono && this.nuevoProveedor.telefono.trim()) {
      if (!/^[0-9]{7,15}$/.test(this.nuevoProveedor.telefono.trim())) {
        this.provFormErrors.telefono = 'El teléfono debe contener solo números.';
        isValid = false;
      }
    }

    if (!isValid) {
      if (!this.provFormErrors.ruc) {
        this.notificationService.showError('Por favor corrija los errores marcados en el formulario');
      }
      return;
    }

    if (this.editProvId) {
      this.proveedorService.actualizar(this.editProvId, this.nuevoProveedor).subscribe({
        next: () => {
          this.notificationService.showSuccess(`Proveedor "${this.nuevoProveedor.razonSocial}" actualizado correctamente`);
          this.cargarTodo();
          this.cerrarModalProveedor();
        },
        error: (err) => this.notificationService.showError(err.error?.message || 'Error al actualizar proveedor')
      });
    } else {
      this.proveedorService.crear(this.nuevoProveedor).subscribe({
        next: () => {
          this.notificationService.showSuccess(`Proveedor "${this.nuevoProveedor.razonSocial}" registrado con éxito`);
          this.cargarTodo();
          this.cerrarModalProveedor();
        },
        error: (err) => this.notificationService.showError(err.error?.message || 'Error al registrar el proveedor')
      });
    }
  }

  eliminarProveedor(id: number) {
    if (confirm('¿Desea eliminar este proveedor de la base de datos?')) {
      this.proveedorService.eliminar(id).subscribe({
        next: () => {
          this.notificationService.showWarning('Proveedor eliminado correctamente');
          this.cargarTodo();
        },
        error: () => this.notificationService.showError('No se pudo eliminar el proveedor seleccionado')
      });
    }
  }

  // Export & Backup Actions
  exportarCSV() {
    this.reporteService.exportarCSV().subscribe({
      next: (blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'reporte_ventas_joselito.csv';
        a.click();
        this.notificationService.showSuccess('Reporte de ventas exportado exitosamente en formato CSV');
      },
      error: () => this.notificationService.showError('Ocurrió un error al generar el reporte CSV')
    });
  }

  ejecutarBackup() {
    this.ejecutandoBackup = true;
    this.http.post<any>('http://localhost:8080/api/v1/admin/backup', {}).subscribe({
      next: (res) => {
        this.ejecutandoBackup = false;
        this.notificationService.showSuccess(res.mensaje || 'Copia de seguridad (Backup) de la base de datos SQL Server generada con éxito');
      },
      error: () => {
        this.ejecutandoBackup = false;
        this.notificationService.showError('Ocurrió un error al procesar la copia de seguridad');
      }
    });
  }
}
