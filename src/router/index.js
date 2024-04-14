import { createRouter, createWebHashHistory } from 'vue-router'

import LoginView from '../views/LoginView.vue'
import SignupView from '../views/SignupView.vue'

import UserLayoutView from '../views/UserLayoutView.vue'
import HomeView from '../views/HomeView.vue'
import FollowingView from '../views/FollowingView.vue'
import PersonalInfoView from '../views/PersonalInfoView.vue'
import NewPostView from '../views/NewPostView.vue'
import LikesView from '../views/LikesView.vue'
import ProfileView from '../views/ProfileView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'router-active',
  routes: [
    {
      path: '/',
      component: UserLayoutView,
      children: [
        {
          path: '',
          name: 'Home',
          component: HomeView
        },
        {
          path: '/following',
          name: 'Following',
          component: FollowingView
        },
        {
          path: '/personalinfo',
          name: 'PersonalInfo',
          component: PersonalInfoView
        },
        {
          path: '/newpost',
          name: 'NewPost',
          component: NewPostView
          // component: () => import('../views/AboutView.vue')
        },
        {
          path: '/likes',
          name: 'Likes',
          component: LikesView
        },
        {
          path: '/profile',
          name: 'Profile',
          component: ProfileView
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
