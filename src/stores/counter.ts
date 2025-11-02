import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

/* export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0,
    actionCount: 0
  }),
  actions: {
    increment() {
      this.actionCount++
      this.count++
    },
    decrement() {
      this.actionCount++
      this.count--
    },
    reset() {
      this.actionCount++
      this.count = 0
    },
    doubleCount() {
      this.actionCount++
      this.count = this.count * 2
    }
  }
}) */

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})
