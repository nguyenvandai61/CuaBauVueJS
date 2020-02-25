<template>
    <div>
        <Score v-bind:score="score"/>
        <Board/>
        <Dices v-bind:text="text"/>
    </div>
</template>

<script>
import Dices from './Dices'
import Board from './Board'
import Score from './Score'
export default {
    name: "Game",
    components: {
        Dices,
        Board,
        Score
    },
    data() {
        return {
            text: ["huou", "bau", "tom", "ca", "bau", "ga"],
            score: 10000
        }
    }
}
</script>

<style>

</style>