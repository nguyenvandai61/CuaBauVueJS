<template>
  <div id="board">
      <ul id="board-item-list">
          <li class="board-item" v-for="(e, i) in text" :key="i">
              <div class="bet-wrapper">
                <span class="bet">${{betArr[i]}}</span>
              </div>
            <img @click='bet(i)' class="board-item-image" :src="text2url(e)" :alt="i"/>
          </li>
      </ul>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
    name: "Board",
    props: ['text', 'num2text', 'text2url'],
    computed: {
      ...mapGetters({betArr: "BET_ARRAY"})
    },
    methods: {
        bet(i) {
            if (this.score == 0) return;
            this.guess(i);
            console.log(this.score);
            this.$forceUpdate(); 
            this.dropScore();
        },
        ...mapActions(['guess', 'dropScore'])
    },
}
</script>

<style scoped>
#board-item-list {
    display: block;
    padding-left: 0;
    background: crimson;
    border-radius: 5%;
}
.board-item {
    display: inline-block;
    width: 30%;
    position: relative;
}
.board-item-image {
    box-sizing: border-box;
    padding: 2%;
    width: 100%;
}

.bet {
    position: block;
    left: 50%;
    font-family: 'Pacifico', cursive;;
    font-weight: 300;
    color: rgb(250, 250, 250);
    font-size: 1.6rem;
}

</style>