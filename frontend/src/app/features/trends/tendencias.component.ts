import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductoService } from '../../core/services/producto.service';
import { CarritoService } from '../../core/services/carrito.service';
import { NotificationService } from '../../core/services/notification.service';
import { Producto, ProductoVariante } from '../../core/models';

@Component({
  selector: 'app-tendencias',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  template: `
    <div class="trends-container">
      <!-- Ambient Fluid Liquid Background Shapes -->
      <div class="fluid-blob blob-1"></div>
      <div class="fluid-blob blob-2"></div>
      <div class="fluid-blob blob-3"></div>

      <!-- HERO SECTION: Interactive Hovering Sneaker + DB Data + Fluid Neon Glassmorphism -->
      <section class="hero-heroic" *ngIf="productoHero">
        <!-- Overlay Large Typography Watermark -->
        <div class="giant-glass-title">
          <span>FUTURE</span>
          <span class="gradient-text">{{ productoHero.marca?.toUpperCase() || 'ULTRABOOST' }}</span>
        </div>

        <div class="hero-main-layout">
          <!-- Left Info Card: Cyan ADD TO CART -->
          <div class="product-info-glass">
            <span class="drop-tag">🔥 TENDENCIA DE TEMPORADA 2026</span>
            <h1 class="main-shoe-title">{{ productoHero.nombre }}</h1>
            <p class="main-shoe-sub">
              {{ productoHero.marca }} • {{ productoHero.categoria?.nombre || 'Calzado Urbano' }} • {{ productoHero.genero }}
            </p>
            
            <div class="price-row">
              <span class="price-symbol">S/</span>
              <span class="price-amount">{{ obtenerPrecioMinimo(productoHero) | number:'1.2-2' }}</span>
              <span class="old-price">S/ {{ (obtenerPrecioMinimo(productoHero) * 1.25) | number:'1.2-2' }}</span>
            </div>
            
            <p class="description">
              {{ productoHero.descripcion || 'Diseño de alta velocidad con amortiguación fluida, máxima ligereza y tejido transpirable de alta respuesta.' }}
            </p>

            <!-- Tallas Disponibles Pill Selector -->
            <div class="size-selector-box" *ngIf="productoHero.variantes && productoHero.variantes.length > 0">
              <span class="selector-label">Selecciona tu Talla:</span>
              <div class="size-chips-grid">
                <button 
                  *ngFor="let v of productoHero.variantes" 
                  class="size-pill" 
                  [class.active]="varianteHero?.idVariante === v.idVariante"
                  (click)="varianteHero = v">
                  Talla {{ v.talla }}
                </button>
              </div>
            </div>

            <div class="card-actions margin-top-sm">
              <button 
                class="btn-cyan-cart" 
                (click)="agregarHeroAlCarrito()" 
                [disabled]="agregandoCarrito">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
                {{ agregandoCarrito ? 'AÑADIENDO...' : 'ADD TO CART' }}
              </button>
              <button class="btn-favorite" (click)="toggleFavorito()">❤️</button>
            </div>
          </div>

          <!-- Central Hovering Sneaker Image -->
          <div class="hovering-sneaker-stage">
            <div class="glow-ring"></div>
            <div class="floating-img-frame">
              <img 
                [src]="imagenHeroActual" 
                [alt]="productoHero.nombre" 
                class="floating-sneaker-img" 
                (error)="onErrorImagen($event)" />
            </div>
            <div class="shadow-ellipse"></div>
          </div>

          <!-- Bottom Right Thumbnail Carousel & Selector of DB Products -->
          <div class="thumbnail-carousel-glass">
            <span class="carousel-label">MÁS MODELOS TENDENCIA</span>
            <div class="thumb-list">
              <div 
                *ngFor="let prod of productosDB; let i = index" 
                class="thumb-item" 
                [class.active]="productoHero.idProducto === prod.idProducto"
                (click)="seleccionarProductoHero(prod)">
                <img [src]="obtenerImagenPrincipal(prod)" [alt]="prod.nombre" (error)="onErrorImagen($event)" />
                <div class="thumb-meta">
                  <span class="thumb-title">{{ prod.nombre }}</span>
                  <span class="thumb-price">S/ {{ obtenerPrecioMinimo(prod) | number:'1.2-2' }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Scroll Indicator to Vertical Section -->
        <div class="scroll-down-hint" (click)="scrollToTrends()">
          <span>DESLIZA PARA VER LA COLECCIÓN DE TENDENCIAS</span>
          <div class="arrow-down">↓</div>
        </div>
      </section>

      <!-- SECTION 2: VERTICAL DESCENT 'TENDENCIAS' CURATED GRID -->
      <section id="trends-grid-section" class="trends-vertical-section">
        <div class="section-title-wrap">
          <div class="subtitle-badge">CATÁLOGO EN TENDENCIA 2026</div>
          <h2 class="section-glow-header">TENDENCIAS URBANAS</h2>
          <p class="section-desc">Selección destacada conectada en tiempo real a tu base de datos SQL Server</p>
        </div>

        <div class="trends-grid">
          <div *ngFor="let item of productosDB" class="trend-card glass-card-hover">
            <div class="card-badge">{{ item.marca }}</div>
            <div class="card-img-box" (click)="seleccionarProductoHero(item)">
              <img [src]="obtenerImagenPrincipal(item)" [alt]="item.nombre" (error)="onErrorImagen($event)" />
            </div>
            <div class="card-details">
              <span class="card-subtitle">{{ item.categoria?.nombre || 'Calzado' }} • {{ item.genero }}</span>
              <h3 class="card-title">{{ item.nombre }}</h3>
              <div class="card-price-bar">
                <span class="card-price">S/ {{ obtenerPrecioMinimo(item) | number:'1.2-2' }}</span>
                <button class="btn-quick-buy" (click)="abrirModalDetalle(item)">Ver Detalle →</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- MODAL DE DETALLE RÁPIDO CON BOTÓN X DE CIERRE REQUERIDO -->
    <div *ngIf="mostrarModal && productoModal" class="modal-backdrop" (click)="cerrarModalDetalle()">
      <div class="modal-card glass-modal" (click)="$event.stopPropagation()">
        <!-- Header con Botón de Cierre X -->
        <div class="modal-header">
          <div class="modal-title-box">
            <span class="modal-brand-badge">{{ productoModal.marca }}</span>
            <h3>{{ productoModal.nombre }}</h3>
          </div>
          <!-- BOTÓN X PROMINENTE -->
          <button class="btn-close-x" (click)="cerrarModalDetalle()" title="Cerrar ventana de detalles">✕</button>
        </div>

        <div class="modal-body margin-top">
          <div class="modal-grid-2">
            <div class="modal-img-container">
              <img [src]="obtenerImagenPrincipal(productoModal)" [alt]="productoModal.nombre" (error)="onErrorImagen($event)" />
            </div>
            <div class="modal-info-container">
              <p class="modal-cat">Categoría: <strong>{{ productoModal.categoria?.nombre || 'Calzado' }}</strong> | Género: <strong>{{ productoModal.genero }}</strong></p>
              <p class="modal-material">Material: <strong>{{ productoModal.material }}</strong></p>
              <div class="modal-price-box">
                <span class="modal-price">S/ {{ obtenerPrecioMinimo(productoModal) | number:'1.2-2' }}</span>
              </div>
              <p class="modal-desc">{{ productoModal.descripcion || 'Excelente calzado con acabados de primera calidad, resistencia y durabilidad garantizada.' }}</p>

              <!-- Selector de Variantes en Modal -->
              <div class="modal-tallas-box" *ngIf="productoModal.variantes && productoModal.variantes.length > 0">
                <label>Tallas Disponibles:</label>
                <div class="size-chips-grid">
                  <button 
                    *ngFor="let v of productoModal.variantes" 
                    class="size-pill" 
                    [class.active]="varianteModal?.idVariante === v.idVariante"
                    (click)="varianteModal = v">
                    Talla {{ v.talla }} ({{ v.color }})
                  </button>
                </div>
              </div>

              <div class="modal-actions-bar margin-top">
                <button class="btn-cyan-cart flex-1" (click)="agregarModalAlCarrito()">
                  🛒 Añadir al Carrito
                </button>
                <button class="btn-cancel-modal" (click)="cerrarModalDetalle()">
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      background: #060913;
      color: #ffffff;
      min-height: 100vh;
      overflow-x: hidden;
      font-family: 'Outfit', 'Segoe UI', system-ui, sans-serif;
    }

    .trends-container {
      position: relative;
      width: 100%;
      min-height: 100vh;
      padding-bottom: 5rem;
    }

    /* Fluid Neon Abstract Blobs */
    .fluid-blob {
      position: absolute;
      border-radius: 50%;
      filter: blur(120px);
      opacity: 0.45;
      z-index: 0;
      pointer-events: none;
      animation: floatBlob 12s infinite alternate ease-in-out;
    }
    .blob-1 {
      width: 550px;
      height: 550px;
      background: radial-gradient(circle, #ec4899 0%, #8b5cf6 100%);
      top: -100px;
      left: -100px;
    }
    .blob-2 {
      width: 600px;
      height: 600px;
      background: radial-gradient(circle, #3b82f6 0%, #06b6d4 100%);
      top: 250px;
      right: -150px;
      animation-delay: -4s;
    }
    .blob-3 {
      width: 500px;
      height: 500px;
      background: radial-gradient(circle, #f97316 0%, #ec4899 100%);
      bottom: 100px;
      left: 20%;
      animation-delay: -8s;
    }
    @keyframes floatBlob {
      0% { transform: translate(0, 0) scale(1); }
      100% { transform: translate(60px, 80px) scale(1.12); }
    }

    /* Hero Section */
    .hero-heroic {
      position: relative;
      min-height: calc(100vh - 80px);
      padding: 3rem 2rem;
      max-width: 1380px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      z-index: 1;
    }

    /* Giant Glassmorphism Watermark Title */
    .giant-glass-title {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -55%);
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: clamp(3.5rem, 10vw, 9.5rem);
      font-weight: 900;
      line-height: 0.85;
      letter-spacing: -0.04em;
      opacity: 0.12;
      pointer-events: none;
      user-select: none;
      white-space: nowrap;
      text-transform: uppercase;
      z-index: 0;
    }
    .gradient-text {
      background: linear-gradient(90deg, #ec4899, #3b82f6, #f97316);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    /* Main Layout 3 columns */
    .hero-main-layout {
      position: relative;
      z-index: 2;
      display: grid;
      grid-template-columns: 380px 1fr 300px;
      align-items: center;
      gap: 2rem;
      margin-top: 1rem;
    }
    @media (max-width: 1180px) {
      .hero-main-layout {
        grid-template-columns: 1fr;
        justify-items: center;
      }
    }

    /* Left Info Card */
    .product-info-glass {
      background: rgba(15, 23, 42, 0.75);
      backdrop-filter: blur(24px);
      -webkit-backdrop-filter: blur(24px);
      border: 1px solid rgba(255, 255, 255, 0.15);
      border-radius: 1.5rem;
      padding: 2rem;
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
    }
    .drop-tag {
      display: inline-block;
      font-size: 0.75rem;
      font-weight: 800;
      letter-spacing: 0.12em;
      color: #06b6d4;
      background: rgba(6, 182, 212, 0.15);
      border: 1px solid rgba(6, 182, 212, 0.3);
      padding: 0.35rem 0.85rem;
      border-radius: 2rem;
      margin-bottom: 1rem;
    }
    .main-shoe-title {
      font-size: 2.1rem;
      font-weight: 900;
      margin: 0;
      color: #ffffff;
      line-height: 1.15;
    }
    .main-shoe-sub {
      color: #94a3b8;
      font-size: 0.9rem;
      margin: 0.4rem 0 1rem 0;
    }
    .price-row {
      display: flex;
      align-items: baseline;
      gap: 0.5rem;
      margin-bottom: 1rem;
    }
    .price-symbol { font-size: 1.2rem; font-weight: 700; color: #06b6d4; }
    .price-amount { font-size: 2.2rem; font-weight: 900; color: #ffffff; }
    .old-price { font-size: 1rem; color: #64748b; text-decoration: line-through; margin-left: 0.5rem; }
    
    .description {
      font-size: 0.88rem;
      color: #cbd5e1;
      line-height: 1.55;
      margin-bottom: 1.25rem;
    }

    /* Size Selector Pills */
    .size-selector-box { margin-bottom: 1.25rem; }
    .selector-label { display: block; font-size: 0.78rem; font-weight: 700; color: #94a3b8; margin-bottom: 0.5rem; }
    .size-chips-grid { display: flex; flex-wrap: wrap; gap: 0.5rem; }
    .size-pill {
      background: rgba(255, 255, 255, 0.08); border: 1px solid rgba(255, 255, 255, 0.15); color: #f8fafc;
      padding: 0.35rem 0.75rem; border-radius: 0.6rem; font-size: 0.8rem; font-weight: 700; cursor: pointer; transition: all 0.2s;
    }
    .size-pill:hover, .size-pill.active {
      background: #06b6d4; border-color: #06b6d4; color: #ffffff; box-shadow: 0 0 12px rgba(6, 182, 212, 0.5);
    }

    .card-actions { display: flex; gap: 0.85rem; }
    .btn-cyan-cart {
      flex: 1;
      background: linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%);
      color: #ffffff;
      border: none;
      padding: 0.85rem 1.25rem;
      border-radius: 0.85rem;
      font-weight: 800;
      font-size: 0.95rem;
      letter-spacing: 0.05em;
      cursor: pointer;
      box-shadow: 0 8px 25px rgba(6, 182, 212, 0.4);
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.6rem;
    }
    .btn-cyan-cart svg { width: 20px; height: 20px; }
    .btn-cyan-cart:hover {
      transform: translateY(-2px);
      box-shadow: 0 12px 30px rgba(6, 182, 212, 0.6);
      background: linear-gradient(135deg, #0891b2 0%, #2563eb 100%);
    }
    .btn-favorite {
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.15);
      border-radius: 0.85rem;
      width: 48px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      font-size: 1.2rem;
      transition: background 0.2s;
    }
    .btn-favorite:hover { background: rgba(255, 255, 255, 0.2); }

    /* Hovering Sneaker Central Stage */
    .hovering-sneaker-stage {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 2rem 0;
      width: 100%;
    }
    .glow-ring {
      position: absolute;
      width: 340px;
      height: 340px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(236, 72, 153, 0.35) 0%, rgba(6, 182, 212, 0.15) 70%, transparent 100%);
      filter: blur(35px);
      animation: pulseGlow 4s infinite alternate ease-in-out;
    }
    @keyframes pulseGlow {
      0% { transform: scale(0.85); opacity: 0.5; }
      100% { transform: scale(1.15); opacity: 0.9; }
    }
    
    .floating-img-frame {
      position: relative;
      width: 100%;
      max-width: 500px;
      height: 340px;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 2;
    }

    .floating-sneaker-img {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
      filter: drop-shadow(0 25px 35px rgba(0, 0, 0, 0.75));
      animation: levitateSneaker 5s infinite alternate ease-in-out;
    }
    @keyframes levitateSneaker {
      0% { transform: translateY(0px) rotate(-4deg); }
      100% { transform: translateY(-20px) rotate(2deg); }
    }
    .shadow-ellipse {
      width: 280px;
      height: 20px;
      background: rgba(0, 0, 0, 0.7);
      border-radius: 50%;
      filter: blur(12px);
      margin-top: 1rem;
      animation: shadowPulse 5s infinite alternate ease-in-out;
    }
    @keyframes shadowPulse {
      0% { transform: scale(1); opacity: 0.8; }
      100% { transform: scale(0.65); opacity: 0.3; }
    }

    /* Thumbnail Carousel Glass Bottom Right */
    .thumbnail-carousel-glass {
      background: rgba(15, 23, 42, 0.75);
      backdrop-filter: blur(24px);
      border: 1px solid rgba(255, 255, 255, 0.15);
      border-radius: 1.5rem;
      padding: 1.5rem;
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
      max-height: 480px;
      overflow-y: auto;
    }
    .carousel-label {
      display: block;
      font-size: 0.75rem;
      font-weight: 800;
      letter-spacing: 0.08em;
      color: #94a3b8;
      margin-bottom: 1rem;
    }
    .thumb-list { display: flex; flex-direction: column; gap: 0.85rem; }
    .thumb-item {
      height: 72px;
      border-radius: 0.85rem;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      overflow: hidden;
      cursor: pointer;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 0.4rem;
    }
    .thumb-item img {
      height: 60px;
      width: 60px;
      object-fit: contain;
      border-radius: 0.5rem;
    }
    .thumb-meta { display: flex; flex-direction: column; overflow: hidden; }
    .thumb-title { font-size: 0.8rem; font-weight: 700; color: #ffffff; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .thumb-price { font-size: 0.78rem; font-weight: 800; color: #06b6d4; }
    
    .thumb-item:hover, .thumb-item.active {
      border-color: #ec4899;
      background: rgba(236, 72, 153, 0.18);
      box-shadow: 0 0 15px rgba(236, 72, 153, 0.4);
    }

    /* Scroll Hint */
    .scroll-down-hint {
      align-self: center;
      margin-top: 2.5rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.4rem;
      color: #94a3b8;
      font-size: 0.78rem;
      font-weight: 800;
      letter-spacing: 0.1em;
      cursor: pointer;
      transition: color 0.2s;
      z-index: 2;
    }
    .scroll-down-hint:hover { color: #06b6d4; }
    .arrow-down { font-size: 1.2rem; animation: bounceArrow 1.5s infinite ease-in-out; }
    @keyframes bounceArrow {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(6px); }
    }

    /* SECTION 2: VERTICAL DESCENT TENDENCIAS */
    .trends-vertical-section {
      max-width: 1380px;
      margin: 5rem auto 0 auto;
      padding: 0 2rem;
      position: relative;
      z-index: 2;
    }
    .section-title-wrap { text-align: center; margin-bottom: 3.5rem; }
    .subtitle-badge {
      display: inline-block;
      background: linear-gradient(90deg, #ec4899, #8b5cf6);
      color: #ffffff;
      font-size: 0.78rem;
      font-weight: 800;
      padding: 0.35rem 1rem;
      border-radius: 999px;
      letter-spacing: 0.15em;
      margin-bottom: 0.85rem;
      box-shadow: 0 4px 15px rgba(236, 72, 153, 0.4);
    }
    .section-glow-header {
      font-size: 3.5rem;
      font-weight: 900;
      letter-spacing: -0.02em;
      margin: 0;
      background: linear-gradient(180deg, #ffffff 0%, #94a3b8 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .section-desc { color: #94a3b8; font-size: 1.05rem; margin-top: 0.5rem; }

    /* Curated Trends Grid */
    .trends-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 2rem;
    }
    .trend-card {
      position: relative;
      background: rgba(15, 23, 42, 0.75);
      backdrop-filter: blur(16px);
      border: 1px solid rgba(255, 255, 255, 0.12);
      border-radius: 1.5rem;
      padding: 1.5rem;
      overflow: hidden;
      transition: all 0.35s ease;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .trend-card:hover {
      transform: translateY(-8px);
      border-color: rgba(6, 182, 212, 0.5);
      box-shadow: 0 15px 35px rgba(0, 0, 0, 0.6), 0 0 25px rgba(6, 182, 212, 0.2);
    }
    .card-badge {
      position: absolute;
      top: 1.25rem;
      left: 1.25rem;
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.15);
      color: #38bdf8;
      font-size: 0.72rem;
      font-weight: 800;
      padding: 0.25rem 0.65rem;
      border-radius: 0.5rem;
      z-index: 2;
    }
    .card-img-box {
      width: 100%;
      height: 210px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 1rem 0;
      cursor: pointer;
    }
    .card-img-box img {
      max-height: 100%;
      max-width: 100%;
      object-fit: contain;
      transition: transform 0.35s ease;
    }
    .trend-card:hover .card-img-box img { transform: scale(1.1) rotate(-3deg); }
    
    .card-details { border-top: 1px solid rgba(255, 255, 255, 0.08); padding-top: 1rem; }
    .card-subtitle { font-size: 0.78rem; color: #94a3b8; font-weight: 600; text-transform: uppercase; }
    .card-title { font-size: 1.2rem; font-weight: 800; color: #ffffff; margin: 0.2rem 0 0.85rem 0; }
    .card-price-bar { display: flex; justify-content: space-between; align-items: center; }
    .card-price { font-size: 1.25rem; font-weight: 900; color: #38bdf8; }
    .btn-quick-buy {
      background: rgba(255, 255, 255, 0.08);
      color: #ffffff;
      border: 1px solid rgba(255, 255, 255, 0.15);
      padding: 0.45rem 0.9rem;
      border-radius: 0.65rem;
      font-size: 0.82rem;
      font-weight: 700;
      cursor: pointer;
      transition: all 0.25s ease;
    }
    .btn-quick-buy:hover { background: #06b6d4; border-color: #06b6d4; color: #ffffff; }

    /* MODAL DE DETALLES CON BOTÓN X REQUERIDO */
    .modal-backdrop {
      position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
      background: rgba(0, 0, 0, 0.8); backdrop-filter: blur(12px);
      z-index: 9999; display: flex; align-items: center; justify-content: center; padding: 1.5rem;
    }
    .glass-modal {
      width: 100%; max-width: 780px; max-height: 90vh; overflow-y: auto;
      background: #111827; border-radius: 1.75rem; padding: 2rem;
      border: 1px solid rgba(255, 255, 255, 0.18); box-shadow: 0 30px 60px rgba(0, 0, 0, 0.9);
    }
    .modal-header {
      display: flex; justify-content: space-between; align-items: center;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1); padding-bottom: 1rem;
    }
    .modal-title-box { display: flex; flex-direction: column; gap: 0.2rem; }
    .modal-brand-badge {
      display: inline-block; background: rgba(6, 182, 212, 0.15); color: #06b6d4;
      font-size: 0.72rem; font-weight: 800; padding: 0.2rem 0.6rem; border-radius: 0.4rem;
      width: fit-content; text-transform: uppercase;
    }
    .modal-header h3 { margin: 0; font-size: 1.5rem; font-weight: 900; color: #ffffff; }
    
    /* BOTÓN X PROMINENTE */
    .btn-close-x {
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.2);
      color: #ffffff;
      width: 42px;
      height: 42px;
      border-radius: 50%;
      font-size: 1.3rem;
      font-weight: 700;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.25s ease;
    }
    .btn-close-x:hover {
      background: #ef4444;
      border-color: #ef4444;
      color: #ffffff;
      transform: rotate(90deg) scale(1.1);
    }

    .modal-grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; align-items: center; }
    @media (max-width: 768px) { .modal-grid-2 { grid-template-columns: 1fr; } }

    .modal-img-container {
      width: 100%; height: 260px; display: flex; align-items: center; justify-content: center;
      background: rgba(255, 255, 255, 0.03); border-radius: 1.25rem; border: 1px solid rgba(255, 255, 255, 0.08); padding: 1rem;
    }
    .modal-img-container img { max-height: 100%; max-width: 100%; object-fit: contain; }

    .modal-cat, .modal-material { font-size: 0.85rem; color: #94a3b8; margin: 0 0 0.4rem 0; }
    .modal-cat strong, .modal-material strong { color: #f8fafc; }
    .modal-price-box { margin: 1rem 0; }
    .modal-price { font-size: 2rem; font-weight: 900; color: #06b6d4; }
    .modal-desc { font-size: 0.88rem; color: #cbd5e1; line-height: 1.55; margin-bottom: 1.25rem; }
    .modal-tallas-box label { display: block; font-size: 0.78rem; font-weight: 700; color: #94a3b8; margin-bottom: 0.5rem; }

    .modal-actions-bar { display: flex; gap: 0.85rem; }
    .flex-1 { flex: 1; }
    .btn-cancel-modal {
      background: rgba(255, 255, 255, 0.08); color: #cbd5e1; border: 1px solid rgba(255, 255, 255, 0.15);
      padding: 0.85rem 1.3rem; border-radius: 0.85rem; font-weight: 700; cursor: pointer; transition: all 0.2s;
    }
    .btn-cancel-modal:hover { background: rgba(255, 255, 255, 0.18); color: #ffffff; }
    .margin-top-sm { margin-top: 1rem; }
  `]
})
export class TendenciasComponent implements OnInit {
  productosDB: Producto[] = [];
  productoHero: Producto | null = null;
  varianteHero: ProductoVariante | null = null;
  imagenHeroActual: string = '';
  agregandoCarrito: boolean = false;

