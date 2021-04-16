export default {
  namespaced: true,
  state: () => {
    return {
      version: '',
    }
  },
  mutations: {
    SET_APP_VERSION(state, version) {
      state.version = version
    },
  },
  actions: {
    getVideos({ commit }, data) {
      commit('SET_VIDEO_LIST', data)
    },
  },
  getters: {
    version: (state) => state.version,
  },
}
