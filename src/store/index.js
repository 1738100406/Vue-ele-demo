import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const types = {
  SET_LOCATION: "SET_LOCATION",
  SET_ADDRESS: " SET_ADDRESS",
  ORDER_INFO: "ORDER_INFO",
  USER_INFO: "USER_INFO",
  REMARK_INFO: "REMARK_INFO",
}
const state = {
  location: {},
  address: "",
  orderInfo: null,
  userInfo: null,
  remarkInfo: {
    tabware: "",
    remark: ""
  }
}
const getters = {
  location: state => state.location,
  address: state => state.address,
  orderInfo: state => state.orderInfo,
  userInfo: state => state.userInfo,
  remarkInfo: state => state.remarkInfo,
  totalcount: state => {
    let price = 0
    if (state.orderInfo) {
      const selectFoods = state.orderInfo.selectFoods
      selectFoods.forEach(selectFoods => {
        price += (selectFoods.activity.fixed_price * selectFoods.count)
      })
      price += state.orderInfo.shopInfo.float_delivery_fee
    }
    return price


  }
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
  },
  [types.USER_INFO](state, userInfo) {
    if (userInfo) {
      state.userInfo = userInfo
    } else {
      state.userInfo = null
    }
  },
  [types.REMARK_INFO](state, remarkInfo) {
    if (remarkInfo) {
      state.remarkInfo = remarkInfo
    } else {
      state.remarkInfo = null
    }
  },
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
  },
  setUserInfo: ({ commit }, userInfo) => {
    commit(types.USER_INFO, userInfo)
  },
  setRemarkInfo: ({ commit }, remarkInfo) => {
    commit(types.REMARK_INFO, remarkInfo)
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
