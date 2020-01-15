<template>
  <div class="carrinho-component">
    <navbar-component :items="items"></navbar-component>
    <div class="container">
      <div class="row mx-0">
        <carrinho-tabela-component :items="items" @mandarSubtotal="mandaSubtotal"></carrinho-tabela-component>
        <div class="col-md-12 col-lg-6 text-center" v-if="subtotal != 0">
          <h4 class="text-center mb-5">Total do carrinho</h4>
          <calculadora-frete-component v-if="!retirada" @mandarFrete="calcularTotal"></calculadora-frete-component>
          <hr>
          <div class="form-inline px-0">
            <input class="form-control" type="checkbox" id="retirada" v-model="retirada"> Retirar na loja
          </div>

          <p class="text-left">Av. Sete de Setembro, 3165 - Rebouças CEP 80230-901 - Curitiba - PR - Brasil</p>
          <hr>
          <p class="text-left" v-if="total != null"><strong>Preço final: </strong>R$ {{ total }}</p>
          <hr v-if="total != null">
          <button class="btn btn-default mx-2" @click="finalizarCompra">Finalizar compra</button>
        </div>
        <div class="col-md-12 col-lg-12 text-center">
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
  import CarrinhoTabelaComponent from './CarrinhoTabelaComponent.vue'
  import CalculadoraFreteComponent from './CalculadoraFreteComponent.vue'
  export default {
    name: 'carrinho-component',
    components: {
      NavbarComponent, CarrinhoTabelaComponent, CalculadoraFreteComponent
    },
    data(){
      return{
        items: [], subtotal: null, total: null, retirada: false, cepDestino: null, valorFrete: null
      }
    },
    methods: {
      mandaSubtotal(subtotal){
        this.subtotal = subtotal
      },
      calcularTotal(valorFrete, cepDestino){
        this.total = this.subtotal + valorFrete
        this.valorFrete = valorFrete
        this.cepDestino = cepDestino
        if (this.retirada){
          //se retirar na loja, nao tem frete
           this.total = this.subtotal;
        }
      },
      finalizarCompra(){
        if (this.total != null){
          let usuarioAux = sessionStorage.getItem('usuario') //pega a info de "usuario"
          if (usuarioAux){//se usuario logado vai pra página de pagamento
            this.$router.push({name: 'pagamento-component', params: {items: this.items, total: this.total, cepDestino: this.cepDestino}})
          }
          else{//se usuario não tiver logado vai pra página de login
            this.$router.push('/login')
          }
        }
        else{
          alert("Insira o seu CEP")
        }
      }
    },
    created(){
      if (this.$route.params.items != undefined) {
        this.items = this.$route.params.items//recebendo a lista de items para o carrinho
      }
    },
    watch:{
      total(){},
      subtotal(){
        this.calcularTotal(this.valorFrete, this.cepDestino)
      }
    }
  }
</script>

<style lang="scss">
  .carrinho-component{

  }
</style>
