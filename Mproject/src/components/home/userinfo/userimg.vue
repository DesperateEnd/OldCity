<template>
    <div class="allbody userimg" style="padding-bottom:0;background:#f7f7f7">
         <my-head :left="'arrow-left'"  :text="'修改头像'" ></my-head>
         <div class="allbox" style="margin-top:0.05rem">
            <div class="userimg-nowimg">
                <div>
                    <img :src="userImg==''?'/static/images/users/1.jpg':'/static/images/users/'+userImg" alt="">
                </div>
                <div style="width:15%;text-align:center"><van-icon name="arrow" size="0.3rem" color="#f44"/></div>
                <div>
                    <img :src="'/static/images/users/'+nueUserImg" alt="">
                </div>
                <div>
                    <van-button plain  round size="small" type="danger" @click="updateUserImg()">确定修改</van-button>
                </div>
            </div>
            <ul class="userimg-list">
                <li v-for="i in 206" :key="i" @click="choseImg(i)" :class="{'imgon':index==i}">
                    加载中
                    <img :src="'/static/images/users/'+i+'.jpg'" alt="">
                </li>
            </ul>
         </div>
    </div>
</template>

<script>
export default {
    name:'userimg',
    data(){
        return{
            nueUserImg:'0.jpg',// 选中的图片
            index:-1,// 选中的下标
            userImg:'',//用户当前头像
            uid:'',
        }
    },
     methods:{
         updateUserImg(){//修改用户头像
            this.MyAjax('/api/updateImg',{
            ramdcode:sessionStorage.ramdcode,
            uid:this.uid,
            img:this.nueUserImg
            },(res)=>{
                this.userImg = res.data.img;
             sessionStorage.user = JSON.stringify(res.data);//缓存用户资料
             this.$toast.success({
                    duration:2000,
                    message: '修改成功！'
                });
            
        })
         },
         choseImg(num){// 选中img
            this.index = num;
            this.nueUserImg = num+'.jpg'
        },
        initUser(){// 获取用户资料
            this.MyAjax('/api/userInfo',{
            ramdcode:sessionStorage.ramdcode
            },(res)=>{
            this.userImg = res.data.img;
            this.uid = res.data.id
            sessionStorage.user = JSON.stringify(res.data);//缓存用户资料
            console.log(res)
        })
        }
    },
    activated(){
        if(sessionStorage.user){// 缓存里有用户资料的时候
            this.userImg = JSON.parse(sessionStorage.user).img;
            this.uid = JSON.parse(sessionStorage.user).id;
        }else{//  缓存里没有用户资料的时候
            this.initUser();
        }
    }
}
</script>

<style scoped>
.userimg{
    padding-top: 1.65rem;
    position: relative;
}
.userimg-nowimg{
    text-align: left;
    padding: 0.15rem;
    background: #fff;
    position: absolute;
    top: 0.5rem;
    width: 100%;
}
.userimg-nowimg>div{
    display: inline-block;
    vertical-align: middle;
}
.userimg-nowimg>div:last-child{
    margin-left: 0.4rem
}
.userimg-nowimg>div img{
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 0.05rem;
    box-shadow: 0 0 3px 2px #ddd;
}
.userimg-list{
    background: #fff;
    height: 100%;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
}
.userimg-list::after{
    content:'';
    display: block;
    clear: both;
}
.userimg-list li{
    float: left;
    width: 0.6rem;
    border-radius: 0.05rem;
    overflow: hidden;
    background: #eee;
    height: 0.6rem;
    margin:0.1rem 0.16rem;
    position: relative;
    border:1px solid #ddd;
}
.userimg-list li img{
    width: 100%;
    height: 100%;
    position: absolute;
    top:0;
    left: 0;
}
.imgon{
    border: 2px solid #f44!important;
}
</style>
