SET NUMERIC_ROUNDABORT OFF;
SET ANSI_PADDING, ANSI_WARNINGS, CONCAT_NULL_YIELDS_NULL, ARITHABORT, QUOTED_IDENTIFIER, ANSI_NULLS ON;
GO

USE ZapateriaJoselito;
GO

-- 1. Limpiar datos existentes (respetando llaves foráneas)
DELETE FROM INVENTARIO_MOVIMIENTOS;
DELETE FROM DETALLES_VENTA;
DELETE FROM VENTAS;
DELETE FROM CARRITO_ITEMS;
DELETE FROM CARRITO;
DELETE FROM DIRECCIONES;
DELETE FROM IMAGENES_PRODUCTOS;
DELETE FROM PRODUCTO_VARIANTES;
DELETE FROM PRODUCTOS;
DELETE FROM PROVEEDORES;
DELETE FROM CATEGORIAS;
DELETE FROM METODOS_PAGO;
DELETE FROM CUPONES;
DELETE FROM USUARIOS;

-- 2. Insertar Categorías
SET IDENTITY_INSERT CATEGORIAS ON;
INSERT INTO CATEGORIAS (id_categorias, nombre, descripcion) VALUES
(1, 'Urbano', 'Zapatillas urbanas, casuales y de vestir para uso diario.'),
(2, 'Deportivo', 'Calzado deportivo de alto rendimiento para running, entreno y fútbol.'),
(3, 'Formal', 'Zapatos elegantes de vestir, mocasines y calzado de cuero.'),
(4, 'Sandalias', 'Sandalias cómodas y ligeras para temporada de verano.'),
(5, 'Botas', 'Botas y botines de cuero sintético y piel para todo terreno.');
SET IDENTITY_INSERT CATEGORIAS OFF;

-- 3. Insertar Métodos de Pago
SET IDENTITY_INSERT METODOS_PAGO ON;
INSERT INTO METODOS_PAGO (id_metodos_pago, nombre, activo) VALUES
(1, 'Yape / Plin', 1),
(2, 'Transferencia Bancaria BCP/BBVA', 1),
(3, 'Tarjeta de Crédito / Débito', 1),
(4, 'Pago en Efectivo', 1);
SET IDENTITY_INSERT METODOS_PAGO OFF;

-- 4. Insertar Cupones
SET IDENTITY_INSERT CUPONES ON;
INSERT INTO CUPONES (id_cupones, codigo, descuento, fecha_inicio, fecha_fin, activo) VALUES
(1, 'JOSELITO10', 10.00, '2026-01-01', '2026-12-31', 1),
(2, 'PROMO20', 20.00, '2026-01-01', '2026-12-31', 1);
SET IDENTITY_INSERT CUPONES OFF;

-- 5. Insertar Proveedores
SET IDENTITY_INSERT PROVEEDORES ON;
INSERT INTO PROVEEDORES (id_proveedores, razon_social, ruc, telefono, correo, direccion, estado) VALUES
(1, 'Calzados El Sol S.A.C.', '20512345678', '987654321', 'contacto@calzadoselsol.pe', 'Av. Argentina 1450, Lima', 1),
(2, 'Distribuidora Nike Perú E.I.R.L.', '20609876543', '912345678', 'ventas@nikeperu.com', 'Av. Javier Prado Este 2450, San Borja', 1),
(3, 'Importadora Calzado Joselito S.A.', '20101010101', '955443322', 'proveedor@joselito.com', 'Jr. de la Unión 840, Cercado de Lima', 1);
SET IDENTITY_INSERT PROVEEDORES OFF;

-- 6. Insertar Usuarios (Admin y Cliente)
-- Hash BCrypt válido de prueba (contraseña para ambos: '123456')
SET IDENTITY_INSERT USUARIOS ON;
INSERT INTO USUARIOS (id_usuarios, nombre, email, password_hash, rol, fecha_registro, activo) VALUES
(1, 'Administrador Joselito', 'admin@zapateriajoselito.com', '$2a$12$EeF8Au/sPvX5T28TTyNCgeGllxHJWfll655cnNUxSVA8tvm.H48IK', 'ADMIN', GETDATE(), 1),
(2, 'Juan Pérez (Cliente)', 'cliente@zapateriajoselito.com', '$2a$12$EeF8Au/sPvX5T28TTyNCgeGllxHJWfll655cnNUxSVA8tvm.H48IK', 'CLIENTE', GETDATE(), 1);
SET IDENTITY_INSERT USUARIOS OFF;

