<template>
    <div>
        <ul>
            <li v-for=" course in courses" :key="course.id">
              
               <p id="left"> {{course.year}}</p>
               
               <section>
                   
                    <p> <strong>{{course.title}}</strong> </p>
                <p>{{course.data}}</p>
              
                <p v-if="course.tech">
                    <technologiescustom :techs="techs"/>
                </p>
               </section>
               
                </li>
        </ul> 
    </div>
</template>

<script>
import {technologies1} from "@/api/api.js";
import technologiescustom from "@/components/TechnologiesCustom";

export default {
    name: "trainingcustom",
    components:{
        technologiescustom
    },
    props:{
        courses: Array,
    },
    data(){
        return {
            techs : technologies1
        }
    }
}
</script>
<style scoped>
ul{
    list-style: none;
    padding-left:0;
}

li{
    display: flex;
}

p#left{
    margin-right: 0.5rem;
}
</style>