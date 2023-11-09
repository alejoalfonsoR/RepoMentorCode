const datosRegistro = document.querySelector("#formularioRegistro")
console.log(datosRegistro); // null

datosRegistro.addEventListener('submit', async (e) =>{
    e.preventDefault()
    const Nombre = document.querySelector('#name').value
    const Email = document.querySelector('#email').value
    const Contrasena = document.querySelector ('#password').value

    const requestBody = {
        Nombre: Nombre,
        Email: Email,
        Contrasena: Contrasena,
    };

    try{
        const response = await fetch("http://localhost:8080/Users/crearUser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(requestBody)
        });

        if (response.ok) {

            Swal.fire({
                icon: 'success',
                title: 'Registro Exitoso',
                text: 'Ingresa con tu usuario y contraseña'
            }).then(() => {
                window.location.href = '../login/login.html';
            });
        } else {
            const errorMessage = await response.text(); 
            Swal.fire({
                icon: 'error',
                title: 'Error en el registro',
                text: errorMessage
            });
        }
        
        } catch (error) {
            // Mensaje de error
            Swal.fire({
                icon: 'error',
                title: 'Ocurrió un error en la solicitud'
            });
        }
    
});