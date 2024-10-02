import { createRouter, createWebHistory } from 'vue-router'

import home from '../components/HelloWorld.vue';
import encriptor from '../components/desencriptor.vue'

const routes = [
  { path: '/', component: home },
  { path: '/home', component: encriptor },
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
