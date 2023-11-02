const listaCursos = [{
        id: 1,
        photo: "https://img.freepik.com/foto-gratis/concepto-collage-html-css-persona_23-2150062008.jpg?size=626&ext=jpg&ga=GA1.1.1471857924.1692112283&semt=sph",
        description: "Aprende HTML, CSS, y JavaScript desde cero hasta niveles avanzados para crear sitios web dinámicos.",
        creator: "Ana Fernández",
        specialty: "Desarrollo web full-stack",
        duration: "40 horas",
        price: 120000,
    },
    {
        id: 2,
        photo: "https://img.freepik.com/foto-gratis/hombre-barbudo-sonriente-eyeglases-usando-laptop_171337-15793.jpg?size=626&ext=jpg&ga=GA1.1.1471857924.1692112283&semt=sph",
        description: "Descubre los conceptos fundamentales de la IA y aprende a implementar algoritmos en Python.",
        creator: "Carlos Gómez",
        specialty: "Inteligencia Artificial",
        duration: "30 horas",
        price: 115000,
    },
    {
        id: 3,
        photo: "https://img.freepik.com/foto-gratis/morena-hermosa-belleza-negocio-fondo_1303-1563.jpg?size=626&ext=jpg&ga=GA1.1.1471857924.1692112283&semt=sph",
        description: "Profundiza en el aprendizaje automático con TensorFlow y desarrolla modelos avanzados.",
        creator: "María Rodríguez",
        specialty: "Machine Learning",
        duration: "50 horas",
        price: 98000,
    },
    {
        id: 4,
        photo: "https://img.freepik.com/foto-gratis/retrato-usuario-emocionado-alegre-tableta-que-lleva-lentes_1262-18272.jpg?size=626&ext=jpg&ga=GA1.1.1471857924.1692112283&semt=sph",
        description: "Crea aplicaciones móviles para iOS y Android utilizando React Native y JavaScript.",
        creator: "Juan Morales",
        specialty: "Desarrollo de aplicaciones móviles",
        duration: "35 horas",
        price: 126000,
    },
    {
        id: 5,
        photo: "https://img.freepik.com/foto-gratis/negocios-finanzas-empleo-concepto-mujeres-emprendedoras-exitosas-confianza-empresaria-asiatica-sonriente-oficinista-traje-blanco-gafas-usando-computadora-portatil-ayuda-clientes_1258-59126.jpg?size=626&ext=jpg&ga=GA1.1.1471857924.1692112283&semt=sph",
        description: "Explora las prácticas éticas de hacking, aprende a identificar vulnerabilidades y protege sistemas.",
        creator: "Laura Martínez",
        specialty: "Seguridad informática",
        duration: "45 horas",
        price: 87000,
    },
    {
        id: 6,
        photo: "https://img.freepik.com/foto-gratis/joven-ingeniero_1098-18393.jpg?size=626&ext=jpg&ga=GA1.1.1471857924.1692112283&semt=sph",
        description: "Comprende los fundamentos de la tecnología blockchain y su aplicación en diferentes industrias.",
        creator: "Pablo Serrano",
        specialty: "Blockchain",
        duration: "25 horas",
        price: 65000,
    },
    {
        id: 7,
        photo: "https://img.freepik.com/foto-gratis/sonriente-joven-chica-centro-llamadas-gafas-sosteniendo-portatil-aislado-pared-purpura_141793-94415.jpg?size=626&ext=jpg&ga=GA1.1.1471857924.1692112283&semt=sph",
        description: "Diseña y optimiza bases de datos utilizando SQL y MySQL para aplicaciones escalables.",
        creator: "Diana Delgado",
        specialty: "Bases de datos",
        duration: "40 horas",
        price: 140000,
    },
    {
        id: 8,
        photo: "https://img.freepik.com/foto-gratis/programador-tiro-medio-sentado-silla_23-2149101160.jpg?size=626&ext=jpg&ga=GA1.1.1471857924.1692112283&semt=sph",
        description: "Aprende a automatizar tareas repetitivas en la web utilizando Python y Selenium.",
        creator: "Andrés Vargas",
        specialty: "Automatización",
        duration: "30 horas",
        price: 98000,
    },
    {
        id: 9,
        photo: "https://img.freepik.com/foto-gratis/mujer-afroamericana-telefono-computadora-portatil-cafe_1303-8926.jpg",
        description: "Adopta prácticas ágiles de desarrollo de software utilizando Scrum y Kanban.",
        creator: "Marta Herrera",
        specialty: "Desarrollo ágil",
        duration: "20 horas",
        price: 67000,
    },
    {
        id: 10,
        photo: "https://img.freepik.com/foto-gratis/concepto-collage-html-css-persona_23-2150061986.jpg?size=626&ext=jpg&ga=GA1.1.1471857924.1692112283&semt=sph",
        description: "Sumérgete en el mundo de la realidad virtual y crea experiencias interactivas con Unity.",
        creator: "Víctor Mendoza",
        specialty: "Realidad virtual",
        duration: "35 horas",
        price: 115000,
    },
];

function mapeoTarjetas() {
    const contenedorTarjetas = document.getElementById("tarjetaMentores");
    const modal = document.getElementById("mentorModal");

    listaCursos.forEach((item) => {
        const card = document.createElement("div");
        card.innerHTML = `
        <article>
            <a href="#"><img src="${
              item.photo
            }" data-toggle="modal" data-target="#mentorModal" data-mentor-id="${
      item.id
    }"/></a>
            <p class="especialidad">${item.specialty}</p>
            <p class="creador">Un curso de ${item.creator}</p>
            <p class="descripcion">${item.description}</p>
            <h3 class="cards__info">
                $ <span>${item.price.toLocaleString("es-ES", {
                  style: "currency",
                  currency: "COP",
                  maximumFractionDigits: 0,
                })}</span>
            </h3>
            <div class="center">
            <button class="button-cart"></button>
        </div>
        </article>`;

        card.querySelector("a").addEventListener("click", (event) => {
            event.preventDefault;
            const mentorId = event.target.getAttribute("data-mentor-id");
            const mentor = listaCursos.find((m) => m.id === parseInt(mentorId));

            const modalTitle = document.getElementById("mentorModalLabel");
            const mentorPhoto = document.getElementById("mentorPhoto");
            const mentorDuration = document.getElementById("mentorDuration");
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
                maximumFractionDigits: 0,
            });
        });

        contenedorTarjetas.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", mapeoTarjetas);

//Cerrar la ventana modal dando click en cualquier parte
var modal = document.getElementById("mentorModal");