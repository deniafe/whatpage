import axios from 'axios'
export default {
  namespaced: true,
  state: () => {
    return {
      loginDialog: false,
      user: '',
      ref: '',
      offerDialog: false,
      accDialog: false,
      pointsDialog: false,
      url: '',
      offerNetwork: '',
      AMOffers: [],
      CGOffers: [],
      OGOffers: [],
      offersLoading: true,
      alert: '',
      leaderboardLeads: [],
      rewardLoading: false,
    }
  },
  mutations: {
    SET_LOGIN_DIALOG(state, status) {
      state.loginDialog = status
    },
    SET_USER(state, user) {
      state.user = user
    },
    SET_REF(state, ref) {
      state.ref = ref
    },
    SET_APP_VERSION(state, version) {
      state.version = version
    },
    SET_APP_URL(state, url) {
      state.url = url
    },
    SET_OFFER_NETWORK(state, network) {
      state.offerNetwork = network
    },
    SET_OFFER_DIALOG(state, status) {
      state.offerDialog = status
    },
    SET_ACC_DIALOG(state, status) {
      state.accDialog = status
    },
    SET_POINTS_DIALOG(state, status) {
      state.pointsDialog = status
    },
    SET_AM_OFFERS(state, offers) {
      state.AMOffers = offers
    },
    SET_CG_OFFERS(state, offers) {
      state.CGOffers = offers
    },
    SET_OG_OFFERS(state, offers) {
      state.OGOffers = offers
    },
    SET_OFFERS_LOADING(state, status) {
      state.offersLoading = status
    },
    SET_ALERT(state, alert) {
      state.alert = alert
    },
    SET_LEADERBOARD_LEADS(state, leads) {
      state.leaderboardLeads = leads
    },
    SET_REWARD_LOADING(state, status) {
      state.rewardLoading = status
    },
  },
  actions: {
    setUser({ commit }, userData) {
      commit('SET_USER', userData)
    },
    setLoginDialog({ commit }, status) {
      commit('SET_LOGIN_DIALOG', status)
    },
    AMOffers({ commit }) {
      console.log('Am offers has been called')
      commit('SET_OFFERS_LOADING', true)
      const url =
        'https://www.adworkmedia.com/api/index.php?pubID=63690&apiID=p8dagdzjlira15we35iwzjtapglnv8cs55e0czkk&campDetails=true&userIP=209.85.148.138&gateway=1&optimize=EPC&oType=2&format=json&siteID=https://us-central1-tubely-44839.cloudfunctions.net/api/friend'

      axios
        .get(url)
        .then(function (response) {
          console.log('Response Data: ', response.data)
          commit('SET_AM_OFFERS', response.data)
          commit('SET_OFFERS_LOADING', false)
        })
        .catch(function (error) {
          console.log(error)
          commit('SET_OFFERS_LOADING', false)
        })
    },
    CGOffers({ commit }) {
      console.log('CG offers has been called')
      commit('SET_OFFERS_LOADING', true)
      const url =
        'https://www.cpagrip.com/common/offer_feed_json.php?user_id=207746&pubkey=64e49e01d8e2780a394011fd0f536c7b&tracking_id=deniafe@gmail.com&ip=209.85.148.138'

      axios
        .get(url)
        .then(function (response) {
          console.log('Response Data: ', response.data.offers)
          commit('SET_CG_OFFERS', response.data.offers)
          commit('SET_OFFERS_LOADING', false)
        })
        .catch(function (error) {
          console.log(error)
          commit('SET_OFFERS_LOADING', false)
        })
    },
    OGOffers({ commit }) {
      console.log('CG offers has been called')
      commit('SET_OFFERS_LOADING', true)
      const url =
        'https://mobverify.com/api/v1/?affiliateid=117322&ctype=1&limit=12&ip=209.85.148.138'

      axios
        .get(url)
        .then(function (response) {
          console.log('Response Data: ', response.data.offers)
          commit('SET_OG_OFFERS', response.data.offers)
          commit('SET_OFFERS_LOADING', false)
        })
        .catch(function (error) {
          console.log(error)
          commit('SET_OFFERS_LOADING', false)
        })
    },
    setAlert({ commit }, alert) {
      commit('SET_ALERT', alert)
    },
    closeAlert({ commit }) {
      console.log('I am inside the close alert function')
      setTimeout(function () {
        const alert = {}
        alert.status = false
        alert.message = ''
        commit('SET_ALERT', alert)
      }, 3000)
    },
  },
  getters: {
    loginDialog: (state) => state.loginDialog,
    user: (state) => state.user,
    ref: (state) => state.ref,
    offerDialog: (state) => state.offerDialog,
    accDialog: (state) => state.accDialog,
    pointsDialog: (state) => state.pointsDialog,
    url: (state) => state.url,
    offerNetwork: (state) => state.offerNetwork,
    AMOffers: (state) => state.AMOffers,
    CGOffers: (state) => state.CGOffers,
    OGOffers: (state) => state.OGOffers,
    offersLoading: (state) => state.offersLoading,
    alert: (state) => state.alert,
    leaderboardLeads: (state) => state.leaderboardLeads,
    rewardLoading: (state) => state.rewardLoading,
  },
}
