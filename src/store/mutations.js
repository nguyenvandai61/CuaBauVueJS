import {  
    SET_SCORE,
    SET_DICE_RESULT,
    SET_BET_ARRAY
} from "./mutation-types";

export default {
    [SET_SCORE] (state, score) {
        state.score = score
    },
    [SET_BET_ARRAY] (state, arr) {
        state.betArr = arr
    },
    [SET_DICE_RESULT] (state, arr) {
        state.diceRes = arr
    },
}