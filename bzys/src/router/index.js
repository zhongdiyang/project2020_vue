import Vue from 'vue';
import Router from 'vue-router';

import bzcyIndex from '@/view/index';
import bzcyPay from '@/view/pay';
import Vuex from 'vuex';
Vue.use(Vuex);

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: bzcyIndex
    },
    {
      path: '/pay',
      name: 'pay',
      component: bzcyPay
    }
  ]
});
