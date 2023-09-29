// Obtener el elemento de entrada y el párrafo para mostrar el mensaje
const correoInput = document.getElementById('email');
const mensaje = document.getElementById('mensaje');

// Función para validar el correo electrónico
function validarCorreo() {
    const correo = correoInput.value;

    if (correo.includes('@')) {
        mensaje.textContent = 'Correo electrónico válido.';
        mensaje.style.color = 'green';
    } else {
        mensaje.textContent = 'El correo electrónico debe contener el símbolo @.';
        mensaje.style.color = 'red';
    }
}

// Se agregar un event listener al campo de entrada
correoInput.addEventListener('input', validarCorreo);

//--------------------Codigo de Carito para validar campos del formulario---------------------
// const formularioContacto = document.querySelector('#formularioContacto');

// formularioContacto.addEventListener('keyup', (e) => {
//     e.preventDefault()
//     const nombre = document.querySelector('#name').value
//     const apellido = document.querySelector('#lastName').value
//     const email = document.querySelector('#email').value
//     const comentario = document.querySelector('#message').value
//         //Según el requerimiento "Tiene funciones de JavaScript de validaciones adecuadas para los datos introducidos" se valida, aunque con el required en HTML no deja enviar valores vacíos.
//     if (!nombre || !apellido || !email || !comentario) {
//         alert('Por favor, completa todos los campos.');
//         return;
//     }
//     // alert(`Tu mensaje se envió con éxito`)
//     const Mensajes = JSON.parse(localStorage.getItem('mensajes')) || [];
//     Mensajes.push({ nombre: nombre, apellido: apellido, email: email, comentario: comentario });
//     localStorage.setItem('mensajes', JSON.stringify(Mensajes));
//     limpiarCampos();
// })

// function limpiarCampos() {
//     document.getElementById("name").value = "";
//     document.getElementById("lastName").value = "";
//     document.getElementById("email").value = "";
//     document.getElementById("message").value = "";
// }

//------------Codigo de Alejo para validar el campo de correo electronico----------------------

// function validarCorreo() {
//     var correoInput = document.getElementById("email");
//     var correo = correoInput.value;
//     var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

//     if (!regex.test(correo)) {
//         document.getElementById("error-correo").textContent = "Ingrese un correo electrónico válido.";
//         return false;
//     }

//     document.getElementById("name").value = "";
//     document.getElementById("lastName").value = "";
//     document.getElementById("email").value = "";
//     document.getElementById("message").value = "";

//     return true;
// }

//------------------------------------