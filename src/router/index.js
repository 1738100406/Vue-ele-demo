import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/', component: Home,
    children: [
      { path: '', redirect: ('/index') },
      { path: '/index', component: () => import("../views/index.vue") },
      { path: '/order', component: () => import("../views/Order.vue") },
      { path: '/me', component: () => import("../views/Me.vue") },
      { path: '/address', name: 'address', component: () => import("../views/Address.vue") },
      { path: '/myaddress', name: 'myaddress', component: () => import("../views/Order/Myaddress.vue") },
      { path: '/addaddress', name: 'addaddress', component: () => import("../views/Order/Addaddress.vue") },
      { path: '/settlement', name: 'settlement', component: () => import("../views/Order/Settlement.vue") },
      { path: '/remark', name: 'remark', component: () => import("../views/Order/Remark.vue") },
      { path: '/city', name: 'city', component: () => import("../views/City.vue") },
      { path: '/search', name: 'search', component: () => import("../views/Search.vue") },
      {
        path: '/shop', redirect: ('/goods'), name: 'shop', component: () => import("../views/shop/Shop.vue"),
        children: [
          { path: '/goods', component: () => import("../views/shop/Goods.vue") },
          { path: '/comments', component: () => import("../views/shop/Comments.vue") },
          { path: '/seller', component: () => import("../views/shop/Seller.vue") },
        ]
      },
    ]
  },
  { path: '/login', component: () => import("../views/Login.vue") },
]


const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {

  next()
})
export default router
