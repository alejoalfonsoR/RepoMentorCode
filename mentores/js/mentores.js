const listaMentores = [{
        id: 1,
        photo: "https://img.freepik.com/foto-gratis/hombre-negocios-dueno-empresa-oficina_1303-15851.jpg?w=996&t=st=1696368518~exp=1696369118~hmac=c3d552319811f4c9318a3a6bc454ed6b1e411df71f67afd8265f7a8f50bf8271",
        name: "Elena García",
        linkedin: "www.linkedin.com/in/joselin-lozada/",
        specialty: "HTML5",
        description: "Especialista con 3 años de experiencia en HTML5",
        price: 50000,
    },
    {
        id: 2,
        photo: "https://img.freepik.com/foto-gratis/estacion-lavado-autos_1303-22306.jpg?t=st=1696354429~exp=1696355029~hmac=4cef63191506eb09cfb76a51809736e9d6e2dcef731892124aaaaacc00b2255d",
        name: "Luis Rodriguez",
        linkedin: "www.linkedin.com/in/joselin-lozada/",
        specialty: "CSS3",
        description: "Especialista con 3 años de experiencia en CSS3",
        duration: "1-2 horas",
        price: 70000,
    },
    {
        id: 3,
        photo: "https://img.freepik.com/foto-gratis/dos-colegas-fabrica_1303-14331.jpg",
        name: "Ana Martínez",
        linkedin: "www.linkedin.com/in/joselin-lozada/",
        specialty: "JavaScript",
        description: "Especialista con 3 años de experiencia en JavaScript",
        duration: "1 hora",
        price: 100000,
    },
    {
        id: 4,
        photo: "https://img.freepik.com/foto-gratis/manos-femeninas-escribiendo-teclado-computadora_1303-27362.jpg",
        name: "Javier López",
        linkedin: "www.linkedin.com/in/joselin-lozada/",
        specialty: "React.js",
        description: "Especialista con 3 años de experiencia en React.js",
        duration: "45 min",
        price: 150000,
    },
    {
        id: 5,
        photo: "https://img.freepik.com/foto-gratis/doctora-vistiendo-bata-laboratorio-estetoscopio-aislado_1303-29793.jpg",
        name: "Carolina Pérez",
        linkedin: "www.linkedin.com/in/joselin-lozada/",
        specialty: "Angular",
        description: "Especialista con 3 años de experiencia en Angular",
        duration: "1 hora",
        price: 90000,
    },
    {
        id: 6,
        photo: "https://img.freepik.com/foto-gratis/mujer-afroamericana-telefono-computadora-portatil-cafe_1303-8926.jpg",
        name: "Alejandro Sánchez",
        linkedin: "www.linkedin.com/in/joselin-lozada/",
        specialty: "Vue.js",
        description: "Especialista con 3 años de experiencia en Vue Js",
        duration: "1 hora",
        price: 97000,
    },
    {
        id: 7,
        photo: "https://img.freepik.com/foto-gratis/dama-elegante-telefono-movil_1157-16662.jpg",
        name: "Isabel Fernández",
        linkedin: "www.linkedin.com/in/joselin-lozada/",
        specialty: "Node.js",
        description: "Especialista con 3 años de experiencia en Node.Js",
        duration: "2 horas",
        price: 102000,
    },
    {
        id: 8,
        photo: "https://img.freepik.com/foto-gratis/pareja-hablando-lenguaje-senas_23-2148572500.jpg",
        name: "Jorge Ramírez",
        linkedin: "www.linkedin.com/in/joselin-lozada/",
        specialty: "Express.js",
        description: "Especialista con 3 años de experiencia en Express.Js",
        duration: "1 hora",
        price: 68000,
    },
    {
        id: 9,
        photo: "https://img.freepik.com/foto-gratis/mujer-joven-negra-lista-hacer-ejercicio-sosteniendo-alfombra-yoga-naranja_1157-52328.jpg?t=st=1696369698~exp=1696370298~hmac=f615763c3d7df04774d893ab27c49efa68b48c5abda87f729e761433393d0041",
        name: "Laura González",
        linkedin: "www.linkedin.com/in/joselin-lozada/",
        specialty: "MongoDB",
        description: "Especialista con 3 años de experiencia en MongoDB",
        duration: "1 hora",
        price: 93000,
    },
    {
        id: 10,
        photo: "https://img.freepik.com/foto-gratis/hombre-polaco-salon-automovil-garaje_1157-36593.jpg",
        name: "Miguel Torres",
        linkedin: "www.linkedin.com/in/joselin-lozada/",
        specialty: "RESTful APIs",
        description: "Especialista con 3 años de experiencia en Restfull APIs",
        duration: "45 minutos",
        price: 150000,
    },
];

function mapeoTarjetas() {
    const contenedorTarjetas = document.getElementById("tarjetaMentores");
    const modal = document.getElementById("mentorModal");

    listaMentores.forEach((item) => {
        const card = document.createElement("div");
        card.innerHTML = `
            <article>
                <a href="#"><img src="${item.photo}" data-toggle="modal" data-target="#mentorModal" data-mentor-id="${item.id}"/></a>
                <p>${item.name}</p>
                <p>${item.specialty}</p>
                <h3 class="cards__info">
                    $ <span>${item.price.toLocaleString("es-ES", {
                      style: "currency",
                      currency: "COP",
                      maximumFractionDigits: 0
                    })}</span>
                </h3>
                <div class="center">
                <button class="button-cart"></button>
            </div>
            </article>`;

        card.querySelector("a").addEventListener("click", (event) => {
            event.preventDefault
            const mentorId = event.target.getAttribute("data-mentor-id");
            const mentor = listaMentores.find((m) => m.id === parseInt(mentorId));

            const modalTitle = document.getElementById("mentorModalLabel");
            const mentorPhoto = document.getElementById("mentorPhoto");
            const mentorDuration = document.getElementById("mentorDuration")
            const mentorSpecialty = document.getElementById("mentorSpecialty");
            const mentorDescription = document.getElementById("mentorDescription");
            const mentorPrice = document.getElementById("mentorPrice");

            modalTitle.textContent = mentor.name;
            mentorPhoto.src = mentor.photo;
            mentorSpecialty.textContent = mentor.specialty;
            mentorDescription.textContent = mentor.description;
            mentorDuration.textContent = mentor.duration;
            mentorPrice.textContent = mentor.price.toLocaleString("es-ES", {
                style: "currency",
                currency: "COP",
                maximumFractionDigits: 0
            });
        });

        contenedorTarjetas.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", mapeoTarjetas);
