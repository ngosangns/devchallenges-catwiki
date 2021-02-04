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
import InfoPage from '/src/pages/InfoPage/InfoPage.vue'
import MostSearched from '/src/pages/MostSearched/MostSearched.vue'

// --------------

const app = createApp(App)


// Create router
const routes = [
    { path: '/', component: HomePage },
    { path: '/info', component: InfoPage },
    { path: '/most-searched', component: MostSearched },
    { path: '/:pathMatch(.*)*', component: HomePage },
]
const router = VueRouter.createRouter({
    mode: 'history',
    history: VueRouter.createWebHistory(),
    routes,
})
app.use(router)


app.mount('#app')
