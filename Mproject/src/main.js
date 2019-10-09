// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import qs from 'qs'
import '@/assets/css/style.css'
//vant  组件
import { Tabbar,
  TabbarItem,
  Icon,
  NavBar,
  Swipe,
  SwipeItem,
  Lazyload,
  NoticeBar,
  Button,
  Toast
 } from 'vant';
Vue.use(Tabbar)
.use(TabbarItem)
.use(Icon)
.use(NavBar)
.use(Swipe)
.use(SwipeItem)
.use(NoticeBar)
.use(Button)
.use(Toast);
/*配置axiso 请求的时候 */
axios.interceptors.request.use((config) => {//发送请求
  if (config.method === 'post') {
      config.data = qs.stringify(config.data);
  }
  return config;
    }, (error) => {
      return Promise.reject(error);
    });
//挂载axios

//封装axios 的post 请求
Vue.prototype.MyAjax = function(url,data,callfun){
  axios({
      method: 'post',
      url: url,
      data: data
  }).then(function(res){//请求成功
    if(res&&res.status==200&&res.data&&res.data.code=='100'){
      callfun(res.data)
    }else{
      Toast.fail({
        duration:2000,
        message: res.data.msg
      });
      console.log(res)
      console.log(res.data.msg)
    }
      
      
      })
  .catch(function(err){//请求报错
      console.log(err)
      })
}
//自定义的全局组件
import MyHead from '@/components/viewmodle/myhead.vue'
Vue.use(MyHead);
Vue.component('my-head', MyHead); //初始化组件

//懒加载配置
Vue.use(Lazyload);
//--------------------------
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { 
    App,
    MyHead 
  },
  template: '<App/>'
})
