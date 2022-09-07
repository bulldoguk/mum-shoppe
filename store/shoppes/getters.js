export default {
  list(state) {
    return state.shoppes
  },
  getShoppeGuid: (state) => (slug) => {
    try {
      return state.shoppes.find((e) => e.slug === slug).guid
    } catch {
      return ''
    }
  },
}
