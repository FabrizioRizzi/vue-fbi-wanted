<template>
  <div class="Loading">Loading</div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
export default class Loading extends Vue {}
</script>

<style scoped>
.Loading {
  width: 100px;
  height: 100px;
  margin: auto;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>