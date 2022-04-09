import { defineStore, acceptHMRUpdate } from "pinia"

const useUser = defineStore('user', {
  
})

// make sure to pass the right store definition, `useAuth` in this case.
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUser, import.meta.hot))
}