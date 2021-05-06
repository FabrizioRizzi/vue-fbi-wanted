<template>
  <router-view />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Home from "./components/Home.vue";

@Options({
  components: {
    Home,
  },
})
export default class App extends Vue {}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap');

body {
  margin: 0;
}

#app {
  font-family: Quicksand, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.Breadcrumb {
  margin: 20px;
}
</style>
