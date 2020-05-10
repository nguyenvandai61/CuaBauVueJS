
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export const store = new Vuex.Store({
    state: {
      score: 10000,
      betArr: [0,0,0,0,0,0],
      diceRes: [],
    },
    getters: {
      score: (state) => state.score,
      betArr: (state) => state.betArr,
      diceRes: (state) => state.diceRes
    },
    mutations: {
      guess(state, pos) {
        console.log("Luu vao state betArr")
        if (state.score > 0)
          state.betArr[pos]++;
      },
      dropScore(state) {
        state.score-=1000;
      },
      awardScore(state, score) {
        state.score+= score;
      },
      saveDiceRes(state, arr) {
        for (let i in arr) {
          state.diceRes[i] = arr[i];
        }
      },
      refreshBetArr(state) {
        let betArr = state.betArr;
        for (let i in betArr) {
          betArr[i] = 0;
        }
        state.betArr = betArr;
      }
      
    },
    actions: {
      bet(context, pos) {
        context.commit("guess", pos);
        context.commit("dropScore");
      }
    }
  });

  
  