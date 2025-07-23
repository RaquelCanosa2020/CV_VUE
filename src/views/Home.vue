<template>

  <div class="home">

    <div class="group">

      <section id="objective">
      
        <h3>
          
        Objetivo profesional 
        </h3>
        <p>
          Desarrollarme como programadora y/o tester, formando parte de un equipo al que pueda aportar las habilidades adquiridas por mi experiencia profesional
          anterior.
        </p>
      
      </section>

      <section id="aptitudes">
       <h3>
         Aptitudes
        </h3>
        <aptitudcustom :aptitudes="aptitudes"/>
      </section>

    </div>

   
    <section>
    
       <h3>
          Experiencia profesional


        </h3>
        <experiencecustom :experiences="experiences"/>
       
      </section>
      <section>
      <h3>
         Formación relevante
        </h3>
        <trainingcustom :courses="programming" />
      </section>

  <!--

      <section>
        <h3>
          Prácticas Programación
        </h3>

        <projectscustom :projects="projects"/> 
    
      </section>-->
      <section>
       <h3>
         Otra formación
        </h3>

        <trainingcustom :courses="anotherStudies"/>
        </section>
      <section>
    
       <h3>
        Idiomas
        </h3>

        <languajescustom :langs="languajes"/>
      </section>
      
      
    
    
    
  </div>
  
</template>

<script>
import aptitudcustom from "@/components/AptitudCustom";
import trainingcustom from "@/components/TrainingCustom";
import languajescustom from "@/components/LanguajesCustom";
import experiencecustom from "@/components/ExperienceCustom";
//import projectscustom from "@/components/ProjectsCustom";

import {aptitudes, programming, anotherStudies, languajes, experience, projects} from "@/api/api.js";


export default {
  name: 'Home',
  components:{
    aptitudcustom,
    trainingcustom,
    languajescustom,
    experiencecustom,
   // projectscustom
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


h3{
  color: rgb(68, 68, 218);
  
}


section{
  margin: 2rem 2rem 1rem 2rem;
  text-align: left;
}

@media (min-width: 700px){
  div.home{
    padding: 1rem;
  }

  
}

@media (min-width: 1025px){
  div.group{
    display: flex;
    
    margin:0;
  }

  div.group1 {

    width: 100%;
  }

  div.group section{
    width: 50%;
    margin-top: 1rem;
  }

  section{
    width: 100%;
    display:flex;
  }

  section#objective, section#aptitudes {

    flex-direction: column;
  }

  img{
    width: 50px;
}
  h3{

    width: 500px;
  }
}





</style>