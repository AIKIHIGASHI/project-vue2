import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userDetail: {}
  },
  getters: {
    gender: state => state.userDetail.gender,
    year: state => state.userDetail.year,
    month: state => state.userDetail.month,
    date: state => state.userDetail.date,
    q1: state => state.userDetail.q1,
    q2: state => state.userDetail.q2,
    q3: state => state.userDetail.q3,
    consultation: state => state.userDetail.consultation
  },
  mutations: {
    setUserDetail(state, newUserDetail) {
      state.userDetail = {...state.userDetail, ...newUserDetail}
    }
  }
});