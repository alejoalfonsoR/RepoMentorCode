const listaMentores = [{
        id: 1,
        photo: "https://img.freepik.com/foto-gratis/hombre-negocios-dueno-empresa-oficina_1303-15851.jpg?w=996&t=st=1696368518~exp=1696369118~hmac=c3d552319811f4c9318a3a6bc454ed6b1e411df71f67afd8265f7a8f50bf8271",
        name: "Elena García",
        specialty: "HTML5",
        price: 50000,
    },
    {
        id: 2,
        photo: "https://img.freepik.com/foto-gratis/estacion-lavado-autos_1303-22306.jpg?t=st=1696354429~exp=1696355029~hmac=4cef63191506eb09cfb76a51809736e9d6e2dcef731892124aaaaacc00b2255d",
        name: "Luis Rodriguez",
        specialty: "CSS3",
        price: 70000,
    },
    {
        id: 3,
        photo: "https://img.freepik.com/foto-gratis/dos-colegas-fabrica_1303-14331.jpg",
        name: "Ana Martínez",
        specialty: "JavaScript",
        price: 100000,
    },
    {
        id: 4,
        photo: "https://img.freepik.com/foto-gratis/manos-femeninas-escribiendo-teclado-computadora_1303-27362.jpg",
        name: "Javier López",
        specialty: "React.js",
        price: 150000,
    },
    {
        id: 5,
        photo: "https://img.freepik.com/foto-gratis/doctora-vistiendo-bata-laboratorio-estetoscopio-aislado_1303-29793.jpg",
        name: "Carolina Pérez",
        specialty: "Angular",
        price: 90000,
    },
    {
        id: 6,
        photo: "https://img.freepik.com/foto-gratis/mujer-afroamericana-telefono-computadora-portatil-cafe_1303-8926.jpg",
        name: "Alejandro Sánchez",
        specialty: "Vue.js",
        price: 97000,
    },
    {
        id: 7,
        photo: "https://img.freepik.com/foto-gratis/dama-elegante-telefono-movil_1157-16662.jpg",
        name: "Isabel Fernández",
        specialty: "Node.js",
        price: 102000,
    },
    {
        id: 8,
        photo: "https://img.freepik.com/foto-gratis/pareja-hablando-lenguaje-senas_23-2148572500.jpg",
        name: "Jorge Ramírez",
        specialty: "Express.js",
        price: 68000,
    },
    {
        id: 9,
        photo: "https://img.freepik.com/foto-gratis/mujer-joven-negra-lista-hacer-ejercicio-sosteniendo-alfombra-yoga-naranja_1157-52328.jpg?t=st=1696369698~exp=1696370298~hmac=f615763c3d7df04774d893ab27c49efa68b48c5abda87f729e761433393d0041",
        name: "Laura González",
        specialty: "MongoDB",
        price: 93000,
    },
    {
        id: 10,
        photo: "https://img.freepik.com/foto-gratis/hombre-polaco-salon-automovil-garaje_1157-36593.jpg",
        name: "Miguel Torres",
        specialty: "RESTful APIs",
        price: 150000,
    },
];

function mapeoTarjetas() {
    const contenedorTarjetas = document.getElementById("tarjetaMentores");

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
        contenedorTarjetas.appendChild(tarjeta);
    });
}

document.addEventListener("DOMContentLoaded", mapeoTarjetas);