import Vue from 'vue';
import Input from './Input.vue';

const Component = Vue.extend(Input)
Input.install = function (Vue) {
  Vue.component(Input.name, Input);

  Vue.prototype.$gdInput = function () {
    const instance = new Component()
    instance.$mount()
    return instance
  }
}

export default Input
