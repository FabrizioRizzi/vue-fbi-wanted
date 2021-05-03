import { State } from "vue";
import { createStore } from "vuex";
import getters from './getters';
import mutations from './mutations';
import actions from './actions';

export const store = createStore<State>({
  state: {
    items: [{ uid: 'sfaad' }]
  },
  getters,
  mutations,
  actions
});
