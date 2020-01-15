<template>
  <div class="gerenciar-usuarios-component">
    <h2 class="text-banner">Gerenciar usuários</h2>
    <gerenciar-usuarios-lista-component></gerenciar-usuarios-lista-component>
  </div>
</template>

<script>
  import GerenciarUsuariosListaComponent from './GerenciarUsuariosListaComponent.vue'
  export default {
    name: "gerenciar-usuarios-component",
    components:{
      GerenciarUsuariosListaComponent
    }
  }
</script>

<style lang="scss">
  .gerenciar-usuarios-component{
  }
</style>
