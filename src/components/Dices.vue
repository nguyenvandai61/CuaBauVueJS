<template>
  <div class="dices">
    <button v-on:click="raiseDice" :disabled="!!isRaised">Đổ hột</button>
    <ul id="dice-machine"> 
      <li v-for="(e, i) in diceRes" v-bind:key="i">
        <img class="dice-image" :src="text2url(num2text(e))"/>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions}from 'vuex'
export default {
  name: 'Dices',
  props: ['text', 'num2text', 'text2url'],
  data() {
    return {
      diceRes: [0, 0, 0],
      isRaised: false
    }
  },
  methods: {
    async pickNumber() {
      let value;
      for (let i in this.diceRes) {
        value = Math.floor(Math.random() * 6);
        await this.$set(this.diceRes, i, value)
      }
    },
    raiseDice() {
      this.toogleIsRaised();
      let loopPick = setInterval(this.pickNumber, 100);
      setTimeout(() => {
        clearInterval(loopPick);
        this.toogleIsRaised();
        this.saveDiceRes(this.diceRes);
        this.$emit('sendDiceRes');
      }, 2000)
    },
   
    toogleIsRaised() {
      this.isRaised = !this.isRaised;
    },
    ...mapActions(['saveDiceRes'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#dice-machine {
  
  padding-left: 0;
}

#dice-machine li{
  display: inline;
  margin: 3px;
}
.dice-image {
  width: 20%;
}
</style>
