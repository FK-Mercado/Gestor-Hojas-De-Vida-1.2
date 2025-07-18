// //Funcionalidad del Register.

// //Importamos las funciones de api.
const url = "http://localhost:3000/users"

console.log("punto1")

const $user = document.getElementById("nombre");
const $email = document.getElementById("correo");
const $cedula = document.getElementById("documento");
const $password = document.getElementById("contrasena");
const $register = document.getElementById("btn-register")
console.log("data")

async function registerUser() {

  const registrar = {
    usuario: $user.value,
    correo: $email.value,
    documento: $cedula.value,
    contrasena: $password.value,
    rol: "coder"
  }

  console.log()
  if (
    registrar.usuario === "" ||
    registrar.correo === "" ||
    registrar.documento === "" ||
    registrar.contrasena === ""
  ) {
    alert("completa todos los campos");
    return;
  }

  const reco = await fetch(url);
  const buscaUsuario = await reco.json();

  const existe = buscaUsuario.some(
    (i) =>
      i.usuario === registrar.usuario ||
      i.correo === registrar.correo ||
      i.documento === registrar.documento

  );

  if (existe) {
    alert("los datos ingresados ya se encuentras registrados por otro usuario")
    return;
  }

  if (!/^\S+@\S+\.\S+$/.test(registrar.correo)) {
    alert("Por favor, ingresa un correo electrónico válido.");
    return;
  }

  const responde = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(registrar)
  });

  if (responde.ok) {
    alert("Registro exitoso")

  } else {
    alert("Intentelo de nuevo por favor")
  }

  $user.value = "";
  $email.value = "";
  $cedula.value = "";
  $password.value = "";
  console.log("ya")
};

export function init() {
  $register.addEventListener("click", async (e) => {
    e.preventDefault();            //prevents the page from reloading if it is in a form
    await registerUser();
    location.hash="#/login";
  })
  console.log("register")
};

