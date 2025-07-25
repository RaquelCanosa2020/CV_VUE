const aptitudes = ["Trabajo en equipo",
    "Capacidad de aprendizaje",
    "Flexibilidad y capacidad de adaptación",
    "Orientación al cliente y a la mejora"];

const programming = [

    {
        year: "****", title: "Ciclo Superior Desarrollo Web.", data: "IES Fernando Wirtz (en progreso 28%)",techs:["JAVA", "HTML","CSS","XML"], 
    },

    {
        year: "2023", title: "Certified Tester Foundation Level (CTFL).", data: "ISTQB",techs:["Pruebas de Software"], image:require("../assets/istqb90px.png"), link:"https://www.credly.com/badges/05da2f16-55f7-4375-bb7d-ac4adbda0bd8/public_url"
    },
    
  
    {
        year: "2020", title: "Bootcamp de Programación Full Stack Javascript.", data: "Hack a Boss (400 horas)", techs:[
            "HTML", "CSS", "Javascript", "MySQL", "VUE", "NODE"]
    },
    {
        year: "2016", title: "Técnico Superior Prevención Riesgos Laborales.", data: "Univ. Camilo José Cela"
    },    
    {
        year: "2015", title: "Máster en Calidad y Medioambiente.", data: "Escuela Internacional de Negocios"
    },
    {
        year: "1997", title: "Licenciada en CC. Químicas.", data: "Universidade da Coruña"
    }
];

const anotherStudies= [
    {
        year: "2025", title: "Karate DSL: API Automation and Performance from Zero to Hero.", data: "Udemy"
    },

    {
        year: "2022", title: "Cypres: Automatización de pruebas de punta a punta.", data: "Udemy"
    },
    
    {
        year: "2020", title: "REACT.", data: "Hack a Boss"
    }
    
];

const languajes = [
    {
        languaje: "Inglés", level: "B2", data:"Escuela Oficial de Idiomas", description:"Escritura y lectura"
    },
    {
        languaje: "Alemán", level: "A1", data: "Centro de Linguas Universidade da Coruña", description:"Nociones básicas"
    },
    
];

const experience = [
    {
        period: "Ene.2021 - Actualidad", name: "Tecnologías Plexus", description: "QA Tester",techs:["Test manual", "SQL Server", "M.Azure", "Postman", "Métodología Agile", "Karate Framework"]
    },
    {
        period: "Feb.2016 - Nov.2019", name: "PFS Grupo", description: "Consultoría Calidad y Medioambiente, entre otros",techs:[]
    },
    {
        period: "Feb.2001 - Nov.2014", name: "AT Innovaxest", description: "Consultoría Calidad y Mediambiente, entre otros",techs:[]
    },
    {
        period: "Feb.2000 - Ene.2001", name: "Teais, S.A.", description: "Responsable de Calidad",techs:[]
    }
];

