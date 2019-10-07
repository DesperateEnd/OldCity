<template>
  <div class="allhead">
      <span @click.stop="goback"><van-icon :name="left" /></span>
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
    goback:{
        type:Function,
        default:this.goback
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
    goback(){
        this.$router.go(-1)
    }
},
created(){
},
mounted(){
}

}

</script>
<style scoped>
 .allhead{
      color:#fff;
      background: linear-gradient(45deg,black,red);
      height: 0.45rem;
      line-height: 0.45rem;
      font-size: 0.18rem;
      position: absolute;
      width: 100%;
      top: 0;
      left: 0;
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
