import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/iconfont/iconfont.css'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
Vue.use(VueMaterial)


import axios from 'axios'

Vue.config.productionTip = false

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)



new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
