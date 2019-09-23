import Vue from 'vue';
import Vuex from 'vuex';
import { intersectionBy } from 'lodash';
import {
  filterByMultiselect,
  filterByLimiter,
  filterByRange,
  filterByBoolean,
} from './helpers/filterData';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: null,
    resultBy: {
      rooms: null,
      price: null,
      floorsRange: null,
      notFirstNorLast: null,
      years: null,
    },
    result: [],
    rooms: {
      value: null,
      options: [1, 2, 3, 4, 5],
    },
    price: 0,
    floors: {
      notFirstNorLast: false,
      floorsRange: {
        min: 1,
        max: 120,
      },
    },
    years: {
      value: null,
      options: [2019, 2020, 2021],
    },
  },
  mutations: {
    setData(state, data) {
      state.data = data;
      state.result = data;
      Object.keys(state.resultBy).forEach(key => state.resultBy[key] = data);
    },
    updateResult(state) {
      state.result = intersectionBy(
        ...Object.values(state.resultBy),
        'id',
      );
    },
    updateRooms(state, value) {
      state.rooms.value = value;
      state.resultBy.rooms = filterByMultiselect(state.data, 'rooms', value);
    },
    updatePrice(state, value) {
      state.price = value;
      state.resultBy.price = filterByLimiter(state.data, 'price', value);
    },
    updateFloorsMin(state, value) {
      state.floors.floorsRange.min = value;
      state.resultBy.floorsRange = filterByRange(state.data, 'house.floors', state.floors.floorsRange);
    },
    updateFloorsMax(state, value) {
      state.floors.floorsRange.max = value;
      state.resultBy.floorsRange = filterByRange(state.data, 'house.floors', state.floors.floorsRange);
    },
    updateFloorsNfnl(state, value) {
      state.floors.notFirstNorLast = value;
      state.resultBy.notFirstNorLast = filterByBoolean(state.data, 'floor', value);
    },
    updateYears(state, value) {
      state.years.value = value;
      state.resultBy.years = filterByMultiselect(state.data, 'house.completion', value);
    },
  },
  actions: {
    updateRooms({ commit }, value) {
      commit('updateRooms', value);
      commit('updateResult');
    },
    updatePrice({ commit }, { target: { value } }) {
      commit('updatePrice', value);
      commit('updateResult');
    },
    updateFloorsMin({ commit }, { target: { value } }) {
      commit('updateFloorsMin', value);
      commit('updateResult');
    },
    updateFloorsMax({ commit }, { target: { value } }) {
      commit('updateFloorsMax', value);
      commit('updateResult');
    },
    updateFloorsNfnl({ commit }, { target: { checked } }) {
      commit('updateFloorsNfnl', checked);
      commit('updateResult');
    },
    updateYears({ commit }, value) {
      commit('updateYears', value);
      commit('updateResult');
    },
  },
});
