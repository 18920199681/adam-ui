import Vue from 'vue';
import App from './App';
import router from './router';
import Examples from './components/index';

import Toast from './components/Toast/index';
// Vue.use(Toast);

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});

export default {
  Examples,
  Toast
};
