<template>
    <div class="allbody square">
        <my-head  :text="'广场'" ></my-head>
        <div class="allbox hotbg">
            <!-- 导航 -->
            <van-tabs navList animated swipeable v-model="navActive" title-active-color="#ff4444"  color="#ff4444" @click="onClick">
                <van-tab v-for="(v,i) in navList" :title="v.name" :key="i" :name="v.state">
                   <div class="hotdata-list">
                       <ul>
                           <li v-for="(v,i) in dataList" :key="i">
                               <div class="square-list-user">
                                   <div>
                                       <img :src="'./static/images/users/'+v.userInfo.img" alt="">
                                   </div>
                                   <div>
                                       <span>{{v.userInfo.uname}}</span>
                                       <img :src="'./static/images/level/'+v.userInfo.limg" alt="" style="width:0.3rem">
                                   </div>
                                   <div style="float:right;margin-top:0.05rem;position:relative;" @click="v.moreshow=!v.moreshow">
                                       <van-icon name="arrow-down" size="0.2rem" color="#999" :class="{'square-list-rotate':v.moreshow}"/>
                                       <transition name="van-fade">
                                            <ul class="square-list-select" v-show="v.moreshow">
                                                <li>查看作者</li>
                                                <li>收藏</li>
                                            </ul>
                                       </transition>
                                   </div>
                               </div>
                               <div class="square-list-tit">{{v.title}}</div>
                               <div class="square-list-content">{{v.content}}</div>
                               <!-- 一张图片 type == 1 -->
                                <img :src="'./static/images/'+v.imglist[0]" alt="" v-if="v.type==1" style="width:100%" @click="imgclick(v.imglist,0)">
                                <!-- 多张图片 type == 2 -->
                                <div v-if="v.type==2" class="square-list-imglist">
                                    <ul>
                                        <li v-for="(v1,i1) in v.imglist" :key="i1">
                                            <img :src="'./static/images/'+v1" alt="" style="width:100%;height:100%" @click="imgclick(v.imglist,i1)">
                                        </li>
                                    </ul>
                                </div>
                                <!-- 音乐 type == 3  -->
                                <div class="square-list-music" v-if="v.type==3" @click="musicon(v,i)">
                                    <div>
                                        <img :src="v.audioObj.img" alt="" :class="{'musicpaly':v.audioObj.isPlay}">
                                        <van-icon :name="v.audioObj.isPlay?'pause-circle-o':'play-circle-o'" size="0.3rem" color="#ddd"/>
                                    </div>
                                    
                                    <div>
                                        <p style="font-size:0.18rem;">{{v.audioObj.musicName}}</p>
                                        <p style="font-size:0.16rem;color:#8c8c8c">{{v.audioObj.musicUser}}</p>
                                    </div>
                                    <audio :src="v.audioObj.url" :id="'music'+i" preload>
                                        您的浏览器不支持 audio 标签。
                                    </audio>
                                   
                                </div>
                               <div class="square-list-stting">
                                   <span>
                                       <van-icon name="share" size="0.18rem"/>
                                       <span>转发</span>
                                   </span>
                                   <span>
                                       <van-icon name="edit" size="0.18rem"/>
                                       <span>评论</span>
                                   </span>
                                   <span>
                                       <van-icon name="like-o" size="0.18rem"/>
                                       <span>点赞</span>
                                   </span>
                               </div>
                           </li>
                       </ul>
                   </div>
                </van-tab>
                </van-tabs>
        </div>
    </div>
</template>

