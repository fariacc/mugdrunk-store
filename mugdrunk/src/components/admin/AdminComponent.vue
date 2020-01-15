<template>
  <div class="container admin-component my-2 py-0">
    <div class="row">
      <menu-admin-component @enviarOpcao="trocaOpcao"></menu-admin-component>
      <painel-admin-component :opcaoAtual="opcaoAtual"></painel-admin-component>
    </div>
  </div>
</template>

<script>
  import MenuAdminComponent from './MenuAdminComponent.vue'
  import PainelAdminComponent from './PainelAdminComponent.vue'
  export default {
    name: 'admin-component',
    components: {
      MenuAdminComponent, PainelAdminComponent
    },
    data(){
      return{
        opcaoAtual: 'usuarios'
      }
    },
    methods:{
      trocaOpcao(opcao){
        this.opcaoAtual = opcao
      }
    }
  }
</script>

<style lang="scss">
  .admin-component{
    box-shadow: 0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12);
    .v-application{
      &--wrap{
        min-height: 100%;
        background-color: white;
      }
    }
  }
</style>
