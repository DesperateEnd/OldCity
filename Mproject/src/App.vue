<template>
  <div id="app">
    <transition :name="transitionName" >
      <!-- 所有页面都使用缓存提高移动端体验 -->
        <keep-alive>
            <router-view  />
        </keep-alive>
    </transition>
    <my-footer v-show="footShow"></my-footer>
  </div>
</template>

<script>
import MyFooter from '@/components/viewmodle/myfooter'
export default {
  name: 'App',
  components:{'my-footer':MyFooter},
  data(){
    return{
      transitionName:'van-slide-left',//动画名
      footShow:true,//底部导航是否显示
    }
  },
  watch:{
    '$route' (to, from) {//监听路由变化
        /*转化动画 */
        if(to.meta.pageIndex!=undefined&&from.meta.pageIndex!=undefined){//存在pageIndex 的情况 四个主页面
            if(to.meta.pageIndex<from.meta.pageIndex){
              this.transitionName ='slide-left'
            }else{
                this.transitionName ='slide-right'
            }
        }else{//其他情况 
            let isBack = this.$router.isBack  //  监听路由变化时的状态为前进还是后退
    　　　　　　if(isBack) {
    　　　　　　　　   this.transitionName ='slide-right'
    　　　　　　} else {
    　　　　　　       this.transitionName ='slide-left'
    　　　　　}
    　　    this.$router.isBack = false
          }
    　　　/* 底部的显示隐藏*/
          if(to.name!='index'&&to.name!='Hot'&&to.name!='Message'&&to.name!='Home'){//不是四个主页面
              this.footShow =false;//底部隐藏
          }else{
            this.footShow =true;//底部显示
          }
　　}
  },
  created(){
    /* 第一次进入页面 */ 
    if(this.$route.name!='index'&&this.$route.name!='Hot'&&this.$route.name!='Message'&&this.$route.name!='Home'){//不是四个主页面
              this.footShow =false;//底部隐藏
          }else{
            this.footShow =true;//底部显示
          }
  }
}
</script>

<style>

</style>
