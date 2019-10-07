<template>
  <div id="app">
    <router-view/>
    <my-footer></my-footer>
  </div>
</template>

<script>
import MyFooter from '@/components/viewmodle/myfooter'
export default {
  name: 'App',
  components:{'my-footer':MyFooter},
  created(){
//     this.$http.get('api', {})  
//     .then((res) => {  
//     console.log(res);  
// }).catch((err) => {  
//     console.log(err);  
// })
//     this.$http({
//         method: 'post',
//         url: 'api/process_post',
//         data: {
//           names: 123,
//           passwords: 321
//         }
//      }).then(function(res){
//           console.log(res)
//         })
//     .catch(function(err){
//           console.log(err)
//         })
    // $.post("/process_post", { //jq的post方法
    //                     names: names,
    //                     passwords: passwords
    //                 }, function(res) {
    //                     alert("提交成功");
    //                 })
  }
}
</script>

<style>

</style>
