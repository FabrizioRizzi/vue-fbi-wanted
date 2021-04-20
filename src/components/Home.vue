<template>
  <div>Home</div>
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
    const results = await fetch('https://server-relay-p7dh73rgd6s7.runkit.sh/', {
      method: 'POST',
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({targetUrl: 'https://api.fbi.gov/wanted/v1/list'})
    })
    const parsedResults = await results.json();
    console.log(parsedResults);
    return parsedResults;
  }
}
</script>
