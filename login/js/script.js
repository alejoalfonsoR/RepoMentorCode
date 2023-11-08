const datosIngreso = document.querySelector("#formularioMentores");

datosIngreso.addEventListener('submit', async (e) => {
    e.preventDefault();
    const Email = document.querySelector('#email').value;
    const Contrasena = document.querySelector('#password').value;

    const requestBody = {
        Email: Email,
        Contrasena: Contrasena
    };

    try {
        const response = await fetch("http://localhost:8080/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(requestBody),
        });
    
        if (response.ok) {
            
            Swal.fire({
                icon: 'success',
                title: 'Inicio de sesión exitoso',
                showConfirmButton: false,
                timer: 1500 
            }).then(() => {
                window.location.href = '../inicio/inicio.html';
            });
        } else {
            const errorMessage = await response.text(); 
            Swal.fire({
                icon: 'error',
                title: 'Error en el inicio de sesión',
                text: errorMessage
            });
        }
    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Ocurrió un error en la solicitud'
        });
    }})