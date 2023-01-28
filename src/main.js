import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import './styles.css'
import App from './App.vue'
import Home from './Home.vue';
import Work from './Work.vue';

const routes = [
  { path: '/', component: Home },
  // { path: '/work', component: Work, props: { links: WorkLinks } },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes, 
})

const app = createApp(App)

app.use(router)

app.mount('#app')
