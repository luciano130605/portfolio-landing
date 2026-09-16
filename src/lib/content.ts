export type Copy = { es: string; en: string };

export const site = {
  firstName: "Luciano",
  lastName: "de la Peña",
  name: "Luciano de la Peña",
  email: "luciano.delapena@gmail.com",
  whatsapp: "5491158161755",
  github: "https://github.com/luciano130605",
  portfolio: "https://www.lucianodelapena.com/",
  location: { es: "Buenos Aires", en: "Buenos Aires" } satisfies Copy,
};

export const nav = [
  { id: "inicio", number: "01", label: { es: "Inicio", en: "Home" } },
  { id: "proyectos", number: "02", label: { es: "Proyectos", en: "Projects" } },
  { id: "plantillas", number: "03", label: { es: "Plantillas", en: "Templates" } },
  { id: "servicios", number: "04", label: { es: "Servicios", en: "Services" } },
  { id: "educacion", number: "05", label: { es: "Educación", en: "Education" } },
  { id: "habilidades", number: "06", label: { es: "Habilidades", en: "Skills" } },
  { id: "contacto", number: "07", label: { es: "Contacto", en: "Contact" } },
] as const;

export const hero = {
  role: {
    es: "Diseño y desarrollo de páginas web",
    en: "Web design and development",
  },
  bio: {
    es: "Me gusta crear proyectos web, aprender nuevas tecnologías y seguir mejorando mis habilidades como desarrollador. Diseño landing pages, sitios para negocios y aplicaciones con una estética clara, responsive y pensada para cada proyecto.",
    en: "I like building web projects, learning new tools, and getting better as a developer. I design landing pages, business sites and web apps with a clear, responsive look tailored to each project.",
  },
  write: { es: "Escribime", en: "Email me" },
  viewWork: { es: "Ver trabajos", en: "View work" },
};

export type Project = {
  id: string;
  featured?: boolean;
  category: Copy;
  title: string;
  description: Copy;
  bullets: Copy[];
  tech: string[];
  image: string;
  live?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    id: "evently",
    featured: true,
    category: { es: "Aplicación web", en: "Web application" },
    title: "Evently",
    description: {
      es: "Plataforma para crear y gestionar invitaciones digitales, entradas y asistencia. Pensada para que un organizador arme el evento, lo comparta y controle el acceso desde un solo lugar.",
      en: "A platform to create and manage digital invitations, tickets and attendance. Built so an organizer can set up the event, share it, and control access from one place.",
    },
    bullets: [
      { es: "Invitaciones digitales con diseño propio", en: "Custom digital invitations" },
      { es: "Gestión de invitados y confirmaciones", en: "Guest list and RSVP management" },
      { es: "Control de asistencia en un solo tablero", en: "Attendance tracking in one dashboard" },
    ],
    tech: ["React", "JavaScript", "Supabase"],
    image: "/projects/evently.jpg",
    live: "https://evently-azure-six.vercel.app",
  },
];

