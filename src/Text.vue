<script setup lang="ts">
  import { useWordStore } from './stores/sentence'
  import { computed } from 'vue'

  const store = useWordStore()
  // const doubledCount = computed(() => store.count * 2)
</script>

<template>
  <h2>Text mod</h2>
  <p>Current word is: {{ store.word }}</p>
  <input
    :value="store.word"
    @input="event => store.word = event.target.value">
</template>

<style scoped></style>
