<template>
  <div id="board">
      {{betArr}}
  </div>
</template>

<script>
export default {
    name: "Board",
    data () {
        return {
            betArr: [0, 0, 1, 0, 0, 0]
        }
    }
}
</script>

<style>

</style>