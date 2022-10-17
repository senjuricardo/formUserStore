import {createRouter, createWebHistory} from 'vue-router'
import Users from '../components/Users.vue'
import UserDetail from '../components/UserDetail.vue'

const routes= [
    {path: '/user',name: "FormUser", component: ()=> import('../components/UserDetail.vue')},
    {path: '/list',name: "FormList", component: ()=> import('../components/Users.vue')},
    {path: '/myself/:firstname/:lastname/:age/:gender',name: "OneUser", component: ()=> import('../components/oneUser.vue')}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router