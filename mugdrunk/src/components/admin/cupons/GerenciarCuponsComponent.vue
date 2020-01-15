<template>
  <div class="gerenciar-cupons-component">
    <h2 class="text-banner">Gerenciar cupons</h2>
      <gerenciar-cupons-lista-component></gerenciar-cupons-lista-component>
  </div>
</template>

<script>
  import GerenciarCuponsListaComponent from './GerenciarCuponsListaComponent.vue'
  export default {
    name: "gerenciar-cupons-component",
    components:{
      GerenciarCuponsListaComponent
    }
  }
</script>

<style lang="scss">
  .gerenciar-cupons-component{
  }
</style>
