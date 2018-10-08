import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import List from './views/List.vue'
import Auth from './views/Auth.vue'
import AuthSuccess from './views/AuthSuccess.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        { path: '/', component: Auth},
        { path: '/auth', component: Auth},
        { path: '/success', component: AuthSuccess },
        { path: '/list', component: List},
        { path: '/profile', component: () => import( /* webpackChunkName: "about" */ './views/Profile.vue')}
    ]
})