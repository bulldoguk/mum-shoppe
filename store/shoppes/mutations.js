export default {
  updateShopList(state, list) {
    state.shopList = []
    for (const item of list) {
      delete item._id
      console.log('item', item)
      state.shopList.push(item)
    }
  },
}
