import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import seasonIndex from './views/seasonIndex.vue'
import classify from './views/classify'
import timer from './views/timer'
import carts from './views/carts'
import me from './views/me'
import seasonNew from './views/seasonNew'
import shicai from './views/shicai'
import productDetail from './views/productDetail'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component:seasonIndex
    },
    {
      path: '/classify',
      name:"classify",
      component:classify
    },
    {
      path: '/timer',
      name:"timer",
      component:timer
    },
    {
      path: '/carts',
      name:"carts",
      component:carts
    },
    {
      path: '/me',
      name:"me",
      component:me
    },
    {
      path: '/seasonNew',
      name:"seasonNew",
      component:seasonNew
    },
    {
      path: '/shicai',
      name:"shicai",
      component:shicai
    },
    {
      path: '/productDetail/:id',
      name:"productDetail",
      component:productDetail,
        props:true
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
