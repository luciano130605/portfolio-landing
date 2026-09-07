import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { templates } from "./data";
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

export default function Plantillas() {
    const { language } = useLanguage();
    const t = (value) => tr(value, language);

    return (
        <main className="container">
            <motion.header
                className="templates-page-header"
                initial="hidden"
                animate="visible"
                variants={fadeUp}
            >
                <div className="templates-page-top">
                    <Link to="/" className="back-link">
                        {t(ui.templatesPage.back)}
                    </Link>

                    <LanguageToggle />
                </div>

                <h1 className="templates-page-title">{t(ui.templatesPage.title)}</h1>

                <p className="templates-page-description">
                    {t(ui.templatesPage.description)}
                </p>

                <div className="header-line" />
            </motion.header>

            <motion.div
                className="templates"
                variants={stagger}
                initial="hidden"
                animate="visible"
            >
                {templates.map((template) => (
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

            <p className="template-note templates-page-note">
                {t(ui.sections.plantillas.note)}
            </p>
        </main>
    );
}