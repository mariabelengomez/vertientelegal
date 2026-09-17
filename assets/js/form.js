/* Booking form -> prefilled WhatsApp message */
function initBookingForm() {
  const form = document.querySelector("[data-booking-form]");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = new FormData(form);
    const name = data.get("nombre")?.toString().trim();
    const contact = data.get("contacto")?.toString().trim();
    const date = data.get("fecha")?.toString().trim();
    const time = data.get("horario")?.toString().trim();
    const area = data.get("area")?.toString().trim();
    const notes = data.get("mensaje")?.toString().trim();

    const lines = [
      `Hola, quisiera agendar una reunión.`,
      name && `Nombre: ${name}`,
      contact && `Contacto: ${contact}`,
      date && `Fecha preferida: ${date}`,
      time && `Horario preferido: ${time}`,
      area && `Área de interés: ${area}`,
      notes && `Caso: ${notes}`,
    ].filter(Boolean);

    const url = `https://wa.me/${SITE_DATA.whatsappNumber}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener");
  });
}
