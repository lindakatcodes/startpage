import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import './styles.css'
import App from './App.vue'

const routes = [
  { path: '/', name: 'Home', component: App },
  { path: '/work', name: 'Work', component: App },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes, 
})

const app = createApp(App)

app.use(router)

app.mount('#app')
