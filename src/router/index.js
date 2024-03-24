import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/FrontView.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('../views/User/HomeView.vue')
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('../views/User/AboutView.vue')
      },
      {
        path: 'products',
        component: () => import('../views/User/ProductsView.vue')
      },
      {
        path: 'product/:id',
        component: () => import('../views/User/ProductView.vue')
      },
      {
        path: 'cart',
        component: () => import('../views/User/CartView.vue')
      },
      {
        path: 'checkout',
        component: () => import('../views/User/CheckOutView.vue')
      },
      {
        path: 'checkoutpay',
        component: () => import('../views/User/CheckOutPayView.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes
})

export default router
