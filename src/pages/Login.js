import LoginForm from "../components/LoginForm.js";
 
export default function renderLoginPage() {
    const divRoot = document.getElementById('root');
    divRoot.innerHTML = '';
    const container = document.createElement('div');
    container.className = 'card p-4 shadow-lg';
    container.style.width = '100%';
    container.style.maxWidth = '400px';
    divRoot.appendChild(container);
    const formulario = LoginForm();
    container.appendChild(formulario);
}