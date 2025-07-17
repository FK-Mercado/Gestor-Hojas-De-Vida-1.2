
import { auth } from "../router/auth.js";
import { api } from "../js/api.js";

export function init() {
    console.log("register.js -> init() loaded");

    //Get data from the register-form
    const nombre = document.getElementById("nombre").value.trim();
  const documento = document.getElementById("documento").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const contrasena = document.getElementById("contrasena").value.trim();

    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        console.log("Submit event triggered");

        //convert to js-object the register-form to send to the api
        const newUser = {
            name: nameInput.value.trim(),
            username: usernameInput.value.trim(),
            email: emailInput.value.trim(),
            phone: passwordInput.value.trim(),
            password: passwordVerifyInput.value,
            role: "user"
        };

        try {
            const users = await api.get("users");

            const usernameExists = users.some(u => u.username.toLowerCase() === newUser.username.toLowerCase());
            const emailExists = users.some(u => u.email.toLowerCase() === newUser.email.toLowerCase());

            //verify if username already exists
            if (usernameExists) {
                alert("Username already exists.");
                return;
            }

            //verify if mail already exists
            if (emailExists) {
                alert("Email already exists.");
                return;
            }

            //create a false token
            const user = await api.post("users", newUser);
            const fakeToken = `${user.username}-${Date.now()}`;

            //save false-token in LS, and send user to dashboard
            auth.login(fakeToken, user);
            alert("Registration successful!");
            location.hash = "#/dashboard";

        } catch (error) {
            console.error("Registration error:", error);
            alert("Error during registration. Try again.");
        }
    });

    goToLogin?.addEventListener("click", (e) => {
        e.preventDefault();
        location.hash = "#/login";
    });
}


//Funcionalidad del Register.

//Importamos las funciones de api.
import { api } from '../js/api.js';

export function innit () {
  const form = document.getElementById('formRegistroUsuario');
  const $nameInput = document.getElementById('nombre');
  const $idNumberInput = document.getElementById('documento');
  const $emailInput = document.getElementById('correo');
  const $passwordInput = document.getElementById('contrasena');

  
  $idNumberInput.addEventListener('input', () => {
    $idNumberInput.value = $idNumberInput.value.replace(/\D/g, '');
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = $nameInput.value.trim();
    const idNumber = $idNumberInput.value.trim();
    const email = $emailInput.value.trim();
    const password = $passwordInput.value;

    if (!name || !idNumber || !email || !password) {
      alert("Por favor, complete todos los campos.");
      return;
    }

    if (!/^\d+$/.test(idNumber)) {
      alert("El campo documento debe contener solo números.");
      return;
    }

    const newUser = {
      name,
      idNumber,
      email,
      password
    };

    try {
      const users = await api.getAdmin('users');
      const userExist = users.find((u) => u.email.toLowerCase() === newUser.email.toLowerCase());

      if (userExist) {
        alert("El usuario ya se encuentra registrado. Por favor ingrese desde el login");
        location.hash = '#/login';
        return;
      };

      await api.post('users', newUser);
      
      alert("El usuario ha sido registrado correctamente");
      location.hash = '#/login';


    } catch (error) {
      console.log("register error:", error);
      alert("Falla en el Register, por favor intente más tarde");
    };

    document.getElementById('btn-register').onclick = async e => {
      e.preventDefault();
      location.hash = '#/login';
    };
  }
)};


import { auth } from "../router/auth.js";
import { api } from "../js/api.js";

export function init() {
    console.log("register.js -> init() loaded");

    //Get data from the register-form
    const nombre = document.getElementById("nombre").value.trim();
  const documento = document.getElementById("documento").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const contrasena = document.getElementById("contrasena").value.trim();

    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        console.log("Submit event triggered");

        //convert to js-object the register-form to send to the api
        const newUser = {
            name: nameInput.value.trim(),
            username: usernameInput.value.trim(),
            email: emailInput.value.trim(),
            phone: passwordInput.value.trim(),
            password: passwordVerifyInput.value,
            role: "user"
        };

        try {
            const users = await api.get("users");

            const usernameExists = users.some(u => u.username.toLowerCase() === newUser.username.toLowerCase());
            const emailExists = users.some(u => u.email.toLowerCase() === newUser.email.toLowerCase());

            //verify if username already exists
            if (usernameExists) {
                alert("Username already exists.");
                return;
            }

            //verify if mail already exists
            if (emailExists) {
                alert("Email already exists.");
                return;
            }

            //create a false token
            const user = await api.post("users", newUser);
            const fakeToken = `${user.username}-${Date.now()}`;

            //save false-token in LS, and send user to dashboard
            auth.login(fakeToken, user);
            alert("Registration successful!");
            location.hash = "#/dashboard";

        } catch (error) {
            console.error("Registration error:", error);
            alert("Error during registration. Try again.");
        }
    });

    goToLogin?.addEventListener("click", (e) => {
        e.preventDefault();
        location.hash = "#/login";
    });
}


