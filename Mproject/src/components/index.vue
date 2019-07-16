<template>
  <div class="index">
    <!-- 轮播图 -->
    <van-swipe :autoplay="3000" style="width:100%">
      <van-swipe-item v-for="(image, index) in images" :key="index" >
        <img v-lazy="image" style="width:auto;height: 2rem" />
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

