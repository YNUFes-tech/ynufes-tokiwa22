import {createStore} from 'vuex'

export default createStore({
  state: {
    sponsors: [{image: {url: "/data/images/loading1.png"}}, {image: {url: "/data/images/loading1.png"}}, {image: {url: "/data/images/loading1.png"}}, {image: {url: "/data/images/loading1.png"}}],
  },
  getters: {},
  mutations: {
    setSponsors(state, newSponsors) {
      state.sponsors = newSponsors;
    },
  },
  actions: {},
  modules: {}
})
