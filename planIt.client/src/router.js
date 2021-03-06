import { createRouter, createWebHashHistory } from 'vue-router'
import { authGuard } from '@bcwdev/auth0provider-client'

function loadPage(page) {
  return () => import(`./pages/${page}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: loadPage('HomePage')
  },
  // {
  //   path: '/planit',
  //   name: 'PlanIt',
  //   component: loadPage('PlanItPage')
  // },
  {
    path: '/account',
    name: 'Account',
    component: loadPage('AccountPage'),
    beforeEnter: authGuard
  },
  {
    path: '/projects/:id',
    name: 'Project',
    component: loadPage('ProjectsPage'),
    beforeEnter: authGuard

  },
  ,
  {
    path: '/profile/:id',
    name: 'Profile',
    component: loadPage('ProfilePage'),
  },
]

export const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})
