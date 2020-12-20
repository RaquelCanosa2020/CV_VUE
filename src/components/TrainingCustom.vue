<template>
    <div>
        <ul>
            <li v-for=" course in courses" :key="course.id">
              
               <p id="left"> {{course.year}}</p>
               
               <section>
                   
                    <p> <strong>{{course.title}}</strong> {{course.data}}</p>

                    <p v-if="course.techs">
                        <technologiescustom :techs="course.techs"/>
                    </p>

               </section>
               
            </li>
        </ul> 
    </div>
</template>

<script>

import technologiescustom from "@/components/TechnologiesCustom";

export default {
    name: "trainingcustom",
    components:{
        technologiescustom
    },
    props:{
        courses: Array,
    },
    
    
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