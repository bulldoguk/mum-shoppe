export default {
  isSelected: (state) => (checkid) => {
    return state.bundle && state.bundle.id === checkid
  },
  bundleTotal(state) {
    return state.bundle ? state.bundle.price : 0
  },
  orderTotal(state) {
    let total = state.bundle ? state.bundle.price : 0
    for (const option of state.options) {
      total += option.price
    }
    return total
  },
  getDefault: (state) => (sectionid, itemid) => {
    try {
      return (
        state.bundle.credits.find((e) => e.optionid === sectionid).default ===
        itemid
      )
    } catch {
      return false
    }
  },
  getCredits: (state) => (sectionid) => {
    try {
      return state.bundle.credits.find((e) => e.optionid === sectionid).credits
    } catch {
      return 0
    }
  },
  checkOptions: (state) => (option) => {
    const index = state.options.findIndex(
      (e) => e.section === option.section && e.id === option.id
    )
    return index >= 0
  },
}
