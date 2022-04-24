import { RouteRecordRaw } from "vue-router";
import LoginPage from './index'


const routes: Array<RouteRecordRaw> = [
    {
        path: '/login',
        name: 'Login',
        component: LoginPage
    }
]

export default routes