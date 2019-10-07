<template>
    <div class="allbody hot">
        <my-head  :text="'热门'" ></my-head>
        <div class="allbox hotbg">
            <ul>
                <li></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:"hot",
    data(){
        return{

        }
    },
    methods:{},
    created(){},
    mounted(){},
    beforeDestroy(){}
}
</script>

<style scoped>
.hotbg{
      background: rgba(0,0,0,0.3)
  }
  .hotbg::after{
      content:'';
      z-index: -1;
      background: url(../assets/images/hotbg.jpg) no-repeat;
      background-size: 100% auto;
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0 ;
      top: 0;
      opacity: 0.7;
  }
</style>

