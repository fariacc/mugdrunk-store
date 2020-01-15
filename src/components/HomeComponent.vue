<template>
  <div class="home-component">
    <div class="row mx-0">
      <navbar-component :items="items"></navbar-component>
      <banner-component text="MUG DRUNK SHOP"></banner-component>
      <produtos-component @update:items="items = $event"></produtos-component>
    </div>
  </div>
</template>

<script>
  import NavbarComponent from './shared/NavbarComponent.vue'
  import BannerComponent from './shared/BannerComponent.vue'
  import ProdutosComponent from './produtos/ProdutosComponent.vue'
  export default {
    name: 'home-component',
    components: {
      NavbarComponent, BannerComponent, ProdutosComponent
    },
    data(){
      return{
        items: []
      }
    },
    created(){
      if (this.$route.params.items != undefined) {
        this.items = this.$route.params.items//recebendo a lista de items para o carrinho
      }
    }
  }
</script>

<style lang="scss">
  .home-component{
    background-color: #ececec;
    min-height: 100vh;
    max-height: 100%;
  }
</style>
