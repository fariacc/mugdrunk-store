<template>
  <div class="col-md-12 col-lg-6 carrinho-tabela-component">
    <div class="checkout">
      <h4 class="text-center mb-5">Seu carrinho</h4>
      <p class="text-center" v-for="item in items">
        <strong>Produto: </strong>{{ item.Descricao }} |
        <strong>Preço: R$ </strong>R$ {{ item.Preco }} |
        <strong>
          <i class="fa fa-trash" @click="removerCarrinho(item)"></i>
        </strong>
      </p>
    </div>
    <hr v-if="subtotal != 0"/>
    <div class="form-inline mb-1" v-if="subtotal != 0">
      <strong>Cupom de desconto: </strong>
      <input-component classeinput="form-control ml-2" tipoinput="text" v-model="cupom.Codigo"></input-component>
      <button type="button" name="cupom" class="btn btn-default ml-2" @click="adicionarCupom">Adicionar</button>
    </div>
    <hr/>
    <p class="text-center" v-if="subtotalComDesconto != null"><strong>Subtotal: </strong> R$ {{ subtotalComDesconto }}</p>
    <p class="text-center" v-else><strong>Subtotal: </strong> R$ {{ subtotal }}</p>
  </div>
</template>

<script>
  import InputComponent from '../shared/InputComponent.vue'
  export default {
    name: 'carrinho-tabela-component',
    components: {
      InputComponent
    },
    props: {
      items: Array
    },
    data(){
      return{
        verCarrinho: false, verificado: false, subtotalComDesconto: null,
        cupom: { Codigo: null }, desconto: null
      }
    },
    methods: {
      removerCarrinho(item) {
        this.items.splice(this.items.indexOf(item), 1);
      },
      adicionarCupom(){
        this.$http.post('http://localhost:3000/AplicarCupom', this.cupom, {
          headers: {
             'Content-Type': 'application/json'
          }
        })
        .then(function(response) {
          if (response.body[0] != undefined){
            alert("Cupom de desconto aplicado com sucesso")
            this.desconto = response.body[0].Valor
            //this.subtotal = this.subtotal - this.desconto
          }
          else{
            alert("Cupom de desconto não encontrado")
            this.subtotal = this.subtotal
            this.subtotalComDesconto = null
          }
        })
      }
    },
    computed: {
      subtotal: {//calcula o subtotal da compra
        get: function () {
          var subtotal = 0
          for (var i = 0; i < this.items.length; i++) {
            if (this.desconto == null) {
              subtotal += this.items[i].Preco
            }
            else{
              subtotal += this.items[i].Preco
            }
          }
          subtotal = subtotal - this.desconto
          this.$emit('mandarSubtotal', subtotal)
          return subtotal
        },
        set: function (subtotalRecalculado) {//dispara quando o metodo adicionarCupom altera o subtotal
          this.subtotalComDesconto = subtotalRecalculado
          this.$emit('mandarSubtotal', this.subtotalComDesconto)
        }
      }
    }
  }
</script>

<style lang="scss">
  .carrinho-tabela-component{

  }
</style>
