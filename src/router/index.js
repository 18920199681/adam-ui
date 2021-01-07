import Vue from 'vue';
import Router from 'vue-router';

import NavRoutes from './NavRoutes';
const navConfig = require('./NavRoutes/nav.config.json');

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'Welcome',
    redirect: '/home',
    component: () => import('../docs/Welcome.vue')
  },
  {
    path: '/home',
    name: 'Welcome',
    component: () => import('../docs/Welcome.vue'),
    children: []
  },
];

const modules = [
  ...NavRoutes,
];

Object.keys(navConfig).map((group, index) => {
  navConfig[group].items.map((item, eIndex) => {

    const obj = {
      path: item.path,
      component: modules[index].items[eIndex].component
    };

    routes[1].children.push(obj);
  });
});

console.log(routes);

export default new Router({
  mode: 'hash',
  routes
});
