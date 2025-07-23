<template>
    <div>
        <ul>
            <li v-for=" lang in langs" :key="lang.id">

               <article>
                    <p> {{lang.languaje}}</p>
                    <p> {{lang.level}}</p>
                </article>

                <levelcustom :level="lang.level"/>

            </li>
        </ul> 
    </div>
</template>

<script>
import levelcustom from '@/components/LevelCustom.vue'
export default {
    components: {levelcustom},
    name: "languajescustom",
    props:{
        langs: Array,
    }
    
}
</script>

<style scoped>
ul{
    list-style: none;
    padding:0;
}

li{
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

article{
    display: flex;
    justify-content: center;
    padding: 0rem 0.2rem;
    margin: 0.5rem;
    background-color:  rgb(68, 68, 218);
    color: white;
    border-radius: 1em;
    width: 60px;
}

p{
    font-weight: 600;
    margin-right: 5px;
    font-size: 0.7rem;
}

@media (min-width: 700px){

    article{
        width: 90px;
    }

    p{       
        font-size: 1rem;
    }
}

@media (min-width: 1000px){

    article{
        width: 150px;
    }

    p{
        font-size: 1.5rem;
    }
    
}
</style>