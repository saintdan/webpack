<template>
  <topnav></topnav>
  <leftnav></leftnav>
  <div class="main">
    <router-view keep-alive="keep-alive" transition="transition" transition-mode="out-in" class="view"></router-view>
  </div>
</template>

<script>
import TopNav from './components/_topnav.vue',
import LeftNav from './components/_header.vue',
import Bottom from './components/_footer.vue'

export default {
  components: {
    TopNav,
    LeftNav,
    Bottom
  }
}
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  margin-top: -100px;
  max-width: 600px;
  font-family: Helvetica, sans-serif;
  text-align: center;
}

.logo {
  width: 100px;
  height: 100px
}
</style>
