import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index' //首页
import Square from '@/components/square' // 广场页面
import Message from '@/components/Message' // 消息页面
import Home from '@/components/home' // 个人中心
import Login from '@/components/home/login' // 登录页面
import RegPage from '@/components/home/regpage' // 注册页面
import userInfo from '@/components/home/userinfo/userinfo' // 个人资料页面
import userImg from '@/components/home/userinfo/userimg' // 修改用户头像页面

import CanvasDemo from '@/components/canvasgame/canvasdemo'// canvas 小游戏

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
    {path:'/home/userinfo',name:'userinfo',component:userInfo},// 个人资料页面
    {path:'/home/userinfo/userimg',name:'userimg',component:userImg},// 修改用户头像页面

    /*小游戏 */
    {path:'/game/cnavasdemo',name:'canvasedemo',component:CanvasDemo}//小游戏
  ]
})


