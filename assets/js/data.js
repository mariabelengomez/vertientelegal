/* Site content — edit this file to add/update practice areas or services.
   Rendering logic lives in render.js and stays untouched. */

const SITE_DATA = {
  phone: "+56 9 4736 8035",
  whatsappNumber: "56947368035",

  practiceAreas: [
    {
      icon: "droplet",
      title: "Aguas",
      desc: "Constitución y defensa de derechos de aprovechamiento, cambios de punto de captación, patentes por no uso y procedimientos ante la DGA.",
      tags: ["DAA", "Código de Aguas"],
    },
    {
      icon: "bolt",
      title: "Energía",
      desc: "Servidumbres para proyectos de generación y transmisión, negociación con propietarios colindantes y cumplimiento ambiental y sectorial.",
      tags: ["Servidumbres", "SEA"],
    },
    {
      icon: "tree",
      title: "Forestal",
      desc: "Permisos de corta, relación con CONAF, denuncias por tala no autorizada y regularización de faenas forestales en predios rurales.",
      tags: ["Permiso de corta", "CONAF"],
    },
    {
      icon: "mountain",
      title: "Minero",
      desc: "Constitución y mantención de concesiones, cumplimiento ambiental de faenas y coordinación con titulares de derechos superpuestos.",
      tags: ["Concesiones", "SMA"],
    },
  ],

  sectorWork: [
    {
      title: "Cumplimiento normativo",
      desc: "Programas de cumplimiento, respuesta a fiscalizaciones y descargos ante la SMA, la SISS y otros organismos sectoriales, y seguimiento de procedimientos sancionatorios de inicio a resolución.",
    },
    {
      title: "Contratos y negociaciones",
      desc: "Redacción y revisión de contratos de servicios, suministro y arriendo de infraestructura, y acompañamiento directo en la mesa de negociación con la contraparte.",
    },
    {
      title: "Servidumbres y uso de terrenos",
      desc: "Constitución de servidumbres voluntarias y forzosas, avalúo de indemnizaciones y redacción de escrituras para proyectos de energía, saneamiento e infraestructura.",
    },
    {
      title: "Litigios y procedimientos administrativos",
      desc: "Representación en juicios civiles vinculados al uso de recursos naturales y en recursos administrativos ante la autoridad sectorial correspondiente.",
    },
  ],

  aboutStats: [
    { label: "Años de ejercicio", value: "8" },
    { label: "Organismos ante los que actúo", value: "DGA · SMA · SISS · SEA" },
    { label: "Sectores", value: "Aguas · Energía · Forestal · Minero" },
    { label: "Ubicación", value: "Santiago, Chile" },
  ],

  bookingSteps: [
    "Completas tus datos y la fecha u horario que te acomoda.",
    "Se abre WhatsApp con tu solicitud lista para enviar.",
    "Te confirmo la hora directamente por ese medio.",
  ],
};
