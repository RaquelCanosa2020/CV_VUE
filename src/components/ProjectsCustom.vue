<template>
    <div class="projects">
        <div class="oneproject" v-for="(project, index) in projects" :key="project.id">

          <article id="link">
            <p id="web">★ {{project.date}} <strong>{{project.title}}</strong></p>   

            <technologiescustom :techs="project.techs" />

            <button class="info" @click="getWord(index)" v-if="aditional !== index">Info></button>
            <button class="info" @click="getWord(index)" v-if="aditional === index">Ocultar></button>
            <a class="linkproject" target="_blank" v-show="project.links.video !== '#'" :href="project.links.video">Vídeo ></a>
            <a class="linkproject" target="_blank" v-show="project.links.code !== '#'" :href="project.links.code">Código ></a>
            <a class="linkproject" target="_blank" v-show="project.links.web !== '#'" :href="project.links.web">Web ></a>
          </article>

          <article v-if="aditional === index">
            <aditionalcustom :aditional="project.aditional"/>
          </article>

        </div>
    </div>
</template>

<script>
import technologiescustom from "@/components/TechnologiesCustom";
import aditionalcustom from "@/components/AditionalCustom";

export default {
    name: "projectscustom",
    components:{
    technologiescustom,
    aditionalcustom
  },
    
    props:{
        projects: Array,
    },
    data(){
    return{
      aditional: null
      
     }
  },
  
  methods:{
    getWord(index){
      this.aditional === index ? this.aditional= null : this.aditional = index
      }
  }  
}
</script>

<style scoped>

div.oneproject{
  padding: 0.5rem;  
  margin-bottom: 1rem;
  border: 1px solid lightgray;
}

button.info, a.linkproject{
  font-size: 0.7rem;
  color: rgb(68, 68, 218);
  margin: 0 0.5rem;
}

button.info{
  border: none;
  background-color: #ffffff;
  text-decoration: underline;
  padding: 0;
}


@media (min-width: 700px){

  button.info, a.linkproject{
  font-size: 1rem;
}
}

@media (min-width: 1000px){

    button#info, a.linkproject{
    font-size: 1rem;
  }
    
}


</style>