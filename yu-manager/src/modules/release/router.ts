import { RouteRecordRaw } from "vue-router";
import Release from './index'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/release',
        name: 'Release',
        component: Release
    }
]

export default routes