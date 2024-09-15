import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/pages/Home.vue'
import Signals from '@/pages/Signals.vue'
import System from '@/pages/System.vue'
import NotFound from '@/pages/NotFound.vue'
import CartPage from '@/pages/CartPage.vue'
import Corzina from '@/pages/Corzina.vue'



const routes = [
  { path: '/', component: Main },
  { path: '/catalog-signals', component: Signals },
  { path: '/catalog-systems', component: System },
  { path: '/catalog-systems/:id', component: CartPage },
  { path: '/carzina', component: Corzina },
  { path: '/:pathMatch(.*)*', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(), // This sets the history mode to HTML5
  routes, // The defined routes
})

export default router