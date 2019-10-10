<template>
    <div class="allbody hot">
        <my-head  :text="'广场'" ></my-head>
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
  .hotbg::after{
      content:'';
      z-index: -1;
     
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0 ;
      top: 0;
      opacity: 0.7;
  }
</style>

