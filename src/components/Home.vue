<template>
  <Header :title="'FBI Most Wanted'" />
  <div class="Navigation">
    <div>
      <div v-if="page > 1" @click="goToPreviousPage" class="Pointer">Previous</div>
    </div>
    <div>{{ page }}</div>
    <div @click="goToNextPage" class="Pointer">Next</div>
  </div>
  <div class="ItemCardsContainer">
    <ItemCard v-for="item in items" v-bind:key="item.uid" :item="item" />
  </div>
  <div class="Navigation">
    <div>
      <div v-if="page > 1" @click="goToPreviousPage" class="Pointer">Previous</div>
    </div>
    <div>{{ page }}</div>
    <div @click="goToNextPage" class="Pointer">Next</div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Header from "./Header.vue";
import ItemCard from "./ItemCard.vue";
import { mapGetters } from "vuex";

@Options({
  name: "Home",
  components: {
    Header,
    ItemCard,
  },
  computed: {
    ...mapGetters(["page", "items"]),
  },
  mounted() {
    this.$store.dispatch("setItems", { page: this.page });
  },
})
export default class Home extends Vue {
  page!: number;

  goToNextPage() {
    this.$store.commit("setPage", this.page + 1);
    this.$store.dispatch("setItems", { page: this.page });
  }

  goToPreviousPage() {
    this.$store.commit("setPage", this.page - 1);
    this.$store.dispatch("setItems", { page: this.page });
  }
}
</script>

<style>
.ItemCardsContainer {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: 1fr;
  align-items: stretch;
}
.Navigation {
  width: 300px;
  margin: 10px auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-around;
  text-align: center;
}
.Pointer {
  cursor: pointer;
}
</style>
