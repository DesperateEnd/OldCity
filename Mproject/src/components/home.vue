<template>
    <div class="home">
       <div class="allbox homebg" style="padding-top:0">
            <div>
                <p>{{name}}</p>
                <p>{{code}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'home',
    data(){
        return{
            name:'name',
            code:'code',
        }
    }
}
</script>

<style scoped>
    .homebg{
    content:'';
    z-index: -1;
    background: url(../assets/images/homebg1.jpg) no-repeat;
    background-size: 100% auto;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0 ;
    top: 0;
    opacity: 0.8;
  }
</style>

