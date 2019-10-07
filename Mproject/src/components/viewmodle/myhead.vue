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
<style>
</style>