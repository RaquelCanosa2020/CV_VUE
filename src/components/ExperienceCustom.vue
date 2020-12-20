<template>
    <div class="all">
        
            <div id="experience" v-for=" experience in experiences" :key="experience.id">
                <p id="first"> {{experience.period}} <strong>{{experience.name}}</strong></p>
                <p> {{experience.description}}</p>
            </div>
        
    </div>
</template>

<script>


export default {
    name: "trainingcustom",
    
    props:{
        experiences: Array,
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