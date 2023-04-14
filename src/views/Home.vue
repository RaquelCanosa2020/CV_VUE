<template>

  <div class="home">

    <div class="group">

      <section id="objective">
      
        <h3>
          <img src="../assets/orientacion.png" alt="diana"/>
         <span> Objetivo profesional </span>
        </h3>
        <p>
          Desarrollarme como programadora y/o tester, formando parte de un equipo al que pueda aportar las habilidades adquiridas por mi experiencia profesional
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
          <img src="../assets/codificacion.png" alt="pantalla con código"/> <span>Formación programación / testing</span>
        </h3>
        <trainingcustom :courses="programming"/>
      </section>

      <section>
       <h3>
          <img src="../assets/libro-electronico.png" alt="libro-electronico"/> <span>Otra formación</span>
        </h3>

        <trainingcustom :courses="anotherStudies"/>
    
       <h3>
          <img src="../assets/traducir.png" alt="letras" /> <span>Idiomas</span>
        </h3>

        <languajescustom :langs="languajes"/>
      </section>

    </div>

    <div class="group">

      <section>
        <h3>
          <img src="../assets/startup.png" alt="pantalla con cohete"/> <span>Prácticas Programación</span>
        </h3>

        <projectscustom :projects="projects"/>
    
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
import projectscustom from "@/components/ProjectsCustom";

import {aptitudes, programming, anotherStudies, languajes, experience, projects} from "@/api/api.js";


export default {
  name: 'Home',
  components:{
    aptitudcustom,
    trainingcustom,
    languajescustom,
    experiencecustom,
    projectscustom
  },
  data(){
    return{
      aptitudes: aptitudes,
      programming: programming,
      anotherStudies: anotherStudies,
      languajes: languajes,
      experiences: experience,
      projects: projects
     }
  }
}

</script>

<style scoped>
img{
  width: 30px;
}

h3{
  border-bottom: 2px solid  rgb(68, 68, 218);
}


section{
  margin: 2rem 2rem 1rem 2rem;
  text-align: left;
}

@media (min-width: 700px){
  div.home{
    padding: 1rem;
  }

  img{
    width: 40px;
  }
}

@media (min-width: 1025px){
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





</style>