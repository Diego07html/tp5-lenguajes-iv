import React, { useEffect, useState } from "react";

function API() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://api.open-meteo.com/v1/forecast?latitude=-24.7859&longitude=-65.4117&current_weather=true")
      .then((res) => res.json())
      .then((info) => setData(info.current_weather))
      .catch((err) => console.error("Error al obtener los datos:", err));
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Datos del Clima en Salta</h2>
      {data ? (
        <div style={{
          display: "inline-block",
          padding: "20px",
          borderRadius: "10px",
          backgroundColor: "#f2f2f2",
          boxShadow: "0 4px 8px rgba(0,0,0,0.2)"
        }}>
          <img 
            src="https://cdn-icons-png.flaticon.com/512/1163/1163661.png" 
            alt="Clima" 
            style={{ width: "100px", marginBottom: "10px" }} 
          />
          <p><strong>Temperatura:</strong> {data.temperature} °C</p>
          <p><strong>Velocidad del viento:</strong> {data.windspeed} km/h</p>
          <p><strong>Dirección del viento:</strong> {data.winddirection}°</p>
          <p><strong>Hora de actualización:</strong> {data.time}</p>
        </div>
      ) : (
        <p>Cargando datos del clima...</p>
      )}
    </div>
  );
}

export default API;