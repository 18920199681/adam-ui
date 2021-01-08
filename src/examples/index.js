import Vue from 'vue';
// import App from '../App.vue';
// import router from '../router';

import '../assets/icons';

/* 工具组件 */
import Toast from './Toast/Index';
Vue.use(Toast);


/* 模板组件 */
import gdInput from './Input/Index';

const components = [
  gdInput,
];

const install = function (Vue) {
  if (install.installed) return;
  components.map(item => Vue.component(item.name, item));
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  gdInput,
};


Vue.config.productionTip = false;

// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// });
