import Vue from 'vue'
import App from './App.vue'

/* font awesome */

import '@fortawesome/fontawesome-free-webfonts/css/fontawesome.css'

// 使用するカテゴリーのファイルを import
import '@fortawesome/fontawesome-free-webfonts/css/fa-brands.css'
import '@fortawesome/fontawesome-free-webfonts/css/fa-regular.css'
import '@fortawesome/fontawesome-free-webfonts/css/fa-solid.css'


/* Google Analytics */
import VueAnalytics from 'vue-analytics'

Vue.use(VueAnalytics, {
  id: 'UA-140693200-1'
})


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
