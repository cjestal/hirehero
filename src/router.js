import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import yayalist from './views/YayaList.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'home',
            component: yayalist
        },
        {
            path: '/about',
            name: 'about',
            component: () =>
                import( /* webpackChunkName: "about" */ './views/About.vue')
        },
        {
            path: '/profile',
            name: 'profile',
            component: () =>
                import( /* webpackChunkName: "about" */ './views/YayaProfile.vue')
        }
    ]
})