import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    formInfo: {
      name: '',
      bz: '',
      wx: '',
      sex: '',
      birth_date: '',
      birth_hour: '',
      birth_date_lunar: ''
    }
  },
  mutations: {
    changeUserInfo (state, {name, sex, bz, wx, birthDate, birthHour, birthDateLunar}) {
      state.formInfo.name = name
      state.formInfo.sex = sex
      state.formInfo.bz = bz
      state.formInfo.wx = wx
      state.formInfo.birth_date = birthDate
      state.formInfo.birth_hour = birthHour
      state.formInfo.birth_date_lunar = birthDateLunar
      console.log(state)
    }
  },
  actions: {
    submitUserInfo ({commit}, obj) {
      setTimeout(() => {
        console.log('发送请求成功！')
        commit('changeUserInfo', obj)
      }, 300)
    }
  }
})
export default store
