import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import login from '../components/login/login'
import signup from "../components/login/signup";
import forum from "../components/Forum/forum"
import read from "../components/Forum/read"
import create from "../components/Forum/create"
import logout from "../components/login/logout";

const routes = [
    { path: '/login', component: login },
    { path: '/logout', component: logout },
    { path: '/signup', component: signup },
    { path: '/forum', component: forum, name:'forum' },
    { path: '/ask', component: create },
    { path: '/question/:slug', component: read, name:'read' },

];

const router = new VueRouter({
    routes, // short for `routes: routes`
    hashbang: false,
    mode: 'history'
});

export default router