import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Information from "../views/Information";
import Home from "../views/Home";
import Recommend from "../views/Recommend";
import Discover from "../views/Discover";
import Write from "../views/Write";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:{
      name: 'Home'
    }
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/discover',
    name: 'Discover',
    component: Discover
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/information',
    name: 'Information',
    component: Information
  },
  {
    path: '/recommend',
    name: 'Recommend',
    component: Recommend
  },
  {
    path: '/write',
    name: 'Write',
    component: Write
  },
  {
    path: '/register',
    name: 'Register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue')
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
