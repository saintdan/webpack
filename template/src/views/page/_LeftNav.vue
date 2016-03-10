<template>
    <div class="left_nav">
      <ul>
        <li><img src="../../assets/img/logo.png"/></li>
        <li><a v-link="{ path: '/' }">首页</a></li>
      </ul>
    </div>
</template>

<style lang="stylus">
nav-back = #C0D1CE
color-white = #FFF
font-20 = 20px
hover-color = #e66
b-radius = 3px


.left_nav
  width 150px
  background nav-back
  position fixed
  left 0
  top 0
  bottom 0

  ul
    li
      display block
      line-height 50px
      text-align center
      color color-white

      img
        width 100px
        height 100px
        margin-top -8px

      a
        color color-white
        font-size font-20
        text-decoration none
        padding 5px

        &:hover
          color hover-color
          border 1px solid #e66
          border-radius b-radius
</style>
