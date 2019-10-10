<template>
    <div class="home">
       <div class="allbox homebg" style="padding-top:0">
            <!-- 个人信息模块 -->
            <div class="home-user">
                <div>
                    <img src="@/assets/images/log.jpg" alt="">
                </div>
                <div>
                    <p>{{this.uname}}</p>
                    <p style="font-size:0.16rem;color:#999">{{loginCode}}</p>
                </div>
                <van-icon name="arrow" size="0.3rem" color="#999"/>
            </div>
            <!-- 常用入口 -->
            <div class="home-modle1">
                <ul>
                    <li>
                        <van-icon name="share" size="0.3rem" color="#03a9f4"/>
                        <p>我的发布</p>
                    </li>
                     <li>
                        <van-icon name="like-o" size="0.3rem" color="#e91e63"/>
                        <p>收藏</p>
                    </li>
                     <li>
                        <van-icon name="comment-o" size="0.3rem" color="#4caf50"/>
                        <p>消息</p>
                    </li>
                     <li>
                        <van-icon name="friends-o" size="0.3rem" color="#00bcd4"/>
                        <p>好友</p>
                    </li>
                </ul>
            </div>
            <!-- 其他入口 -->
            <ul class="home-modle2">
                <li>
                    <van-icon name="friends-o" size="0.28rem" color="#00bcd4"/>
                    <span>列表1</span>
                    <van-icon name="arrow" size="0.2rem" color="#999"/>
                </li>
                <li>
                    <van-icon name="friends-o" size="0.28rem" color="#00bcd4"/>
                    <span>列表1</span>
                    <van-icon name="arrow" size="0.2rem" color="#999"/>
                </li>
                <li>
                    <van-icon name="friends-o" size="0.28rem" color="#00bcd4"/>
                    <span>列表1</span>
                    <van-icon name="arrow" size="0.2rem" color="#999"/>
                </li>
                <li>
                    <van-icon name="friends-o" size="0.28rem" color="#00bcd4"/>
                    <span>列表1</span>
                    <van-icon name="arrow" size="0.2rem" color="#999"/>
                </li>
                <li style="margin-top:0.15rem">
                    <van-icon name="setting-o" size="0.28rem" color="#2196f3"/>
                    <span>设置</span>
                    <van-icon name="arrow" size="0.2rem" color="#999"/>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:'home',
    data(){
        return{
            uname:'name',
            loginCode:'code',
        }
    },
    activated(){
        this.MyAjax('/api/userInfo',{
            ramdcode:sessionStorage.ramdcode
            },(res)=>{
            this.uname = res.data.uname;
            this.loginCode = res.data.login_code;
            console.log(res)
        })
    }
}
</script>

<style scoped>
    .homebg{
    content:'';
    z-index: -1;
    background: #efefef;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0 ;
    top: 0;
    opacity: 0.8;
  }
  .home-user{
      padding: 0.15rem;
      text-align: left;
      box-shadow: 0 1px 3px 2px #eee;
      background: #fff;
  }
  .home-user div p{
      font-size: 0.24rem;
      color: #000
  }
  .home-user i{
      float: right;
      margin-top: 0.2rem
  }
  .home-user div{
      display: inline-block;
      vertical-align: middle;
  }
  .home-user div img{
      width: 0.8rem;
      border-radius: 0.1rem;
      box-shadow: 0 0 3px 2px #ddd;
      margin-right: 0.1rem
  }
  .home-modle1{
      background: #fff;
      width: 95%;
      margin: 0.15rem auto;
      border-radius: 0.1rem;
      box-shadow: 0 0 3px 2px #ddd;
      padding:  0.1rem 0;
      font-size: 0.16rem;
  }
  .home-modle1 li{
      width: 25%;
      float: left;
  }
  .home-modle1 ul::after{
      content:'';
      display: block;
      clear: both;
  }
  .home-modle2{
     
     
  }
  .home-modle2>li>*{
      display: inline-block;
      vertical-align: middle;
  }
  .home-modle2>li{
       text-align: left;
       background: #fff;
      padding: 0.1rem 0.2rem;
      font-size: 0.14rem;
      border-bottom: 1px solid #eee;
  }
  .home-modle2>li>i:last-child{
      float: right;
      margin-top: 0.03rem
  }
</style>

