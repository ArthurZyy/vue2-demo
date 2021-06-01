import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout'
import store from '@/store'

Vue.use(Router)

import { Message } from 'element-ui'

export const currencyRoutes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login'),
  },
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/Home'),
        meta: { title: '首页', icon: 'el-icon-s-data' }
      },
    ]
  },
  {
    path: '/year',
    name: 'Year',
    component: Layout,
    redirect: '/year/show-group',
    meta: { title: '年度绩效', icon: 'el-icon-lock' },
    children: [
      {
        path: 'show-group',
        name: 'ShowGroup',
        component: () => import('@/views/year/ShowGroup'),
        meta: { title: '查看年度团队绩效', icon: 'el-icon-s-data' }
      },
      {
        path: 'edit-group',
        name: 'EditGroup',
        component: () => import('@/views/year/EditGroup'),
        meta: { title: '修改年度团队绩效', icon: 'el-icon-s-data' }
      },
      {
        path: 'show-staff',
        name: 'ShowStaff',
        component: () => import('@/views/year/ShowStaff'),
        meta: { title: '查看年度个人绩效', icon: 'el-icon-s-data' }
      },
      {
        path: 'edit-staff',
        name: 'EditGroup',
        component: () => import('@/views/year/EditStaff'),
        meta: { title: '修改年度个人绩效', icon: 'el-icon-s-data' }
      },
    ]
  },
  {
    path: '/month',
    name: 'Month',
    component: Layout,
    redirect: '/month/show-group',
    meta: { title: '月度绩效', icon: 'el-icon-lock' },
    children: [
      {
        path: 'show-group',
        name: 'ShowGroup',
        component: () => import('@/views/month/ShowGroup'),
        meta: { title: '查看月度团队绩效', icon: 'el-icon-s-data' }
      },
      {
        path: 'edit-group',
        name: 'EditGroup',
        component: () => import('@/views/month/EditGroup'),
        meta: { title: '修改月度团队绩效', icon: 'el-icon-s-data' }
      },
      {
        path: 'show-staff',
        name: 'ShowStaff',
        component: () => import('@/views/month/ShowStaff'),
        meta: { title: '查看月度个人绩效', icon: 'el-icon-s-data' }
      },
      {
        path: 'edit-staff',
        name: 'EditGroup',
        component: () => import('@/views/month/EditStaff'),
        meta: { title: '修改月度个人绩效', icon: 'el-icon-s-data' }
      },
    ]
  },
]

const createRouter = () => {
  return new Router({
    routes: currencyRoutes
  })
}

const router = createRouter()

router.beforeEach(async (to, from, next) => {
  document.title = to.name

  if(to.path === '/login'){
    return next()
  }

  try {
    await store.dispatch('permission/getAsyncRoutes', [])
    await store.dispatch('user/_getInfo')
    next()
  } catch (error) {
    Message.error(error)
  }
 
})

export default router
