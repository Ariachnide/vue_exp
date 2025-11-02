<script setup lang="ts">
  import { useCounterStore } from './stores/counter';
  const counter = useCounterStore()
</script>

<template>
  <h1>You did it!</h1>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
  <p>
    test counter: {{ counter.count }}
  </p>
  <p>
    nomber of actions: {{ counter.actionCount }}
  </p>
  <button @click="counter.doubleCount()">--- Double ---</button>
  <button @click="counter.increment()">--- Up ---</button>
  <button @click="counter.reset()">--- Reset ---</button>
  <button @click="counter.decrement()">--- Down ---</button>
</template>

<style scoped></style>
