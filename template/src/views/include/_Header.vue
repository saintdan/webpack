<template>
<div class="header">
  <form action="/xx.html" method="post" class="form-inline">
    <div class="form-group">
      <input type="text" placeholder="search" class="form-control form-control-sm"/>
      <div role="group" class="btn-group">
          <a v-link="{ path: '/login/login' }" class="btn btn-sm btn-primary">Log In</a>
          <a v-link="{ path: '/login/signup'}" class="btn btn-sm btn-success">Sign Up</a>
      </div>
    </div>
  </form>
</div>
</template>

<style lang="stylus">
.header
  width 278px
  position fixed
  top 10px
  right 10px
  z-index 999
  input
    border-radius 20px 0 0 20px
    margin-right -1px
    height 31px
  .btn-primary
    border-radius 0
  .btn-success
    border-radius 0 20px 20px 0
</style>
