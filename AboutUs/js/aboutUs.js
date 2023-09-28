const formularioContacto = document.querySelector('#formularioContacto');

formularioContacto.addEventListener('submit', (e) => {
    e.preventDefault()
    const nombre = document.querySelector('#name').value
    const apellido = document.querySelector('#lastName').value
    const email = document.querySelector('#email').value
    const comentario = document.querySelector('#message').value
    //Según el requerimiento "Tiene funciones de JavaScript de validaciones adecuadas para los datos introducidos" se valida, aunque con el required en HTML no deja enviar valores vacíos.
    if (!nombre || !apellido || !email || !comentario) {
        alert('Por favor, completa todos los campos.');
        return;
    }
    alert(`Tu mensaje se envió con éxito`)
    const Mensajes = JSON.parse(localStorage.getItem('mensajes')) || [];
    Mensajes.push({nombre: nombre, apellido: apellido, email: email, comentario: comentario});
    localStorage.setItem('mensajes', JSON.stringify(Mensajes));
    limpiarCampos();
})

function limpiarCampos(){
    document.getElementById("name").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
}