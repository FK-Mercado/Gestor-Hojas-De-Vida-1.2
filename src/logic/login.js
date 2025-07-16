//Funcionalidad del Login.

//Importamos las funciones de api.
import { api } from '../js/api.js';
//Importamos las funciones de autenticación.
import { auth } from '../router/auth.js';

export async function login() {
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
            const users = await api.get('users');
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

            alert()

        } catch (error) {
            console.log("login error:", error);
            alert("falla en el Login, por favor intente más tarde")
        }

    });

    document.getElementById('go-to-resgister').onclick = async e => {
        e.preventDefault();
        location.hash = '#/register';
    }
};


            //alert
            alert(Welcome, ${user.username}!);
            location.hash = "#/dashboard";
        } catch (error) {
            console.error("login error:", error);
            alert("Login failed. Please try again later.");
        }
    });

    goToRegister?.addEventListener("click", (e) => {
        e.preventDefault();
        location.hash = "#/register";
    });
}