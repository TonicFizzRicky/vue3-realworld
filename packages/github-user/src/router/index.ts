import {createRouter,createWebHistory} from 'vue-router'

const routes = [
    {path:"/",name:"search",component:() => import("../pages/search.vue")},
    {path:"/detail",name:"detail",component:() => import("../pages/detail.vue")}
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router