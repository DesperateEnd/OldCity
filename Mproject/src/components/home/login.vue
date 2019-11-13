<template>
    <div class="allbody login">
        <my-head  :text="'登陆'" ></my-head>
        <div class="allbox">
            <img src="@/assets/images/log.jpg" alt="" class="logimg">
            <ul>
                <li class="inputbox">
                    <input type="text" placeholder="请输入账号" v-model="loginCode">
                </li>
                <li class="inputbox">
                    <input :type="ispwd?'password':'text'" placeholder="请输入密码" v-model="password">
                    <van-icon :name="ispwd?'closed-eye':'eye-o'" size="0.2rem" @click="ispwd=!ispwd"/>
                </li>
            </ul>
            <van-button type="danger" @click="getlogin()" style="width:3rem;height:0.5rem;line-height:0.5rem;border-radius:0.1rem;font-size:0.2rem;margin-bottom:0.1rem">登录</van-button>
            <van-button type="danger" @click="$router.push('/regpage')" plain style="width:3rem;height:0.5rem;line-height:0.5rem;border-radius:0.1rem;font-size:0.2rem">注册</van-button>
        </div>
    </div>
</template>

<script>
export default {
    name:'login',
    data(){
        return{
            ispwd:true,
            loginCode:'',
            password:''
        }
    },
    methods:{
        getlogin(){
            this.MyAjax('/api/login',{
                loginCode:this.loginCode,
                password:this.password
            },(res)=>{
                 this.$toast.success({
                    duration:2000,
                    message: '登录成功！'
                });
                sessionStorage.ramdcode = res.data.ramdcode;
                this.$router.push('/home')
                console.log('回调函数',res)
            })
        }
    },
    activated(){
       
    }
}
</script>

<style scoped>
    .logimg{
        width: 1.2rem;
        height: 1.2rem;
        margin: 0.3rem auto;
        box-shadow: 0 0 5px 3px #ddd;
        border-radius: 0.15rem;
    }
    .inputbox{
        width: 80%;
        margin: auto;
        border: 1px solid #eee;
        height: 0.5rem;
        line-height: 0.5rem;
        border-radius: 1rem;
        margin-bottom: 0.2rem;
        position: relative;
    }
    .inputbox input{
        width: 88%;
        outline-style: none;
        height: 95%;
        border: none;
        font-size: 0.16rem
    }
    .inputbox i{
        position: absolute;
        right: 0.2rem;
        top: 0.15rem;
    }
</style>

