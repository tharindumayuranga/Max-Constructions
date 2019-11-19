import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Login from './components/Login.vue'
import Dashboard from './components/Dashboard.vue'
import Machine from './components/Machine.vue'
import Labour from './components/Labour.vue'
import Project from './components/Project.vue'

const router = new VueRouter({

    mode:'history',

    routes:[
        {
            path:"/login",
            component:Login
        },
        {
            path:"/",
            component:Dashboard
        },
        {
            path:"/machine",
            component:Machine
        },
        {
            path:"/labour",
            component:Labour
        },
        {
            path:"/project",
            component:Project
        },
    ]

});

export default router;