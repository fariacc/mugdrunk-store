<template>
  <div class="pagamento-component">
    <navbar-component :items="items"></navbar-component>
    <div class="container">
      <div class="row mx-0">
        <div class="col-md-12 col-lg-12 text-center">
          <h4 class="text-center mb-5">Pagamento</h4>
          <hr>
          <pagamento-form-component :total="total" :cepDestino="cepDestino"></pagamento-form-component>
          <router-link :to="{ name: 'home-component', params: { items } }">
            <button class="btn btn-default mx-2">
              Voltar ao início
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import NavbarComponent from '../shared/NavbarComponent.vue'
  import PagamentoFormComponent from '../pagamento/PagamentoFormComponent.vue'
  export default {
  	name: "pagamento-component",
  	components: {
  		NavbarComponent, PagamentoFormComponent
  	},
  	data(){
      return{
        items: [], total: null, cepDestino: null
      }
    },
  	created(){
      if (this.$route.params.items != undefined) {
        this.items = this.$route.params.items;//recebendo a lista de items para o carrinho
        this.total = this.$route.params.total;
        this.cepDestino = this.$route.params.cepDestino;
      }
    }
  }
</script>

<style lang="scss">
</style>
