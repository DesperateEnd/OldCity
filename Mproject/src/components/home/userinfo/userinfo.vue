<template>
    <div class="allbody userinfo" style="padding-bottom:0;background:#f7f7f7">
         <my-head :left="'arrow-left'" :text="'用户资料'" ></my-head>
         <div class="allbox" style="margin-top:0.05rem">
             <ul class="userinfo-table">
                 <li style="height:0.8rem" @click="myPush(true,'/home/userinfo/userimg',{})">
                     <span style="margin-top:0.2rem">头像:</span>
                     <span style="margin-top:0.2rem"><van-icon name="arrow" color="#999" size="0.2rem"/></span>
                     <span ><img :src="user==null?'/static/images/users/1.jpg':'/static/images/users/'+user.img" alt="" class="userimg"></span>
                 </li>
                 <li>
                     <span>账号:</span>
                     <span></span>
                     <span>{{user==null?'- -':user.login_code}}</span>
                 </li>
                 <li>
                     <span>昵称:</span>
                     <span><van-icon name="arrow" color="#999" size="0.2rem"/></span>
                     <span>{{user==null?'- -':user.uname}}</span>
                 </li>
                 <li>
                     <span>个签:</span>
                     <span><van-icon name="arrow" color="#999" size="0.2rem"/></span>
                     <span>asdasdasd</span>
                 </li>
             </ul>
         </div>
    </div>
</template>

<script>
export default {
    name:'userinfo',
    data(){
        return{
            user:null,
        }
    },
    methods:{
        initUser(){// 获取用户资料
            this.MyAjax('/api/userInfo',{
            ramdcode:sessionStorage.ramdcode
            },(res)=>{
            this.user = res.data;
            sessionStorage.user = JSON.stringify(res.data);//缓存用户资料
            console.log(res)
        })
        }
    },
    activated(){
        if(sessionStorage.user){// 缓存里有用户资料的时候
            this.user = JSON.parse(sessionStorage.user);
        }else{//  缓存里没有用户资料的时候
            this.initUser();
        }
    }
}
</script>

<style scoped>
.userinfo-table li{
    border-bottom: 1px solid #eee;
    padding: 0.1rem;
    font-size: 0.16rem;
    position: relative;
    background: #fff;
}
.userinfo-table li::after{
    content:'';
    display: block;
    clear: both;
}
.userinfo-table li>span:first-child{
    float: left;
}
.userinfo-table li>span:nth-child(2){
    float: right;
     display: block;
    width: 0.2rem;
    
}
.userinfo-table li>span:last-child{
   position: absolute;
   right: 0.4rem;
   color: #999;
   top: 0.1rem
}
.userimg{
    height: 0.6rem;
    width: 0.6rem;
    box-shadow: 0 0 3px 2px #ddd;
    border-radius: 0.05rem;
}
</style>