const projects =[
    {
        id:1, date:"Dic.2020", title: "Juniors", techs:[ "HTML", "CSS", "Javascript", "REACT", "NEXT"], 
        links:{code:"#",video:"#",web:"#"},
        aditional:[
            {title: "Objetivos", p1:"Práctica de plataforma sencilla para mostrar información de alumnos de Hack a Boss.",p2: "Proyecto colaborativo desarrollado por varios exalumnos de Hack a Boss",p3:""},
            
            {title: "Dificultades", p1:"Coordinación del trabajo entre varias personas totalmente en remoto", p2:"", p3:""},
            
    
    ]},
    {
        id:2, date:"Nov.2020", title: "Dvinos", techs:["HTML", "CSS", "Javascript", "REACT"], 
        links:{code:"https://github.com/RaquelCanosa2020/DVINOS_REACT",video:"#", web:"https://dvinosprueba.netlify.app"},
        aditional:[
            {title: "Objetivos", p1:"Desarrollar una web sencilla que simule un ecommerce de vinos (salvo plataforma de pagos)",p2: "El objetivo era poner en práctica los conocimientos adquiridos de REACT",p3:""},
            {title: "Dificultades", p1:"La aplicación de los principios básicos de REACT tras una formación de 20 horas", p2: "", p3:""},
            {title: "Retos", p1:"Además del listado de productos, desarrollar un buscador y un carrito de compras", p2:"Conseguir la adecuada reactividad de la página", p3:""},
            {title: "Conseguido", p1:"Conseguí implantar lo previsto, mediante el uso de Contexto y de los distintos hooks de REACT", p2: "", p3:""},
            {title: "A mejorar", p1: "", p2: "Desarrollar la parte de administrador", p3:"Desarrollar el sistema de usuarios, implantando el necesario backend para ello."}
        ]},
    {
        id:3, date:"Jul.- Sept.2020", title: "Galiplaya", techs:[ "HTML", "CSS", "Javascript", "MySQL", "VUE", "NODE", "EXPRESS", "AXIOS"], 
        links:{code:"https://github.com/RaquelCanosa2020/proyecto",video:"https://drive.google.com/file/d/1ZZ93tp3L17ZKbo2MKg9vfdF6vWzp6ym3/view?usp=sharing",web:"#"},
        aditional:[
        {title: "Objetivos", p1:"Implementar una web simulada, pero plenamente funcional, que incluyera un sistema de reserva de espacio en playas previo registro del usuario.",p2: "Era fundamental un buscador avanzado de playas por diferentes criterios, incluida la fecha, así como el control del aforo",p3:""},
        {title: "Dificultades",p1:"La gestión de las fechas y el adecuado control de la disponibilidad mediante consultas a la base de datos para obtener el dato correcto.", p2: "El proyecto fue individual, aunque contando con la ayuda del profesorado cuando fue necesario, y la colaboración entre compañeros del bootcamp a la hora de resolver obtáculos comunes en este tipo de proyectos", p3:""},
        {title: "Retos", p1:"Dada la naturaleza del proyecto, me pareció apropiado poder dar información meteorológica para la fecha seleccionada por el usuario, para ello, la web se encontraba conectada a la API de Meteogalicia", p2:"Para los datos de las playas, también se utilicé una API real del Miteco, de una selección inicial de playas", p3:"Adicionalmente, incluí un link personalizado a GoogleMaps de cada playa y sus coordenadas geográficas, obtenidas también de la API del Ministerio. Usé AXIOS en ambos casos"},
        {title: "Conseguido",p1:"El proyecto cumplió con los requisitos exigidos por el profesorado de Hack a Boss. El uso de VUE que le confirió bastante reactividad a la web", p2: "Además de lo ya expuesto, se implantó el sistema de registro y login de usuarios, y una parte específica para el Administrador.", p3:""},
        {title: "A mejorar", p1: "Mejorar el código del frontend y, sobre todo, el diseño", p2: "Mejorar criterios de accesibilidad", p3:""}
    ]}
];

const functionalities =[
{
    img:"", description:"Búsqueda simple (nombre de la playa) desde la Home"
},
{
    img:"", description:"Búsqueda avanzada por localización, servicios, disponibilidad según fecha"
},
{
    img:"", description:"Resultado gráfico (VUE Chartkick) y numérico"
},
{
    img:"", description:"Información completa de la playa y sus servicios, valoraciones y fotografías de los usuarios"
},
{
    img:"", description:"Pronóstico meteorológico real para la fecha seleccionada o la fecha actual"
},
{
    img:"", description:"Link personalizado a GoogleMaps (coordenadas API Miteco)"
},
{
    img:"", description:"Sistema de reservas, previa comprobación de la disponibilidad"
},
{
    img:"", description:"Envío de correo de confirmación al usuario."
},
{
    img:"", description:"Alta y validación de nuevos usuarios."
},
{
    img:"", description:"Login de usuarios registrados. Reseteo de contraseña por olvido."
},
{
    img:"", description:"Área del usuario, desde la que puede modificar sus datos, avatar, contraseña, correo electrónico."
},
{
    img:"", description:"El usuario puede anular la visita hasta 24 horas antes y votarla sólo una vez trancurrida la fecha."
},
{
    img:"", description:"El usuario puede ver las playas a las que ha ido, volver a reservarlas, ver la media de sus votaciones."
},
{
    img:"", description:"El usuario puede ver, subir y borrar sus fotografías de las playas."
},
]
    


   module.exports = {aptitudes, programming, anotherStudies, languajes, experience, projects, functionalities};
   
