<template>
    <div class="allbody usernickname">
        <my-head :left="'arrow-left'" :text="'修改昵称'" ></my-head>
        <div class="allbox" style="margin-top:0.1rem">
           <div class="usernickname-input">
                <input type="text" :placeholder="user==null?'请输入新昵称':user.uname" v-model="newNickname">
           </div>
            <van-button type="danger" class="usernickname-btn" @click="updateNickname()">确认修改</van-button>
        </div>
    </div>
</template>

<script>
export default {
    name:'usernickname',
    data(){
        return{
            user:null,// 用户资料
            newNickname:'',//新用户名
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
        },
        updateNickname(){//修改用户名
            if(this.newNickname == undefined||this.newNickname == ''||this.newNickname == null){
                this.$toast.fail({
                    duration:2000,
                    message: '请输入新用户名！'
                });
                return
            }
            if(this.newNickname == this.user.uname){
                this.$toast.fail({
                    duration:2000,
                    message: '请修改用户名再提交！'
                });
                return
            }
             this.MyAjax('/api/updateNickname',{
                    ramdcode:sessionStorage.ramdcode,
                    uid:this.user.id,
                    uname:this.newNickname
                    },(res)=>{
                        this.user = res.data;
                        console.log(res.data,this.user)
                        this.newNickname = '';
                        sessionStorage.user = JSON.stringify(res.data);//缓存用户资料
                        this.$toast.success({
                                duration:2000,
                                message: '修改成功！'
                            });
                    
                });
        },
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
    .usernickname-input{
        width: 100%;
        margin-bottom: 0.15rem;
    }
    .usernickname-input input{
        outline-style: none;
        border: 1px solid #ddd;
        height: 0.4rem;
        width: 80%;
        font-size: 0.16rem;
        padding: 0 0.1rem
    }
    .usernickname-btn{
        display: block;
        width: 70%;
        margin: auto;
        border-radius: 0.1rem;
        font-size: 0.18rem
    }
</style>
