import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Square from '@/components/square'
import Message from '@/components/Message'
import Home from '@/components/home'
import Login from '@/components/home/login'
import RegPage from '@/components/home/regpage'
import userInfo from '@/components/home/userinfo'

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
    {path:'/square',name:'Square',component:Square,meta:{
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
    {path:'/home/userinfo',name:'userinfo',component:userInfo}
  ]
})
Router.prototype.goBack = function () { 
  　　this.isBack = true
  　　window.history.back();
} 
Router.prototype.mypush = function (bool,url,query) { 
  　　
} 
