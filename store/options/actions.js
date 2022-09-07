export default {
  async fetchOptions({ rootState, commit, dispatch }) {
    const pathParts = this.$router.currentRoute.params.pathMatch.split('/')
    const shoppeGuid = rootState.shoppes.shopList.find(
      (e) => e.slug === pathParts[0]
    ).guid
    const uri = `/options/list/${shoppeGuid}`
    await this.$api
      .get(uri)
      .then((resp) => {
        commit('SET_OPTIONS', resp.data)
      })
      .catch((e) => {
        console.log('Failed to get options', e, uri)
      })
  },
}
