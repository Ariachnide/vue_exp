<script setup lang="ts">
  import { useWordStore } from './stores/sentence'
  const store = useWordStore()
</script>

<template>
  <h2>Text mod</h2>
  <p>Current word is: {{ store.word }}</p>
  <input
    :value="store.word"
    @input="event => store.updateWord(event.target.value)">
</template>

<style scoped></style>
