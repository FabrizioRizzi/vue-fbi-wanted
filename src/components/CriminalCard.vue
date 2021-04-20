<template>
  <div class="Card">
    <h2>{{ name }}</h2>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    name: String,
  },
})
export default class CriminalCard extends Vue {
  name!: string;
}
</script>

<style>
.Card {
  display: grid;
  border: 2px solid #333;
  border-radius: 5px;
  margin: 20px;
  padding: 20px;
}
</style>
