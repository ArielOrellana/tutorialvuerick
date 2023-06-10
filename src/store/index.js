import { createStore } from 'vuex'

export default createStore({
  state: {
    character: [],
    characterFilter: [],
  },
  getters: {
  },
  mutations: {
    setCharacters(state, payload){
      state.character = payload
    },
    setCharactersFilter(state, payload){
      state.characterFilter = payload
    },
  },
  actions: {
    async getCharacters({commit}){
      try {
        const response = await fetch('https://rickandmortyapi.com/api/character')
        const data = await response.json()
        console.log(data)
      } catch (error) {
        console.error(error)
      }
    }
  },
  modules: {
  }
})
