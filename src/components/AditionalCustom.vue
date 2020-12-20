<template>
    <div id="aditional">
        <section >
            <button v-for="(object, index) of aditional" :key="object.id" class="item" :class="{marked: explain === index+1}" @click="explain=index+1">
                {{object.title}}
            </button>
            
       </section>

        <section id="two" v-for="(object, index) of aditional" :key="object.id">
            <article v-if="explain === index+1">
                <p>{{aditional[index].p1}}</p>
                <p>{{aditional[index].p2}} </p>
                <p>{{aditional[index].p3}} </p>
            </article>
        </section>
        

    </div>
</template>

<script>
export default {
    name: "aditionalcustom",
    props:{
        aditional: Array,
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
    border-bottom: 1px solid rgb(148, 146, 146);
    color:rgb(68, 68, 218);
    font-weight: 600;
    font-size: 0.5rem;
    padding: 0.2rem;
}

button:hover{
    cursor: pointer;
    background-color: gray;
}

button.marked{
border: 1px solid rgb(148, 146, 146);
border-bottom: none;
background-color:  lightgray;
}

article{
    border: 1px solid rgb(148, 146, 146);
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