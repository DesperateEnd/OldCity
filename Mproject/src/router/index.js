import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Hot from '@/components/hot'
import Message from '@/components/Message'
import Home from '@/components/home'
import Login from '@/components/home/login'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',name: 'HelloWorld',component: Index},//首页
    {path:'/hot',name:'Hot',component:Hot},//热门
    {path:'/message',name:'Message',component:Message},//消息
    {path:'/home',name:'Home',component:Home},//用户中心

    /* 用户模块 */
    {path:'/login',name:'login',component:Login},//登陆
  ]
})
