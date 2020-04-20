import Vue from 'vue'
import App from './App.vue'

/#ブラウザ依存の解除#/
import './assets/css/reset.css'

/#vuexを使用する#/
import store from './store'

// npm install --save axios vue-axios を実行してデータにアクセスできるようにする
import axios from 'axios'
import VueAxios from 'vue-axios'

/#スクロールボタン#/
import smoothScroll from 'vue-smoothscroll'
Vue.use(smoothScroll)

Vue.config.productionTip = false

Vue.use(VueAxios, axios)

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')

