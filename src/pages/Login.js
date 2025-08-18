import Form from "../components/Form.js";
import Navbar from "../components/Navbar.js";
 
export default function renderLoginPage() {
    const nav = document.getElementById('navbar');
    nav.innerHTML = '';
    
    const navbar = Navbar();
    nav.appendChild(navbar);

    const divRoot = document.getElementById('root');
    divRoot.innerHTML = '';

    const titulo = document.createElement('h1');
    titulo.textContent = 'Faça o login';
    titulo.className = 'titulo';
    titulo.style.textAlign = 'center';
    titulo.style.marginBottom = '25px'; 

    const container = document.createElement('div');
    container.className = 'card p-4 shadow-lg';
    container.style.width = '100%';
    container.style.maxWidth = '400px';

    divRoot.appendChild(container);
    const formulario = Form();

    const linkVoltar = document.createElement('a');
    linkVoltar.textContent = "Não tem uma conta? Cadastra-se";
    linkVoltar.className = '';
    linkVoltar.href = 'login.html';
    linkVoltar.style.textAlign = 'center';
    linkVoltar.style.margin = '10px';

    container.appendChild(titulo); 
    container.appendChild(formulario);
    container.appendChild(linkVoltar);
}