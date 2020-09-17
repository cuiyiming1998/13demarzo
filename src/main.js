
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import Vuex from 'vuex'
import less from 'less'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(less)
Vue.use(Element)
Vue.use(Vuex)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
