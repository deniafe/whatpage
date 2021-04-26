export default {
  namespaced: true,
  state: () => {
    return {
      version: '',
      url: '',
    }
  },
  mutations: {
    SET_APP_VERSION(state, version) {
      state.version = version
    },
    SET_APP_URL(state, url) {
      state.url = url
    },
  },
  actions: {
    getVideos({ commit }, data) {
      commit('SET_VIDEO_LIST', data)
    },
  },
  getters: {
    version: (state) => state.version,
    url: (state) => state.url,
  },
}
