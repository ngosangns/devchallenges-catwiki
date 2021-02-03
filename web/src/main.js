import { createApp } from 'vue'
import App from './App.vue'

// Bootstrap + Jquery
import '@popperjs/core'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

// Vue Router
import * as VueRouter from 'vue-router'

// Components
import HomePage from '/src/pages/HomePage/HomePage.vue'
import HelloWorld from '/src/components/HelloWorld.vue'

// --------------

const app = createApp(App)


// Create router
const routes = [
    { path: '/', component: HomePage },
    { path: '/hello', component: HelloWorld },
]
const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
})
app.use(router)


app.mount('#app')
