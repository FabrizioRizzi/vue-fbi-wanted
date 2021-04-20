<template>
  <Header :title="'FBI Most Wanted'" />
  <div>Home</div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Header from "./Header.vue";

@Options({
  components: {
    Header,
  },
})
export default class Home extends Vue {

/*   async data() {
    const results = await fetch(
      "https://server-relay-p7dh73rgd6s7.runkit.sh/",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          targetUrl: "https://api.fbi.gov/wanted/v1/list",
        }),
      }
    );
    const parsedResults = await results.json();
    console.log(parsedResults);
    return parsedResults;
  } */
}
</script>
