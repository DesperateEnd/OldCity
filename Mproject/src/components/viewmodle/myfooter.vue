<template>
    <van-tabbar v-model="active"
    active-color="#e70707"
    inactive-color="#fff"
    >
        <van-tabbar-item icon="shop-collect">index</van-tabbar-item>
        <van-tabbar-item icon="like" dot>hot</van-tabbar-item>
        <van-tabbar-item icon="gem" info="5">msg</van-tabbar-item>
        <van-tabbar-item icon="manager" info="20">user</van-tabbar-item>
    </van-tabbar>
</template>

<script>

export default {
    name:'myfooter',
    data(){
        return{
            active:0,
        }
    }
}
</script>