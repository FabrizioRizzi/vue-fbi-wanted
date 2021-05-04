<template>
  <div class="ItemDetails">
    <h1>{{ item.title }}</h1>
    <div v-html="item.details"></div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  name: "ItemDetails",
  data() {
    return {
      item: this.$store.getters.getItem,
    };
  },
})
export default class ItemDetails extends Vue {}
</script>

<style>
.ItemDetails {
  margin: 20px;
}
</style>