<template>
  <div class="index">
    <div class="allbox">
    <!-- 轮播图 -->
    <van-swipe :autoplay="3000" style="width:100%;height:2rem">
      <van-swipe-item v-for="(image, index) in images" :key="index" >
        <img v-lazy="image" style="width:100%;height:100%" />
      </van-swipe-item>
    </van-swipe>
    <!-- 通知栏 -->
    <van-notice-bar
        color="red"
        background="#fff"
        left-icon="volume-o"
        style="border-bottom:1px solid #ddd;height:0.3rem"
      >
      欢迎来到OldCity!  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  星河滚烫，你是人间理想。&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  只要你来，都不晚。
    </van-notice-bar>
    <!-- 快捷前往列表 -->
     <div class="index-navigation">
       <!-- <div class="index-navigation-title">
         <van-icon name="gem"/>
          <span>were are you want to go？</span>
       </div> -->
       <div class="index-navigation-box">
            <ul>
              <li>
                  <van-icon  name="photo" info="5" color="#03a9f4"/>
                  <p>美图</p>
              </li>
              <li>
                  <van-icon name="audio" info="2" color="#ff9800"/>
                  <p>音乐</p>
              </li>
              <li>
                <van-icon name="description" info="0" color="#000"/>
                <p>阅读</p>
              </li>
              <li>
                <van-icon name="invition" info="7" color="#9c27b0"/>
                <p>收藏</p>
              </li>
              <li>
                <van-icon name="smile-comment" color="#4caf50"/>
                <p>消息</p>
              </li>
              <li>
                <van-icon name="more" color="#00bcd4"/>
                <p>更多</p>
              </li>
            </ul>
       </div>
     </div>
     <!-- 最新动态 -->
     <div class="newdyamic">
          <div class="newdyamic-tit">
            <van-icon name="fire"/>
            <span>今日热点</span>
          </div>
          <div class="newdyamic-list">
              <ul>
                <li>
                    <div>
                      <van-icon name="photo" color="#03a9f4"/>
                    </div>
                    <div>
                      <b>New Image</b>
                      <div>There are 100 page new image mabe this is you like. Do you want to look? comon we cam to se this all betifao image</div>
                    </div>
                </li>
                <li>
                    <div>
                      <van-icon name="star" color="#ffeb3b"/>
                    </div>
                    <div>
                      <b>New Image</b>
                      <div>There are 100 page new image mabe this is you like. Do you want to look? comon we cam to se this all betifao image</div>
                    </div>
                </li>
                <li>
                    <div>
                      <van-icon name="gem" color="#e91e63"/>
                    </div>
                    <div>
                      <b>New Image</b>
                      <div>There are 100 page new image mabe this is you like. Do you want to look? comon we cam to se this all betifao image</div>
                    </div>
                </li>
                <li>
                    <div>
                      <van-icon name="point-gift" color="#f44336"/>
                    </div>
                    <div>
                      <b>New Image</b>
                      <div>There are 100 page new image mabe this is you like. Do you want to look? comon we cam to se this all betifao image</div>
                    </div>
                </li>
                <li>
                    <div>
                      <van-icon name="bookmark" color="#8bc34a"/>
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
      padding-bottom: 0.5rem;
      background: #efefef;
  }
  .index::after{
      content:"";
      display: block;
      width: 100%;
      height: 100%;
     
      position: absolute;
      left: 0;
      top: 0;
      opacity: 0.88;
      z-index: -1;
  }
  .index-navigation{
    width: 95%;
    margin:0.1rem auto;
    border-radius: 0.15rem;
    box-shadow: 0 0 5px 3px #ddd;
    border-bottom: 1px solid #ddd;
    background: #fff;
    padding: 0.1rem 0 0;
  }
  /* .index-navigation-title{
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
  } */
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
      text-align:left;
      padding:0.05rem;
      background: #fff;
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
      width: 95%;
      margin: auto;
      background: #FFF;
      margin-top: 0.1rem;
      border-radius: 0.1rem;
      padding: 0.1rem;
      box-shadow: 0 0 3px 2px #ddd;
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
  .newdyamic-list li div:first-child{
    padding-top: 0.1rem;
  }
</style>
