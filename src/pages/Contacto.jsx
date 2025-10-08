import { useState } from "react";
import emailjs from "emailjs-com";

export default function Contacto() {
  const [form, setForm] = useState({ nombre: "", correo: "", mensaje: "" });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.nombre || !form.correo || !form.mensaje) {
      alert("Todos los campos son obligatorios.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(form.correo)) {
      alert("Correo inválido.");
      return;
    }

    emailjs
      .send(
        "service_7pilp08",   // ✅ Tu Service ID
        "template_ybypymj",  // ✅ Tu Template ID
        form,
        "ExU4wgzcIbAbJB8A4"  // ✅ Tu Public Key
      )
      .then(() => {
        setEnviado(true);
        setForm({ nombre: "", correo: "", mensaje: "" });
      })
      .catch((err) => {
        console.error(err);
        alert("Hubo un error al enviar el correo.");
      });
  };

  return (
    <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
      {/* Formulario */}
      <div style={{ flex: 1 }}>
        <h2>Contacto</h2>
        {enviado && <p style={{ color: "green" }}>✅ Correo enviado correctamente</p>}

        <form onSubmit={handleSubmit}>
          <div>
            <label>Nombre:</label><br />
            <input
              type="text"
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Correo:</label><br />
            <input
              type="email"
              name="correo"
              value={form.correo}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Mensaje:</label><br />
            <textarea
              name="mensaje"
              value={form.mensaje}
              onChange={handleChange}
            />
          </div>

          <button type="submit" style={{ marginTop: "10px" }}>Enviar</button>
        </form>
      </div>

      {/* Mapa */}
      <div style={{ flex: 1 }}>
        <h3>Ubicación</h3>
        <iframe
          title="mapa"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3550.2500000000005!2d-65.4101234!3d-24.7891234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941bc123456789%3A0xabcdef123456789!2sUniversidad+Catolica+de+Salta!5e0!3m2!1ses!2sar!4v1700000000000"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
