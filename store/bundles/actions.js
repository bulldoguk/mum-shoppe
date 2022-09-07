export default {
  async fetchBundles({ rootState, commit }) {
    const pathParts = this.$router.currentRoute.params.pathMatch.split('/')
    const shoppeGuid = rootState.shoppes.shopList.find(
      (e) => e.slug === pathParts[0]
    ).guid
    const uri = `bundles/list/${shoppeGuid}`
    await this.$api
      .get(uri)
      .then((resp) => {
        commit('SET_BUNDLES', resp.data)
      })
      .catch((e) => {
        console.log('Failed to get bundles', e)
      })
  },
}
