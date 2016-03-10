<template>
  <div>
    <form class="form-group col-md-8 col-md-offset-2">
      <input type="text" placeholder="Type your account" class="form-control"/>
      <input type="password" placeholder="Type your password" class="form-control"/>
      <div class="checkbox">
        <label class="pull-left">
          <input type="checkbox"/>Auto Log In
        </label>
        <a class="pull-right">Forgot your password?   </a>
      </div>
      <br/>
      <a class="btn btn-primary btn-block"> Log In</a>
      <p>Confirm License</p>
    </form>
  </div>
</template>

<style lang="stylus">
 .checkbox
   label
     color #b1b1b1
     &:hover
       color #e66
   a
     line-height 32px
     color #b1b1b1
     text-decoration none
     &:hover
       color #e66
</style>
