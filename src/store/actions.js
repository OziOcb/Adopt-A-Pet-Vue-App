export default {
  addPet: ({ commit }, payload) => {
    commit('appendPet', payload)          // przekazuje obiekt payload do funkcji appendPet znajdujazej sie w mutations.js
  }
}
