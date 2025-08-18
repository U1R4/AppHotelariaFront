import Form from "../components/Form.js";
import Navbar from "../components/Navbar.js";

export default function renderRegisterPage() {
 const nav = document.getElementById('navbar');
    nav.innerHTML = '';
        
    const navbar = Navbar();
    nav.appendChild(navbar);

    const formulario = Form();
    const div = Form();

    const btnAuth = formulario.querySelector('button');
    btnAuth.textContent = 'Cadastrar';
    btnAuth.style.fontSize = '12px';

    const nome = document.createElement('input');
    nome.type = 'text';
    nome.placeholder = "Digite seu nome";
    formulario.prepend(nome);

    const conSenha = document.createElement('input');
    conSenha.type = 'password';
    conSenha.placeholder = "Confirme sua senha";
    formulario.appendChild(conSenha);

    const linkVoltar = document.createElement('a');
    linkVoltar.textContent = "Voltar a login";
    linkVoltar.className = '';
    linkVoltar.href = 'login.html';
    linkVoltar.style.textAlign = 'center';
    linkVoltar.style.fontSize = '12px';
    linkVoltar.style.margin = '15px';
    
    container.appendChild(formulario);
    container.appendChild(linkVoltar);
    formulario.appendChild(btnAuth);
}