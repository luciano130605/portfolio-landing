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
import { useLanguage } from "./LanguageContext";
import { tr, ui } from "./translations";
import LanguageToggle from "./LanguageToggle";

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
    const { language } = useLanguage();
    const t = (value) => tr(value, language);

    const previewTemplates = templates.slice(0, TEMPLATES_PREVIEW_COUNT);
    const hasMoreTemplates = templates.length > TEMPLATES_PREVIEW_COUNT;

    return (
        <main className="container">
            <motion.header initial="hidden" animate="visible">
                <motion.div className="top" variants={fadeUp}>
                    <div>
                        <h1 className="name">{header.name}</h1>
                    </div>

                    <LanguageToggle />
                </motion.div>

                <motion.h2 className="headline" variants={fadeUp}>
                    {t(header.headline)} <span>{t(header.headlineAccent)}</span>
                </motion.h2>

                <motion.p className="intro" variants={fadeUp}>
                    {t(header.intro)}
                </motion.p>

                <motion.div className="header-actions" variants={fadeUp}>
                    <a href="#proyectos" className="btn btn-primary">
                        {t(ui.header.verTrabajos)}
                    </a>
                    <a href="#contacto" className="btn">
                        {t(ui.header.contactarme)}
                    </a>
                </motion.div>

                <motion.div className="header-meta" variants={fadeUp}>
                    <span>{t(header.location)}</span>
                    <span>{t(header.area)}</span>
                </motion.div>

                <div className="header-line" />
            </motion.header>

            <Section
                number="01"
                title={t(ui.sections.queHago.title)}
                description={t(ui.sections.queHago.description)}
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
                            <h3 className="service-title">{t(service.title)}</h3>
                            <p className="service-description">{t(service.description)}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </Section>

            <Section
                number="02"
                title={t(ui.sections.proyectos.title)}
                id="proyectos"
                description={t(ui.sections.proyectos.description)}
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
                                    <span className="project-status">{t(project.status)}</span>
                                </div>

                                <p className="project-description">{t(project.description)}</p>
                            </div>

                            <a href={project.link} className="project-link">
                                {t(ui.sections.proyectos.verProyecto)}
                            </a>
                        </motion.article>
                    ))}
                </motion.div>
            </Section>

            <Section
                number="03"
                title={t(ui.sections.plantillas.title)}
                description={t(ui.sections.plantillas.description)}
                action={
                    hasMoreTemplates && (
                        <Link to="/plantillas" className="ver-todos-link">
                            {t(ui.sections.plantillas.verTodas)}
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
                                    alt={`Preview de ${t(template.name)}`}
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
                                            {t(template.name)}
                                        </h3>

                                        <p className="template-category">
                                            {t(template.category)}
                                        </p>
                                    </div>
                                </div>

                                <a
                                    className="template-button"
                                    href={template.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {t(ui.sections.plantillas.verDemo)}
                                </a>
                            </div>
                        </motion.article>
                    ))}
                </motion.div>

                <p className="template-note">{t(ui.sections.plantillas.note)}</p>
            </Section>

            <Section
                number="04"
                title={t(ui.sections.soluciones.title)}
                description={t(ui.sections.soluciones.description)}
            >
                <motion.div
                    className="capabilities"
                    variants={stagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                >
                    {capabilities.map((item) => (
                        <motion.div className="capability" variants={fadeUp} key={t(item.title)}>
                            <h3 className="capability-title">{t(item.title)}</h3>
                            <p className="capability-description">{t(item.description)}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </Section>

            <Section number="05" title={t(ui.sections.funcionalidades.title)}>
                <motion.div
                    className="features"
                    variants={stagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                >
                    {features.map((feature) => (
                        <motion.span className="feature" variants={fadeUp} key={t(feature)}>
                            {t(feature)}
                        </motion.span>
                    ))}
                </motion.div>
            </Section>

            <Section
                number="06"
                title={t(ui.sections.rubros.title)}
                description={t(ui.sections.rubros.description)}
            >
                <motion.div
                    className="industries"
                    variants={stagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                >
                    {industries.map((industry) => (
                        <motion.span className="industry" variants={fadeUp} key={t(industry)}>
                            {t(industry)}
                        </motion.span>
                    ))}
                </motion.div>
            </Section>

            <Section
                number="07"
                title={t(ui.sections.proceso.title)}
                description={t(ui.sections.proceso.description)}
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
                            <h3 className="process-title">{t(item.title)}</h3>
                            <p className="process-description">{t(item.description)}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </Section>

            <Section number="08" title={t(ui.sections.sobreMi.title)}>
                <div className="about">
                    <p className="about-text">{t(about.text)}</p>

                    <div className="about-meta">
                        {about.meta.map((item) => (
                            <span key={t(item)}>{t(item)}</span>
                        ))}
                    </div>
                </div>
            </Section>

            <Section number="10" title={t(ui.sections.formacion.title)}>
                <div className="education">
                    <div className="education-item">
                        <div>
                            <h3 className="education-title">{t(education.title)}</h3>
                            <p className="education-place">{t(education.place)}</p>
                        </div>

                        <span className="education-date">{t(education.date)}</span>
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
                <div className="contact-label">{t(ui.contact.label)}</div>

                <h2 className="contact-title">{t(ui.contact.title)}</h2>

                <p className="contact-description">{t(ui.contact.description)}</p>

                <div className="contact-actions">
                    <a href={`mailto:${header.email}`} className="btn btn-primary">
                        {t(ui.contact.sendEmail)}
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
                    <a href={`mailto:${header.email}`}>{t(ui.footer.email)}</a>
                    <a href={header.github} target="_blank" rel="noreferrer">
                        GitHub
                    </a>
                    <a href={header.portfolio} target="_blank" rel="noreferrer">
                        Portfolio
                    </a>
                </div>
            </footer>
        </main>
    );
}