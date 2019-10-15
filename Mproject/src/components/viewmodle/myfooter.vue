<template>
    <van-tabbar v-model="active"
        active-color="#f44"
        inactive-color="#353535"
        class="myfooter"
        :z-index="5"
    >
        <van-tabbar-item icon="home-o" @click="$router.push('/')">首页</van-tabbar-item>
        <van-tabbar-item icon="flower-o" dot @click="$router.push('/square')">广场</van-tabbar-item>
        <van-tabbar-item icon="smile-comment-o" info="5" @click="$router.push('/message')">公告</van-tabbar-item>
        <van-tabbar-item icon="manager-o" info="20" @click="$router.push('/home')">我的</van-tabbar-item>
    </van-tabbar>
</template>

<script>

export default {
    name:'myfooter',
    data(){
        return{
            active:0,
        }
    },
    watch:{
        '$route' (to, from) {//监听路由变化
                if(this.$route.name=='index'){
                    this.active = 0;
                }else if(this.$route.name=='Square'){
                    this.active = 1;
                }else if(this.$route.name=='Message'){
                    this.active = 2;
                }else if(this.$route.name=='Home'){
                    this.active = 3;
                }
        　　}
    },
    methods:{
        
    },
    created(){//初始化
            if(this.$route.name=='index'){
                this.active = 0;
            }else if(this.$route.name=='Square'){
                this.active = 1;
            }else if(this.$route.name=='Message'){
                this.active = 2;
            }else if(this.$route.name=='Home'){
                this.active = 3;
            }
    },
}
</script>
<style scoped>
  .myfooter{
      height: 0.5rem;
      position: absolute;   
      box-shadow: 0 -1px 3px 1px #eee;
  }
  
</style>
