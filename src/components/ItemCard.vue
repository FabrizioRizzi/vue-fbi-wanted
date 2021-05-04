<template>
  <div class="ItemCard">
    <h2 @click="goToItem" class="Name">{{ item.title }}</h2>
    <h3>{{ item.person_classification }}</h3>
    <div v-html="item.details"></div>
    <img :src="item.images?.length && item.images[0].thumb" />
  </div>
</template>

<script lang="ts">
import { Item, PropType } from "node_modules/vue/dist/vue";
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    item: Object as PropType<Item>
  },
})
export default class ItemCard extends Vue {
  item!: Item;
  
  goToItem() {
    this.$store.commit('setItem', this.item)
    this.$router.push({ path: `/item` });
  }
}
</script>

<style>
.ItemCard {
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
