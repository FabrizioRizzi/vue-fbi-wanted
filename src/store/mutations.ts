import { Item, State } from "@vue/runtime-core";

const mutations = {
  setItems(state: State, payload: Item[]) {
    state.items = payload;
  }
};

export default mutations;
