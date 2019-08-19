import Vue from 'vue';
import Router from 'vue-router';
import Search from './views/Search.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Search',
      component: Search,
    },
    {
      path: '/about',
      name: 'about',
      component() {
        return import(/* webpackChunkName: "about" */ './views/About.vue');
      },
    },
  ],
});
