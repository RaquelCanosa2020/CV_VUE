const aptitudes = ["Persistencia en la resolución de problemas",
    "Capacidad de aprendizaje",
    "Flexibilidad y capacidad de adaptación",
    "Orientación al cliente y a la mejora"];

const programming = [
    {
        year: "2020", title: "Bootcamp de Programación Full Stack Javascript.", data: "Hack a Boss (400 horas).", techs:[
            "HTML", "CSS", "Javascript", "MySQL", "VUE", "NODE"]
    },
    {
        year: "2020", title: "REACT.", data: "Hack a Boss.", techs:["REACT"]
    },
    {
        year: "2016", title: "Introducción al Desarrollo Web.", data: "Plataforma Actívate (Google). Universidad de Valencia.",techs:["HTML"]
    },
];

const anotherStudies= [
    {
        year: "2016", title: "Técnico Superior Prevención Riesgos Laborales.", data: "Univ. Camilo José Cela."
    },    
    {
        year: "2015", title: "Máster en Calidad y Medioambiente.", data: "Escuela Internacional de Negocios."
    },
    {
        year: "1997", title: "Licenciada en CC. Químicas.", data: "Universidade da Coruña."
    }
];

const languajes = [
    {
        languaje: "Inglés:", level: "B2"
    },
    {
        languaje: "Alemán:", level: "A1"
    },
    
];

const experience = [
    {
        period: "Ene.2021 - Actualidad", name: "Tecnologías Plexus", description: "QA Tester."
    },
    {
        period: "Feb.2016 - Nov.2019", name: "PFS Grupo", description: "Consultoría Calidad, Medioambiente, Prevención y Protección de Datos Personales, entre otros."
    },
    {
        period: "Feb.2001 - Nov.2014", name: "AT Innovaxest.", description: "Consultoría Calidad, Mediambiente, Prevención, CdC, I+D+i."
    },
    {
        period: "Feb.2000 - Ene.2001", name: "Teais, S.A.", description: "Responsable de Calidad."
    }
];

const projects =[
    {
        id:1, date:"Dic.2020", title: "Juniors", techs:[ "HTML", "CSS", "Javascript", "REACT", "NEXT"], 
        links:{code:"#",video:"#",web:"#"},
        aditional:[
            {title: "Objetivos", p1:"Desarrollar una plataforma sencilla para mostrar información de alumnos de Hack a Boss, que facilite la búsqueda a las empresas.",p2: "Proyecto colaborativo desarrollado por varios exalumnos de Hack a Boss",p3:""},
             {title: "Dificultades", p1: "Uso del framework de React Next, que inicialmente desconocía.", p2: "Se fueron superando todas las dificultades gracias al constante trabajo en equipo, y a la ayuda inicial de Hack a Boss, sobre el uso de Next y sobre las preferencias de las empresas." , p3:""},
            {title: "Retos", p1:"Realizar un diseño suficientemente atractivo y que siguiera las directrices de estilo de la empresa, y las mejores prácticas posibles de usabilidad", p2:"", p3:""},
            {title: "Conseguido", p1:"Se elaboró una plataforma sencilla e intuitiva, el proyecto está próxima a su finalización en espera de la aprobación por parte de la empresa ", p2: "", p3:""},
            {title: "Mejoras", p1: "A futuro se plantea la implantación de un buscador avanzado que permita seleccionar juniors según varios criterios.", p2: "", p3:""}
    
    ]},
    {
        id:2, date:"Nov.2020", title: "Dvinos", techs:["HTML", "CSS", "Javascript", "REACT"], 
        links:{code:"https://github.com/RaquelCanosa2020/DVINOS_REACT",video:"#", web:"https://dvinosprueba.netlify.app"},
        aditional:[
            {title: "Objetivos", p1:"Desarrollar una web sencilla que simule un ecommerce de vinos (salvo plataforma de pagos)",p2: "El objetivo era poner en práctica los conocimientos adquiridos de REACT",p3:""},
            {title: "Dificultades", p1:"La aplicación de los principios básicos de REACT tras una formación de 20 horas", p2: "", p3:""},
            {title: "Retos", p1:"Además del listado de productos, desarrollar un buscador y un carrito de compras", p2:"Conseguir la adecuada reactividad de la página", p3:""},
            {title: "Conseguido", p1:"Conseguí implantar lo previsto, mediante el uso de Contexto y de los distintos hooks de REACT", p2: "", p3:""},
            {title: "Mejoras", p1: "Es un proyecto a largo plazo que utilizaré para seguir mejorando en este framework", p2: "Mi intención es desarrollar la parte de administrador", p3:"También tengo intención de desarrollar el sistema de usuarios, implantando el necesario backend para ello."}
        ]},
    {
        id:3, date:"Jul.- Sept.2020", title: "Galiplaya", techs:[ "HTML", "CSS", "Javascript", "MySQL", "VUE", "NODE", "EXPRESS", "AXIOS"], 
        links:{code:"https://github.com/RaquelCanosa2020/proyecto",video:"https://drive.google.com/file/d/1ZZ93tp3L17ZKbo2MKg9vfdF6vWzp6ym3/view?usp=sharing",web:"#"},
        aditional:[
        {title: "Objetivos", p1:"Implementar una web simulada, pero plenamente funcional, que incluyera un sistema de reserva de espacio en playas previo registro del usuario.",p2: "Era fundamental un buscador avanzado de playas por diferentes criterios, incluida la fecha, así como el control del aforo",p3:""},
        {title: "Dificultades",p1:"La gestión de las fechas y el adecuado control de la disponibilidad mediante consultas a la base de datos para obtener el dato correcto.", p2: "Muchas horas de trabajo individual pero también con mis compañeros de bootcamp (de forma remota, dada la situación COVID) y consultas al profesorado nos han permitido superar los obstáculos", p3:""},
        {title: "Retos", p1:"Dada la naturaleza del proyecto, me pareció apropiado poder dar información meteorológica para la fecha seleccionada por el usuario, para ello, la web se encuentra conectada a la API de Meteogalicia", p2:"Para los datos de las playas, también se ha utilizado una API real del Miteco, de una selección inicial de playas", p3:"Adicionalmente, he incluido un link personalizado a GoogleMaps de cada playa y sus coordenadas geográficas, obtenidas también de la API del Ministerio. He utilizado AXIOS en ambos casos"},
        {title: "Conseguido",p1:"El proyecto cumplió con los requisitos exigidos por el profesorado de Hack a Boss, y las funcionalidades añadidas pienso que son un valor añadido. El uso de VUE que le ha conferido bastante reactividad a la web", p2: "Además de lo ya expuesto, se implantó el sistema de registro y login de usuarios, y una parte específica para el Administrador.", p3:""},
        {title: "Mejoras", p1: "Dado que es mi primer proyecto, realizado tras sólo cuatro meses de curso, sé que hay mucho que mejorar, optimizando más el código del frontend y, sobre todo, mejorando el diseño", p2: "La web es responsive, pero me gustaría mejorar la accesibilidad y el aspecto general de la misma.", p3:""}
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
   
