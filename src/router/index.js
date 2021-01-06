import Vue from 'vue';
import Router from 'vue-router';

import NavRoutes from './NavRoutes';
const navConfig = require('./nav.config.json');

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: () => import('../docs/Welcome.vue')
  },
];

const modules = [
  ...NavRoutes,
];

Object.keys(navConfig).map((value, index) => {
  const obj = {
    path: `/${value}`,
    component: modules[index]
  };

  routes.push(obj);
});

export default new Router({
  mode: 'hash',
  routes
});
