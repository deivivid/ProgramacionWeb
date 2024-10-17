document.title = 'Iniciar Sesión';

//Crear el contenedor principal parra el formulario
const container = document.createElement('div');
container.style.margin = "20px";
document.body.appendChild(container);

//crear titulo
const title = document.createElement('h2');
title.textContent = 'Iniciar Sesión';
container.appendChild(title);

//crear formulario
const form = document.createElement('form');
container.appendChild(form);    

//crear campo de nombre de usuario 
const usernamelabel = document.createElement('label');
usernamelabel.textContent = 'Nombre de usuario';
const usernameInput = document.createElement('input');
usernameInput.type = 'text';
usernameInput.required = true;
form.appendChild(usernamelabel);
form.appendChild(usernameInput);

const br = document.createElement('br');
form.appendChild(br);

const passwordlabel = document.createElement('label');
passwordlabel.textContent = 'Contraseña de usuario';
const passwordInput = document.createElement('input');
passwordInput.type = 'text';
passwordInput.required = true;
form.appendChild(passwordlabel);
form.appendChild(passwordInput);

//crear boton de envio
const submitButton = document.createElement('button');
submitButton.textContent = 'Enviar';
submitButton.type = 'submit';

const message = document.createElement('p');
container.appendChild(form);
container.appendChild(message);

form.appendChild(submitButton);

//Datos de inicio de sesion predefinida
const validarUser = '1';
const validarPassword = '1';

//validar el nombre y la Contraseña
form.addEventListener('submit', (event) =>{
    event.preventDefault();

    //validar el nombre de y contraseña
    if((validarUser === usernameInput.value) && (validarPassword === passwordInput.value)){
        message.textContent = 'Bienvenido :)))'
        message.style.color = 'green'
        alert('todo chido')
        usernameInput.value='';
        passwordInput.value='';

    } else{
        message.textContent = 'ohno :(('
        message.style.color = 'red'
        alert('todo chidont :(');
    }
    

});



