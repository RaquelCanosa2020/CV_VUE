<template>
  <div class="about">
  
    <h3>CV realizado con Vue.js</h3>
    <img src="../assets/logo.png"/>
    <ul id="advise">
        
    <li>Esta es una web totalmente personal, no recabo datos personales de ningún tipo, ni tengo como objetivo obtener ningún beneficio económico, directo o indirecto.
      La web se encuentra alojada en la empresa Netifly, con representación a efectos de la regulación de la Protección de Datos, en VeraSafe (Irlanda). Puedes ver su Política de Privacidad aquí: <a href="https://www.netlify.com/gdpr-ccpa"> https://www.netlify.com/gdpr-ccpa.</a>
      
    </li>
    
   <li> Iconos diseñados por <a href="https://www.flaticon.es/autores/xnimrodx" title="xnimrodx">xnimrodx</a> from <a href="https://www.flaticon.es/" title="Flaticon"> www.flaticon.es</a>
    </li>
    </ul>

  </div>
</template>
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
  margin: 1rem 2rem;}
  
li{
  padding: 2rem;
  
}
}
</style>