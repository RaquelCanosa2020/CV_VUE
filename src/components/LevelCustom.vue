<template>
    <div>
        <ul class="levels">
            <li :class="number" v-for="number in numbers" :key="number.id" :value="number">
                {{number}}
            </li>
        </ul>

        </div>
</template>

<script>
export default {
    name: "levelcustom",
    props:{
        level: String,
    },
    data(){
        return{
            numbers:[]
        }
    },
    computed:{

        getLevelNumber(){
            const levels = ["A1", "A2", "B1", "B2", "C1", "C2"];
            let levelNumber = levels.findIndex((item)=>item === this.level) + 1;
            return levelNumber;
        }
    },

    methods:{
    getNumber(level) {
      let arrayNumber = [];
      let item;
      for (let number = 1; number <= 6; number++) {
       number <= level ? item = "A" : item = "B"
       arrayNumber.push(item);}
      
      this.numbers = arrayNumber;
    },
    },

    created(){
        this.getNumber(this.getLevelNumber);
    }
}
</script>

<style scoped>

ul.levels{
	/* width: 180px; */
	display: flex;
	list-style: none;
    padding:0;
}
ul.levels > li{
	font-size: 0rem;
	border-radius: 50%;
    width: 15px;
	height: 15px;
	margin-left: 0.2rem;
}
ul.levels > li.A{
	background-color:rgb(68, 68, 218);
}
ul.levels > li.B{
	background-color: gray;
}

@media (min-width: 700px){

    ul.levels > li
{
    width: 25px;
	height: 25px;
	margin-left: 0.2rem;
    }
    
}

@media (min-width: 1000px){

    ul.levels > li
{
    
    width: 30px;
	height: 30px;
	margin-left: 0.4rem;
    }
    
}

</style>