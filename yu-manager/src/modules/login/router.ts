import { RouteRecordRaw } from "vue-router";
import LoginView from './index'




const routes: Array<RouteRecordRaw> = [
    {
        path: '/login',
        name: 'Login',
        component: LoginView
    }
]

export default routes