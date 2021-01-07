import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import router from './router';

import './assets/icons';

const routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return routerPush.call(this, location, onResolve, onReject);
  return routerPush.call(this, location).catch(error => error);
};

/* 工具组件 */
import Toast from './examples/Toast/index';
Vue.use(Toast);


/* 模板组件 */
import gdInput from './examples/Input';

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

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
