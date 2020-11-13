const aptitudes = ["Persistencia en la resolución de problemas",
    "Capacidad de aprendizaje",
    "Flexibilidad y capacidad de adaptación",
    "Orientación al cliente y a la mejora"];

const academic = [
    {
        year: "2020", title: "Bootcamp de Programación Full Stack Javascript.", data: "Hack a Boss (400 horas).", tech: true
    },
    {
        year: "2016", title: "Técnico Superior Prevención Riesgos Laborales.", data: "Univ. Camilo José Cela."
    },
    {
        year: "1997", title: "Licenciada en CC. Químicas.", data: "Universidade da Coruña."
    },
];

const complementary = [
    {
        year: "2020", title: "REACT.", data: "Hack a Boss."
    },
    {
        year: "2016", title: "Introducción al Desarrollo Web.", data: "Plataforma Actívate (Google). Universidad de Valencia."
    },
    {
        year: "2015", title: "Máster en Calidad y Medioambiente.", data: "Escuela Internacional de Negocios."
    },
];

const languajes = [
    {
        languaje: "Inglés:", level: "B2."
    },
    {
        languaje: "Alemán:", level: "A1."
    },
    
];

const technologies1 = [
    "HTML", "CSS", "JS", "MySQL", "VUE", "NODE"
    
];

const technologies2 = [
    "HTML", "CSS", "JS", "MySQL", "VUE", "NODE", "EXPRESS", "AXIOS"
    
];

const links ={link1:"/project" , link2: "https://drive.google.com/file/d/1ZZ93tp3L17ZKbo2MKg9vfdF6vWzp6ym3/view?usp=sharing", link3: "https://github.com/RaquelCanosa2020/proyecto"};


const experience = [
    
    {
        period: "Feb.2016 - Nov.2019", name: "PFS Grupo", description: "Consultoría Calidad, Medioambiente, Prevención y Protección de Datos Personales, entre otros."
    },
    {
        period: "Feb.2001 - Nov.2014", name: "AT Innovaxest.", description: "Consultoría Calidad, Mediambiente, Prevención, CdC, I+D+i."
    },
    {
        period: "Feb.1999 - Mar.2000", name: "Teais, S.A.", description: "Responsable de Calidad."
    },
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
    


   module.exports = {aptitudes, academic, complementary, languajes, technologies1, technologies2, links, experience, functionalities};
   
