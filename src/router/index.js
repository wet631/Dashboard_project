import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    redirect: '/Dashboard_one'
  },
  {
    path: '/Dashboard_one',
    name: 'Dashboard_one',
    component: () => import('../pages/Dashboard_one.vue'),
    meta: {
      keepAlive: true
    }
  },
]

const router = new VueRouter({
  routes
})

export default router
