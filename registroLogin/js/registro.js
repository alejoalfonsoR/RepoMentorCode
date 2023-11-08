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
            // Mensaje de solicitud exitosa
            Swal.fire({
                icon: 'success',
                title: 'Registro Exitoso',
                text: 'Ingresa con tu usuario y contraseña'
            }).then(() => {
                window.location.href = '../login/login.html';
            });
        } else {
            const errorMessage = await response.text(); // Obtén el mensaje de error del servidor
            Swal.fire({
                icon: 'error',
                title: 'Error en el inicio de sesión',
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
        

    // //Variable que recibe usuarios registrados o en su defecto los crea
    // const Users = JSON.parse(localStorage.getItem('users')) || []
    
    // const isUserRegistered = Users.find(user => user.email === email)

    // if (isUserRegistered){
    //     return alert ('El usuario ya esta registrado')
    // }

    // Users.push({
    //     name: name,
    //     email: email,
    //     password: password
    // })

    // localStorage.setItem('users', JSON.stringify(Users))
    // alert ('Registro Exitoso')

    // window.location.href = '../login/login.html'
    
});