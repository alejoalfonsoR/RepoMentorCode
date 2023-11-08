document.addEventListener('DOMContentLoaded', () => {
    const storedEmail = localStorage.getItem('Email');
    const storedContrasena = localStorage.getItem('Contrasena');

    if (storedEmail && storedContrasena) {
        // Aquí puedes usar los datos almacenados para validar el ingreso
        // Por ejemplo, puedes enviar una solicitud con estos datos para verificar si son válidos
        document.getElementById("contenido").style.display = "block";
    } else {
        alert("No ha iniciado sesion, inicie")
        // No hay datos de inicio de sesión almacenados, redirigir a la página de inicio de sesión
        window.location.href = '../login/login.html';
    }
});
