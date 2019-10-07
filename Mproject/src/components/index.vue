<template>
  <div class="index">
    <!-- 轮播图 -->
    <van-swipe :autoplay="3000" style="width:100%;height:2rem">
      <van-swipe-item v-for="(image, index) in images" :key="index" >
        <img v-lazy="image" style="width:100%;height:100%" />
      </van-swipe-item>
    </van-swipe>
    <!-- 通知栏 -->
    <van-notice-bar
        color="red"
        background="rgba(0,0,0,0.3)"
        left-icon="like"
        style="border-bottom:1px solid #fff"
      >
      Welcome to Cityisland!  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  I just like you very much and have been waiting for you!
    </van-notice-bar>
    <!-- 快捷前往列表 -->
     <div class="index-navigation">
       <div class="index-navigation-title">
         <van-icon name="gem"/>
          <span>were are you want to go？</span>
       </div>
       <div class="index-navigation-box">
            <ul>
              <li>
                  <van-icon  name="photo" info="5"/>
                  <p>Image</p>
              </li>
              <li>
                  <van-icon name="audio" info="2"/>
                  <p>Music</p>
              </li>
              <li>
                <van-icon name="like" info="0"/>
                <p>Ativle</p>
              </li>
              <li>
                <van-icon name="invition" info="7"/>
                <p>Message</p>
              </li>
              <li>
                <van-icon name="smile-comment"/>
                <p>ContactMe</p>
              </li>
              <li>
                <van-icon name="more"/>
                <p>More</p>
              </li>
            </ul>
       </div>
     </div>
     <!-- 最新动态 -->
     <div class="newdyamic">
          <div class="newdyamic-tit">
            <van-icon name="fire"/>
            <span>NEW HOT</span>
          </div>
          <div class="newdyamic-list">
              <ul>
                <li>
                    <div>
                      <van-icon name="photo"/>
                    </div>
                    <div>
                      <b>New Image</b>
                      <div>There are 100 page new image mabe this is you like. Do you want to look? comon we cam to se this all betifao image</div>
                    </div>
                </li>
                <li>
                    <div>
                      <van-icon name="star"/>
                    </div>
                    <div>
                      <b>New Image</b>
                      <div>There are 100 page new image mabe this is you like. Do you want to look? comon we cam to se this all betifao image</div>
                    </div>
                </li>
                <li>
                    <div>
                      <van-icon name="gem"/>
                    </div>
                    <div>
                      <b>New Image</b>
                      <div>There are 100 page new image mabe this is you like. Do you want to look? comon we cam to se this all betifao image</div>
                    </div>
                </li>
                <li>
                    <div>
                      <van-icon name="point-gift"/>
                    </div>
                    <div>
                      <b>New Image</b>
                      <div>There are 100 page new image mabe this is you like. Do you want to look? comon we cam to se this all betifao image</div>
                    </div>
                </li>
                <li>
                    <div>
                      <van-icon name="bookmark"/>
                    </div>
                    <div>
                      <b>New Image</b>
                      <div>There are 100 page new image mabe this is you like. Do you want to look? comon we cam to se this all betifao image</div>
                    </div>
                </li>
              </ul>
          </div>
     </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      images:[
        './static/images/blean1.jpg',
        './static/images/blean2.jpg',
        './static/images/blean3.jpg',
        './static/images/blean4.jpg',
        './static/images/blean5.jpg',
        './static/images/blean6.jpg',
        './static/images/blean7.jpg',
      ]
    }
  } 
}
</script>

<style scoped>
.index{
      width: 100%;
      height: 100%;
      overflow-y: auto;
      padding-bottom: 0.5rem;
  }
  .index::after{
      content:"";
      display: block;
      width: 100%;
      height: 100%;
      background:url(../assets/images/indexbg2.jpg) no-repeat;
      background-size: 100% 100%;
      position: absolute;
      left: 0;
      top: 0;
      opacity: 0.88;
      z-index: -1;
  }
  .index-navigation{
      color: #fff;
      background: rgba(0,0,0,0.3)
  }
  .index-navigation-title{
      font-size: 0.15rem;
      text-align: left;
      border-bottom: 1px solid #eee;
      padding: 0.05rem 0;
      padding-left: 0.05rem;
      margin-bottom: 0.1rem;
  }
  .index-navigation-title i,.index-navigation-title span{
      display: inline-block;
      vertical-align:center;
  }
  .index-navigation-box{
      font-size: 0.13rem;
  }
  .index-navigation-box li{
      display: inline-block;
      width: 32%;
      padding: 0.1rem 0;
  }
  .index-navigation-box li i{
      font-size: 0.3rem;
      margin-bottom: 0.05rem;
  }
   .newdyamic{
      margin-top:0.1rem;
      color: #fff;
      text-align:left;
      padding:0.05rem;
      background: rgba(0,0,0,0.3);
  }
  .newdyamic-tit{
      font-size: 0.15rem;
      border-bottom: 1px solid #eee;
      padding: 0.05rem 0;
  }
  .newdyamic-tit i{
      color: #e70707;   
      font-size: 0.17rem
  }
  .newdyamic-list li{
      width: 85%;
      margin: auto;
      background: rgba(0,0,0,0.5);
      margin-top: 0.07rem;
      border-radius: 5px;
      padding: 6px
  }
  .newdyamic-list li>div{
      display: inline-block;
      vertical-align: middle;
  }
  .newdyamic-list li>div:first-child{
      width: 20%;
      font-size: 0.4rem;
      text-align: center;
  }
  .newdyamic-list li>div:last-child{
      width: 78%;
  }
  .newdyamic-list li>div:last-child>b{
      font-size: 0.14rem;
      overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
  }
  .newdyamic-list li>div:last-child>div{
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
</style>
