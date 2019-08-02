import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Hot from '@/components/hot'
import Massge from '@/components/massge'
import Home from '@/components/home'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',name: 'HelloWorld',component: Index},//首页
    {path:'/hot',name:'Hot',component:Hot},//热门
    {path:'/massge',name:'Massge',component:Massge},//消息
    {path:'/home',name:'Home',component:Home},//用户中心
  ]
})
