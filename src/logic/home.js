export function init() {
        
    // Header buttons
    const btnLoginHeader = document.getElementById("go-to-login");
    const btnRegisterHeader = document.getElementById("go-to-register");

    // CTA buttons
    const btnLoginCTA = document.getElementById("cta-login");
    const btnRegisterCTA = document.getElementById("cta-register");

    // Navigation logic
    btnLoginHeader?.addEventListener("click", () => {
        location.hash = "#/login";
    });

    btnRegisterHeader?.addEventListener("click", () => {
        location.hash = "#/register";
    });

    btnLoginCTA?.addEventListener("click", () => {
        location.hash = "#/login";
    });

    btnRegisterCTA?.addEventListener("click", () => {
        location.hash = "#/register";
    });
}
