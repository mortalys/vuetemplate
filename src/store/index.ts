// core vue libraries
import Vue from 'vue'
import Vuex, { Store } from 'vuex'

// shared stores
import StoreUsers from '../domains/users/store/index'

Vue.use(Vuex)

export default new Store({
  modules: {
    StoreUsers
  }
})
