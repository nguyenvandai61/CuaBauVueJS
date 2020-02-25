<template>
    <div>
        <Score :score="score"/>
        <Board :text="text" :num2text='num2text' 
        :text2url='text2url'/>
        <Dices :text="text" :num2text='num2text' 
        :text2url='text2url'/>
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
            text: ["huou", "cua", "tom", "ca", "bau", "ga"],
            score: 10000
        }
    },
    methods: {
        num2text(n) {
            return this.text[n];
        },
        text2url(text) {
            let images = require.context('../assets/', false, /\.jpg$/);
            return images('./'+text+'.jpg');
        },
    }
}
</script>

<style>

</style>