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
