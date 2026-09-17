# Vertiente Legal

Sitio web de Vertiente Legal — asesoría legal en aguas, energía, forestal y minería (Santiago, Chile).

Sitio estático (HTML/CSS/JS plano, sin build ni dependencias) pensado para desplegarse directo en **Cloudflare Pages** desde este repositorio.

## Estructura

```
index.html
assets/
  css/
    variables.css   → tokens de diseño: colores, tipografía, espaciado
    base.css        → reset y estilos base de elementos HTML
    layout.css       → contenedores, grillas, secciones
    components.css   → botones, tarjetas, pills, formulario, listas numeradas
    sections.css      → header, hero, booking, CTA, footer
  js/
    data.js           → contenido editable (áreas de práctica, servicios, stats, teléfono)
    render.js          → genera el HTML a partir de data.js
    nav.js              → menú móvil
    form.js              → arma el mensaje y abre WhatsApp al enviar el formulario
    main.js               → inicializa todo al cargar la página
  img/
    favicon.svg
```

## Editar contenido

Las tarjetas de **áreas de práctica** y los ítems de **qué hago por sector** se generan desde
[`assets/js/data.js`](assets/js/data.js). Para agregar, quitar o modificar una, basta con editar
ese archivo — no hay que tocar el HTML ni duplicar marcado.

El teléfono y el número de WhatsApp también viven ahí (`SITE_DATA.phone`, `SITE_DATA.whatsappNumber`).

## Desarrollo local

No requiere instalación. Cualquier servidor estático sirve:

```bash
npx serve .
# o la extensión "Live Server" de VS Code
```

## Despliegue en Cloudflare Pages

- **Build command:** ninguno
- **Output directory:** `/` (raíz del repo)
- Framework preset: `None`

Para dominio propio, conectarlo desde el panel de Cloudflare Pages una vez creado el proyecto.

## Notas de diseño

- Tipografías: **Space Grotesk** (títulos) + **Plus Jakarta Sans** (cuerpo), vía Google Fonts.
  Se eligieron como alternativas gratuitas y visualmente cercanas a Aqua Grotesque / Radnika
  (tipografías comerciales). Si se adquieren las originales, solo hay que actualizar
  `--font-heading` y `--font-body` en `variables.css`.
- Paleta oscura suavizada (no negro puro), definida como variables CSS en `variables.css`.
