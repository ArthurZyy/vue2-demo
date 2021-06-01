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
  // 404
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
        meta: { title: '查看年度绩效', icon: 'el-icon-s-data' }
      },
      {
        path: 'edit-group',
        name: 'EditGroup',
        component: () => import('@/views/year/EditGroup'),
        meta: { title: '修改年度绩效', icon: 'el-icon-s-data' }
      },
    ]
  },
  {
    path: '/month',
    name: 'month',
    component: Layout,
    redirect: '/month/show-group',
    meta: { title: '月度绩效', icon: 'el-icon-lock' },
    children: [
      {
        path: 'show-group',
        name: 'ShowGroup',
        component: () => import('@/views/year/EditGroup'),
        meta: { title: '查看月度绩效', icon: 'el-icon-s-data' }
      },
      {
        path: 'edit-group',
        name: 'EditGroup',
        component: () => import('@/views/year/EditGroup'),
        meta: { title: '修改月度绩效', icon: 'el-icon-s-data' }
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
