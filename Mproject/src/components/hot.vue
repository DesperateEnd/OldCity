<template>
    <div class="allbody hot">
        <my-head  :text="'广场'" ></my-head>
        <div class="allbox hotbg">
            <!-- 导航 -->
            <van-tabs navList animated swipeable v-model="navActive" title-active-color="#ff4444" color="#ff4444">
                <van-tab v-for="(v,i) in navList" :title="v" :key="i">
                   <div class="hotdata-list">
                       <ul>
                           <li v-for="(v,i) in dataList" :key="i">
                               <div class="hot-list-user">
                                   <div>
                                       <img :src="'./static/images/users/'+v.userInfo.img" alt="">
                                   </div>
                                   <div>
                                       <p>{{v.userInfo.uname}}</p>
                                       <p>{{v.userInfo.login_code}}</p>
                                   </div>
                               </div>
                               <div>{{v.title}}</div>
                               <div>{{v.content}}</div>
                           </li>
                       </ul>
                   </div>
                </van-tab>
                </van-tabs>
        </div>
    </div>
</template>

<script>
export default {
    name:"hot",
    data(){
        return{
            navList:[
                '热门',
                '音乐',
                '图片',
                '阅读',
                '话题',
                '动漫',
                '学习',
                '编程',
                '其他'                
            ],//导航列表
            navActive:0,//选中的nav
            dataList:[
                {
                    userInfo:{
                        img:'1.jpg',
                        uname:'name',
                        login_code:'111111'
                    },
                    title:'星河滚烫，你是人间理想',
                    content:'很多时候真的很无力，很多东西其实真的做不到吧。能做的只是做好自己，照顾你好，等你。只要你来，都不晚。',
                    type:'0',
                    img:''
                },
                {
                    userInfo:{
                        img:'1.jpg',
                        uname:'name',
                        login_code:'111111'
                    },
                    title:'星河滚烫，你是人间理想',
                    content:'很多时候真的很无力，很多东西其实真的做不到吧。能做的只是做好自己，照顾你好，等你。只要你来，都不晚。',
                    type:'0',
                    img:''
                },
                {
                    userInfo:{
                        img:'1.jpg',
                        uname:'name',
                        login_code:'111111'
                    },
                    title:'星河滚烫，你是人间理想',
                    content:'很多时候真的很无力，很多东西其实真的做不到吧。能做的只是做好自己，照顾你好，等你。只要你来，都不晚。',
                    type:'0',
                    img:''
                },
                {
                    userInfo:{
                        img:'1.jpg',
                        uname:'name',
                        login_code:'111111'
                    },
                    title:'星河滚烫，你是人间理想',
                    content:'很多时候真的很无力，很多东西其实真的做不到吧。能做的只是做好自己，照顾你好，等你。只要你来，都不晚。',
                    type:'0',
                    img:''
                },
            ]
        }
    },
    methods:{},
    created(){},
    mounted(){},
    beforeDestroy(){}
}
</script>

<style scoped>
  .hotdata-list{
      height: 100%;
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
      text-align: left;
      padding: 0 0rem .1rem;
      font-size: 0.14rem;
      background: #efefef;
  }
   .hotdata-list li{
       background: #fff;
       margin-bottom: 0.1rem;
       padding: 0.1rem .1rem 0;
   }
   .hot-list-user{
      
   }
   .hot-list-user div{
       display: inline-block;
       vertical-align: middle;
   }
   .hot-list-user div:first-child img{
       border-radius: 0.1rem;
       width:0.5rem;
       box-shadow: 0 0 3px 2px #ddd;
        margin-right: 0.1rem;


   }
</style>

