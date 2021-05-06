import Vue from 'vue';
import App from './App';
import router from './router';
import './assets/icons';
import './examples';

import CodeBlock from './docs/components/CodeBlock';
Vue.component('code-block', CodeBlock);

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
