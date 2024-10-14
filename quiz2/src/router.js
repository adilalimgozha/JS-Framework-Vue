import { createMemoryHistory, createRouter } from 'vue-router'

import Home from './components/Home.vue'
import UserCard from './components/UserCard.vue'

const routes = [
    {
      path: '/home',
      name: 'Home',
      component: Home,
    },
    {
      path: '/home/:id',
      name: 'UserCard',
      component: UserCard,
    },
  ];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router