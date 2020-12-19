<template>
<div>
  <headercustom/>
  
  <router-view/>

  <footercustom/>
  
  </div>
</template>

<script>
import headercustom from "@/components/HeaderCustom.vue";
import footercustom from "@/components/FooterCustom.vue";
export default {
  name: "App",
  
  components: {
    headercustom,
    footercustom,
  },
};
</script>

<style>
html{
font-family: Helvetica, sans-serif;
}
#app {
    
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: rgb(8, 8, 92);
    min-height: 100vh;
    
    
  }
  
  #nav {
    padding: 30px;
  }
  
  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }
  
  #nav a.router-link-exact-active {
    color: #4262b9;
  }
    
  header{
    background-color: rgb(68, 68, 218);
    display:flex;
    justify-content: space-around;
  }

  h1, h2{
  color: white;
  }

  h1{
    font-size: 1rem;
    padding-top: 1rem;
  }

  h2{
    font-size: 0.9rem;
  }

  section#name{
    margin: 0;
  }
    
  section#contact{
    display: flex;
    list-style: none;
    justify-content: center;
    margin:0 0 1rem 0;
    padding:0;
  }
  section#contact a{
    font-size:0rem;
    width: 20px;
    height: 20px;
     background-size: 20px 20px;
     margin: 5px;
  }
  a#mail{
    background-image: url(assets/a.png);
   }
   a#lkn{
    background-image: url(assets/linkedin.png);
   }
   a#git{
    background-image: url(assets/github.png);
   }
   
   h3{
    font-size: 1rem;
    }

    p, li, a, button{
    font-size: 0.8rem;
    line-height: 1.5em;
    }

    img#me{
    max-width: 80px;
    object-fit: contain;
    }
  
   @media(min-width: 700px){
     header{
    
    justify-content: center;
  }
     article#header{
       display: flex;
     }
     h1{
    font-size: 1.7rem;
    
  }
  h2{
    font-size: 1.5rem;
  }
  h3{
    font-size: 1.3rem;
  }
  p, li, a, button{
    font-size: 1.1rem;
  }
  
  img#me{
   width: 150px;
   margin-right: 2rem;
     }
     section#contact{
    
    margin:24px;
    padding:16px 0;
  }
  }
  
  @media(min-width:1000px){
     header{
      justify-content: space-evenly;
  }
  article#header{
       width: 70%;
       justify-content: space-around;
         }
  img#me{
   max-width: 150px;
   margin: 1rem 0;
     }
      h1{
    font-size: 2.5rem;
    
  }
  h2{
    font-size: 2rem;
  }
  h3{
    font-size: 1.5rem;
  }
  p, li, a, button{
    font-size: 1.3rem;
  }
  section#contact a{
    font-size:0rem;
    width: 30px;
    height: 30px;
     background-size: 30px 30px;
     margin: 7px;
  }
  
  }
  @media(min-width:1300px){
    img#me{
   max-width: 200px;
   margin: 1rem 0;
     }
     section#contact a{
    
    width: 50px;
    height: 50px;
     background-size: 50px 50px;
     margin: 7px;
  }
  h1{
    font-size: 3rem;
    
  }
  h2{
    font-size: 2.5rem;
  }
  h3{
    font-size: 2.2rem;
  }
  p, li, a{
    font-size: 1.9rem;
  }
  
  }
</style>

