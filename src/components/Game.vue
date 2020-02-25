<template>
    <div>
        <Score :score="score"/>
        <Board v-on:betScore='lostScore' :text="text" :num2text='num2text' 
        :text2url='text2url' :score='score'/>
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
        lostScore() {
            if(this.score > 0)
                this.score-= 1000;
        }
    }
}
</script>

<style>

</style>