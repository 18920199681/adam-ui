import Vue from 'vue';
import Toast from './toast.vue';

let toastInstance = Vue.extend(Toast);
let toast_fn = new toastInstance().$mount(document.createElement('div'));

let toast = (msg) => {
  document.body.appendChild(toast_fn.$el);
  toast_fn.message(msg);
}

toast.success = (msg) => {
  document.body.appendChild(toast_fn.$el);
  toast_fn.success(msg);
}

toast.error = (msg) => {
  document.body.appendChild(toast_fn.$el);
  toast_fn.error(msg);
}

toast.warn = (msg) => {
  document.body.appendChild(toast_fn.$el);
  toast_fn.warn(msg);
}

toast.loading = (msg) => {
  document.body.appendChild(toast_fn.$el);
  toast_fn.loading(msg);
}

toast.close = () => {
  document.body.appendChild(toast_fn.$el);
  toast_fn.close();
}

export default {
  install(Vue) {
    window.Toast = Vue.prototype.Toast = toast;
  }
}
