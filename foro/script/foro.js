document.addEventListener('DOMContentLoaded', () => {
    const storedEmail = localStorage.getItem('Email');
    const storedContrasena = localStorage.getItem('Contrasena');

    if (storedEmail && storedContrasena) {
        // Aquí puedes usar los datos almacenados para validar el ingreso
        // Por ejemplo, puedes enviar una solicitud con estos datos para verificar si son válidos
        document.getElementById("contenido").style.display = "block";
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Por favor inicia sesión para acceder al foro.',
            showConfirmButton: true,
                // Redirigir a la página de inicio de sesión
        }).then(() => {
            window.location.href = "../login/login.html";
        });
    }
});
