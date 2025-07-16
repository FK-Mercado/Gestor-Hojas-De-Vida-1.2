import { routePath } from "./routes.js";
import { auth } from "./auth.js";

export async function renderRoute() {
    //get path, and replace the '#' for an '/'
    const path = location.hash.slice(1) || "/";
    const app = document.getElementById("app");
    const isAuth = auth.isAuthenticated();

    // redirection if login
    if (isAuth && (path === "/login" || path === "/register" || path ==="/")) {
        location.hash = "#/dashboard";
        return;
    }

    if (!isAuth && path === "/dashboard") {
        location.hash = "#/";
        return;
    }
 
    // not-found
    const route = routePath[path] || routePath["*"];
    if (!route) {
        location.hash = "*";
        return;
    }

    // render view
    app.innerHTML = route.view;

    if (route.logic) {
        const module = await route.logic();
        requestAnimationFrame(() => {
            try {
                module.init?.();
            } catch (e) {
                console.error("Error loading route logic:", e);
            }
        });
    }
}