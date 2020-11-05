<template>
    <div>
        <ul>
            <li v-for=" lang in langs" :key="lang.id">
               <p> {{lang.languaje}}</p>
                <p> {{lang.level}}</p>
               
                </li>
        </ul> 

    </div>
</template>

<script>
export default {
    name: "languajescustom",
    props:{
        langs: Array,
    }
}
</script>
<style scoped>
ul{
    list-style: none;
    display: flex;
}

li{
    display: flex;
    padding: 0.5rem;
    margin: 0.5rem;
    background-color:  rgb(68, 68, 218);
    color: white;
    border-radius: 1em;
    min-width: 20%;
    text-align: center;
}

p{
    font-weight: 600;
}
</style>