export const templates: Project[] = [
  {
    id: "odontologia",
    featured: true,
    category: { es: "Página web · Salud", en: "Website · Health" },
    title: "Odontología",
    description: {
      es: "Landing para clínica dental: servicios, horarios y contacto directo por WhatsApp. Pensada para generar consultas desde el celular.",
      en: "Landing page for a dental clinic: services, hours and direct WhatsApp contact. Built to drive inquiries from mobile.",
    },
    bullets: [
      { es: "Servicios y propuesta de valor claros", en: "Clear services and value proposition" },
      { es: "Horarios y ubicación a la vista", en: "Hours and location up front" },
      { es: "Contacto inmediato por WhatsApp", en: "Immediate WhatsApp contact" },
    ],
    tech: ["HTML", "CSS", "Responsive"],
    image: "/templates/odontologia/odontologia.png",
    live: "/templates/odontologia/odontologia.html",
  },
  {
    id: "burger",
    featured: true,
    category: { es: "Página web · Gastronomía", en: "Website · Food" },
    title: "Hamburguesería",
    description: {
      es: "Sitio para una hamburguesería smash: menú, historia del local y llamado a visitar o pedir. Oscuro, directo y con mucho apetito visual.",
      en: "A site for a smash-burger joint: menu, story, and a call to visit or order. Dark, direct, and visually hungry.",
    },
    bullets: [
      { es: "Menú destacado en primer plano", en: "Menu front and center" },
      { es: "Historia y carácter del local", en: "Story and character of the place" },
      { es: "Horarios y canales de contacto", en: "Hours and contact channels" },
    ],
    tech: ["HTML", "CSS", "Responsive"],
    image: "/templates/burger/burger.png",
    live: "https://demo-burger-nine.vercel.app/",
  },
  {
    id: "gym",
    category: { es: "Página web · Fitness", en: "Website · Fitness" },
    title: "Gimnasio",
    description: {
      es: "Landing de gimnasio con planes, entrenadores y un CTA claro para empezar. Oscura, enérgica y pensada para convertir visitas en consultas.",
      en: "Gym landing with plans, coaches and a clear CTA to get started. Dark, energetic, and built to turn visits into inquiries.",
    },
    bullets: [
      { es: "Planes de membresía visibles", en: "Membership plans on display" },
      { es: "Presentación de coaches", en: "Coach introductions" },
      { es: "Formulario y contacto rápido", en: "Form and fast contact" },
    ],
    tech: ["HTML", "CSS", "Responsive"],
    image: "/templates/gym/gym.png",
    live: "https://demo-gym2-psi.vercel.app/",
  },
  {
    id: "heladeria",
    category: { es: "Página web · Gastronomía", en: "Website · Food" },
    title: "Heladería",
    description: {
      es: "Web cálida para una heladería artesanal: sabores, historia y un cierre con mapa y WhatsApp para que el cliente se acerque.",
      en: "A warm site for an artisan ice-cream shop: flavors, story, and a close with map and WhatsApp so customers can drop by.",
    },
    bullets: [
      { es: "Carta de sabores destacada", en: "Featured flavor menu" },
      { es: "Sección de historia del local", en: "Shop story section" },
      { es: "Mapa, horarios y WhatsApp", en: "Map, hours and WhatsApp" },
    ],
    tech: ["HTML", "CSS", "Responsive"],
    image: "/templates/heladeria/heladeria.png",
    live: "https://demo-heladeria.vercel.app/",
  },
  {
    id: "cafeteria",
    category: { es: "Página web · Gastronomía", en: "Website · Food" },
    title: "Cafetería",
    description: {
      es: "Landing de cafetería de especialidad: menú, ambiente y horarios. Un sitio corto para que el local se vea tan cuidado como el café.",
      en: "Specialty coffee landing: menu, atmosphere and hours. A short site so the shop looks as considered as the coffee.",
    },
    bullets: [
      { es: "Menú de café y pastelería", en: "Coffee and pastry menu" },
      { es: "Ambiente y propuesta del local", en: "Atmosphere and offer" },
      { es: "Horarios y ubicación", en: "Hours and location" },
    ],
    tech: ["HTML", "CSS", "Responsive"],
    image: "/templates/cafeteria/cafeteria.png",
    live: "/templates/cafeteria/cafeteria.html",
  },
  {
    id: "parrilla",
    category: { es: "Página web · Gastronomía", en: "Website · Food" },
    title: "Parrilla",
    description: {
      es: "Sitio para una parrilla: cortes, horarios y reserva o consulta. Oscuro, con el fuego y la carne como protagonistas.",
      en: "A site for a steakhouse: cuts, hours, and booking or inquiry. Dark, with fire and meat as the lead.",
    },
    bullets: [
      { es: "Carta de cortes y platos", en: "Cuts and dishes on the menu" },
      { es: "Horarios y ubicación", en: "Hours and location" },
      { es: "Canal de reserva o consulta", en: "Booking or inquiry channel" },
    ],
    tech: ["HTML", "CSS", "Responsive"],
    image: "/templates/parrilla/parrilla.png",
    live: "https://demo-parrilla.vercel.app/",
  },
    {
    id: "Barber",
    category: { es: "Página web · barberia", en: "Website · Food" },
    title: "Barberia",
    description: {
      es: "",
      en: "",
    },
    bullets: [
      { es: "", en: "" },

    ],
    tech: ["", "", ""],
    image: "/templates/barber/barber.png",
    live: "https://demo-barber-jv97.vercel.app/",
  },
];

export const templateNote: Copy = {
  es: "* Las plantillas son conceptos desarrollados para portfolio y demostración. No corresponden a negocios reales.",
  en: "* The templates are concepts developed for portfolio and demonstration purposes. They do not represent real businesses.",
};

export const services = [
  {
    number: "01",
    title: { es: "Landing pages", en: "Landing pages" },
    description: {
      es: "Páginas enfocadas en presentar un negocio, servicio, producto o campaña.",
      en: "Pages focused on presenting a business, service, product or campaign.",
    },
  },
  {
    number: "02",
    title: { es: "Webs para negocios", en: "Business websites" },
    description: {
      es: "Sitios para mostrar servicios, horarios, ubicación, información y formas de contacto.",
      en: "Sites to showcase services, hours, location, information and contact options.",
    },
  },
  {
    number: "03",
    title: { es: "Catálogos", en: "Catalogs" },
    description: {
      es: "Productos organizados de forma clara para facilitar consultas y ventas.",
      en: "Products organized clearly to make browsing and selling easier.",
    },
  },
  {
    number: "04",
    title: { es: "Aplicaciones web", en: "Web applications" },
    description: {
      es: "Herramientas y plataformas desarrolladas para resolver necesidades específicas.",
      en: "Tools and platforms built to solve specific needs.",
    },
  },
  {
    number: "05",
    title: { es: "Rediseños", en: "Redesigns" },
    description: {
      es: "Mejoras visuales, responsive y de experiencia para sitios existentes.",
      en: "Visual, responsive and UX improvements for existing sites.",
    },
  },
];

