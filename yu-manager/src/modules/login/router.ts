import { RouteRecordRaw } from "vue-router";
import Login from './index'




const routes: Array<RouteRecordRaw> = [
    {
        path: '/login',
        name: 'Login',
        component: Login
    }
]

export default routes