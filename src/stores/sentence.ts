import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useWordStore = defineStore('word', {
  state: () => ({
    word: ref("hey")
  }),
  actions: {
    updateWord(word: string) {
      this.word = word
    }
  }
})
