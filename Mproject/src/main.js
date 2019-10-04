// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import '@/assets/css/style.css'

//挂载axios
Vue.prototype.$http= axios
//自定义的全局组件
import MyHead from '@/components/viewmodle/myhead.vue'
Vue.use(MyHead);
Vue.component('my-head', MyHead); //初始化组件
//vant  组件
import { Tabbar, TabbarItem ,Icon ,NavBar ,Swipe, SwipeItem ,Lazyload,
        NoticeBar } from 'vant';
Vue.use(Tabbar).use(TabbarItem).use(Icon).use(NavBar)
    .use(Swipe).use(SwipeItem).use(NoticeBar);
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
