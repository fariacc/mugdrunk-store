<template>
  <div class="col-md-12 col-lg-12 banner-component py-0">
    <div class="text-center">
      <div class="filter"></div>
      <img class="logo" alt="Mug Drunk Logo" src="../../assets/images/caneca-drunk.jpg">
      <h2 class="text-banner">
        {{ text }}
      </h2>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'banner-component',
    props: {
      text: String
    }
  }
</script>

<style lang="scss">
  .banner-component{
    background-color: #ffffff;
    box-shadow: 0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12);
    .filter {
      position: absolute;
      background-color: rgba(2,19,49,0.4);
      border: 0;
      box-shadow: none;
      height: 100%;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
    }
    .logo {
      width: 15vw;
    }
    .text-banner {
      font-weight: lighter;
      color: #000000;
      text-align: center;
    }
  }
</style>
