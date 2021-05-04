import { Item, State } from "@vue/runtime-core";

const mutations = {
  setItems(state: State, payload: Item[]) {
    state.items = payload;
  },
  setItem(state: State, payload: Item) {
    state.item = payload;
  }
};

export default mutations;
