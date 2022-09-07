export default {
  list(state) {
    return state.shopList
  },
  getShoppeGuid: (state) => (slug) => {
    try {
      return state.shopList.find((e) => e.slug === slug).guid
    } catch {
      return ''
    }
  },
}
