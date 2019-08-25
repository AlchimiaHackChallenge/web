import Vue from 'vue';
import Router from 'vue-router';

import Main from './components/Main.vue';
import Home from './components/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
        path: '/',
        name: 'main',
        component: Main,
        children: [
            {
                path: '/',
                name: 'home',
                component: Home,
            }
        ]
    },
  ]
});
