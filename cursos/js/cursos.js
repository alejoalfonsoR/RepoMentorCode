const listaCursos = [{
        id: 1,
        photo: "https://img.freepik.com/foto-gratis/concepto-collage-html-css-persona_23-2150062008.jpg?size=626&ext=jpg&ga=GA1.1.1471857924.1692112283&semt=sph",
        description: "Aprende HTML, CSS, y JavaScript desde cero hasta niveles avanzados para crear sitios web dinámicos.",
        creator: "Ana Fernández",
        specialty: "Desarrollo web full-stack",
        duration: "40 horas",
        price: 120000,
        pago: "https://mpago.li/2VS3s2D"
    },
    {
        id: 2,
        photo: "https://img.freepik.com/foto-gratis/hombre-barbudo-sonriente-eyeglases-usando-laptop_171337-15793.jpg?size=626&ext=jpg&ga=GA1.1.1471857924.1692112283&semt=sph",
        description: "Descubre los conceptos fundamentales de la IA y aprende a implementar algoritmos en Python.",
        creator: "Carlos Gómez",
        specialty: "Inteligencia Artificial",
        duration: "30 horas",
        price: 115000,
        pago: "https://mpago.li/1ghpUsQ"
    },
    {
        id: 3,
        photo: "https://img.freepik.com/foto-gratis/morena-hermosa-belleza-negocio-fondo_1303-1563.jpg?size=626&ext=jpg&ga=GA1.1.1471857924.1692112283&semt=sph",
        description: "Profundiza en el aprendizaje automático con TensorFlow y desarrolla modelos avanzados.",
        creator: "María Rodríguez",
        specialty: "Machine Learning",
        duration: "50 horas",
        price: 98000,
        pago: "https://mpago.li/1ghpUsQ"
    },
    {
        id: 4,
        photo: "https://img.freepik.com/foto-gratis/retrato-usuario-emocionado-alegre-tableta-que-lleva-lentes_1262-18272.jpg?size=626&ext=jpg&ga=GA1.1.1471857924.1692112283&semt=sph",
        description: "Crea aplicaciones móviles para iOS y Android utilizando React Native y JavaScript.",
        creator: "Juan Morales",
        specialty: "Desarrollo de aplicaciones móviles",
        duration: "35 horas",
        price: 126000,
        pago: "https://mpago.li/1ghpUsQ"
    },
    {
        id: 5,
        photo: "https://img.freepik.com/foto-gratis/negocios-finanzas-empleo-concepto-mujeres-emprendedoras-exitosas-confianza-empresaria-asiatica-sonriente-oficinista-traje-blanco-gafas-usando-computadora-portatil-ayuda-clientes_1258-59126.jpg?size=626&ext=jpg&ga=GA1.1.1471857924.1692112283&semt=sph",
        description: "Explora las prácticas éticas de hacking, aprende a identificar vulnerabilidades y protege sistemas.",
        creator: "Laura Martínez",
        specialty: "Seguridad informática",
        duration: "45 horas",
        price: 87000,
        pago: "https://mpago.li/1ghpUsQ"
    },
    {
        id: 6,
        photo: "https://img.freepik.com/foto-gratis/joven-ingeniero_1098-18393.jpg?size=626&ext=jpg&ga=GA1.1.1471857924.1692112283&semt=sph",
        description: "Comprende los fundamentos de la tecnología blockchain y su aplicación en diferentes industrias.",
        creator: "Pablo Serrano",
        specialty: "Blockchain",
        duration: "25 horas",
        price: 65000,
        pago: "https://mpago.li/1ghpUsQ"
    },
    {
        id: 7,
        photo: "https://img.freepik.com/foto-gratis/sonriente-joven-chica-centro-llamadas-gafas-sosteniendo-portatil-aislado-pared-purpura_141793-94415.jpg?size=626&ext=jpg&ga=GA1.1.1471857924.1692112283&semt=sph",
        description: "Diseña y optimiza bases de datos utilizando SQL y MySQL para aplicaciones escalables.",
        creator: "Diana Delgado",
        specialty: "Bases de datos",
        duration: "40 horas",
        price: 140000,
        pago: "https://mpago.li/1ghpUsQ"
    },
    {
        id: 8,
        photo: "https://img.freepik.com/foto-gratis/programador-tiro-medio-sentado-silla_23-2149101160.jpg?size=626&ext=jpg&ga=GA1.1.1471857924.1692112283&semt=sph",
        description: "Aprende a automatizar tareas repetitivas en la web utilizando Python y Selenium.",
        creator: "Andrés Vargas",
        specialty: "Automatización",
        duration: "30 horas",
        price: 98000,
        pago: "https://mpago.li/1ghpUsQ"
    },
    {
        id: 9,
        photo: "https://img.freepik.com/foto-gratis/mujer-afroamericana-telefono-computadora-portatil-cafe_1303-8926.jpg",
        description: "Adopta prácticas ágiles de desarrollo de software utilizando Scrum y Kanban.",
        creator: "Marta Herrera",
        specialty: "Desarrollo ágil",
        duration: "20 horas",
        price: 67000,
        pago: "https://mpago.li/1ghpUsQ"
    },
    {
        id: 10,
        photo: "https://img.freepik.com/foto-gratis/concepto-collage-html-css-persona_23-2150061986.jpg?size=626&ext=jpg&ga=GA1.1.1471857924.1692112283&semt=sph",
        description: "Sumérgete en el mundo de la realidad virtual y crea experiencias interactivas con Unity.",
        creator: "Víctor Mendoza",
        specialty: "Realidad virtual",
        duration: "35 horas",
        price: 115000,
        pago: "https://mpago.li/1ghpUsQ"
    },
];

