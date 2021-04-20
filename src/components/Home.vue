<template>
  <div>Home {{prova}}</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    msg: String
  }
})
export default class HelloWorld extends Vue {
  msg!: string;

  async data() {
    const results = await fetch('https://untitled-p7dh73rgd6s7.runkit.sh/https%3A%2F%2Fapi.fbi.gov%2Fwanted%2Fv1%2Flist')
    return {prova: results.json()};
  }
}
</script>
