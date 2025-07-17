//Funcionalidad del Register.

//Importamos las funciones de api.
import { api } from '../js/api.js';

export function innit () {
  const form = document.getElementById('formRegistroUsuario');
  const $nameInput = document.getElementById('nombre');
  const $idNumberInput = document.getElementById('documento');
  const $emailInput = document.getElementById('correo');
  const $passwordInput = document.getElementById('contrasena');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = $nameInput.value.trim();
    const idNumber = $idNumberInput.value.trim();
    const email = $emailInput.value.trim();
    const password = $passwordInput.value;

    const newUser = {
      name,
      idNumber,
      email,
      password
    };

    try {
      const users = await api.getAdmin('users');
      const user = users.find((u) => u.email.toLowerCase() === newUser.email.toLowerCase());

      if (user === newUser.email) {
        alert("El usuario ya se encuentra registrado. Por favor ingrese desde el login");
        location.hash = '#/login'
        return;
      };

      const 


    } catch (error) {
      console.log("register error:", error);
      alert("Falla en el Register, por favor intente más tarde")
    };
    
  );};
 }

