<template>
  <div class="about">
  
    <h3>CV realizado con Vue.js</h3>
    <img src="../assets/logo.png"/>
    <ul id="advise">
        
      <li>
        La web se encuentra alojada en la empresa Netlifly. Puedes ver su Política de Privacidad aquí: <a href="https://www.netlify.com/privacy/">https://www.netlify.com/privacy/</a>,"<a href="https://www.netlify.com/gdpr-ccpa"> https://www.netlify.com/gdpr-ccpa.</a>
      </li>
    
     <!-- <li> Iconos diseñados por <a href="https://www.flaticon.es/autores/xnimrodx" title="xnimrodx">xnimrodx</a> from <a href="https://www.flaticon.es/" title="Flaticon"> www.flaticon.es</a>
      </li>-->

    </ul>

  </div>
</template>

<script>


export default {
  name: "About",
  
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