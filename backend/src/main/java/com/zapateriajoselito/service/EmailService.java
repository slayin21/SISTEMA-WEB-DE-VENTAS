package com.zapateriajoselito.service;

import com.zapateriajoselito.model.entity.Venta;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import jakarta.mail.internet.MimeMessage;
import java.math.BigDecimal;

@Service
public class EmailService {

    @Autowired(required = false)
    private JavaMailSender mailSender;

    public void enviarEnlaceRecuperacion(String email, String token) {
        String resetUrl = "http://localhost:4200/auth/reset-password?email=" + email + "&token=" + token;
        String asunto = "Zapatería Joselito - Restablecimiento de Contraseña";
        String contenidoHtml = "<h3>Hola,</h3>"
                + "<p>Has solicitado restablecer tu contraseña en <b>Zapatería Joselito</b>.</p>"
                + "<p>Haz clic en el siguiente enlace para crear tu nueva contraseña:</p>"
                + "<p><a href='" + resetUrl + "' style='background-color:#4f46e5;color:white;padding:10px 15px;text-decoration:none;border-radius:5px;'>Restablecer Contraseña</a></p>"
                + "<p>Token de recuperación: <b>" + token + "</b></p>"
                + "<br><p>Si no solicitaste este cambio, ignora este mensaje.</p>";

        enviarCorreoHtml(email, asunto, contenidoHtml);
    }

    public void enviarBoletaDigital(Venta venta) {
        if (venta == null || venta.getUsuario() == null) return;

        String emailCliente = venta.getUsuario().getEmail();
        String asunto = "Zapatería Joselito - Boleta Digital de Venta #" + venta.getIdVenta();
        
        BigDecimal subtotal = venta.getSubtotal() != null ? venta.getSubtotal() : BigDecimal.ZERO;
        BigDecimal costoEnvio = venta.getCostoEnvio() != null ? venta.getCostoEnvio() : BigDecimal.ZERO;
        BigDecimal descuento = venta.getDescuentoMonto() != null ? venta.getDescuentoMonto() : BigDecimal.ZERO;
        BigDecimal igv = subtotal.multiply(new BigDecimal("0.18"));
        BigDecimal total = subtotal.add(costoEnvio).subtract(descuento);

        StringBuilder html = new StringBuilder();
        html.append("<div style='font-family:sans-serif;max-width:600px;margin:auto;border:1px solid #e5e7eb;padding:20px;border-radius:10px;'>");
        html.append("<h2 style='color:#4f46e5;text-align:center;'>ZAPATERÍA JOSELITO - BOLETA DIGITAL</h2>");
        html.append("<p><b>N° de Venta:</b> ").append(venta.getIdVenta()).append("</p>");
        html.append("<p><b>Cliente:</b> ").append(venta.getUsuario().getNombre()).append(" (").append(emailCliente).append(")</p>");
        html.append("<p><b>Fecha:</b> ").append(venta.getFecha()).append("</p>");
        html.append("<p><b>Dirección de Envío:</b> ").append(venta.getDireccionEnvio()).append(", ").append(venta.getDistritoEnvio()).append("</p>");
        html.append("<hr style='border:0;border-top:1px solid #eee;'/>");

        html.append("<h4>Detalle de Productos:</h4>");
        html.append("<table style='width:100%;border-collapse:collapse;'>");
        html.append("<tr style='background:#f3f4f6;text-align:left;'><th>Cant.</th><th>Descripción</th><th>P. Unit</th><th>Subtotal</th></tr>");

        if (venta.getDetalles() != null) {
            venta.getDetalles().forEach(item -> {
                String nombreProd = item.getVariante() != null && item.getVariante().getProducto() != null 
                        ? item.getVariante().getProducto().getNombre() + " (Talla: " + item.getVariante().getTalla() + ", Color: " + item.getVariante().getColor() + ")"
                        : "Calzado Zapatería Joselito";
                html.append("<tr>")
                    .append("<td>").append(item.getCantidad()).append("</td>")
                    .append("<td>").append(nombreProd).append("</td>")
                    .append("<td>S/ ").append(item.getPrecioUnitario()).append("</td>")
                    .append("<td>S/ ").append(item.getSubtotal()).append("</td>")
                    .append("</tr>");
            });
        }

        html.append("</table>");
        html.append("<hr style='border:0;border-top:1px solid #eee;'/>");
        html.append("<p style='text-align:right;'><b>Subtotal:</b> S/ ").append(subtotal).append("</p>");
        html.append("<p style='text-align:right;'><b>IGV (18%):</b> S/ ").append(String.format("%.2f", igv)).append("</p>");
        html.append("<p style='text-align:right;'><b>Costo Envío:</b> S/ ").append(costoEnvio).append("</p>");
        html.append("<p style='text-align:right;'><b>Descuento:</b> -S/ ").append(descuento).append("</p>");
        html.append("<h3 style='text-align:right;color:#10b981;'>TOTAL A PAGAR: S/ ").append(String.format("%.2f", total)).append("</h3>");
        html.append("<p style='text-align:center;color:#6b7280;font-size:12px;'>¡Gracias por tu compra en Zapatería Joselito!</p>");
        html.append("</div>");

        enviarCorreoHtml(emailCliente, asunto, html.toString());
    }

    private void enviarCorreoHtml(String to, String subject, String htmlContent) {
        System.out.println("=================================================");
        System.out.println("ENVIANDO CORREO A: " + to);
        System.out.println("ASUNTO: " + subject);
        System.out.println("=================================================");
        if (mailSender != null) {
            try {
                MimeMessage mimeMessage = mailSender.createMimeMessage();
                MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, true, "UTF-8");
                helper.setTo(to);
                helper.setSubject(subject);
                helper.setText(htmlContent, true);
                mailSender.send(mimeMessage);
                System.out.println("Correo enviado exitosamente vía MailSender.");
            } catch (Exception e) {
                System.err.println("No se pudo enviar correo SMTP (se imprimió en log): " + e.getMessage());
            }
        }
    }
}
