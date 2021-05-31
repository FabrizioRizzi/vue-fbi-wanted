import { State } from "@vue/runtime-core";
import { ActionContext } from "vuex";

const actions = {
  setItems(context: ActionContext<State, State>, options: {[key: string]: string | number}) {
    return fetch("https://server-relay-blz4304resjj.runkit.sh", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        targetUrl: "https://api.fbi.gov/wanted/v1/list",
        options
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
