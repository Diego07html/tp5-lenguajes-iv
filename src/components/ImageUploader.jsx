import { useState } from "react";

export default function ImageUploader() {
  const [preview, setPreview] = useState(null);
  const [meta, setMeta] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (!file) {
      setPreview(null);
      setMeta("");
      return;
    }

    if (!file.type.startsWith("image/")) {
      alert("Por favor selecciona un archivo de tipo imagen.");
      event.target.value = "";
      setPreview(null);
      setMeta("");
      return;
    }

    const sizeKB = (file.size / 1024).toFixed(1);
    setMeta(`Archivo: ${file.name} | Tamaño: ${sizeKB} KB | Tipo: ${file.type}`);

    const reader = new FileReader();
    reader.onload = (e) => {
      setPreview(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div style={{ textAlign: "center", padding: "30px" }}>
      <h1>Trabajo Práctico N°2 – Lenguajes IV</h1>
      <p>Selecciona una imagen para mostrarla:</p>

      <input type="file" accept="image/*" onChange={handleFileChange} />

      {meta && <p>{meta}</p>}

      {preview && (
        <div>
          <h3>Vista previa</h3>
          <img
            src={preview}
            alt="Vista previa"
            style={{ maxWidth: "400px", marginTop: "10px" }}
          />
        </div>
      )}
    </div>
  );
}
