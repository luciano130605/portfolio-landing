import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
    header,
    services,
    projects,
    templates,
    capabilities,
    features,
    industries,
    process,
    about,
    howIWork,
    education,
} from "./data";

const fadeUp = {
    hidden: { opacity: 0, y: 18 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
    },
};

const stagger = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.06 },
    },
};

function Section({ number, title, description, id, action, children }) {
    return (
        <motion.section
            id={id}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
        >
            <div className="section-label">
                <div className="section-label-main">
                    <span className="section-number">{number}</span>
                    <h2 className="section-title">{title}</h2>
                </div>

                {action}
            </div>

            {description && <p className="section-description">{description}</p>}
            {children}
        </motion.section>
    );
}

// Cantidad de plantillas que se muestran en la home antes de "Ver todos"
const TEMPLATES_PREVIEW_COUNT = 4;

export default function Home() {
    const previewTemplates = templates.slice(0, TEMPLATES_PREVIEW_COUNT);
    const hasMoreTemplates = templates.length > TEMPLATES_PREVIEW_COUNT;

    return (
        <main className="container">
            <motion.header initial="hidden" animate="visible">
                <motion.div className="top" variants={fadeUp}>
                    <div>
                        <h1 className="name">{header.name}</h1>
                    </div>
                </motion.div>

                <motion.h2 className="headline" variants={fadeUp}>
                    {header.headline} <span>{header.headlineAccent}</span>
                </motion.h2>

                <motion.p className="intro" variants={fadeUp}>
                    {header.intro}
                </motion.p>

                <motion.div className="header-actions" variants={fadeUp}>
                    <a href="#proyectos" className="btn btn-primary">
                        Ver trabajos
                    </a>
                    <a href="#contacto" className="btn">
                        Contactarme
                    </a>
                </motion.div>

                <motion.div className="header-meta" variants={fadeUp}>
                    <span>{header.location}</span>
                    <span>{header.area}</span>
                </motion.div>

                <div className="header-line" />
            </motion.header>

            <Section
                number="01"
                title="Qué hago"
                description="Desarrollo distintos tipos de soluciones según lo que necesite cada proyecto."
            >
                <motion.div
                    className="services"
                    variants={stagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                >
                    {services.map((service) => (
                        <motion.div className="service" variants={fadeUp} key={service.number}>
                            <span className="service-number">{service.number}</span>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-description">{service.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </Section>

            <Section
                number="02"
                title="Proyectos"
                id="proyectos"
                description="Aplicaciones y productos que desarrollé como parte de mi trabajo y aprendizaje."
            >
                <motion.div
                    className="project-list"
                    variants={stagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                >
                    {projects.map((project) => (
                        <motion.article
                            className="project"
                            variants={fadeUp}
                            whileHover={{ x: 3 }}
                            key={project.title}
                        >
                            <div className="project-main">
                                <div className="project-title-row">
                                    <h3 className="project-title">{project.title}</h3>
                                    <span className="project-status">{project.status}</span>
                                </div>

                                <p className="project-description">{project.description}</p>
                            </div>

                            <a href={project.link} className="project-link">
                                Ver proyecto
                            </a>
                        </motion.article>
                    ))}
                </motion.div>
            </Section>

            <Section
                number="03"
                title="Plantillas"
                description="Demos conceptuales creadas para distintos rubros y necesidades."
                action={
                    hasMoreTemplates && (
                        <Link to="/plantillas" className="ver-todos-link">
                            Ver todas
                        </Link>
                    )
                }
            >
                <motion.div
                    className="templates"
                    variants={stagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                >
                    {previewTemplates.map((template) => (
                        <motion.article
                            className="template"
                            variants={fadeUp}
                            key={template.index}
                        >
                            <div className="template-preview">
                                <img
                                    src={template.image}
                                    alt={`Preview de ${template.name}`}
                                    loading="lazy"
                                />
                            </div>

                            <div className="template-content">
                                <div className="template-info">
                                    <span className="template-index">
                                        {template.index}
                                    </span>

                                    <div>
                                        <h3 className="template-name">
                                            {template.name}
                                        </h3>

                                        <p className="template-category">
                                            {template.category}
                                        </p>
                                    </div>
                                </div>

                                <a
                                    className="template-button"
                                    href={template.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Ver demo
                                </a>
                            </div>
                        </motion.article>
                    ))}
                </motion.div>

                <p className="template-note">
                    * Las plantillas son conceptos desarrollados para portfolio y demostración.
                    No corresponden a negocios reales.
                </p>
            </Section>

            <Section
                number="04"
                title="Soluciones"
                description="La web se adapta a lo que necesitás para mostrar, vender o hacer crecer tu negocio."
            >
                <motion.div
                    className="capabilities"
                    variants={stagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                >
                    {capabilities.map((item) => (
                        <motion.div className="capability" variants={fadeUp} key={item.title}>
                            <h3 className="capability-title">{item.title}</h3>
                            <p className="capability-description">{item.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </Section>

            <Section number="05" title="Funcionalidades">
                <motion.div
                    className="features"
                    variants={stagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                >
                    {features.map((feature) => (
                        <motion.span className="feature" variants={fadeUp} key={feature}>
                            {feature}
                        </motion.span>
                    ))}
                </motion.div>
            </Section>

            <Section
                number="06"
                title="Rubros"
                description="Trabajo con distintos tipos de negocios y proyectos. La web se arma según lo que necesites."
            >
                <motion.div
                    className="industries"
                    variants={stagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                >
                    {industries.map((industry) => (
                        <motion.span className="industry" variants={fadeUp} key={industry}>
                            {industry}
                        </motion.span>
                    ))}
                </motion.div>
            </Section>

            <Section
                number="07"
                title="Proceso"
                description="Una forma simple de llevar una idea hasta una web publicada."
            >
                <motion.div
                    className="process"
                    variants={stagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                >
                    {process.map((item) => (
                        <motion.div className="process-item" variants={fadeUp} key={item.number}>
                            <span className="process-number">{item.number}</span>
                            <h3 className="process-title">{item.title}</h3>
                            <p className="process-description">{item.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </Section>

            <Section number="08" title="Sobre mí">
                <div className="about">
                    <p className="about-text">{about.text}</p>

                    <div className="about-meta">
                        {about.meta.map((item) => (
                            <span key={item}>{item}</span>
                        ))}
                    </div>
                </div>
            </Section>

            <Section number="10" title="Formación">
                <div className="education">
                    <div className="education-item">
                        <div>
                            <h3 className="education-title">{education.title}</h3>
                            <p className="education-place">{education.place}</p>
                        </div>

                        <span className="education-date">{education.date}</span>
                    </div>
                </div>
            </Section>

            <motion.section
                id="contacto"
                className="contact"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                variants={fadeUp}
            >
                <div className="contact-label">¿Tenés un proyecto?</div>

                <h2 className="contact-title">Hagamos algo para tu negocio.</h2>

                <p className="contact-description">
                    Contame qué necesitás y vemos cómo convertir la idea en una web.
                </p>

                <div className="contact-actions">
                    <a href={`mailto:${header.email}`} className="btn btn-primary">
                        Enviar email
                    </a>

                    <a
                        href={`https://wa.me/${header.whatsapp}`}
                        target="_blank"
                        rel="noreferrer"
                        className="btn"
                    >
                        WhatsApp
                    </a>
                </div>
            </motion.section>

            <footer>
                <span>© 2026 {header.name}</span>

                <div className="footer-links">
                    <a href={`mailto:${header.email}`}>Email</a>
                    <a href={header.github} target="_blank" rel="noreferrer">
                        GitHub
                    </a>
                </div>
            </footer>
        </main>
    );
}