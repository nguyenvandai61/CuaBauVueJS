<template>
  <div id="app">
    <Game />
  </div>
</template>

<script>

import Game from './components/Game.vue'


export default {
  name: 'App',
  components: {
    Game
  }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css?family=Pacifico&display=swap');
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
        background: rgba(255, 127, 80, 0.384);
}
button {
    background-color: #004A7F;
    -webkit-border-radius: 10px;
    border-radius: 10px;
    border: none;
    color: #FFFFFF;
    cursor: pointer;
    display: inline-block;
    
    font-size: 20px;
    padding: 5px 10px;
    text-align: center;
    text-decoration: none;
    animation: glowing 5000ms infinite;

    font-family: 'Pacifico', cursive;

}

@keyframes glowing {
    0% {
        background-color: #B20000;
        -webkit-box-shadow: 0 0 3px #B20000;
    }
    
    50% {
        background-color: #FF0000;
        -webkit-box-shadow: 0 0 40px #FF0000;
    }

    100% {
        background-color: #B20000;
        -webkit-box-shadow: 0 0 3px #B20000;
    }
}
</style>
