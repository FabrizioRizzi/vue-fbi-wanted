<template>
  <div class="Header">
    <img class="Logo" src="../assets/logo.svg" />
    <h1>{{ title }}</h1>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    title: String,
  },
})
export default class Header extends Vue {
  title!: string;
}
</script>

<style>
.Header {
  display: grid;
  grid-template-columns: 165px 1fr;
  align-items: center;
  border-bottom: 5px solid #333;
  margin: 20px;
  padding-bottom: 20px;
}

.Logo {
  width: 150px;
  height: 150px;
}
</style>