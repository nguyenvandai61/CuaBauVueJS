<template>
    <div class="container">
        <div class="header">
            <h1 class="title">Cua bầu</h1>
            <Score class="score-handler" :score="score"/>
        </div>
        <Board 
        class="board-handler"
        :text="text" 
        :num2text='num2text' 
        :text2url='text2url' 
        :score='score'/>
        <Dices
        class="dice-handler"
        v-on:sendDiceRes='handleDiceRes'
        :text="text" 
        :num2text='num2text' 
        :text2url='text2url'/>
        <Gameover class="gameover-handler"/>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Dices from './Dices'
import Board from './Board'
import Score from './Score'
import Gameover from './Gameover'
export default {
    name: "Game",
    components: {
        Dices,
        Board,
        Score,
        Gameover
    },
    data() {
        return {
            text: ["huou", "cua", "tom", "ca", "bau", "ga"]
        }
    },
    computed: {
        ...mapGetters({score: 'SCORE', diceRes: 'DICE_RESULT', betArr: 'BET_ARRAY'})
    },
    methods: {
        num2text(n) {
            return this.text[n];
        },
        text2url(text) {
            let images = require.context('../assets/images', false, /\.jpg$/);
            return images('./'+text+'.jpg');
        },
        handleDiceRes() {
            console.log("HandleDiceres");
            let dices = this.diceRes;
            let bets = this.betArr;
            console.log(this.betArr);
            console.log(dices);
            let awardScore = 0;
            
            let duplicate = function(v, d) {
                let r = 0;
                for (let i of d) {
                    if (i == v) r++;
                }
                return r;
            }

            for (let dice of dices) {
                if (!bets[dice]) continue;
                awardScore += bets[dice];
                awardScore += bets[dice]*duplicate(dice,dices);
                bets[dice] = 0;
            }
            awardScore*=1000;
            console.log(awardScore)
            this.awardScore(awardScore);
            this.refreshBetArr();
            console.log(this.betArr);
            this.$forceUpdate();
            console.log()
            
            // gameover handler
            if (this.isGameover()) {
                this.notifyGameover();
            }
        },
        notifyGameover(){
            console.log("Gameover");
            document.getElementsByClassName("gameover-handler")[0].style.visibility = "visible";
        },
        isGameover() {
            return this.score <= 0;
        },
        ...mapActions(['awardScore', 'refreshBetArr'])
    },
    
}
</script>

<style>
    .container {
        margin: 20px;
    }
    .header {
        display: flex;
    
        flex-flow: row;
        justify-content: space-between;
    }
    .title{
        font-family: 'Pacifico', cursive;
        font-size: 2.5em;
        margin :auto;
    }
    .score-handler {
        font-family: 'Pacifico', cursive;
    }
    .gameover-handler {
        position: fixed;
        top: 30%;
        width: 50vw;
        left: 20%;
        font-size: 2em;
        visibility: hidden;
    }
    @media only screen and (min-width: 550px) {
        .board-handler {
            width: 50vw;
            display: inline-block;
        }
        .title {
            
            font-size: 4em;
        }
        .dice-handler {
            display: inline-block;
            width: 40vw;
        }
}
</style>