<template>
  <form class="form-row mb-0">
    <div class="form-group col-md-12 col-lg-6 mb-1">
      <label class="control-label text-left" for="numero">Número do cartão</label>
      <input-component classeinput="form-control"
      tipoinput="text" v-model="cartao.NumeroCartao"></input-component>
    </div>
    <div class="form-group col-md-12 col-lg-6 mb-1">
      <label class="control-label text-left" for="nome">Nome</label>
      <input-component classeinput="form-control"
      tipoinput="text" v-model="cartao.NomeCartao"></input-component>
    </div>
    <div class="form-group col-md-12 col-lg-6 mb-1">
      <label class="control-label text-left" for="validade">Validade</label>
      <input-component classeinput="form-control"
      tipoinput="date" v-model="cartao.ValidadeCartao"></input-component>
    </div>
    <div class="form-group col-md-12 col-lg-6 mb-1">
      <label class="control-label text-left" for="codigo">CVV</label>
      <input-component classeinput="form-control"
      tipoinput="text" v-model="cartao.CodigoCartao"></input-component>
    </div>
    <div class="form-group col-md-12 col-lg-12 text-center">
      <button @click.prevent="pagarCompra" class="btn btn-default">Pagar</button>
    </div>
  </form>
</template>

<script>
  import InputComponent from '../shared/InputComponent.vue'
  export default {
    name: 'pagamento-form-component',
    components: {
      InputComponent
    },
    props: {
      total: Number, cepDestino: String
    },
  	data(){
      return{
        cartao: { NumeroCartao: null, NomeCartao: null, ValidadeCartao: null, CodigoCartao: null }
      }
    },
    methods: {
      pagarCompra () {
        let usuarioAux = JSON.parse(sessionStorage.getItem('usuario')) //pega a info de "usuario"
        var request = [
          { IdCadastro: usuarioAux.IdCadastro, cartao: this.cartao, PrecoCompra: this.total, CEP: this.cepDestino }
        ]
        if (this.cartao.NumeroCartao && this.cartao.NomeCartao && this.cartao.ValidadeCartao && this.cartao.CodigoCartao) {
          this.$http.post('http://localhost:3000/InserirLogCompras', request[0], {
            headers: {
              'Content-Type': 'application/json'
            }
          })
          .then(function(response) {
            alert("Pagamento realizado com sucesso")
          })
        }
        else {
          alert('Preencha todos os campos corretamente')
        }
      }
    }
  }
</script>

<style lang="scss">
</style>
