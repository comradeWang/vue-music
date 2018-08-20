/**
 * @author: Wang.X.Y/comrade.wang.cn@gmail.com
 * @Date: 2018/8/17
 * @Time: 11:22
 * @Description: 初始化入口
 */
import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import getters from './getters'
import state from './state'
import mutations from './mutation'
import createLogger from 'vuex/dist/logger' // 获得日志
Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'
export default new Vuex.Store({
  actions,
  getters,
  state,
  mutations,
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
