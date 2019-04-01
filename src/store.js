import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'

Vue.use(Vuex)
console.log(Vue.prototype)

export default new Vuex.Store({
  state: {
  },
  mutations: {
    NAVIGATE: function (state, { scene }) {
      router.push({name: scene, params: {}})
    }
  },
  actions: {
    navigate: function ({ commit }, scene) {
      commit('NAVIGATE', scene)
    }
  }
})
