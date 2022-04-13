
import { defineStore } from 'pinia'

export const useDetailStore = defineStore('detailStore', {
  state: () => {
    return { data: {} }
  },
  actions: {
    setData (payload: any) {
      this.data = payload.data
    }
  }
})
