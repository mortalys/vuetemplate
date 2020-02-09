import Vue, { CreateElement, VNode } from 'vue'
import App from './App.vue'
import store from './store/index'

Vue.config.productionTip = true

new Vue({
  store,
  render: (h: CreateElement): VNode => h(App)
}).$mount('#app')
