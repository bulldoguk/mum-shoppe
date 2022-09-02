export default {
  isSelected: (state) => (checkid) => {
    return state.bundle && state.bundle.id === checkid
  },
  bundleTotal(state) {
    return state.bundle ? state.bundle.price : 0
  },
  orderTotal(state) {
    let total = state.bundle ? state.bundle.price : 0
    // Need to iterate over list of unique sections
    // Then check for # credits from bundle
    // Order the list so the most expensive get credits first
    // Then add up the rest
    const sectionList =  [...new Set(state.options.map((item) => item.section))]
    console.log('Unique sections', sectionList)
    for (const section of sectionList) {
      const itemList = [...state.options.filter(e => e.section === section)]
      itemList.sort((l, r) => (l.price < r.price ? 1 : -1) )
      console.log('items', itemList)
      let idx = 1
      const credits = state.bundle.credits.find(e => e.optionid === section).credits || 0
      console.log('credits', credits)
      for (const item of itemList) {
        if (idx > credits) {
          total += item.price
        }
        idx++
      }
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
