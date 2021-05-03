<template>
  <div class="CriminalCard">
    <h2 @click="goToItem" class="Name">{{ name }}</h2>
    <h3>{{ classification }}</h3>
    <div v-html="description"></div>
    <img :src="image" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    name: String,
    classification: String,
    description: String,
    image: String,
  },
})
export default class CriminalCard extends Vue {
  name!: string;

  goToItem() {
    console.log("click");
    this.$router.push({ path: `/item/${this.name}` });
  }
}
</script>

<style>
.CriminalCard {
  display: grid;
  border: 2px solid #333;
  border-radius: 5px;
  margin: 20px;
  padding: 20px;
  box-shadow: 0px 1px 5px #00000040;
}

.Name {
  cursor: pointer;
}
</style>
