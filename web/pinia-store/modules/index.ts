
import { defineStore } from 'pinia'

export const useIndexStore = defineStore('indexStore', {
  state: () => {
    return { data: {} }
  },
  actions: {
    setData (payload: any) {
      this.data = payload.data
    }
  }
})
