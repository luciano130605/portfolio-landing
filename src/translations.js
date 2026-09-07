
export function tr(value, lang) {
    if (value && typeof value === "object" && ("es" in value || "en" in value)) {
        return value[lang] ?? value.es ?? value.en ?? "";
    }
    return value;
}

export const ui = {
    header: {
        verTrabajos: { es: "Ver trabajos", en: "View work" },
        contactarme: { es: "Contactarme", en: "Contact me" },
    },
    sections: {
        queHago: {
            title: { es: "Qué hago", en: "What I do" },
            description: {
                es: "Desarrollo distintos tipos de soluciones según lo que necesite cada proyecto.",
                en: "I build different kinds of solutions depending on what each project needs.",
            },
        },
        proyectos: {
            title: { es: "Proyectos", en: "Projects" },
            description: {
                es: "Aplicaciones y productos que desarrollé como parte de mi trabajo y aprendizaje.",
                en: "Applications and products I built as part of my work and learning.",
            },
            verProyecto: { es: "Ver proyecto", en: "View project" },
        },
        plantillas: {
            title: { es: "Plantillas", en: "Templates" },
            description: {
                es: "Demos conceptuales creadas para distintos rubros y necesidades.",
                en: "Concept demos built for different industries and needs.",
            },
            verTodas: { es: "Ver todas", en: "View all" },
            verDemo: { es: "Ver demo", en: "View demo" },
            note: {
                es: "* Las plantillas son conceptos desarrollados para portfolio y demostración. No corresponden a negocios reales.",
                en: "* These templates are concepts built for portfolio and demonstration purposes. They don't correspond to real businesses.",
            },
        },
        soluciones: {
            title: { es: "Soluciones", en: "Solutions" },
            description: {
                es: "La web se adapta a lo que necesitás para mostrar, vender o hacer crecer tu negocio.",
                en: "The site adapts to what you need to showcase, sell, or grow your business.",
            },
        },
        funcionalidades: {
            title: { es: "Funcionalidades", en: "Features" },
        },
        rubros: {
            title: { es: "Rubros", en: "Industries" },
            description: {
                es: "Trabajo con distintos tipos de negocios y proyectos. La web se arma según lo que necesites.",
                en: "I work with different kinds of businesses and projects. The site is built around what you need.",
            },
        },
        proceso: {
            title: { es: "Proceso", en: "Process" },
            description: {
                es: "Una forma simple de llevar una idea hasta una web publicada.",
                en: "A simple way to take an idea all the way to a published website.",
            },
        },
        sobreMi: {
            title: { es: "Sobre mí", en: "About me" },
        },
        formacion: {
            title: { es: "Formación", en: "Education" },
        },
    },
    contact: {
        label: { es: "¿Tenés un proyecto?", en: "Have a project?" },
        title: {
            es: "Hagamos algo para tu negocio.",
            en: "Let's build something for your business.",
        },
        description: {
            es: "Contame qué necesitás y vemos cómo convertir la idea en una web.",
            en: "Tell me what you need and let's turn the idea into a website.",
        },
        sendEmail: { es: "Enviar email", en: "Send email" },
    },
    footer: {
        email: { es: "Email", en: "Email" },
    },
    templatesPage: {
        back: { es: "Volver", en: "Back" },
        title: { es: "Todas las plantillas", en: "All templates" },
        description: {
            es: "Demos conceptuales creadas para distintos rubros y necesidades.",
            en: "Concept demos built for different industries and needs.",
        },
    },
};
