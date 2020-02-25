<template>
  <div id="board">
      Board
      <ul id="board-item-list">
          <li class="board-item" v-for="(e, i) in text" :key="i">
            <img @click='bet(i)' class="board-item-image" :src="text2url(e)" :alt="i"/>
          </li>
      </ul>
      {{betArr}}
  </div>
</template>

<script>
export default {
    name: "Board",
    props: ['text', 'num2text', 'text2url', 'score'],
    data () {
        return {
            betArr: [0, 0, 0, 0, 0, 0]
        }
    },
    methods: {
        bet(i) {
            if (this.score == 0) return;
            this.$set(this.betArr, i, ++this.betArr[i]);
            this.$emit('betScore');
        }
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