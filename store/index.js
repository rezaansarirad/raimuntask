export const state = () => ({

  productsSelected: [],

})


export const mutations = {

  addProduct(state, value) {
    state.productsSelected.push(value)

  },
  removeProduct(state, value) {
    state.productsSelected.splice(state.productsSelected.indexOf(value), 1)
  }, 
  removeProductWithIndex(state, value) {
    state.productsSelected.splice(value, 1)
  }

}