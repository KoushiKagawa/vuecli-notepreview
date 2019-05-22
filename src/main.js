import Vue from 'vue'
import App from './App.vue'

/* font awesome */
/*
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCoffee)

Vue.component('font-awesome-icon', FontAwesomeIcon)
*/

// Font Awesome のメインファイルを import

import '@fortawesome/fontawesome-free-webfonts/css/fontawesome.css'

// 使用するカテゴリーのファイルを import

import '@fortawesome/fontawesome-free-webfonts/css/fa-brands.css'
import '@fortawesome/fontawesome-free-webfonts/css/fa-regular.css'
import '@fortawesome/fontawesome-free-webfonts/css/fa-solid.css'

/* //font awesome */

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
