// src/logic/register.js

const API_URL = "http://localhost:3000/usuarios"; // Ajusta si tu endpoint cambia

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formRegistroUsuario");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const documento = document.getElementById("documento").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const contrasena = document.getElementById("contrasena").value;

    // Validar si ya existe ese usuario por documento o correo
    try {
      const res = await fetch(`${API_URL}?documento=${documento}`);
      const usuariosExistentes = await res.json();

      if (usuariosExistentes.length > 0) {
        alert("Ya existe un usuario con ese documento.");
        return;
      }

      // Registro
      const nuevoUsuario = {
        nombre,
        documento,
        correo,
        contrasena,
        rol: "estudiante" // Por defecto
      };

      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(nuevoUsuario),
      });

      if (!response.ok) throw new Error("Error al registrar usuario");

      alert("¡Registro exitoso!");
      window.location.href = "login.html";
    } catch (error) {
      console.error("Error:", error);
      alert("Ocurrió un error al registrar.");
    }
  });
});