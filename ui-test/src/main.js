import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';

// eslint-disable-next-line
/* eslint-disable */
// import YuUi from 'yu-ui'

import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false

Vue.use(ElementUI);
// Vue.use(YuUi)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
