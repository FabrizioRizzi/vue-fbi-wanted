<template>
  <h1>The item is {{ item.title }}</h1>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  name: "ItemDetails",
  data() {
    return {
      item: this.$store.getters.getItem
    }
  }
})
export default class ItemDetails extends Vue {}
</script>