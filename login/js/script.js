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
            // Procesar la respuesta exitosa, redireccionar y mostrar un mensaje de éxito.
            alert("Inicio de sesión exitoso");
            window.location.href = '../inicio/inicio.html'
        } else {
            const errorMessage = await response.text(); // Obtén el mensaje de error del servidor
            alert(`Error en el inicio de sesión: ${errorMessage}`);
        }
    } catch (error) {
        // Manejo de errores de red u otros errores inesperados.
        alert("Ocurrió un error en la solicitud.");
    }
});