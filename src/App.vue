<script setup lang="ts">
  import { useCounterStore } from '@/stores/counter'
  import { computed } from 'vue'
  import Text from './Text.vue'

  const store = useCounterStore()
  const doubledCount = computed(() => store.count * 2)
</script>

<template>
  <h1>You did it!</h1>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
  <p>
    test counter: {{ store.count }}
  </p>
  <p>
    counter doubled: {{ doubledCount }}
  </p>
  <p>
    nomber of actions: {{ store.actionCount }}
  </p>
  <button @click="store.increment()">--- Up ---</button>
  <button @click="store.reset()">--- Reset ---</button>
  <button @click="store.decrement()">--- Down ---</button>
  <Text />
</template>

<style scoped></style>
