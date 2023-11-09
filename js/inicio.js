const listaMentores = [{
    id: 1,
    photo: "https://img.freepik.com/foto-gratis/concepto-collage-html-css-persona_23-2150062008.jpg?size=626&ext=jpg&ga=GA1.1.1471857924.1692112283&semt=sph",
    name: "Elena García",
    linkedin: "www.linkedin.com/in/joselin-lozada/",
    specialty: "HTML5",
    duration: "1-2 horas",
    description: "Especialista con 3 años de experiencia en HTML5",
    price: 40000,
},
{
    id: 2,
    photo: "https://img.freepik.com/foto-gratis/hombre-barbudo-sonriente-eyeglases-usando-laptop_171337-15793.jpg?size=626&ext=jpg&ga=GA1.1.1471857924.1692112283&semt=sph",
    name: "Luis Rodriguez",
    linkedin: "www.linkedin.com/in/joselin-lozada/",
    specialty: "CSS3",
    description: "Especialista con 3 años de experiencia en CSS3",
    duration: "1-2 horas",
    price: 20000,
},
{
    id: 3,
    photo: "https://img.freepik.com/foto-gratis/morena-hermosa-belleza-negocio-fondo_1303-1563.jpg?size=626&ext=jpg&ga=GA1.1.1471857924.1692112283&semt=sph",
    name: "Ana Martínez",
    linkedin: "www.linkedin.com/in/joselin-lozada/",
    specialty: "JavaScript",
    description: "Especialista con 3 años de experiencia en JavaScript",
    duration: "1 hora",
    price: 80000,
},
{
    id: 4,
    photo: "https://img.freepik.com/foto-gratis/retrato-usuario-emocionado-alegre-tableta-que-lleva-lentes_1262-18272.jpg?size=626&ext=jpg&ga=GA1.1.1471857924.1692112283&semt=sph",
    name: "Javier López",
    linkedin: "www.linkedin.com/in/joselin-lozada/",
    specialty: "React.js",
    description: "Especialista con 3 años de experiencia en React.js",
    duration: "45 min",
    price: 75000,
},
];

function mapeoTarjetas() {
const contenedorTarjetas = document.getElementById("tarjetaMentores");
const modal = document.getElementById("mentorModal");

listaMentores.forEach((item) => {
    const card = document.createElement("div");
    card.innerHTML = `
        <article>
            <img src="${item.photo}" data-toggle="modal" data-target="#mentorModal" data-mentor-id="${item.id}"/>
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
            <a href="../mentores/mentores.html"><p class="boton2">Conoce más</p></a>
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