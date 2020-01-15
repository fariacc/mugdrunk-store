<template>
  <div class="gerenciar-produtos-component">
    <h2 class="text-banner">Gerenciar produtos</h2>
    <gerenciar-produtos-lista-component></gerenciar-produtos-lista-component>
  </div>
</template>

<script>
  import GerenciarProdutosListaComponent from './GerenciarProdutosListaComponent.vue'
  export default {
    name: "gerenciar-produtos-component",
    components:{
      GerenciarProdutosListaComponent
    }
  }
</script>

<style lang="scss">
  .gerenciar-produtos-component{
  }
</style>
