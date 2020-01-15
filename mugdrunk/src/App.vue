<template>
  <div id="app">
    <transition name="page">
      <router-view :key="$route.fullPath"></router-view>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'app',
    mounted: function () {
      this.$tours['myTour'].start()
    }
  }
</script>

<style lang="scss">
  .page-enter, .page-leave-active{
    opacity: 0;
  }
  .page-enter-active, .page-leave-active{
    transition: opacity .5s;
  }
  .btn{
    height: fit-content;
    a, .link{
      color: #ffffff;
      &:hover{
        color: #ffffff;
        text-decoration: none;
      }
    }
    &.btn-default{
      background-color: #41698E;
      padding: 0.25em 0.4em;
      border-radius: 0px!important;
      color: #ffffff;
      width: max-content;
      margin-top: 0.5em;
      margin-bottom: 0.5em;
      &:hover{
        color: #ffffff;
        background-color: #213345;
      }
    }
  }
</style>
