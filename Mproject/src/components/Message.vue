<template>
    <div class="allbody massge">
       <my-head  :text="'消息'" ></my-head>
       <div class="allbox messagebg">
            <ul>
                <li></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:'massge',
    data(){
        return{}
    },
    methods:{},
    created(){},
    mounted(){}
}
</script>

<style scoped>
.messagebg::after{
    content:'';
    z-index: -1;
    background: url(../assets/images/messagebg.jpg) no-repeat;
    background-size: 100% auto;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0 ;
    top: 0;
    opacity: 0.8;
  }
</style>

