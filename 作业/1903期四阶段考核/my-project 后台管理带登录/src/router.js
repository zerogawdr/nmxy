import Vue from 'vue'
import vueRouter from 'vue-router'
Vue.use(vueRouter)



const routes = [{
        path: '/admin',
        name: 'index',
        meta: {
            auth_user: true
        },
        component: () => import('./pages/Layout.vue'),
        children: [{
            path: 'sys/user',
            name: 'adminSysUser',
            meta: {
                auth_user: true
            },
            component: () => import('./components/sys/User.vue')
        }, {
            path: 'sys/role',
            name: 'adminSysRole',
            meta: {
                auth_user: true
            },
            component: () => import('./components/sys/Role.vue')
        }]
    },
    {
        path: '/login',
        name: "login",
        component: () => import('./pages/login.vue')
    }
]


const router = new vueRouter({
    mode: 'history',
    routes
})


export default router