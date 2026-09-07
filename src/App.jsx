import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import "./App.css";
import Plantillas from "./Plantillas";
import { LanguageProvider } from "./LanguageContext";

export default function App() {
    return (
        <LanguageProvider>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/plantillas" element={<Plantillas />} />
            </Routes>
        </LanguageProvider>
    );
}