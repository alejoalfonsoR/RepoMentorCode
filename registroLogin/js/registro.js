const datosRegistro = document.querySelector("#formularioRegistro")
console.log(datosRegistro); // null

datosRegistro.addEventListener('submit', async (e) =>{
    e.preventDefault()
    const name = document.querySelector('#name').value
    const email = document.querySelector('#email').value
    const password = document.querySelector ('#password').value

    const requestBody = {
        Nombre: name,
        Email: email,
        Contrasena: password
    };

    try{
        const response = await fetch("http://localhost:8080/Users/crearUser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(requestBody)
        });

        if (response.ok){
            //Mensaje de solicitud exitosa
            alert("Registro Exitoso, ingresa con tu usuario y contraseña")
            window.location.href = '../login/login.html'
        }else {
            const errorMessage = await response.text(); // Obtén el mensaje de error del servidor
            alert(`Error en el inicio de sesión: ${errorMessage}`);
        }

    } catch (error) {
        //Mensaje de error
        alert("Ocurrió un error en la solicitud.");
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