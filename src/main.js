// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import 'common/stylus/index.styl'
import 'common/stylus/varible.styl'
import fastclick from 'fastclick'
import axios from 'axios'
import Swiper from 'swiper'

import 'swiper/dist/css/swiper.min.css'
fastclick.attach(document.body)
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$axios = axios
/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
