const listaMentores = [{
        id: 1,
        photo: "https://img.freepik.com/foto-gratis/concepto-collage-html-css-persona_23-2150062008.jpg?size=626&ext=jpg&ga=GA1.1.1471857924.1692112283&semt=sph",
        name: "Elena García",
        linkedin: "www.linkedin.com/in/joselin-lozada/",
        specialty: "HTML5",
        duration: "1-2 horas",
        description: "Especialista con 3 años de experiencia en HTML5",
        price: 40000,
        pago: "https://mpago.li/2tsnxup"
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
        pago: "https://mpago.li/1PZxFnD"
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
        pago: "https://mpago.li/1PZxFnD"
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
        pago: "https://mpago.li/1PZxFnD"
    },
    {
        id: 5,
        photo: "https://img.freepik.com/foto-gratis/negocios-finanzas-empleo-concepto-mujeres-emprendedoras-exitosas-confianza-empresaria-asiatica-sonriente-oficinista-traje-blanco-gafas-usando-computadora-portatil-ayuda-clientes_1258-59126.jpg?size=626&ext=jpg&ga=GA1.1.1471857924.1692112283&semt=sph",
        name: "Carolina Pérez",
        linkedin: "www.linkedin.com/in/joselin-lozada/",
        specialty: "Angular",
        description: "Especialista con 3 años de experiencia en Angular",
        duration: "1 hora",
        price: 34000,
        pago: "https://mpago.li/1PZxFnD"
    },
    {
        id: 6,
        photo: "https://img.freepik.com/foto-gratis/joven-ingeniero_1098-18393.jpg?size=626&ext=jpg&ga=GA1.1.1471857924.1692112283&semt=sph",
        name: "Alejandro Sánchez",
        linkedin: "www.linkedin.com/in/joselin-lozada/",
        specialty: "Vue.js",
        description: "Especialista con 3 años de experiencia en Vue Js",
        duration: "1 hora",
        price: 37000,
        pago: "https://mpago.li/1PZxFnD"
    },
    {
        id: 7,
        photo: "https://img.freepik.com/foto-gratis/sonriente-joven-chica-centro-llamadas-gafas-sosteniendo-portatil-aislado-pared-purpura_141793-94415.jpg?size=626&ext=jpg&ga=GA1.1.1471857924.1692112283&semt=sph",
        name: "Isabel Fernández",
        linkedin: "www.linkedin.com/in/joselin-lozada/",
        specialty: "Node.js",
        description: "Especialista con 3 años de experiencia en Node.Js",
        duration: "2 horas",
        price: 25000,
        pago: "https://mpago.li/1PZxFnD"
    },
    {
        id: 8,
        photo: "https://img.freepik.com/foto-gratis/programador-tiro-medio-sentado-silla_23-2149101160.jpg?size=626&ext=jpg&ga=GA1.1.1471857924.1692112283&semt=sph",
        name: "Jorge Ramírez",
        linkedin: "www.linkedin.com/in/joselin-lozada/",
        specialty: "Express.js",
        description: "Especialista con 3 años de experiencia en Express.Js",
        duration: "1 hora",
        price: 58000,
        pago: "https://mpago.li/1PZxFnD"
    },
    {
        id: 9,
        photo: "https://img.freepik.com/foto-gratis/mujer-afroamericana-telefono-computadora-portatil-cafe_1303-8926.jpg",
        name: "Laura González",
        linkedin: "www.linkedin.com/in/joselin-lozada/",
        specialty: "MongoDB",
        description: "Especialista con 3 años de experiencia en MongoDB",
        duration: "1 hora",
        price: 83000,
        pago: "https://mpago.li/1PZxFnD"
    },
    {
        id: 10,
        photo: "https://img.freepik.com/foto-gratis/concepto-collage-html-css-persona_23-2150061986.jpg?size=626&ext=jpg&ga=GA1.1.1471857924.1692112283&semt=sph",
        name: "Miguel Torres",
        linkedin: "www.linkedin.com/in/joselin-lozada/",
        specialty: "RESTful APIs",
        description: "Especialista con 3 años de experiencia en Restfull APIs",
        duration: "45 minutos",
        price: 75000,
        pago: "https://mpago.li/1PZxFnD"
    },
];

// Establece el número de elementos por página
const itemsPerPage = 8;

