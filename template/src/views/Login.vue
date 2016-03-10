<template>
  <div class="content">
    <div class="form col-md-6 col-md-offset-3 text-center">
      <div class="title">
        <h1>{{ name }}</h1>
        <h2>{{ description }}</h2>
      </div>
      <h4 class="change">
        <span>
          <a v-link="{ path: '/login', exact: true }">Log In</a>
          <b>·</b>
          <a v-link="{ path: '/login/signup', exact: true }">Sign Up</a>
        </span>
      </h4>
      <router-view 
        keep-alive="keep-alive" 
        transition="transition" 
        transition-mode="out-in" 
        class="view">
      </router-view>
    </div>
  </div>
</template>

<style lang="stylus">
color-sparta = #59a27a
.content
  .form
    margin-top 10%
    h1
      font-size 48px
      color color-sparta
    h2
      font-size 20px  
      color color-sparta
    
    .change
      font-size 20px
      border-bottom 1px solid #eee
      color #b1b1b1
      margin-top 50px
      span
        position relative
        top 10px
        padding 0 30px
        background #fff
        a
          color #b1b1b1
          text-decoration none
        .v-link-active
          color #555555
        b
          margin 0 10px  
    form
      margin-top 20px        
      input
        margin-top 10px  
      p
        color #b1b1b1
        font-size 14px
        margin-top 5px  
</style>