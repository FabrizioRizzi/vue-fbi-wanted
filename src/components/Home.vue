<template>
  <Header :title="'FBI Most Wanted'" />
  <div class="CriminalCardsContainer" >
    <CriminalCard
      v-for="item in items"
      v-bind:key="item.uid"
      :name="item.title"
      :classification="item.person_classification"
      :description="item.details"
      :image="item.images[0].thumb" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Header from "./Header.vue";
import CriminalCard from "./CriminalCard.vue";

@Options({
  name: "Home",
  components: {
    Header,
    CriminalCard,
  },
})
export default class Home extends Vue {
  items: [] = [];

  mounted() {
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
      .then((parsedRes) => (this.items = parsedRes.items));
  }
}
</script>

<style>
.CriminalCardsContainer {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: 1fr;
  align-items: stretch;
}
</style>