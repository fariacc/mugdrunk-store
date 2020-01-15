<template>
  <div class="col-md-9 col-lg-9 painel-admin-component">
    <gerenciar-usuarios-component v-if="opcaoAtual == 'usuarios'"></gerenciar-usuarios-component>
    <gerenciar-produtos-component v-else-if="opcaoAtual == 'produtos'"></gerenciar-produtos-component>
    <gerenciar-fornecedores-component v-else-if="opcaoAtual == 'fornecedores'"></gerenciar-fornecedores-component>
    <gerenciar-cupons-component v-else-if="opcaoAtual == 'cupons'"></gerenciar-cupons-component>
    <gerenciar-questionario-component v-else-if="opcaoAtual == 'questionario'"></gerenciar-questionario-component>
  </div>
</template>

<script>
  import GerenciarUsuariosComponent from './usuarios/GerenciarUsuariosComponent.vue'
  import GerenciarProdutosComponent from './produtos/GerenciarProdutosComponent.vue'
  import GerenciarFornecedoresComponent from './fornecedores/GerenciarFornecedoresComponent.vue'
  import GerenciarCuponsComponent from './cupons/GerenciarCuponsComponent.vue'
  import GerenciarQuestionarioComponent from './questionarios/GerenciarQuestionarioComponent.vue'
  export default {
    name: "painel-admin-component",
    components:{
      GerenciarUsuariosComponent, GerenciarProdutosComponent, GerenciarFornecedoresComponent, GerenciarCuponsComponent, GerenciarQuestionarioComponent
    },
    props: {
      opcaoAtual: String
    }
  }
</script>

<style lang="scss">
  .painel-admin-component{
    background-color: #fff;
    min-height: 85;
    max-height: 100%;
  }
</style>
