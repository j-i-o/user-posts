import Vue from 'vue'
import VueRouter from 'vue-router'
import Users from '../views/Usuarios'
import Posts from '../views/Posts'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Usuarios',
    component: Users
  },
  {
    path: '/:id/posts',
    name: 'Posts',
    component: Posts
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
