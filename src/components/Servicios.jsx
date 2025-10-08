import React from "react";
import habitacionSimple from "../assets/images/habitacion-simple.png";
import habitacionDoble from "../assets/images/habitacion-doble.png";
import suitePremium from "../assets/images/suite-premium.png";

function Servicios() {
  return (
    <div>
      <h2>Servicios - Habitaciones de Hotel</h2>
      <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
        
        <div className="card">
          <img src={habitacionSimple} alt="Habitación Simple" style={{ width: "100%", borderRadius: "8px" }} />
          <h3>Habitación Simple</h3>
          <p>Ideal para una persona, equipada con cama individual y escritorio.</p>
          <p><strong>$40 USD / noche</strong></p>
        </div>

        <div className="card">
          <img src={habitacionDoble} alt="Habitación Doble" style={{ width: "100%", borderRadius: "8px" }} />
          <h3>Habitación Doble</h3>
          <p>Perfecta para dos personas, cuenta con dos camas y TV.</p>
          <p><strong>$70 USD / noche</strong></p>
        </div>

        <div className="card">
          <img src={suitePremium} alt="Suite Premium" style={{ width: "100%", borderRadius: "8px" }} />
          <h3>Suite Premium</h3>
          <p>Habitación de lujo con jacuzzi, minibar y balcón privado.</p>
          <p><strong>$120 USD / noche</strong></p>
        </div>

      </div>
    </div>
  );
}

export default Servicios;

