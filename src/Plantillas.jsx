import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { templates } from "./data";

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
    return (
        <main className="container">
            <motion.header
                className="templates-page-header"
                initial="hidden"
                animate="visible"
                variants={fadeUp}
            >
                <Link to="/" className="back-link">
                    Volver
                </Link>

                <h1 className="templates-page-title">Todas las plantillas</h1>

                <p className="templates-page-description">
                    Demos conceptuales creadas para distintos rubros y necesidades.
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

            <p className="template-note templates-page-note">
                * Las plantillas son conceptos desarrollados para portfolio y demostración.
                No corresponden a negocios reales.
            </p>
        </main>
    );
}