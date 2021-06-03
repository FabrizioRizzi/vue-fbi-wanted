<template>
  <div class="ItemDetails">
    <div class="Breadcrumb">
      <router-link to="/">Home</router-link>
    </div>
    <h1>{{ item.title }}</h1>
    <h2>Caution</h2>
    <div v-html="item.caution"></div>
    <h2>Details</h2>
    <div v-html="item.details"></div>
    <div class="ImageGrid">
      <img
        v-for="image in item.images"
        v-bind:key="image.caption"
        :src="image.thumb"
        class="Image"
        @click="openImage(image.large)"
      />
    </div>
    <div class="LargeImage" v-if="showLargeImage">
      <img :src="largeImage" />
      <div @click="closeImage" class="CloseImage">Close</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  name: "ItemDetails",
  data() {
    return {
      item: this.$store.getters.item,
    };
  },
})
export default class ItemDetails extends Vue {
  largeImage: string = "";
  showLargeImage: boolean = false;

  openImage(image: string) {
    this.largeImage = image;
    this.showLargeImage = true;
  }

  closeImage() {
    this.largeImage = "";
    this.showLargeImage = false;
  }
}
</script>

<style>
.ItemDetails {
  margin: 20px;
}

.ImageGrid {
  display: grid;
  grid-template-columns: repeat(auto-fit, 140px);
}

.Image {
  margin: 5px;
  cursor: pointer;
}

.LargeImage {
  position: relative;
  margin: 5px;
}

.CloseImage {
  position: absolute;
  background: #fff;
  top: 0;
  padding: 10px;
  cursor: pointer;
}
</style>