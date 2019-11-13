<template>
  <div class="allhead">
      <span @click.stop="$router.goBack()"><van-icon :name="left" size="0.25rem" color="#8c8c8c" style="margin-top:0.1rem"/></span>
      <span>{{text}}</span>
      <span @click.stop="rightfun">{{righttype?'':right}}<van-icon :name="right" v-show="righttype"/></span>
  </div>
</template>

<script>
export default {
name:'myhead',
props:{
    left:{
        type:String,
        default:''
    },
    text:{
        type:String,
        default:''
    },
    right:{
        type:String,
        default:''
    },
    righttype:{
        type:Boolean,
        default:true,
    },
   
    rightfun:{
        type:Function,
        default:()=>{},
    }
},
data(){
return{
}
},
metheds:{
    
},
created(){
},
mounted(){
}

}

</script>
<style scoped>
 .allhead{
      color:#353535;
      background: #fff;
      height: 0.45rem;
      line-height: 0.45rem;
      font-size: 0.18rem;
      position: absolute;
      width: 100%;
      top: 0;
      left: 0;
      box-shadow: 0 1px 3px 2px #eee;
  }
  .allhead>span:first-child{
      position: absolute;
      left: 0.1rem;
      top: 0rem;
  }
  .allhead>span:last-child{
      position: absolute;
      right: 0.1rem;
      top: 0rem;
  }
</style>
