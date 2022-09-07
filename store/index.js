export default {
  state() {
    return {
    }
  },
  actions: {
    async nuxtServerInit({ commit }) {
      // Pull list of available shoppes
      const uri = '/shoppes/list'
      await this.$api
        .get(uri)
        .then((resp) => {
          commit('shoppes/updateShopList', resp.data)
        })
        .catch((e) => {
          console.log('Failed to get shoppes', e)
        })
    },
  },
  mutations: {
  }
}
