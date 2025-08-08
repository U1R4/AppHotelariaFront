export default function LoginForm(){
    const formulario = document.createElement('form');
 
    const email = document.createElement('input');
    email.type = 'email';
    email.placeholder = "Digite seu e-mail";
    formulario.appendChild(email);

 
    const senha = document.createElement('input');
    senha.type = 'password';
    senha.placeholder = "Digite sua senha";
    formulario.appendChild(senha);
 
    const btnentrar = document.createElement('button');
    btnentrar.type = 'submit';
    btnentrar.textContent = "Entrar";
    formulario.appendChild(btnentrar);

    return formulario;
}   