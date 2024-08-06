import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DataBinding from '@/views/DataBinding.vue'
import DataBindingButton from '@/views/DataBindingButton.vue'
import DataBindingClass from '@/views/DataBindingClass.vue'
import DataBindingClass2 from '@/views/DataBindingClass2.vue'
import DataBindingStyle from '@/views/DataBindingStyle.vue'
import DataBindingList from '@/views/DataBindingList.vue'
import RenderingVIf from '@/views/RenderingVIf.vue'
import EventClick from '@/views/EventClick.vue'
import EventChange from '@/views/EventChange.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/dataBinding',
    name: 'DataBinding',
    component: DataBinding
  },
  {
    path: '/dataBindingButton',
    name: 'DataBindingButton',
    component: DataBindingButton
  },
  {
    path: '/dataBindingClass',
    name: 'DataBindingClass',
    component: DataBindingClass
  },
  {
    path: '/dataBindingClass2',
    name: 'DataBindingClass2',
    component: DataBindingClass2
  },
  {
    path: '/dataBindingStyle',
    name: 'DataBindingStyle',
    component: DataBindingStyle
  },
  {
    path: '/dataBindingList',
    name: 'DataBindingList',
    component: DataBindingList
  },
  {
    path: '/renderingVIf',
    name: 'RenderingVIf',
    component: RenderingVIf
  },
  {
    path: '/eventClick',
    name: 'EventClick',
    component: EventClick
  },
  {
    path: '/eventChange',
    name: 'EventChange',
    component: EventChange
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
