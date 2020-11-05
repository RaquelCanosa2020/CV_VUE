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
    },
    
}
</script>

<style scoped>
ul{
    list-style: none;
    padding-left:0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

li{
    padding: 0.5rem;
    margin: 0.5rem;
    background-color:  rgb(68, 68, 218);
    color: white;
    border-radius: 1em;
    min-width: 20%;
    text-align: center;
    font-weight: 600;
}
</style>