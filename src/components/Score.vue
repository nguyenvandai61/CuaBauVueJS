<template>
  <div>
    <h2 class="label-score">Score:</h2>
    <h2 class="score">{{score}}</h2>
  </div>
</template>

<script>
export default {
  name: "Score",
  props: ["score"]
};
</script>

<style scoped>
.label-score {
  display: inline-block;
  color: #4b3d3d;
  font-size: 1.6em;
  color: #b20000;
  margin: auto 0;
  /* text-shadow: 2px 2px #ff0000; */
}

.score {
  font-size: 2em;
  display: inline-block;
  margin: auto 0;
}
@media only screen and (min-width: 550px) {
  .label-score {
    font-size: 3em;
    /* text-shadow: 2px 2px #ff0000; */
  }

  .score {
    font-size: 4em;
  }
}
</style>