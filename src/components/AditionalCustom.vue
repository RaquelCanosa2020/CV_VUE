<template>
    <div id="aditional">
        <section>
            <button class="item" :class="{marked: explain === 1}" @click="explain=1" >
                Objetivo
            </button>
            <button class="item" :class="{marked: explain === 2}" @click="explain=2">
                Dificultad
            </button>
            
            <button class="item" :class="{marked: explain === 3}" @click="explain=3">
                Reto
            </button>
            <button class="item" :class="{marked: explain === 4}" @click="explain=4">
                Conseguido
            </button>
             <button class="item" :class="{marked: explain === 5}" @click="explain=5">
                Mejoras
            </button>
            
        </section>
        <section id="two">
            <article v-if="explain === 1">
                <p>{{aditional.objective.p1}}</p>
                <p>{{aditional.objective.p2}} </p>
                <p>{{aditional.objective.p3}} </p>
            </article>
            
            <article v-if="explain === 2">
                <p>{{aditional.difficulties.p1}} </p>
                <p>{{aditional.difficulties.p2}} </p>
                <p>{{aditional.difficulties.p3}} </p>
            </article>
                              
            <article v-if="explain === 3">
                <p>{{aditional.challenges.p1}} </p>
                <p>{{aditional.challenges.p2}} </p>
                <p>{{aditional.challenges.p3}} </p>
            </article>
            
                   
            <article v-if="explain === 4">
                <p>{{aditional.goals.p1}} </p>
                <p>{{aditional.goals.p2}} </p>
                <p>{{aditional.goals.p3}} </p>
            </article>
            
                   
            <article v-if="explain === 5">
                <p>{{aditional.improvements.p1}} </p>
                <p>{{aditional.improvements.p2}} </p>
                <p>{{aditional.improvements.p3}} </p>
            </article>
            
        </section>
        

    </div>
</template>

<script>
export default {
    name: "aditionalcustom",
    props:{
        aditional: Object,
    },
    data(){
        return{
            explain: 1
        }
    }
    
}
</script>

<style scoped>
section{
    display: flex;
    margin-top: 1rem;
}
section#two{
    margin-top:0;
    width: 100%;
}

button.item{
    width: 25%;
    text-align: center;
    margin: 0rem;
    border: none;
    border-bottom: 1px solid lightgray;
    color:rgb(68, 68, 218);
    font-weight: 600;
    font-size: 0.5rem;
    padding: 0.2rem;
}

button:hover{
    cursor: pointer;
}

button.marked{
border: 1px solid lightgray;
border-bottom: none;

}

article{
    border: 1px solid lightgray;
    border-top: 0;
    padding: 0.5rem;
    width: 100%;
    
}

article > p{

    font-size: 0.7rem;
}
@media(min-width: 700px){


button.item, article > p{
    font-size: 0.8rem;
}
}
@media(min-width:1000px){


button.item, article > p{
    font-size: 1.3rem;
}
}

</style>