<template>
  <div id="board">
      Board
      <ul id="board-item-list">
          <li class="board-item" v-for="(e, i) in text" :key="i">
            <img @click='bet(i)' class="board-item-image" :src="text2url(e)" :alt="i"/>
            <span>{{betArr[i]}}</span>
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
            this.dropScore();
        },
        ...mapActions(['guess', 'dropScore'])
    }
}
</script>

<style scoped>
#board-item-list {
    display: block;
    padding-left: 0;
}
.board-item {
    display: inline;
}
.board-item-image {
    box-sizing: border-box;
    padding: 2%;
    width: 30%;
}
</style>