import renderLoginPage from "./pages/Login.js";
import renderRegisterPage from "./pages/Register.js"; 

const routes = {
    "/login": renderLoginPage,
    "/register": renderRegisterPage
};

function getPath() {
    const url = (location.hash || "").replace(/^#/, "").trim();
    return url && url.startsWith("/") ? url : "/login";
}

function renderRoutes() {
    const url = getPath();
    const render = routes[url] || routes["/login"];
    render();
}


window.addEventListener('hashchange', renderRoutes);

document.addEventListener('DOMContentLoaded', renderRoutes);