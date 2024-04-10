import { createRouter, createWebHashHistory } from 'vue-router'
import UserView from '../views/UserView.vue'
import HomeView from '../views/HomeView.vue'
import FollowerView from '../views/FollowerView.vue'
import PostView from '../views/PostView.vue'
import PostLikeView from '../views/PostLikeView.vue'
import ProfileView from '../views/ProfileView.vue'
import LoginView from '../views/LoginView.vue'
import SignupView from '../views/SignupView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'router-active',
  routes: [
    {
      path: '/',
      component: UserView,
      children: [
        {
          path: '',
          name: 'Home',
          component: HomeView
          // component: () => import('../views/AboutView.vue')
        },
        {
          path: '/followers',
          name: 'Followers',
          component: FollowerView
          // component: () => import('../views/AboutView.vue')
        },
        {
          path: '/post',
          name: 'Post',
          component: PostView
          // component: () => import('../views/AboutView.vue')
        },
        {
          path: '/like',
          name: 'Like',
          component: PostLikeView
          // component: () => import('../views/AboutView.vue')
        },
        {
          path: '/profile',
          name: 'Profile',
          component: ProfileView
          // component: () => import('../views/AboutView.vue')
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginView
    },
    {
      path: '/signup',
      name: 'Signup',
      component: SignupView
    }
  ]
})

export default router
