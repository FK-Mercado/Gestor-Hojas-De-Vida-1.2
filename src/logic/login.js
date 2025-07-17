//Funcionalidad del Login.

//Importamos las funciones de api.
//Importamos las funciones de autenticación.
import { auth } from '../router/auth.js';

export function init() {
    const form = document.getElementById('login-form');
    const emailInput = document.getElementById('login-email');
    const passwordInput = document.getElementById('login-password');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const email = emailInput.value.trim();
        const password = passwordInput.value;

        if (!email || !password) {
            alert("Por favor ingrese todos los datos correctamente")
            return;
        };

        try {
            const user = users.find((u) => u.email.toLowerCase() === email.toLowerCase());

            if (!user) {
                alert("El usuario no se encuentra");
                return;
            };

            if (user.password !== password) {
                alert("Contraseña incorrecta");
                return;
            };

            const fakeToken = `${user.username}-${Date.now()}`;
            auth.login(fakeToken, user);

            alert(`Bienvenido, ${user.username}!`);
            location.hash = "#/dashboard";

        } catch (error) {
            console.log("login error:", error);
            alert("Falla en el Login, por favor intente más tarde")
        };

    });

    document.getElementById('login-go-register').onclick = async e => {
        e.preventDefault();
        location.hash = '#/register';
    };
};