export const capabilities = [
  {
    title: { es: "Vender", en: "Sell" },
    description: {
      es: "Productos, servicios, catálogos y llamados a la acción pensados para generar ventas.",
      en: "Products, services, catalogs and calls to action designed to generate sales.",
    },
  },
  {
    title: { es: "Recibir consultas", en: "Receive inquiries" },
    description: {
      es: "WhatsApp, formularios, llamadas y otros canales de contacto.",
      en: "WhatsApp, forms, calls and other contact channels.",
    },
  },
  {
    title: { es: "Reservar", en: "Book" },
    description: {
      es: "Turnos, reservas y solicitudes adaptadas a cada negocio.",
      en: "Appointments, bookings and requests tailored to each business.",
    },
  },
  {
    title: { es: "Mostrar información", en: "Show information" },
    description: {
      es: "Servicios, horarios, ubicación, precios, productos y todo lo que el cliente necesite saber.",
      en: "Services, hours, location, prices, products and everything a customer needs to know.",
    },
  },
];

export const process = [
  {
    number: "01",
    title: { es: "Idea", en: "Idea" },
    description: {
      es: "Hablamos sobre el negocio, proyecto o necesidad.",
      en: "We talk about the business, project or need.",
    },
  },
  {
    number: "02",
    title: { es: "Estructura", en: "Structure" },
    description: {
      es: "Definimos qué información necesita la página y cómo organizarla.",
      en: "We define what information the site needs and how to organize it.",
    },
  },
  {
    number: "03",
    title: { es: "Desarrollo", en: "Development" },
    description: {
      es: "Construyo el sitio y adapto la experiencia a celular y PC.",
      en: "I build the site and adapt the experience for mobile and desktop.",
    },
  },
  {
    number: "04",
    title: { es: "Lanzamiento", en: "Launch" },
    description: {
      es: "Publicamos el sitio y lo dejamos listo para compartir.",
      en: "We publish the site and get it ready to share.",
    },
  },
];

export const education = [
  {
    number: "01",
    title: {
      es: "Tecnicatura en Desarrollo de Software",
      en: "Software Development Technician",
    },
    place: { es: "IFTS N°11", en: "IFTS No. 11" },
    date: { es: "2024 — Actual", en: "2024 — Present" },
  },
];

export const skills = {
  frontend: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
  tools: ["Git", "GitHub", "Supabase", "Vercel"],
  product: ["WhatsApp", "Responsive", "Formularios", "SEO"],
};

export const skillLabels = {
  frontend: { es: "Frontend", en: "Frontend" },
  tools: { es: "Herramientas", en: "Tools" },
  product: { es: "Producto", en: "Product" },
};

export const ui = {
  selected: { es: "Seleccionado", en: "Selected" },
  projectsKicker: { es: "Proyectos", en: "Projects" },
  templatesKicker: { es: "Plantillas", en: "Templates" },
  templatesTitle: { es: "Demos por rubro", en: "Demos by industry" },
  templatesLead: {
    es: "Demos conceptuales creadas para distintos rubros y necesidades.",
    en: "Conceptual demos created for various sectors and needs.",
  },
  viewAll: { es: "Ver todas", en: "View all" },
  viewDemo: { es: "Ver demo", en: "View demo" },
  web: { es: "Web", en: "Web" },
  repo: { es: "Repo", en: "Repo" },
  servicesKicker: { es: "Servicios", en: "Services" },
  servicesTitle: { es: "Qué hago", en: "What I do" },
  servicesLead: {
    es: "Desarrollo distintos tipos de soluciones según lo que necesite cada proyecto.",
    en: "I build different kinds of solutions depending on what each project needs.",
  },
  solutions: { es: "También sirve para", en: "Also useful for" },
  process: { es: "Proceso", en: "Process" },
  educationKicker: { es: "Educación", en: "Education" },
  educationTitle: { es: "Educación", en: "Education" },
  skillsKicker: { es: "Habilidades", en: "Skills" },
  skillsTitle: { es: "Habilidades", en: "Skills" },
  contactKicker: { es: "Contacto", en: "Contact" },
  contactTitle: { es: "Hagamos algo para tu negocio", en: "Let's do something for your business" },
  contactLead: {
    es: "Contame qué necesitás y vemos cómo convertir la idea en una web.",
    en: "Tell me what you need and let’s turn the idea into a website.",
  },
  back: { es: "Volver", en: "Back" },
  allTemplates: { es: "Todas las plantillas", en: "All templates" },
  available: { es: "Disponible para proyectos", en: "Available for projects" },
  footerLang: { es: "Español nativo · Inglés A2", en: "Native Spanish · English A2" },
};
