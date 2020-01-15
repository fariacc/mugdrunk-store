<template>
  <div class="gerenciar-questionario-component">
    <h2 class="text-banner">Gerenciar Questionarios</h2>
      <gerenciar-questionario-lista-component></gerenciar-questionario-lista-component>
  </div>
</template>

<script>
  import GerenciarQuestionarioListaComponent from './GerenciarQuestionarioListaComponent.vue'
  export default {
    name: "gerenciar-cupons-component",
    components:{
      GerenciarQuestionarioListaComponent
    }
  }
</script>

<style lang="scss">
  .gerenciar-questionario-component{
  }
</style>
