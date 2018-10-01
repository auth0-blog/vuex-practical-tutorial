import Vue from 'vue';
import Vuex from 'vuex';
import prices from './prices';

// configure Vuex for modules
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    prices: prices
  },
  getters: {
    currentPrice: state => {
      return state.prices[0];
    },
    previousPrice: state => {
      return state.prices[1];
    },
    percentageIncrease: (state, getters) => {
      const currentAmount = getters.currentPrice.amount;
      const previousAmount = getters.previousPrice.amount;
      return (
        ((currentAmount - previousAmount) / previousAmount) *
        100
      ).toFixed(2);
    },
    difference: (state, getters) => {
      const currentAmount = getters.currentPrice.amount;
      const previousAmount = getters.previousPrice.amount;
      return (currentAmount - previousAmount).toFixed(2);
    }
  },
  mutations: {
    UPDATE_PRICE(state, newPricing) {
      // remove the oldest price
      state.prices.pop();

      // add the new price
      state.prices = [newPricing, ...state.prices];
    }
  }
});

export default store;
export {default as actions} from './actions';
