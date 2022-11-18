import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// routers import 방법
// 1. 페이지에 항상 나오는 컴포넌트는 상단에 import .. from .. 문법 사용(user가 처음 페이지 진입시 서버에서 해당파일을 내려받음)
// 2. 페이지에서 항상 나오지 않으며 빈도수가 적거나 소스 코드가 적으면 () => import(/* webpackChunkName: ...*/  'vue 파일경로') 문법을 사용(다른페이지로 이동시 해당 컴포넌트를 서버에서 내려받음)
// 3. 페이지에서 항상 나오지 않으며 빈도수가 많거나 소스 코드가 많으면 () => import(/* webpackChunkName: ... , webpackPrefetch:true */ 'vue 파일경로') 문법을 사용(다른페이지로 이동전 처음페이지 진입시 서버에서 캐시로 해당 컴포넌트를 내려받음)
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
    component: () => import(/* webpackChunkName: "about", webpackPrefetch:true */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
