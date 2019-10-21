<template>
    <div class="allbody massge">
       <my-head  :text="'消息'" ></my-head>
       <div class="allbox messagebg">
           <!-- 大类 -->
            <div class="massge-nav">
                <ul>
                    <li>
                        <van-icon name="smile-o" size="0.3rem" color="#4caf50"/>
                        <span>@我的</span>
                        <van-icon name="arrow" color="#999"/>
                    </li>
                    <li>
                        <van-icon name="thumb-circle-o" size="0.3rem" color="#ff9800"/>
                        <span>赞</span>
                        <van-icon name="arrow" color="#999"/>
                    </li>
                    <li>
                       <van-icon name="label" size="0.3rem" color="#03a9f4"/>
                        <span>评论</span>
                        <van-icon name="arrow" color="#999"/>
                    </li>
                </ul>
            </div>
            <!-- 私信 -->
            <div class="messge-user">
                <ul >
                    <li v-for="(v,i) in massgeList" :key="i">
                        <img :src="'@/../static/images/users/'+v.img" alt="" >
                        <div>
                            <p>{{v.name}}</p>
                            <p>{{v.text}}</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'massge',
    data(){
        return{
            massgeList:[
                {
                    img:'1.jpg',
                    name:'1111',
                    text:'最近还好吗？'
                },{
                    img:'7.jpg',
                    name:'2222',
                    text:'天将降大任于斯人也，必先劳其胫骨，苦其心志，疲乏其身。'
                },{
                    img:'15.jpg',
                    name:'3333',
                    text:'你就在此地不要走动，我去买几个橘子。'
                }
            ]
        }
    },
    methods:{},
    created(){},
    mounted(){}
}
</script>

<style scoped>
.messagebg{
    background: #efefef;
}
.massge-nav{
   
    background: #fff;
}
.massge-nav li{
    text-align: left;
    font-size: 0.18rem;
    padding: 0.15rem 0.1rem;
    border-bottom: 1px solid #eee;
}
.massge-nav li>*{
    display: inline-block;
    vertical-align: middle;
}
.massge-nav li>i:last-child{
    float: right;
    margin-top: 0.05rem;
}
.messge-user{
    margin-top: 0.14rem;
    border-top: 1px solid #eee;
     background: #fff;
}
.messge-user li{
    padding: 0.1rem;
    text-align: left;
    border-bottom: 1px solid #eee;
}
.messge-user li>*{
    display: inline-block;
    vertical-align: middle;
}
.messge-user li>img{
    height: 0.5rem;
    width: 0.5rem;
    border-radius: 0.05rem;
    margin-right: 0.1rem;
}
.messge-user li>div{
    width: 80%;
}
.messge-user li>div>p:first-child{
    font-size: 0.16rem
}
.messge-user li>div>p{
    overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
}
</style>