  // Modal de Detalle
  mostrarModal: boolean = false;
  productoModal: Producto | null = null;
  varianteModal: ProductoVariante | null = null;

  constructor(
    private productoService: ProductoService,
    private carritoService: CarritoService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.cargarProductosDB();
  }

  cargarProductosDB(): void {
    this.productoService.obtenerTodos().subscribe({
      next: (data) => {
        this.productosDB = data;
        if (data && data.length > 0) {
          // Seleccionar el primer producto o uno de marca destacada para el Hero
          this.seleccionarProductoHero(data[0]);
        }
      },
      error: (err) => {
        console.error('Error al cargar productos para tendencias', err);
      }
    });
  }

  seleccionarProductoHero(prod: Producto): void {
    this.productoHero = prod;
    this.imagenHeroActual = this.obtenerImagenPrincipal(prod);
    if (prod.variantes && prod.variantes.length > 0) {
      this.varianteHero = prod.variantes[0];
    } else {
      this.varianteHero = null;
    }
  }

  obtenerPrecioMinimo(prod: Producto): number {
    if (!prod.variantes || prod.variantes.length === 0) return 0;
    return Math.min(...prod.variantes.map(v => v.precio));
  }

  obtenerImagenPrincipal(prod: Producto): string {
    if (!prod.imagenes || prod.imagenes.length === 0) {
      return 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=600';
    }
    const principal = prod.imagenes.find(i => i.esPrincipal);
    return principal ? principal.urlImagen : prod.imagenes[0].urlImagen;
  }

