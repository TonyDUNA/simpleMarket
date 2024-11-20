import { createRouter, createWebHistory } from 'vue-router'
import ProductPAge from '@/views/ProductPage.vue'
import CartPage from '@/views/CartPage.vue'
import HomePage from '@/views/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: HomePage
    },

    {
      path: '/product/:id',
      name: 'product',

      component: ProductPAge,
      props: true,
    },
    {
      path: '/cart',
      name: 'cart',

      component: CartPage
    },
  ],
})

export default router
