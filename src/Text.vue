<script setup lang="ts">
  import { useWordStore } from './stores/sentence'
  import { computed } from 'vue'

  const store = useWordStore()
  // const doubledCount = computed(() => store.count * 2)
</script>

<template>
  <h2>Text mod</h2>
  <p>{{ store.word }}</p>
</template>

<style scoped></style>
