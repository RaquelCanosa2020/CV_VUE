<template>
    <div>
        <ul>
            <li v-for=" lang in langs" :key="lang.id">

                <section>

               <article>
                    <p class="pill"> {{lang.languaje}}</p>
                    <p class="pill">{{lang.level}}</p>
                     
                </article>
                

                <!--<levelcustom :level="lang.level"/>-->

                <div id="data">
                
                
                <p>{{ lang.data }}</p>
                <p>{{ lang.description }}</p>
                </div>
               

                </section>

                <section></section>

                
                
                

            </li>
        </ul> 
    </div>
</template>

<script>
//import levelcustom from '@/components/LevelCustom.vue'
export default {
    //components: {levelcustom},
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
    flex-direction: column;
    justify-content: flex-start;
    align-items:flex-start;
    margin-top: 1rem;
}

section{

    display: flex;
    justify-content: flex-start;
    align-items: center;
}

#data{

    display:flex;
    flex-direction: column;
}

#data > p {

    margin:0;
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

p.pill{
    font-weight: 600;
    margin-right: 5px;
    font-size: 0.6rem;
}

@media (min-width: 700px){

    article{
        width: 90px;
    }

    p.pill{       
        font-size: 0.9rem;
    }
}

@media (min-width: 1000px){

    article{
        width: 150px;
    }

    
    li{
        margin-top: 2rem;
    }
    p.pill{       
        font-size: 1.2rem;
    }
}
</style>