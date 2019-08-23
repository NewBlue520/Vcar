import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';
import state from './state';

Vue.use(Vuex);
const store = new Vuex.Store({
  //数据存储
  state,
  //函数处理
  mutations,
  //内部调用函数
  actions,
  //过滤器
  getters,
});

export default store;
