 
import Form from "../components/Form.js";
import Navbar from "../components/Navbar.js";

export default function renderRegisterPage() {
    const nav = document.getElementById('navbar');
    nav.innerHTML = '';
        
    const navbar = Navbar();
    nav.appendChild(navbar);

    const formulario = Form();

    const titulo = formulario.querySelector('h1');
    titulo.textContent = "Cadastre-se";
<<<<<<< Updated upstream
<<<<<<< Updated upstream
=======
=======

    const contentForm = formulario.querySelector('form');
>>>>>>> Stashed changes

    const contentForm = formulario.querySelector('form');
>>>>>>> Stashed changes

    const btnRegister = formulario.querySelector('button');
    btnRegister.textContent = 'Cadastrar';

    const linkVoltar = document.querySelector('a');
    linkVoltar.textContent = 'Voltar a login'

    const contentForm = formulario.querySelector('form');

    //Novos Elementos
    const nome = document.createElement('input');
    nome.type = 'text';
    nome.placeholder = "Digite seu nome";

    const inputEmail = formulario.querySelector('input[type="email"]');
<<<<<<< Updated upstream
<<<<<<< Updated upstream
    contentForm.insertBefore(nome, inputEmail);
=======

    contentForm.insertBefore(nome, inputEmail);

>>>>>>> Stashed changes
=======

    contentForm.insertBefore(nome, inputEmail);

>>>>>>> Stashed changes

    const conSenha = document.createElement('input');
    conSenha.type = 'password';
    conSenha.placeholder = "Confirme sua senha";
<<<<<<< Updated upstream
<<<<<<< Updated upstream

    contentForm.insertBefore(conSenha, contentForm.children[3]);


=======
    
    contentForm.insertBefore(conSenha, contentForm.children[3])

=======
    
    contentForm.insertBefore(conSenha, contentForm.children[3])

>>>>>>> Stashed changes

    const btnRegister =formulario.querySelector('button');
    btnRegister.textContent = "Criar conta";
    
    
    const linkVoltar = document.createElement('a');
    linkVoltar.textContent = "Voltar a login";
    linkVoltar.className = '';
    linkVoltar.href = 'login.html';
    linkVoltar.style.textAlign = 'center';
    linkVoltar.style.fontSize = '12px';
    linkVoltar.style.margin = '15px';

    contentForm.appendChild(linkVoltar);
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
}