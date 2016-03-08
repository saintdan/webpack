<template>
  <topnav></topnav>
  <leftnav></leftnav>
  <div class="main">
    <router-view keep-alive="keep-alive" transition="transition" transition-mode="out-in" class="view"></router-view>
  </div>
</template>

<script>
export default {
  components:{
      import Header from './views/_Header'
      import LeftNav from './views/_LeftNav'
      import Footer from './views/_Footer'
  }
}
</script>

<style lang="stylus">
@import "./assets/css/bootstrap.min.css"

*
  margin 0
  padding 0

.main
  margin-left 150px
  padding 5px
</style>
