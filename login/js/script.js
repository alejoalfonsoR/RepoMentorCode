const datosIngreso = document.querySelector("#formularioMentores")

datosIngreso.addEventListener('submit',(e) =>{
    e.preventDefault()
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value

    const Users = JSON.parse(localStorage.getItem('users')) || []

    //Validación de campos
    const validUser = Users.find(user => user.email === email && user.password === password)

    if (!validUser){
        return alert('Usuario y/o contraseña son incorrectos o no existen')
    }

    alert (`Bienvenido`)

    localStorage.setItem('login_success', JSON.stringify(validUser))

    window.location.href = '../mentores/mentores.html'

})