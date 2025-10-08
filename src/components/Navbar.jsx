import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const navStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "30px",
    padding: "15px",
    backgroundColor: "#0077b6",
    color: "white",
    fontSize: "18px",
    fontWeight: "bold",
    textDecoration: "none",
    listStyle: "none",
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    transition: "0.3s",
  };

  const linkHover = (e, hover) => {
    e.target.style.color = hover ? "#90e0ef" : "white";
  };

  return (
    <nav style={navStyle}>
      <Link
        to="/"
        style={linkStyle}
        onMouseEnter={(e) => linkHover(e, true)}
        onMouseLeave={(e) => linkHover(e, false)}
      >
        Inicio
      </Link>

      <Link
        to="/servicios"
        style={linkStyle}
        onMouseEnter={(e) => linkHover(e, true)}
        onMouseLeave={(e) => linkHover(e, false)}
      >
        Servicios
      </Link>

      <Link
        to="/contacto"
        style={linkStyle}
        onMouseEnter={(e) => linkHover(e, true)}
        onMouseLeave={(e) => linkHover(e, false)}
      >
        Contacto
      </Link>

      <Link
        to="/api"
        style={linkStyle}
        onMouseEnter={(e) => linkHover(e, true)}
        onMouseLeave={(e) => linkHover(e, false)}
      >
        API
      </Link>
    </nav>
  );
}

export default Navbar;
