// src/logic/register.js

const API_URL = "http://localhost:3000/usuarios"; // Ajusta si tu endpoint cambia

document.getElementById("formRegistroUsuario").addEventListener("submit", async (e) => {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const documento = document.getElementById("documento").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const contrasena = document.getElementById("contrasena").value.trim();

  const nuevoUsuario = {
    nombre,
    documento,
    correo,
    contrasena
  };

  try {
    const respuesta = await fetch("http://localhost:3000/usuarios", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(nuevoUsuario)
    });

    if (!respuesta.ok) {
      throw new Error("Error al registrar usuario");
    }

    alert("¡Usuario registrado con éxito!");
    document.getElementById("formRegistroUsuario").reset();
  } catch (error) {
    console.error("Error al guardar usuario:", error);
    alert("Hubo un error al registrar. Intenta nuevamente.");
  }
});