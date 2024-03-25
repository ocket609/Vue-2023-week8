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
        path: 'checkoutpay/:id',
        component: () => import('../views/User/CheckOutPayView.vue')
      }
    ]
  },
  {
    path: '/login',
    name: '登入',
    component: () => import('../views/User/LoginView.vue')
  },
  { // 重新導向
    path: '/Admin/:pathMatch(.*)*',
    redirect: { name: '登入' }
  },
  {
    path: '/admin',
    component: () => import('../views/Admin/DashboardView.vue'),
    children: [
      {
        path: 'products',
        name: '後台產品列表',
        component: () => import('../views/Admin/AdminProductsView.vue')
      },
      {
        path: 'order',
        name: '訂單',
        component: () => import('../views/Admin/AdminOrderView.vue')
      },
      {
        path: 'coupon',
        name: '優惠券',
        component: () => import('../views/Admin/AdminCouponView.vue')
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
