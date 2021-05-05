<template>
  <div class="ItemCard">
    <div v-if="item.reward_max" class="Reward">$ {{item.reward_max}}</div>
    <img :src="item.images?.length && item.images[0].thumb" />
    <h2 @click="goToItem" class="Name">{{ item.title }}</h2>
    <h3 :class="item.person_classification">
      Person Classification: {{ item.person_classification }}
    </h3>
    <div class="Description" v-html="item.description"></div>
  </div>
</template>

<script lang="ts">
import { Item, PropType } from "node_modules/vue/dist/vue";
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    item: Object as PropType<Item>,
  },
})
export default class ItemCard extends Vue {
  item!: Item;

  goToItem() {
    this.$store.commit("setItem", this.item);
    this.$router.push({ path: `/item` });
  }
}
</script>

<style scoped>
.ItemCard {
  position: relative;
  display: grid;
  align-items: center;
  justify-items: center;
  border: 2px solid #ddd;
  border-radius: 5px;
  margin: 20px;
  padding: 10px;
  box-shadow: 2px 2px 5px #00000020;
  background: #efefef85;
  overflow: hidden;
}

.Reward {
  width: 170px;
  background: aqua;
  position: absolute;
  top: 30px;
  transform: rotate(45deg);
  right: -40px;
  text-align: center;
}

img {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
}

.Name {
  cursor: pointer;
  margin: 10px;
  text-align: center;
}

h3 {
  margin: 0;
}

h3.Victim {
  color: #1881a9;
}

h3.Main {
  color: #a90a0a;
}

.Description {
  color: #888;
}
</style>
