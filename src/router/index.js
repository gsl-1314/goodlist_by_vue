import Vue from "vue";
import VueRouter from "vue-router";
import GoodList from "../components/GoodList.vue"
import ShopingCart from "../components/ShopingCart.vue"

Vue.use(VueRouter)
const route = new VueRouter({
	routes: [{
			path: "/",
			redirect: "/goodslist ",
			}, 
			{
			path: "/goodslist",
			name: GoodList,
			component: GoodList
			},
			{
			path: "/shopingcart",
			name: ShopingCart,
			component: ShopingCart
			}
	]
})
export default route
