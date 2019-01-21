import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import swiperCss from './../node_modules/swiper/dist/css/swiper.min.css'
import "./assets/css/iconfont.css";
Vue.config.productionTip = false

new Vue({
  router,
  store,
  swiperCss,
  // swiperJs,
  render: h => h(App)
}).$mount('#app')
