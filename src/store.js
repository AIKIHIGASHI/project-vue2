import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    gender: '男性',
    year: 1990,
    month: 1,
    date: 1,
    q1: '',
    q2: '',
    q3: '',
    consultation: ''
  },
  getters: {
    gender: state => state.gender,
    year: state => state.year,
    month: state => state.month,
    date: state => state.date,
    q1: state => state.q1,
    q2: state => state.q2,
    q3: state => state.q3,
    consultation: state => state.consultation
  },
  mutations: {
    updateGender(state, newGender) {
      state.gender = newGender;
    },
    updateYear(state, newYear) {
      state.year = newYear;
    },
    updateMonth(state, newMonth) {
      state.month = newMonth;
    },
    updateDate(state, newDate) {
      state.date = newDate;
    },
    updateQ1(state, newQ1) {
      state.q1 = newQ1;
    },
    updateQ2(state, newQ2) {
      state.q2 = newQ2;
    },
    updateQ3(state, newQ3) {
      state.q3 = newQ3;
    },
    updateConsultation(state, newConsultation) {
      state.consultation = newConsultation;
    }
  }
});