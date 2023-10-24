-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 24-10-2023 a las 00:32:29
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `mentorcode`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cursos`
--

CREATE TABLE `cursos` (
  `ID_Curso` int(11) NOT NULL,
  `Nombre_Curso` varchar(100) DEFAULT NULL,
  `Tecnologia` varchar(250) DEFAULT NULL,
  `Descripcion` varchar(255) DEFAULT NULL,
  `Precio_Curso` varchar(50) DEFAULT NULL,
  `Link_Curso` varchar(255) DEFAULT NULL,
  `Link_Imagen` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `cursos`
--

INSERT INTO `cursos` (`ID_Curso`, `Nombre_Curso`, `Tecnologia`, `Descripcion`, `Precio_Curso`, `Link_Curso`, `Link_Imagen`) VALUES
(1, 'Introducción a Java ', 'Java', 'En este curso aprenderas las bases y logica de programación para utilizar Java', '50000', 'link', 'https://miro.medium.com/v2/resize:fit:1200/1*2XrX0fP0htyTCah7AglTig.jpeg'),
(2, 'Introducción a HTML ', 'HTML', 'En este curso aprenderas las bases y codigo para utilizar HTML', '35000', 'link', 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/250px-HTML5_logo_and_wordmark.svg.png'),
(3, 'Introducción a CSS ', 'CSS', 'En este curso aprenderas las bases y comandos para utilizar estilos en CSS', '40000', 'link', 'https://cdn-icons-png.flaticon.com/512/919/919826.png'),
(4, 'Introducción a JavaScript ', 'JavaScript', 'En este curso aprenderas las bases y logica de programación que se utilizan en JavaScript', '50000', 'link', 'https://www.dongee.com/tutoriales/content/images/2022/10/image-83.png'),
(5, 'Introducción a Python ', 'Python', 'En este curso aprenderas las bases y logica de programación que se utilizan en Python', '50000', 'link', 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2023/04/raspberry-lanza-editor-codigo-aprender-python-lenguaje-ia-3008158.jpg?tf=3840x');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mentoria`
--

CREATE TABLE `mentoria` (
  `ID_Mentor` int(11) NOT NULL,
  `Nombre_Mentor` varchar(100) DEFAULT NULL,
  `Tecnologia` varchar(250) DEFAULT NULL,
  `Perfil` varchar(255) DEFAULT NULL,
  `Duracion_Mentoria` varchar(50) DEFAULT NULL,
  `Precio_Mentoria` int(10) DEFAULT NULL,
  `Link_Foto` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `mentoria`
--

INSERT INTO `mentoria` (`ID_Mentor`, `Nombre_Mentor`, `Tecnologia`, `Perfil`, `Duracion_Mentoria`, `Precio_Mentoria`, `Link_Foto`) VALUES
(1, 'Elena Garcia', 'HTML5', 'Especialista con 3 años de experiencia en HTML5', '1-2 horas', 40000, 'https://img.freepik.com/foto-gratis/concepto-collage-html-css-persona_23-2150062008.jpg?size=626&ext=jpg&ga=GA1.1.1471857924.1692112283&semt=sph'),
(2, 'Luis Rodriguez', 'CSS3', 'Especialista con 3 años de experiencia en CSS3', '1-2 horas', 20000, 'https://img.freepik.com/foto-gratis/hombre-barbudo-sonriente-eyeglases-usando-laptop_171337-15793.jpg?size=626&ext=jpg&ga=GA1.1.1471857924.1692112283&semt=sph'),
(3, 'Ana Martínez', 'JavaScript', 'Especialista con 3 años de experiencia en JavaScript', '1 horas', 80000, 'https://img.freepik.com/foto-gratis/morena-hermosa-belleza-negocio-fondo_1303-1563.jpg?size=626&ext=jpg&ga=GA1.1.1471857924.1692112283&semt=sph'),
(4, 'Javier López', 'React.js', 'Especialista con 3 años de experiencia en React.js', '45 minutos', 75000, 'https://img.freepik.com/foto-gratis/retrato-usuario-emocionado-alegre-tableta-que-lleva-lentes_1262-18272.jpg?size=626&ext=jpg&ga=GA1.1.1471857924.1692112283&semt=sph'),
(5, 'Carolina Pérez', 'Angular', 'Especialista con 3 años de experiencia en Angular', '1 hora', 34000, 'https://img.freepik.com/foto-gratis/negocios-finanzas-empleo-concepto-mujeres-emprendedoras-exitosas-confianza-empresaria-asiatica-sonriente-oficinista-traje-blanco-gafas-usando-computadora-portatil-ayuda-clientes_1258-59126.jpg?size=626&ext=jpg&ga=GA1.1.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedidos`
--

CREATE TABLE `pedidos` (
  `ID_Pedido` int(11) NOT NULL,
  `ID_Mentor` int(50) DEFAULT NULL,
  `ID_User` int(50) DEFAULT NULL,
  `ID_Curso` int(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `pedidos`
--

INSERT INTO `pedidos` (`ID_Pedido`, `ID_Mentor`, `ID_User`, `ID_Curso`) VALUES
(1, 1, 1, NULL),
(2, 2, 3, 1),
(3, 4, 1, NULL),
(4, 3, 1, NULL),
(5, 5, 1, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `ID_User` int(11) NOT NULL,
  `Nombre` varchar(100) DEFAULT NULL,
  `Email` varchar(250) DEFAULT NULL,
  `Contraseña` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`ID_User`, `Nombre`, `Email`, `Contraseña`) VALUES
(1, 'Diego Alvarado', 'ztdiegotz@gmail.com', '123456789diego'),
(2, 'Alejandro Alfonso', 'aa@gmail.com', '123456789alejo'),
(3, 'Joselin Lozada', 'joshi@gmail.com', '123456789joshi'),
(4, 'Carolina Parra', 'caro@gmail.com', '123456789caro'),
(5, 'Natalia Diaz', 'natadiaz@gmail.com', '123456789nata');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cursos`
--
ALTER TABLE `cursos`
  ADD PRIMARY KEY (`ID_Curso`);

--
-- Indices de la tabla `mentoria`
--
ALTER TABLE `mentoria`
  ADD PRIMARY KEY (`ID_Mentor`);

--
-- Indices de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  ADD PRIMARY KEY (`ID_Pedido`),
  ADD KEY `ID_Mentor` (`ID_Mentor`),
  ADD KEY `ID_User` (`ID_User`),
  ADD KEY `ID_Curso` (`ID_Curso`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`ID_User`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `cursos`
--
ALTER TABLE `cursos`
  MODIFY `ID_Curso` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `mentoria`
--
ALTER TABLE `mentoria`
  MODIFY `ID_Mentor` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  MODIFY `ID_Pedido` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `ID_User` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `pedidos`
--
ALTER TABLE `pedidos`
  ADD CONSTRAINT `pedidos_ibfk_1` FOREIGN KEY (`ID_Mentor`) REFERENCES `mentoria` (`ID_Mentor`),
  ADD CONSTRAINT `pedidos_ibfk_2` FOREIGN KEY (`ID_User`) REFERENCES `users` (`ID_User`),
  ADD CONSTRAINT `pedidos_ibfk_3` FOREIGN KEY (`ID_Curso`) REFERENCES `cursos` (`ID_Curso`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
