import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Main from './layout/Main.vue';
import UserList from '@/components/mainLabel/UserList.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    // ...UserList
    {
      path: '/userList',
      name: 'userList',
      component: UserList,
      props: true
    },
  ],
});
