import { State } from "vue";
import { createStore } from "vuex";
import getters from './getters';
import mutations from './mutations';
import actions from './actions';

export const store = createStore<State>({
  state: {
    items: [],
    item: {},
    page: 1,
  },
  getters,
  mutations,
  actions
});
