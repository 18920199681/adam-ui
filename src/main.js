import Vue from 'vue'
import App from './App'
import router from './router'
import Toast from '@/components/Toast';

Vue.use(Toast);

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
