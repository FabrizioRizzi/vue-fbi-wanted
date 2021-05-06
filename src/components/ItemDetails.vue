<template>
  <div class="ItemDetails">
    <div class="Breadcrumb">
      <router-link to="/">Home</router-link>
    </div>
    <h1>{{ item.title }}</h1>
    <div v-html="item.details"></div>
    <div class="ImageGrid">
      <img
        v-for="image in item.images"
        v-bind:key="image.caption"
        :src="image.thumb"
        class="Image"
      />
    </div>
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

.ImageGrid {
  display: flex;
}

.Image {
  margin: 5px;
}
</style>