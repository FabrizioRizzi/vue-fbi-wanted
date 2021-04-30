import { State } from "vue";
import { createStore } from "vuex";

export const store = createStore<State>({
  state: {
    item: {}
  }
});
