<template>
  <div class="gerenciar-fornecedores-component">
    <h2 class="text-banner">Gerenciar fornecedores</h2>
      <gerenciar-fornecedores-lista-component></gerenciar-fornecedores-lista-component>
  </div>
</template>

<script>
import GerenciarFornecedoresListaComponent from './GerenciarFornecedoresListaComponent.vue'
  export default {
    name: "gerenciar-fornecedores-component",
    components:{
      GerenciarFornecedoresListaComponent
    }
  }
</script>

<style lang="scss">
  .gerenciar-fornecedores-component{
  }
</style>
