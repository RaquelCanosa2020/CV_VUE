<template>
    <div>
        <ul>
            <li v-for=" tech in techs" :key="tech.id">
               {{tech}}
            </li>
        </ul> 

    </div>
</template>

<script>


export default {
    name: "techonologiescustom",
    
    props:{
        techs: Array,
        index: Number
    },
    
}
</script>

<style scoped>
ul{
    list-style: none;
    padding-left:0;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
}

li{
    padding: 0.5rem;
    margin: 0.3rem;
    background-color:  rgb(68, 68, 218);
    color: white;
    border-radius: 1em;
    text-align: center;
    font-weight: 600;
    font-size: 0.6rem;
    width: auto;
    min-width:60px;
}

@media (min-width: 700px){
    li{
        font-size: 0.9rem;
        
    }
}

@media (min-width: 1000px){
    li{
        width: 120px;
        font-size: 1.2rem;
    }
    
}
</style>