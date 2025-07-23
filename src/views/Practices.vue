<template>
  <div class="practices">
  
    <section>
        <h3>
          Prácticas Programación
        </h3>

        <projectscustom :projects="projects"/>
    
      </section>

  </div>
</template>

<script>


export default {
  name: "Practices",
  
}
</script>

<style scoped>

div.about{
  color: rgb(68, 68, 218);
  text-align:center;
  min-height: 100vh;
  margin-bottom: 3rem;
}

div.about > ul#advice{
  padding: 2rem;
}

ul{
  margin: 1rem;
  list-style: "✳";
}


li{
  padding: 1rem;
  text-align: left;
}

img{
  width: 20%;
  margin: auto;
}

@media(min-width: 700px){
  ul{
  margin: 1rem 2rem;
  }
  
  li{
  padding: 2rem;
  }
}
</style>