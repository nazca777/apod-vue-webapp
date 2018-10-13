import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex, axios)

export default new Vuex.Store({
  state: {
    apod: []
  },
  mutations: {
    buildApod(state, apod) {
      state.apod = apod
    }
  },
  actions: {
    loadApod({ commit }) {
      axios
          .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
          .then(r => r.data)
          .then(apod => {
            commit('buildApod', apod)
          })
    }
  }
})
