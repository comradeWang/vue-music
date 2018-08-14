// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import 'common/stylus/index.styl'
import 'common/stylus/varible.styl'
import fastclick from 'fastclick'
import axios from 'axios'
// 引入全部组件
import Mint from 'mint-ui'
import common from './common/js/common'
Vue.use(common)
Vue.use(Mint)
fastclick.attach(document.body)
Vue.config.productionTip = false
Vue.prototype.$axios = axios
/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
