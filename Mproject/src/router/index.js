import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Hot from '@/components/hot'
import Message from '@/components/Message'
import Home from '@/components/home'
import Login from '@/components/home/login'
import RegPage from '@/components/home/regpage'

Vue.use(Router)
Router.prototype.goBack = function () { //后退方法
  　　this.isBack = true
  　　window.history.back();
} 
export default new Router({
  routes: [
    {path: '/',name: 'index',component: Index,meta:{
      pageIndex:0
    }},//首页
    {path:'/hot',name:'Hot',component:Hot,meta:{
      pageIndex:1
    }},//热门
    {path:'/message',name:'Message',component:Message,meta:{
      pageIndex:2
    }},//消息
    {path:'/home',name:'Home',component:Home,meta:{
      pageIndex:3
    }},//用户中心

    /* 用户模块 */
    {path:'/login',name:'login',component:Login},//登陆
    {path:'/regpage',name:'regpage',component:RegPage},//注册
  ]
})
