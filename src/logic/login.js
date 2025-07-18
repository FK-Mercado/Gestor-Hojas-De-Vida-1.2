//Funcionalidad del Login.

//Importamos las funciones de api.
//Importamos las funciones de autenticación.
const url = "http://localhost:3000/users";


const $entrar = document.getElementById('login-form');
const $correo = document.getElementById('login-email');
const $contra = document.getElementById('login-password');

const save = JSON.parse(localStorage.getItem("usuarioLogueado"));
if (save) {
    redirigirPorRol (save.rol);
}

async function login() {

    if ($correo.value === "" || $contra.value === "") {
        alert("Por favor, completa todos los campos.");
        return; // Evita que siga ejecutando si están vacíos
    };

    const busca = await fetch(`${url}?correo=${$correo.value.trim()}`);
    const sultado = await busca.json();

    if (sultado.length === 0) {
        alert("Este usuario no existe, por favor regístrese");

    } else {
        if (sultado[0].contrasena === $contra.value.trim()) {
            localStorage.setItem("coder", JSON.stringify(sultado[0]));
            alert("inicio de sesion correcto")
            redirigirPorRol(sultado.rol);
        } else {
            alert("contraseña incorrecta")
        };
    };
};

function redirigirPorRol(rol) {
  if(rol === "admin"){
    location.hash= "#/dashboard-admin";
  }else if(rol === "coder"){
    location.hash= "#/dashboard-coder";
  } else {
    alert("Rol no reconocido")
    }

}





export function init() {
    $entrar.addEventListener("click", function (i) {
        i.preventDefault();
        login();

    });
};
