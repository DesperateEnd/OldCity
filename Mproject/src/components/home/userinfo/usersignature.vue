<template>
    <div class="allbody usersignature">
        <my-head :left="'arrow-left'" :text="'修改签名'" ></my-head>
        <div class="allbox" style="margin-top:0.1rem">
           <div class="usersignature-text">
               <textarea name="" id="" cols="50" rows="5" :placeholder="user==null?'请输入签名':user.signature" v-model="newSignature"></textarea>
           </div>
            <van-button type="danger" class="usersignature-btn" @click="updateSignature()">确认修改</van-button>
        </div>
    </div>
</template>

<script>
export default {
    name:'usersignature',
    data(){
        return{
            user:null,// 用户资料
            newSignature:'',//新签名
        }
    },
    methods:{
        updateSignature(){//修改签名
            if(this.newSignature==undefined||this.newSignature==null||this.newSignature==''){
                this.$toast.fail({
                    duration:2000,
                    message: '请输入新签名！'
                });
                return;
            }
            if(this.newSignature==this.user.signature){
                this.$toast.fail({
                    duration:2000,
                    message: '请修改签名再提交！'
                });
                return;
            }
            this.MyAjax('/api/updateSignature',{
                    ramdcode:sessionStorage.ramdcode,
                    uid:this.user.id,
                    signature:this.newSignature
                    },(res)=>{
                        this.user = res.data;
                        
                        this.newSignature = '';
                        sessionStorage.user = JSON.stringify(res.data);//缓存用户资料
                        this.$toast.success({
                                duration:2000,
                                message: '修改成功！'
                            });
                    
                });
        },
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
    .usersignature-text{
        width: 100%;
        margin-bottom: 0.15rem;
    }
    .usersignature-text textarea{
        width: 90%;
        outline-style: none;
        border: 1px solid #ddd;
        padding: 0.1rem
    }
    .usersignature-btn{
        display: block;
        width: 70%;
        margin: auto;
        border-radius: 0.1rem;
        font-size: 0.18rem
    }
    
</style>
