import gdInput from './Input';

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
