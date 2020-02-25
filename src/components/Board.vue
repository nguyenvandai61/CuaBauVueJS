<template>
  <div id="board">
      Board
      <ul id="board-item-list">
          <li class="board-item" v-for="e in text" :key="e">
            <img class="board-item-image" :src="text2url(e)"/>
          </li>
      </ul>
      {{betArr}}
  </div>
</template>

<script>
export default {
    name: "Board",
    props: ['text', 'num2text', 'text2url'],
    data () {
        return {
            betArr: [0, 0, 1, 0, 0, 0]
        }
    }
}
</script>

<style scoped>
.board-item-list {
    display: block;
}
.board-item {
    display: inline;
}
.board-item-image {
    box-sizing: border-box;
    width: 30%;
}
</style>