<script>
import { ImagePreview } from 'vant';
export default {
    name:"square",
    data(){
        return{
            navList:[
                {
                    name:'热门',
                    state:-1
                },
                {
                    name:'阅读',
                    state:0
                },
                {
                    name:'图片',
                    state:1
                },
                {
                    name:'音乐',
                    state:2
                },
                 {
                    name:'话题',
                    state:3
                },
                {
                    name:'动漫',
                    state:4
                },
                 {
                    name:'学习',
                    state:5
                },
                {
                    name:'编程',
                    state:6
                },
                 {
                    name:'其他',
                    state:7
                },           
            ],//导航列表
            navActive:0,//选中的nav
            dataList:[
                {
                    userInfo:{
                        img:'1.jpg',
                        uname:'name',
                        login_code:'111111',
                        limg:'l1.png'
                    },
                    title:'星河滚烫，你是人间理想。星河滚烫，你是人间理想。星河滚烫，你是人间理想。星河滚烫，你是人间理想。',
                    content:'很多时候真的很无力，很多东西其实真的做不到吧。能做的只是做好自己，照顾你好，等你。只要你来，都不晚。很多时候真的很无力，很多东西其实真的做不到吧。能做的只是做好自己，照顾你好，等你。只要你来，都不晚。',
                    type:0,
                    state:0,
                    moreshow:false,
                    imglist:''
                },
                {
                    userInfo:{
                        img:'1.jpg',
                        uname:'name',
                        login_code:'111111',
                        limg:'l1.png'
                    },
                    title:'星河滚烫，你是人间理想',
                    content:'很多时候真的很无力，很多东西其实真的做不到吧。能做的只是做好自己，照顾你好，等你。只要你来，都不晚。',
                    type:1,
                    state:1,
                    moreshow:false,
                    imglist:[
                        'blean1.jpg'
                    ]
                },
                {
                    userInfo:{
                        img:'1.jpg',
                        uname:'name',
                        login_code:'111111',
                        limg:'l1.png'
                    },
                    title:'星河滚烫，你是人间理想',
                    content:'很多时候真的很无力，很多东西其实真的做不到吧。能做的只是做好自己，照顾你好，等你。只要你来，都不晚。',
                    type:2,
                    state:1,
                    moreshow:false,
                    imglist:[
                        'blean1.jpg','blean2.jpg','blean3.jpg','blean4.jpg','blean5.jpg'
                    ]
                },
                {
                    userInfo:{
                        img:'1.jpg',
                        id:0,
                        uname:'name',
                        login_code:'111111',
                        limg:'l1.png'   
                    },
                    title:'星河滚烫，你是人间理想',
                    content:'很多时候真的很无力，很多东西其实真的做不到吧。能做的只是做好自己，照顾你好，等你。只要你来，都不晚。',
                    type:3,
                    state:2,
                    audioObj:{
                        url:'./static/music/xs_yhx.mp3',
                        img:'./static/images/users/1.jpg',
                        musicName:'烟花笑',
                        musicUser:'许嵩',
                        isPlay:false,
                    },
                    moreshow:false,
                    img:''
                },
            ]
        }
    },
    methods:{
        onClick(name, title) {//nav 导航切换
            this.dataList = [];
            this.getinit(name)
        },
        getinit(state){//获取初始化列表
        this.$toast.loading({
            loadingType: 'spinner'
        });
            this.MyAjax('/api/square',{
                    ramdcode:sessionStorage.ramdcode,
                    state:state
                    },(res)=>{
                        this.$toast.clear()
                        if(res.code=='103'){
                            this.dataList = [];
                            this.$toast.fail({
                                duration:2000,
                                message: '暂无数据！'
                            });
                            return;
                        }
                    for(let i=0;i<res.data.length;i++){
                        if(res.data[i].imglist!=""){
                            res.data[i].imglist = JSON.parse(res.data[i].imglist)
                        }
                        if(res.data[i].audioObj!=""){
                            res.data[i].audioObj = JSON.parse(res.data[i].audioObj)
                        }
                        res.data[i].moreshow=false;//控住右上角列表的显示隐藏
                    }
                    this.dataList = res.data
                    
                });
        },
        musicon(v,i){//音乐的点击事件
             v.audioObj.isPlay = !v.audioObj.isPlay;// 播放状态取反
             this.audioPlay('music'+i,()=>{
                 v.audioObj.isPlay = false;
             });//定义的全局方法，里面有判断播放状态，以及播放结束的回调
        },
        imgclick(list,index){//图片点击
            
            for(let i=0;i<list.length;i++){
                if(list[i].indexOf('static')==-1){
                     list[i] = './static/images/'+list[i]
                }
            }
            ImagePreview({// vant  图片预览方法
                images:list,
                startPosition: index,
                onClose() {
                    // do something
                }
                });
        },
    },
    created(){},
    activated(){
        this.getinit(-1)
    },
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
   .hotdata-list>ul>li{
       background: #fff;
       margin-bottom: 0.1rem;
       padding: 0.1rem .1rem 0.3rem;
       position: relative;
   }
   .square-list-user{
      border-bottom: 1px solid #eee;
      padding-bottom: 0.05rem
   }
   .square-list-user div{
       display: inline-block;
       vertical-align: middle;
   }
   .square-list-user div:first-child img{
       border-radius: 0.05rem;
       width:0.3rem;
       height: 0.3rem;
       box-shadow: 0 0 3px 2px #ddd;
       margin-right: 0.1rem;
   }
   .square-list-user div i{
       display: inline-block;
       transition: all 0.5s;
   }
   .square-list-tit{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 0.16rem;
        font-weight: bold;
        line-height: 0.3rem;
   }
   .square-list-content{
       overflow:hidden;
	text-overflow:ellipsis;
	display:-webkit-box;
	-webkit-line-clamp:3; /*3行文字 */
	-webkit-box-orient:vertical;
    text-indent:20px;/*首行缩进 */

   }
    .square-list-stting{
          border-top: 1px solid #eee;
          position: absolute;
          width: 100%;
          bottom: 0;
          height: 0.3rem;
          line-height: 0.3rem;
          left: 0;
      }
   .square-list-stting::after{
       content:"";
       display: block;
       clear: both;
   }
   .square-list-stting>span{
       float: left;
       width: 33.33%;
       text-align: center;
       border-right: 1px solid #eee;
   }
    .square-list-stting>span>i{
        display: inline-block;
        vertical-align: middle;
    }
    .square-list-select{
        position: absolute;
        width: 0.6rem;
        text-align: center;
        background: #fff;
        left: -0.4rem;
        border-radius: 0.05rem;
        box-shadow: 0 0 3px 2px #ddd;
        padding: 0.05rem 0;
    }
    .square-list-select li{
        border-bottom: 1px solid #eee;
        line-height: 0.3rem
    }
    .square-list-select::after{
    content:"";
    display: block;
     position: absolute;
     width: 0.12rem;
     height: 0.12rem;
     transform: rotate(45deg);
     top: -0.06rem;
     background: #fff;
     right: 0.1rem;
     border-top: 1px solid #ddd;
     border-left: 1px solid #ddd;
    }
    .square-list-rotate{
        transform: rotate(180deg)
    }
    .square-list-imglist{
        width: 100%;
    }
    .square-list-imglist::after{
        content: "";
        display: block;
        clear: both;
    }
    .square-list-imglist li{
        float: left;
        width: 30%;
        margin: 1%;
        height: 1rem;
    }
    .square-list-music{
        margin: 0.1rem;
        border-radius: 0.1rem;
        padding:0.05rem 0.15rem;
        border: 1px solid #eee;
        background: rgba(226,223,183,0.38);
    }
    .square-list-music>*{
        display: inline-block;
        vertical-align: middle;
        
    }
    .square-list-music>div:first-child{
        position: relative;
        margin-right: 0.1rem
    }
    .square-list-music>div:first-child>img{
        width: 0.7rem;
        border-radius: 50%;
        box-shadow: 0 0 3px 2px #ddd;

    }
      .square-list-music>div:first-child>i{
          position: absolute;
          display: block;
          width: 0.3rem;
          height: 0.3rem;
          top: 50%;
          left: 50%;
          margin: -0.15rem -0.15rem
      } 
    @keyframes musicplay
        {
            from {transform: rotate(0deg)}
            to {transform: rotate(360deg)}
        }
    .musicpaly{
        animation: musicplay 5s linear infinite;
    }
    </style>

