import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import firebase from 'firebase'
// import { component } from 'vue/types/umd'

Vue.use(VueRouter)

  const routes = [
  {
    path: '*',
    redirect: '/login'
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
  path: '/login',
  name: 'Login',
  component: () => import('../views/Login.vue'),
  meta: {
    noAuth: true
  }
  },
  {
  path: '/dashboard',
  name: 'Dashboard',
  component: () => import('@/views/Dashboard.vue'),
  meta: {
          isAuth: true
        }
  },
  {
  path: '/products',
  name: 'Products',
  component: () => import('@/views/Products.vue'),
  meta: {
          isAuth: true
        }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  let authUser = firebase.auth().currentUser;
  // let privateRoute = to.matched.some(record => record.meta.isAuth);
  // console.log(authUser);
  
  if (to.matched.some( record => record.meta.isAuth )){
    if (authUser) {
      next()
    }else {
      next('/login')
    }
  }else{
    
    next()
  }
  if (to.matched.some( record => record.meta.noAuth )){
    if (authUser) {
      next('/dashboard')
    }else {
      next()
    }
  }
  
})

export default router
