<template>
    <div>
        <ul>
            <li v-for=" course in courses" :key="course.id">
              
               <p id="left"> {{course.year}}</p>
               
               <section>
                   
                    <p> <strong>{{course.title}}</strong> {{course.data}}</p>

                    <div class="courseData">

                    <p v-if="course.techs">
                        <technologiescustom :techs="course.techs"/>
                    </p>
                    <p id="courseImage" v-if="course.image">
                       <a :href="course.link"> <img id="courseImage" :src="course.image"/></a>
                       </p>
                    
                    </div>
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

div.courseData{
    display: flex;
}

div.courseData p#courseImage{
    margin-left: 20px;
}

img#courseImage{
        width: 60px;
    }

@media (min-width: 1025px){
    img#courseImage{
        width: 90px;
    }
}
</style>