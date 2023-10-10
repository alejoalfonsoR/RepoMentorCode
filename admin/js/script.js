const listaMentores = [];

// ------------------------------------------CODIGO DE CARO, VALIDACION DE FORMULARIO-------------------------------------------

// const formularioMentores = document.querySelector('#formularioMentores');

function formularioMentores(){
    const name = document.querySelector('#name').value
    const telefono = document.querySelector('#telefono').value
    const email = document.querySelector('#email').value
    const specialty = document.querySelector('#specialty').value
    const photo = document.querySelector('#photo').value
    const price = document.querySelector('#price').value
    //Según el requerimiento "Tiene funciones de JavaScript de validaciones adecuadas para los datos introducidos" se valida, aunque con el required en HTML no deja enviar valores vacíos.
    // if (!nombre || !telefono || !email || !specialty || !photo) {
        //     alert('Por favor, completa todos los campos.');
        //     return;
        // }
        const formularioMentores1 = {
            name : name,
            telefono : telefono,
            email : email,
            specialty : specialty,
            photo : photo,
            price : price
        }
        console.log(formularioMentores1)
        listaMentores.push(formularioMentores1);
        // alert(`Tu mensaje se envió con éxito`)
        // const Mensajes = JSON.parse(localStorage.getItem('mensajes')) || [];
        // listaMentores.push({ nombre: nombre, telefono: telefono, email: email, specialty: specialty, photo: photo, price: price });
        // localStorage.setItem('mensajes', JSON.stringify(Mensajes));
        Tarjetas();
        limpiarCampos();
    }
    
    function limpiarCampos() {
        document.getElementById("name").value = "";
        document.getElementById("telefono").value = "";
        document.getElementById("email").value = "";
        document.getElementById("specialty").value = "";
        document.getElementById("photo").value = "";
        document.getElementById("price").value = "";
        
    }

    function Tarjetas(){
        const contenedorTarjetas = document.getElementById("tarjetaMentores");
        contenedorTarjetas.innerHTML = "";
        const grupoTarjetas = listaMentores.map((item) => {
            const card = document.createElement("div");
            card.innerHTML = `
            <article>
            <a href="#"><img src="${item.photo}"/></a>
            <p>${item.name}</p>
            <p>${item.specialty}</p>
            <h3 class="cards__info">
            $ <span>${item.price}</span>
            </h3>
            </article>`;
            return card;
        });
        grupoTarjetas.forEach((tarjeta) => {
            console.log(tarjeta)
            contenedorTarjetas.appendChild(tarjeta);
            
        });
    }
    
    