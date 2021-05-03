import { Item, State } from "@vue/runtime-core";
import { ActionContext } from "vuex";

const actions = {
  setItmes(context: ActionContext<State, State>) {
    fetch("https://server-relay-p7dh73rgd6s7.runkit.sh/", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        targetUrl: "https://api.fbi.gov/wanted/v1/list",
      }),
    })
      .then((res) => res.json())
      .then((parsedRes) => {
        console.log(parsedRes.items)
        context.commit('setItems', parsedRes.items)
      });
  }
};

export default actions;
