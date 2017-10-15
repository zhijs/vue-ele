// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import goods from './components/goods/goods';
import ratings from './components/ratings/ratings';
import seller from './components/seller/seller';
import App from './App';

Vue.use(VueRouter);
Vue.use(VueResource); // 注册后每个实例就可以使用
const routes = [
  {path: '/', redirect: '/goods'},
  {path: '/goods', component: goods},
  {path: '/ratings', component: ratings},
  {path: '/seller', component: seller}
];

const router = new VueRouter({
  linkActiveClass: 'active',
  routes
});

new Vue({ // eslint-disable-line no-new
  el: '#app',
  router,
  render: h => h(App)
});
