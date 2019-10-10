<template>
    <div class="allbody regpage">
        <my-head  :text="'注册'" ></my-head>
        <div class="allbox">
            <img src="@/assets/images/log.jpg" alt="" class="logimg">
            <ul>
                <li class="inputbox">
                    <input type="text" placeholder="请输入账号" v-model="loginCode">
                </li>
                <li class="inputbox">
                    <input type="text" placeholder="请输入昵称" v-model="uname">
                </li>
                <li class="inputbox">
                    <input :type="ispwd?'password':'text'" placeholder="请输入密码" v-model="password">
                    <van-icon :name="ispwd?'closed-eye':'eye-o'" size="0.2rem" @click="ispwd=!ispwd"/>
                </li>
                <li class="inputbox">
                    <input :type="ispwd2?'password':'text'" placeholder="请确认密码" v-model="password2">
                    <van-icon :name="ispwd2?'closed-eye':'eye-o'" size="0.2rem" @click="ispwd2=!ispwd2"/>
                </li>
            </ul>
            <van-button type="danger" @click="getreg()" style="width:3rem;height:0.5rem;line-height:0.5rem;border-radius:0.1rem;font-size:0.2rem;margin-bottom:0.1rem">注册</van-button>
            <van-button type="danger" @click="$router.push('/login')" plain style="width:3rem;height:0.5rem;line-height:0.5rem;border-radius:0.1rem;font-size:0.2rem">登录</van-button>
        </div>
    </div>
</template>

<script>
export default {
    name:'regpage',
    data(){
        return{
            ispwd:true,//密码显示隐藏
            ispwd2:true,//确认密码显示隐藏
            loginCode:'',//登录账号
            uname:'',//昵称
            password:'',//密码
            password2:'',//确认密码
        }
    },
    methods:{
        getreg(){//注册
            this.MyAjax('/api/regpage',{
                loginCode:this.loginCode,
                uname:this.uname,
                password:this.password
            },(res)=>{
                //  this.$toast.success({
                //     duration:2000,
                //     message: '登录成功！'
                // });
                console.log('回调函数',res)
            })
        }
    }
}
</script>

<style scoped>
    .logimg{
        width: 1.2rem;
        height: 1.2rem;
        margin: 0.1rem auto;
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

