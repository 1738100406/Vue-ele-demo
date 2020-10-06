import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const types = {
  SET_LOCATION: "SET_LOCATION",
  SET_ADDRESS: " SET_ADDRESS",
  ORDER_INFO: "ORDER_INFO"
}
const state = {
  location: {},
  address: "",
  orderInfo: null
}
const getters = {
  location: state => state.location,
  address: state => state.address,
  orderInfo: state => state.orderInfo,
}
const mutations = {
  [types.SET_LOCATION](state, location) {
    if (location) {
      state.location = location
    } else {
      state.location = null
    }
  },
  [types.SET_ADDRESS](state, address) {
    if (location) {
      state.address = address
    } else {
      state.address = null
    }
  },
  [types.ORDER_INFO](state, orderInfo) {
    if (orderInfo) {
      state.orderInfo = orderInfo
    } else {
      state.orderInfo = null
    }
  }
}
//actions
const actions = {
  setLocation: ({ commit }, location) => {
    commit(types.SET_LOCATION, location)
  },
  setAddress: ({ commit }, address) => {
    commit(types.SET_ADDRESS, address)
  },
  setOrderInfo: ({ commit }, OrderInfo) => {
    commit(types.ORDER_INFO, OrderInfo)
  }
}
export default new Vuex.Store({
  types,
  state,
  getters,
  mutations,
  actions,
  modules: {
  }
})
