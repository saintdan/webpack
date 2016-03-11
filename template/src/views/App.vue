<template>
  <div>
    <top></top>
    <left-nav></left-nav>
    <div class="main">
      <!-- main view -->
      <router-view
        class="view"
        keep-alive
        transition
        transition-mode="out-in">
      </router-view>
    </div>
    <bottom></bottom>
  </div>
</template>

<script>
import Top from './page/_Header'
import LeftNav from './page/_LeftNav'
import Bottom from './page/_Footer'

export default {
  components: {
    Top,
    LeftNav,
    Bottom
  }
}
</script>

<style lang="stylus">

*
  margin 0
  padding 0

.main
  margin-left 150px
  padding 5px
</style>
