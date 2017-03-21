import 'whatwg-fetch';

import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './routes/application.vue';
import Index from './routes/index.vue';
import NewRoute from './routes/new-route.vue';
import Detail from './routes/detail.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Index,
    name: 'index',
  },
  {
    path: '/new-route',
    component: NewRoute,
    name: 'new-route',
  },
  {
    path: '/detail',
    component: Detail,
    name: 'detail',
  }
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

const app = new Vue({ ...App, router }).$mount('.app');
