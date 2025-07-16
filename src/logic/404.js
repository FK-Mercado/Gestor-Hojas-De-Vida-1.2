// views/404.js
export function init() {
    console.log("404 not_found-View loaded");

    const backHome = document.getElementById("back-home");
    backHome?.addEventListener("click", (e) => {
        e.preventDefault();
        location.hash = "#/";
    });
}