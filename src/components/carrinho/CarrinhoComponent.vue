<template>
  <div class="carrinho-component">
    <navbar-component :items="items"></navbar-component>
    <div class="container">
      <div class="row mx-0">
        <carrinho-tabela-component :items="items" @mandarSubtotal="mandaSubtotal"></carrinho-tabela-component>
        <div class="col-md-12 col-lg-6 text-center">
          <h4 class="text-center mb-5">Total do carrinho</h4>
          <calculadora-frete-component v-if="subtotal != 0" @mandarFrete="calcularTotal"></calculadora-frete-component>
          <hr>
          <p class="text-left" v-if="total != null"><strong>Preço final: </strong>R$ {{ total }}</p>
          <hr v-if="total != null">
          <button class="btn btn-default mx-2">
            <router-link :to="{ name: 'home-component', params: { items } }">Voltar ao início</router-link>
          </button>
          <button class="btn btn-default mx-2" v-if="subtotal != 0" @click="finalizarCompra">Finalizar compra</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import NavbarComponent from '../shared/NavbarComponent.vue'
  import CarrinhoTabelaComponent from './CarrinhoTabelaComponent.vue'
  import CalculadoraFreteComponent from './CalculadoraFreteComponent.vue'
  export default {
    name: 'carrinho-component',
    components: {
      NavbarComponent, CarrinhoTabelaComponent, CalculadoraFreteComponent
    },
    data(){
      return{
        items: [], subtotal: null, total: null
      }
    },
    methods: {
      mandaSubtotal(subtotal){
        this.subtotal = subtotal
      },
      calcularTotal(valorFrete){
        this.total = this.subtotal + valorFrete
      },
      finalizarCompra(){
        let usuarioAux = sessionStorage.getItem('usuario') //pega a info de "usuario"
        if (usuarioAux){//se usuario logado vai pra página de pagamento
          this.$router.push('/pagamento')
        }
        else{//se usuario não tiver logado vai pra página de login
          this.$router.push('/login')
        }
      }
    },
    created(){
      if (this.$route.params.items != undefined) {
        this.items = this.$route.params.items//recebendo a lista de items para o carrinho
      }
    },
    watch:{
      total(){}
    }
  }
</script>

<style lang="scss">
  .carrinho-component{

  }
</style>
