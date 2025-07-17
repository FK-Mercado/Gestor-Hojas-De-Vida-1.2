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