-- 7. Insertar Productos
SET IDENTITY_INSERT PRODUCTOS ON;
INSERT INTO PRODUCTOS (id_productos, id_categorias, nombre, descripcion, marca, material, genero, activo) VALUES
(1, 1, 'Zapatillas Nike Air Max Street', 'Zapatillas urbanas de diseño moderno con cápsula de aire para máxima comodidad.', 'Nike', 'Cuero Sintético y Malla', 'Hombre', 1),
(2, 2, 'Zapatillas Adidas Ultraboost Runner', 'Calzado deportivo para entrenamiento de alta intensidad y amortiguación elástica.', 'Adidas', 'Tejido Primeknit', 'Unisex', 1),
(3, 3, 'Zapato Formal Joselito Oxford Elegance', 'Zapato de vestir elaborado en 100% cuero vacuno de alta calidad con acabado lustrado.', 'Joselito Premium', 'Cuero Vacuno Original', 'Hombre', 1),
(4, 1, 'Zapatillas Vans Old Skool Classic', 'Zapatillas casuales con la emblemática banda lateral y suela de goma en waffle.', 'Vans', 'Lona y Gamuza', 'Unisex', 1),
(5, 4, 'Sandalias Casuales Joselito Confort', 'Sandalias ergonómicas de suela blanda idóneas para caminatas de verano.', 'Joselito Premium', 'Cuero y Goma Antideslizante', 'Mujer', 1),
(6, 5, 'Botines de Cuero Joselito Explorer', 'Botas resistentes al desgaste con costuras reforzadas para todo terreno.', 'Joselito Premium', 'Cuero Nobuck', 'Hombre', 1);
SET IDENTITY_INSERT PRODUCTOS OFF;

-- 8. Insertar Imágenes de Productos
SET IDENTITY_INSERT IMAGENES_PRODUCTOS ON;
INSERT INTO IMAGENES_PRODUCTOS (id_imagenes_productos, id_productos, url_imagen, orden_visualizacion, es_principal) VALUES
(1, 1, 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800', 1, 1),
(2, 2, 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&q=80&w=800', 1, 1),
(3, 3, 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&q=80&w=800', 1, 1),
(4, 4, 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=800', 1, 1),
(5, 5, 'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?auto=format&fit=crop&q=80&w=800', 1, 1),
(6, 6, 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&q=80&w=800', 1, 1);
SET IDENTITY_INSERT IMAGENES_PRODUCTOS OFF;

-- 9. Insertar Variantes de Productos (Tallas, Colores, Precios y Stock)
-- Nota: Incluimos variantes con stock <= 5 para probar Alertas de Stock Bajo (RF-11)
SET IDENTITY_INSERT PRODUCTO_VARIANTES ON;
INSERT INTO PRODUCTO_VARIANTES (id_variantes, id_productos, talla, color, sku, precio, stock, activo) VALUES
-- Nike Air Max
(1, 1, '40', 'Negro/Rojo', 'NK-AM-40-NR', 289.90, 15, 1),
(2, 1, '41', 'Negro/Rojo', 'NK-AM-41-NR', 289.90, 3, 1), -- Alerta Stock Bajo!
(3, 1, '42', 'Blanco/Azul', 'NK-AM-42-BA', 299.90, 12, 1),

-- Adidas Ultraboost
(4, 2, '39', 'Gris/Verde', 'AD-UB-39-GV', 349.00, 8, 1),
(5, 2, '40', 'Negro Total', 'AD-UB-40-NT', 349.00, 2, 1), -- Alerta Stock Bajo!
(6, 2, '41', 'Negro Total', 'AD-UB-41-NT', 349.00, 20, 1),

-- Zapato Formal Oxford
(7, 3, '39', 'Marrón Caoba', 'JOS-OX-39-MC', 249.00, 6, 1),
(8, 3, '40', 'Marrón Caoba', 'JOS-OX-40-MC', 249.00, 4, 1), -- Alerta Stock Bajo!
(9, 3, '41', 'Negro Elegante', 'JOS-OX-41-NE', 259.00, 10, 1),

-- Vans Old Skool
(10, 4, '38', 'Negro/Blanco', 'VN-OS-38-NB', 199.90, 18, 1),
(11, 4, '39', 'Negro/Blanco', 'VN-OS-39-NB', 199.90, 14, 1),
(12, 4, '40', 'Azul Marino', 'VN-OS-40-AM', 199.90, 3, 1), -- Alerta Stock Bajo!

-- Sandalias Joselito
(13, 5, '36', 'Beige', 'JOS-SD-36-BG', 119.00, 15, 1),
(14, 5, '37', 'Marrón', 'JOS-SD-37-MR', 119.00, 7, 1),

-- Botines Explorer
(15, 6, '41', 'Camel', 'JOS-BT-41-CM', 279.00, 5, 1), -- Alerta Stock Bajo!
(16, 6, '42', 'Camel', 'JOS-BT-42-CM', 279.00, 12, 1);
SET IDENTITY_INSERT PRODUCTO_VARIANTES OFF;

-- 10. Insertar Direcciones de prueba para el cliente
SET IDENTITY_INSERT DIRECCIONES ON;
INSERT INTO DIRECCIONES (id_direcciones, id_usuarios, direccion, distrito, provincia, departamento, referencia, principal) VALUES
(1, 2, 'Av. Larco 456, Depto 301', 'Miraflores', 'Lima', 'Lima', 'Frente al parque Kennedy', 1),
(2, 2, 'Jr. Las Palmeras 180', 'San Isidro', 'Lima', 'Lima', 'Cerca al centro empresarial', 0);
SET IDENTITY_INSERT DIRECCIONES OFF;

GO
