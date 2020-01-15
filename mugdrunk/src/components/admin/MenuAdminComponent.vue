<template>
  <div class="col-md-3 col-lg-3 menu-admin-component">
    <span class="text-light" @click="trocarOpcao('usuarios')">Usuários</span>
    <hr>
    <span class="text-light" @click="trocarOpcao('produtos')">Produtos</span>
    <hr>
    <span class="text-light" @click="trocarOpcao('fornecedores')">Fornecedores</span>
    <hr>
    <span class="text-light" @click="trocarOpcao('cupons')">Cupons</span>
    <hr>
    <span class="text-light" @click="trocarOpcao('questionario')">Questionarios</span>
  </div>
</template>

<script>
  export default {
    name: 'menu-admin-component',
    methods:{
      trocarOpcao(opcao){
        this.$emit('enviarOpcao', opcao)
      }
    }
  }
</script>

<style lang="scss">
  .menu-admin-component{
    background-color: #41698E;
    min-height: 85vh;
    max-height: 100%;
    span{
      cursor: pointer;
      font-weight: bold;
    }
    hr{
      color: #ffffff;
      padding-top: 0;
    }
  }
</style>
