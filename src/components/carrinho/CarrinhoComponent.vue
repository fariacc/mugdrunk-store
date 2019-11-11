<template>
  <div class="carrinho-component">
    <div class="row mx-0">
      <navbar-component :items="items"></navbar-component>
      <banner-component text="MUG DRUNK SHOP"></banner-component>
      <carrinho-tabela-component :items="items"></carrinho-tabela-component>
    </div>
  </div>
</template>

<script>
  import NavbarComponent from '../shared/NavbarComponent.vue'
  import BannerComponent from '../shared/BannerComponent.vue'
  import CarrinhoTabelaComponent from './CarrinhoTabelaComponent.vue'
  export default {
    name: 'carrinho-component',
    components: {
      NavbarComponent, BannerComponent, CarrinhoTabelaComponent
    },
    data(){
      return{
        items: []
      }
    },
    created(){
      this.items = this.$route.params.items//recebendo a lista de items para o carrinho
    }
  }
</script>

<style lang="scss">
  .carrinho-component{

  }
</style>
