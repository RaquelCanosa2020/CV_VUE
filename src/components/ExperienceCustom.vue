<template>
    <div class="all">
        
            <div id="experience" v-for=" experience in experiences" :key="experience.id">
                <p id="first"> {{experience.period}} <strong>{{experience.name}}</strong></p>
                <p> {{experience.description}}</p>
                <technologiescustom :techs="experience.techs" />
            </div>

            
        
    </div>
</template>

<script>
import technologiescustom from "@/components/TechnologiesCustom";

export default {
    name: "experiencecustom",
    
    props:{
        experiences: Array,
    },
    components:{
    technologiescustom
  },
    
}
</script>
<style scoped>

div#experience{
  padding-top: 0.5rem;  
}
ul{
    list-style: none;
}

/* section{
display: flex;
justify-content: space-around;
margin-bottom: 2rem;
} */

p#first{
    text-decoration: underline;
}

</style>