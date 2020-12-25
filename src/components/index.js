import Toast from './Toast';
import Input from './Input';

const components = [
  Toast,
  Input,
]

const install = function (Vue) {
  components.forEach(item => {
    Vue.component(item);
  });
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  Toast,
  Input,
};
