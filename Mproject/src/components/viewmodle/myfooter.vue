<template>
    <van-tabbar v-model="active"
        active-color="#e70707"
        inactive-color="#fff"
        class="myfooter"
    >
        <van-tabbar-item icon="shop-collect" @click="$router.push('/')">index</van-tabbar-item>
        <van-tabbar-item icon="like" dot @click="$router.push('/hot')">hot</van-tabbar-item>
        <van-tabbar-item icon="gem" info="5" @click="$router.push('/message')">msg</van-tabbar-item>
        <van-tabbar-item icon="manager" info="20" @click="$router.push('/home')">home</van-tabbar-item>
    </van-tabbar>
</template>

<script>

export default {
    name:'myfooter',
    data(){
        return{
            active:0,
        }
    },
    methods:{
        
    }
}
</script>