// Establece el número de elementos por página
const itemsPerPage = 4;

// Inicializa la página actual y la lista filtrada
let currentPage = 1;
let filteredList = [];

// Función principal para mapear y mostrar las tarjetas
function mapeoTarjetas() {
    // Obtiene los elementos del DOM
    const contenedorTarjetas = document.getElementById("tarjetaMentores");
    const paginationContainer = document.getElementById("pagination");
    const modal = document.getElementById("mentorModal");
    const noResultsMessage = document.getElementById("no-results-message");
    const searchInput = document.getElementById("search-input");
    const searchButton = document.getElementById("search-button");
    const clearButton = document.getElementById("clear-button");

    // Calcula el total de elementos y páginas
    const totalItems = listaCursos.length;
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
                        <img src="${item.photo}" data-toggle="modal" data-target="#mentorModal" data-mentor-id="${item.id}"/>
                        <p class="especialidad">${item.specialty} </p>
                        <p class="creador">Un curso de ${item.creator}</p>
                        <p class="descripcion">${item.description}</p>
                        <div class="info-container">
                        <h3 class="cards__info">
                            $ <span>${item.price.toLocaleString("es-ES", {
                                style: "currency",
                                currency: "COP",
                                maximumFractionDigits: 0,
                            })}</span>
                        </h3>
                        <div class="center">
                        <a href="${item.pago}" target="_blank"><button class="button-cart"></button></a>            
                    </div>
                    </article>`;

            contenedorTarjetas.appendChild(card);
        }

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
                showPage(currentPage, filteredList.length ? filteredList : listaCursos);

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
        filteredList = listaCursos.filter(item => {
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
        showPage(currentPage, listaCursos);
        paginationContainer.innerHTML = "";
        createPaginationButtons();
    });

    // Muestra la primera página y crea los botones de paginación al cargar la página
    showPage(currentPage, listaCursos);
    createPaginationButtons();
}

// Agrega un evento que se ejecutará cuando se haya cargado el contenido del DOM
document.addEventListener("DOMContentLoaded", mapeoTarjetas);

//Cerrar la ventana modal dando click en cualquier parte
// var modal = document.getElementById("mentorModal");