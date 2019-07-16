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
  components:{'my-footer':MyFooter}
}
</script>

<style>

</style>
