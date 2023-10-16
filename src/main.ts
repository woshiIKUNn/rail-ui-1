import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {createWebHashHistory, createRouter} from 'vue-router'
import lunzi from './components/lunzi.vue'
import lunzi2 from './components/lunzi2.vue'
const history = createWebHashHistory()
const router = createRouter({
    history,
    routes:[

        {path: '/', component: lunzi},
        {path: '/xxx', component: lunzi2}
    ]
})
const app = createApp(App)
app.use(router)
app.mount('#app')
 