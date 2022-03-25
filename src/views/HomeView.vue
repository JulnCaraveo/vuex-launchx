<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

    <contador/>

    <cuadrado/>

    <botones/>
  
  </div>
</template>

<script>
import contador from "../components/contador.vue";
import cuadrado from "../components/cuadrado.vue";
import botones from "../components/botones.vue";

export default {
  name: 'HomeView',
  components:{
    contador,
    cuadrado,
    botones,
  }
  
}
</script>
<style>
  div{
    margin-bottom: 10px;
  }
  .counter{
    font-size: 80px;
  }

  .buttons button{
    font-size: 40px;
    width: 100px;
    margin: 0 10px;
  }
  .cuadrado{
    font-size: 40px;
  }
  
</style>