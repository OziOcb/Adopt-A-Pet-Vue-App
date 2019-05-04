export default {
  appendPet: (state, { species, pet }) => {     // { species, pet } dane wyciagniete z obiektu payload przekazanego z actions.js
    state[species].push(pet)
  }
}