// Inicializa la página actual y la lista filtrada
let currentPage = 1;
let filteredList = [];

function mapeoTarjetas() {
    const contenedorTarjetas = document.getElementById("tarjetaMentores");
    const paginationContainer = document.getElementById("pagination");
    const modal = document.getElementById("mentorModal");
    const noResultsMessage = document.getElementById("no-results-message");
    const searchInput = document.getElementById("search-input");
    const searchButton = document.getElementById("search-button");
    const clearButton = document.getElementById("clear-button");

    // Calcula el total de elementos y páginas
    const totalItems = listaMentores.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    // Función para mostrar una página específica de la lista de elementos
    function showPage(page, itemList) {
        contenedorTarjetas.innerHTML = "";

        // Calcula el rango de elementos a mostrar en la página actual
        const totalItems = itemList.length;
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;

        // Itera sobre los elementos y crea las tarjetas correspondientes
        for (let i = startIndex; i < endIndex && i < totalItems; i++) {
            const item = itemList[i];
            const card = document.createElement("div");
            card.innerHTML = `
            <article>
                <a href="#"><img src="${item.photo}" data-toggle="modal" data-target="#mentorModal" data-mentor-id="${item.id}"/></a>
                <p class="nombre">${item.name}</p>
                <p class="especialidad">${item.specialty}</p>
                <div class="info-container">
                <h3 class="cards__info">
                    $ <span>${item.price.toLocaleString("es-ES", {
                      style: "currency",
                      currency: "COP",
                      maximumFractionDigits: 0
                    })}</span>
                </h3>
                <a href="${item.pago}" target="_blank" rel="noopener noreferrer"></a>
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
        }

        // contenedorTarjetas.appendChild(card);
        // Muestra u oculta el mensaje de búsqueda sin resultados
        if (totalItems === 0) {
            noResultsMessage.style.display = "block";
        } else {
            noResultsMessage.style.display = "none";
        }
    }

    // Función para crear los botones de paginación
    function createPaginationButtons() {
        for (let i = 1; i <= totalPages; i++) {
            const button = document.createElement("button");
            button.innerText = i;
            button.addEventListener("click", function() {
                currentPage = i;
                showPage(currentPage, filteredList.length ? filteredList : listaMentores);

                // Maneja la clase activa para el botón de paginación seleccionado
                const activeButton = document.querySelector(".pagination button.active");
                if (activeButton) {
                    activeButton.classList.remove("active");
                }

                button.classList.add("active");
            });

            paginationContainer.appendChild(button);
        }
    }

    // Agrega un evento de clic al botón de búsqueda
    searchButton.addEventListener("click", performSearch);

    // Agrega un evento de escucha para la tecla "Enter" en el campo de búsqueda
    searchInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            performSearch();
        }
    });

    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase(); // Convierte a minúsculas
        const normalizedSearchTerm = searchTerm.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // Normaliza y quita acentos
        filteredList = listaMentores.filter(item => {
            const normalizedSpecialty = item.specialty.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            return normalizedSpecialty.includes(normalizedSearchTerm);
        });
        currentPage = 1; // Reinicia la página al realizar una búsqueda
        showPage(currentPage, filteredList);

        // Actualiza la paginación con la nueva lista filtrada
        paginationContainer.innerHTML = "";
        createPaginationButtons();
    }

    // Agrega un evento de clic al botón de limpieza
    clearButton.addEventListener("click", function() {
        searchInput.value = ""; // Limpia el input de búsqueda
        filteredList = []; // Limpia la lista filtrada
        currentPage = 1; // Reinicia la página

        // Oculta el mensaje de búsqueda sin resultados al limpiar
        noResultsMessage.style.display = "none";

        // Muestra la lista completa y actualiza la paginación
        showPage(currentPage, listaMentores);
        paginationContainer.innerHTML = "";
        createPaginationButtons();
    });

    // Muestra la primera página y crea los botones de paginación al cargar la página
    showPage(currentPage, listaMentores);
    createPaginationButtons();
}

// Agrega un evento que se ejecutará cuando se haya cargado el contenido del DOM
document.addEventListener("DOMContentLoaded", mapeoTarjetas);

//Cerrar la ventana modal dando click en cualquier parte
var modal = document.getElementById('mentorModal');