<template>
    <div id="aditional">
        <section>
            <button class="item" :class="{marked: explain === 1}" @click="explain=1" >
                Objetivo
            </button>
            <button class="item" :class="{marked: explain === 2}" @click="explain=2">
                Dificultad
            </button>
            
            <button class="item" :class="{marked: explain === 3}" @click="explain=3">
                Reto
            </button>
            <button class="item" :class="{marked: explain === 4}" @click="explain=4">
                Conseguido
            </button>
             <button class="item" :class="{marked: explain === 5}" @click="explain=5">
                Mejoras
            </button>
            
        </section>
        <section id="two">
            <article v-if="explain === 1">
                <p>
                    Implementar una web simulada, pero plenamente funcional,
                    que incluyera un <strong>sistema de reserva de espacio en playas</strong> previo registro del usuario. 
                  </p>
                  <p>Era fundamental un <strong>buscador avanzado</strong> de playas por diferentes criterios, incluida la fecha, así como el <strong>control del aforo</strong></p>
            </article>
            
            <article v-if="explain === 2">
                <p>
                    <strong>La gestión de las fechas.</strong> y el adecuado control de la disponibilidad mediante <strong>consultas a la base de datos</strong>, para obtener el dato correcto. 
                    </p>
                  
                  <p>Muchas horas de trabajo individual pero también
                    con mis compañeros de bootcamp (de forma remota, dada la situación COVID) y consultas al profesorado nos han permitido superar
                    los obstáculos.
                  </p>
            </article>
            
                  
            <article v-if="explain === 3">
                <p>
                    Dada la naturaleza del proyecto, me pareció apropiado poder dar <strong>información meteorológica</strong>
                    para la fecha seleccionada por el usuario, para ello, la web se encuentra conectada a la API de Meteogalicia.
                    </p>
                  <p>
                    Para los datos de las playas, también se ha utilizado una API real del Miteco, de una selección inicial de playas.
                    </p>
                  <p>
                    Adicionalmente, he incluido un link personalizado a <strong>GoogleMaps </strong>de cada playa y sus coordenadas geográficas, obtenidas
                    también de la API del Ministerio. He utilizado AXIOS en ambos casos.
                  </p>
            </article>
            
                   
            <article v-if="explain === 4">
                <p>
                    El proyecto cumplió con los requisitos exigidos por el profesorado de Hack a Boss, y las funcionalidades añadidas pienso
                    que son un valor añadido. 
                    </p>
                  <p>El uso de <strong>VUE</strong> en el frontend creo que le ha conferido bastante reactividad a la web. 
                    </p>
                  <p>Además de lo ya expuesto, se implantó el sistema de <strong>registro y login de usuarios</strong>, y una parte específica para el <strong>Administrador.</strong>
                  </p>
            </article>
            
                   
            <article v-if="explain === 5">
                <p>
                    Dado que es mi primer proyecto, realizado tras sólo cuatro meses de curso, sé que hay
                    mucho que mejorar, optimizando más el código del frontend y, sobre todo, mejorando el diseño. 
                    </p>
                  <p>La web es responsive, pero me gustaría mejorar
                    la accesibilidad y el aspecto general de la misma.
                  </p>
            </article>
            
        </section>
        

    </div>
</template>

<script>
export default {
    name: "aditionalcustom",
    data(){
        return{
            explain: false
        }
    }
    
}
</script>

<style scoped>
section{
    display: flex;
    margin-top: 1rem;
}
section#two{
    margin-top:0;
}

button.item{
    width: 25%;
    text-align: center;
    margin: 0rem;
    border: none;
    border-bottom: 1px solid rgb(68, 68, 218);
    color:rgb(68, 68, 218);
    font-weight: 600;
    font-size: 0.5rem;
    padding: 0.2rem;
}

button:hover{
    cursor: pointer;
}

button.marked{
border: 1px solid rgb(68, 68, 218);
border-bottom: none;

}

article{
    border: 1px solid rgb(68, 68, 218);
    border-top: 0;
    padding: 0.5rem;
    
}

article > p{

    font-size: 0.7rem;
}
@media(min-width: 700px){


button.item, article > p{
    font-size: 0.8rem;
}
}
@media(min-width:1000px){


button.item, article > p{
    font-size: 1.3rem;
}
}

</style>