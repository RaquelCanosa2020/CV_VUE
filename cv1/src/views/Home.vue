<template>
  <div class="home">
    <div class="group">
    <section id="objective">
      
        <h3>
          <img src="../assets/orientacion.png" alt="diana"/>
         <span> Objetivo profesional </span>
        </h3>
        <p>
          Desarrollarme como programadora, formando parte de un equipo al que pueda aportar las habilidades adquiridas por mi experiencia profesional
          anterior.
        </p>
      
    </section>
    <section id="aptitudes">
       <h3>
          <img src="../assets/idea.png" alt="bombilla"/> <span>Aptitudes</span>
        </h3>
        <aptitudcustom :aptitudes="aptitudes"/>
    </section>
    </div>
    <div class="group">
    <section>
      <h3>
          <img src="../assets/libro.png" alt="libro"/> <span>Formación académica</span>
        </h3>
        <trainingcustom :courses="academic"/>
    </section>
    <section>
       <h3>
          <img src="../assets/libro-electronico.png" alt="libro-electronico"/> <span>Formación complementaria</span>
        </h3>

        <trainingcustom :courses="complementary"/>
    
       <h3>
          <img src="../assets/traducir.png"/> <span>Idiomas</span>
        </h3>
        <languajescustom :langs="languajes"/>
    </section>
    </div>
    <div class="group">
      <section>
    <h3>
          <img src="../assets/codificacion.png" alt="codigo"/> <span>Proyecto fin de Bootcamp</span>
        </h3>
      <p>De julio a septiembre 2020. Web de reserva de espacio en playas</p>
      <technologiescustom :techs="techs"/>

      <article id="link">
        <button id="info" @click="getWord">{{word}} info</button>
        <a id="video" :href="links.link2">Ver vídeo</a>
        <a id="code" :href="links.link3">Código</a>
      </article>

  <article v-if="aditional">
    <aditionalcustom/>
  </article>

      </section>
      
    <section>
    
       <h3>
          <img src="../assets/maleta.png" alt="maletin"/> <span>Experiencia profesional</span>
        </h3>
        <experiencecustom :experiences="experiences"/>
       
    </section>
    
    </div>
    
  </div>
</template>

<script>
import aptitudcustom from "@/components/AptitudCustom";
import trainingcustom from "@/components/TrainingCustom";
import languajescustom from "@/components/LanguajesCustom";
import experiencecustom from "@/components/ExperienceCustom";
import technologiescustom from "@/components/TechnologiesCustom";
import aditionalcustom from "@/components/AditionalCustom"

import {aptitudes, academic, complementary, languajes, experience, links, technologies2} from "@/api/api.js";

export default {
  name: 'Home',
  components:{
    aptitudcustom,
    trainingcustom,
    languajescustom,
    experiencecustom,
    technologiescustom,
    aditionalcustom
    
  },
  data(){
    return{
      aptitudes: aptitudes,
      academic: academic,
      complementary: complementary,
      languajes: languajes,
      experiences: experience,
      links: links,
      techs : technologies2,
      aditional: false,
      word: "Más"
     }
  },
  methods:{
    getWord(){
      this.aditional = ! this.aditional;
      this.aditional ? this.word = "Menos" : this.word = "Más";
     
    }
  },
  
}

</script>

<style scoped>
img{
  width: 40px;
    
}

h3{
  border-bottom: 2px solid  rgba(68, 68, 218, 0.486);
}


section{
    margin: 2rem 2rem 1rem 2rem;
    text-align: left;
}
article#link{
  display: flex;
  justify-content: space-around;

}
button#info{
  color: rgb(68, 68, 218);
}

@media (min-width: 700px){
  div.group{
  display: flex;
  margin:0;
  }
  section{
    width: 50%;
    margin-top: 1rem;
  }
  section#experience{
    width: 100%;
  }
  img{
  width: 50px;
    
}
}
@media (min-width: 1000px){
  
  img{
  width: 80px;
    
}
}





</style>