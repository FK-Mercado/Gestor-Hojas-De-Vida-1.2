const url = "http://localhost:3000/users";

const $user = document.getElementById("name");
const $document = document.getElementById("document");
const $email = document.getElementById("email");
const $password = document.getElementById("password");
const $role = document.getElementById("role");
const $register = document.getElementById("btn-register");

async function registerUser() {
    const register = {
    user: $user.value,
    email: $email.value,
    document: $document.value,
    password: $password.value,
    role: $role.value,
    };

    if (
    register.user === "" ||
    register.email === "" ||
    register.document === "" ||
    register.password === ""
    ) {
        alert("completa todos los campos");
        return;
    };

    const reco = await fetch(url);
    const findUser = await reco.json();

    const exist = findUser.some(
    (i) =>
        i.user === register.user ||
        i.email === register.email ||
        i.document === register.document
    );

    if (exist) {
        alert("los datos ingresados ya se encuentras registrados por otro usuario");
        return;
    };

    if (!/^\S+@\S+\.\S+$/.test(register.email)) {
        alert("Por favor, ingresa un correo electrónico válido.");
        return;
    };

    const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(register),
    });

    if (response.ok) {
        alert("Registro exitoso");
        } else {
        alert("Intentelo de nuevo por favor");
    };

    $user.value = "";
    $email.value = "";
    $document.value = "";
    $password.value = "";
    console.log("ya");
};

export function init(){
    $register.addEventListener("click", async (e) => {
    e.preventDefault(); //prevents the page from reloading if it is in a form
    await registerUser();
    location.hash = "#/dashboard";
    });
    console.log("register");
};
