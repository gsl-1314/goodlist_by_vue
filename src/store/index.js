import Vue from 'vue'
import Vuex from 'vuex'
import goods from './modules/goods'
import shopingcart from './modules/shopingcart'
Vue.use(Vuex)
export default new Vuex.Store({
	modules: {
		goods,
		shopingcart
	}
})
