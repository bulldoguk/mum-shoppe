export default {
  updateShopList(state, list) {
    state.shopList = []
    for (const item of list) {
      delete item._id
      state.shopList.push(item)
    }
  },
}
