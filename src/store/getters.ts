import { State } from "@vue/runtime-core";

const getters = {
  getItems: (state: State) => state.items,
  getItem: (state: State) => state.item
};

export default getters; 
