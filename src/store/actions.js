import {
    SET_SCORE,
    SET_BET_ARRAY,
    SET_DICE_RESULT
} from "./mutation-types";

export default {
    guess({
        state,
        commit
    }, 
        pos
    ) {
        console.log("Luu vao state betArr")
        if (state.score <= 0) return;
        let ar = state.betArr;
        ar[pos]++;
        commit(SET_BET_ARRAY, ar);
    },

    dropScore({state, commit}) {
        let s = state.score - 1000;
        commit(SET_SCORE, s);
    },

    awardScore({state, commit}, score) {
        let newScore = state.score + score;
        console.log(newScore)
        commit(SET_SCORE, newScore)
    },

    saveDiceRes({
        commit
    }, arr) {
        commit(SET_DICE_RESULT, arr)
    },

    refreshBetArr({
        state,
        commit
    }) {
        let betArr = state.betArr;
        for (let i in betArr) {
            betArr[i] = 0;
        }
        commit(SET_BET_ARRAY, betArr);
    },
}