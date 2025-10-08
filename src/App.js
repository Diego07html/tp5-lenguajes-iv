import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Inicio from "./pages/Inicio";
import Servicios from "./components/Servicios";
import Contacto from "./pages/Contacto";
import API from "./pages/API";

function App() {
  return (
    <Router>
      <div>
        {/* Barra de navegación */}
        <Navbar />

        {/* Contenido principal */}
        <div style={{ padding: "20px", textAlign: "center" }}>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/api" element={<API />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
