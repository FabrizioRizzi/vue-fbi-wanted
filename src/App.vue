<template>
  {{data}}
  <Home />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Home from "./components/Home.vue";

@Options({
  components: {
    Home,
  },
  data() {
    return {
      data: this.$store.state,
    };
  },
})
export default class App extends Vue {}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
