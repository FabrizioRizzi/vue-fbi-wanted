import { State } from "@vue/runtime-core";

const getters = {
  items: (state: State) => state.items,
  item: (state: State) => state.item,
  page: (state: State) => state.page
};

export default getters; 
