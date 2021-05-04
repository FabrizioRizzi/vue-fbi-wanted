<template>
  <Header :title="'FBI Most Wanted'" />
  <div class="ItemCardsContainer">
    <ItemCard
      v-for="item in items"
      v-bind:key="item.uid"
      :item="item"
    />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Header from "./Header.vue";
import ItemCard from "./ItemCard.vue";

@Options({
  name: "Home",
  components: {
    Header,
    ItemCard,
  },
  computed: {
    items() {
      return this.$store.getters.getItems
    }
  },
  mounted() {
    this.$store.dispatch('setItems');
  }
})
export default class Home extends Vue {}
</script>

<style>
.ItemCardsContainer {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: 1fr;
  align-items: stretch;
}
</style>