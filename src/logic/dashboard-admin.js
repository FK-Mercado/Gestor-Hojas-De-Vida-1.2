import { api } from "../js/api";


const fotoInput = document.getElementById("foto");
const vistaPrevia = document.getElementById("vista-previa");


fotoInput.addEventListener("change", () => {
    const archivo = fotoInput.files[0];
    if (archivo) {
        const lector = new FileReader();
        lector.onload = () => {
            vistaPrevia.src = lector.result;
        };
        lector.readAsDataURL(archivo);
    }
});

// Guardar datos al servidor
function guardarDatos() {
  const lector = new FileReader();
  const archivo = fotoInput.files[0];

  if (!archivo) {
    alert("Por favor selecciona una imagen.");
    return;
  }

  lector.onload = () => {
    const datos = {
      nombre: nombreInput.value,
      edad: edadInput.value,
      perfil: perfilInput.value,
      foto: lector.result
    };

    fetch("http://localhost:3000/perfil")
      .then(res => res.json())
      .then(perfiles => {
        const id = perfiles.length ? perfiles[0].id : null;

        const metodo = id ? "PUT" : "POST";
        const url = id
          ? `http://localhost:3000/perfil/${id}`
          : "http://localhost:3000/perfil";

        fetch(url, {
          method: metodo,
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(datos)
        }).then(() => {
          mostrarDatos(datos);
          alert("Datos guardados exitosamente.");
        });
      });
  };

  lector.readAsDataURL(archivo);
}
