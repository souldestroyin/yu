import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

createApp(App).use(store).use(router).mount("#app");


import { registerMicroApps, start } from 'qiankun';

registerMicroApps([
    {
        name: 'vue app1',
        entry: '//localhost:8080',
        container: '#container',
        activeRule: '/app1'
    },
    {
        name: 'vue app2',
        entry: '//localhost:8082',
        container: '#container',
        activeRule: '/app2'
    }
])


start()