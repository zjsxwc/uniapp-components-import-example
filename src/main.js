import Vue from 'vue'
import App from './App'

import pp from './components/pp'
// import {uniPopup} from '@dcloudio/uni-ui'
// import uniPopup from "@dcloudio/uni-ui/lib/uni-popup/uni-popup.vue"

Vue.config.productionTip = false
Vue.component('ppx',pp)
// Vue.component('uni-popup',uniPopup)

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
