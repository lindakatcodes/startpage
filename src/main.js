import { createApp } from 'vue'
import { createRouter, createWebHistory } from "vue-router";
import './styles.css'
import App from "./App.vue";
import HomeView from "./HomeView.vue";
import WorkView from "./WorkView.vue";

const routes = [
  { path: "/", name: "Home", component: HomeView },
  { path: "/work", name: "Work", component: WorkView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App)

app.use(router)

app.mount('#app')