  agregarHeroAlCarrito(): void {
    if (!this.productoHero) return;

    const idVariante = this.varianteHero?.idVariante || (this.productoHero.variantes && this.productoHero.variantes[0]?.idVariante);

    if (!idVariante) {
      this.notificationService.showWarning('Este producto no tiene variantes registradas.', 'Atención');
      return;
    }

    this.agregandoCarrito = true;
    const idUsuario = 1; // Usuario por defecto

    this.carritoService.agregarItem(idUsuario, idVariante, 1).subscribe({
      next: () => {
        this.agregandoCarrito = false;
        this.notificationService.showSuccess(
          `¡${this.productoHero?.nombre} (Talla ${this.varianteHero?.talla || ''}) añadido al carrito!`,
          '🛒 Carrito Actualizado'
        );
      },
      error: (err) => {
        this.agregandoCarrito = false;
        this.notificationService.showError('No se pudo añadir el producto al carrito.');
      }
    });
  }

  abrirModalDetalle(prod: Producto): void {
    this.productoModal = prod;
    if (prod.variantes && prod.variantes.length > 0) {
      this.varianteModal = prod.variantes[0];
    } else {
      this.varianteModal = null;
    }
    this.mostrarModal = true;
  }

  cerrarModalDetalle(): void {
    this.mostrarModal = false;
    this.productoModal = null;
    this.varianteModal = null;
  }

  agregarModalAlCarrito(): void {
    if (!this.productoModal) return;

    const idVariante = this.varianteModal?.idVariante || (this.productoModal.variantes && this.productoModal.variantes[0]?.idVariante);

    if (!idVariante) {
      this.notificationService.showWarning('Este producto no tiene variantes de stock.', 'Atención');
      return;
    }

    const idUsuario = 1;
    this.carritoService.agregarItem(idUsuario, idVariante, 1).subscribe({
      next: () => {
        this.notificationService.showSuccess(
          `¡${this.productoModal?.nombre} agregado al carrito!`,
          '🛒 Producto Añadido'
        );
        this.cerrarModalDetalle();
      },
      error: (err) => {
        this.notificationService.showError('Ocurrió un error al agregar al carrito.');
      }
    });
  }

  toggleFavorito(): void {
    this.notificationService.showInfo(`Guardado en tus favoritos ❤️`, 'Favorito Añadido');
  }

  onErrorImagen(event: any): void {
    event.target.src = 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=600';
  }

  scrollToTrends(): void {
    const el = document.getElementById('trends-grid-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
