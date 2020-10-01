import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: () => import("../views/Login.vue") }
]


const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {

  next()
})
export default router
