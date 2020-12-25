import Vue from 'vue';
import App from './App';
import router from './router';
import Examples from './components';
import Toast from './components/Toast/index';

Vue.use(Examples);
Vue.use(Toast);

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
