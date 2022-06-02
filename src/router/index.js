import { createRouter, createWebHistory } from 'vue-router'


import * as Public from '@/views/public'

import * as Admin from '@/views/admin'

import Login from '@/views/auth/Login.vue'
import { authGuard } from '@/_helpers/auth-guard'

// localStorage.setItem('token', 'marcel')


const routes = [
  {
    path: '/',
    name: 'public',
    component: Public.PublicLayout,
    children: [
      { path: '/', name: 'home', component: Public.Home },
      { path: '/cocktails', name: 'cocktails', component: Public.Cocktail },
      { path: '/contact', name: 'contact', component: Public.Contact }
    ]
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin.AdminLayout,    
    children: [
      { path: 'dashboard', name: 'dashboard', component: Admin.Dashboard },
      { path: 'users/index', name: 'uList', component: Admin.UserIndex },
      { path: 'users/edit/:id(\\d+)', name: 'uEdit', component: Admin.UserEdit, props: true },
      { path: 'users/add', component: Admin.UserAdd },

      { path: 'cocktails/index', name: 'cList', component: Admin.CocktailIndex },
      { path: 'cocktails/edit/:id(\\d+)?', name:'cEdit', component: Admin.CocktailEdit, props: true },
      { path: '/:pathMatch(.*)*', redirect: '/admin/dashboard' }
    ]
  },
  {
    path: '/login', name: 'Login', component: Login
  },
  {
    path: '/:pathMatch(.*)*', redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// Vérouillage de la partie admin (token)
router.beforeEach((to, from, next) => {
  if(to.matched[0].name == 'admin'){
    authGuard()
  }
  next()
})


export default router
