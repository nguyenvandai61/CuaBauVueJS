<template>
  <div id="gameover-handler">
      <h2>Gameover</h2>
      <button class="btn-play-again" type="reset" v-on:click="playAgain">Play again!</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    methods: {
        playAgain() {
            this.refreshScore();
            document.getElementsByClassName("gameover-handler")[0].style.visibility = "hidden";
        },
        
        ...mapActions(["refreshScore"])
    }
}
</script>

<style scoped>
#gameover-handler {    
   background-color: #FFE53B;
    background-image: linear-gradient(147deg, #a71fc9 0%, #c7c2a8 74%);
    padding: 20px;
    border-radius: 5vw;
}
h2 {
    color: white;
    font-family: 'Pacifico', cursive;
}
</style>