<template>
  <div class="col-md-12 col-lg-6 carrinho-tabela-component">
    <div class="checkout">
      <h4 class="text-center mb-5">Seu carrinho</h4>
      <p class="text-center" v-for="item in items">
        <strong>Produto: </strong>{{ item.nome }} |
        <strong>Preço: R$ </strong>R$ {{ item.preco }} |
        <strong>
          <i class="fa fa-trash" @click="removerCarrinho(item)"></i>
        </strong>
      </p>
    </div>
    <hr v-if="subtotal != 0"/>
    <div class="form-inline mb-1" v-if="subtotal != 0">
      <strong>Cupom de desconto: </strong>
      <input-component classeinput="form-control ml-2" tipoinput="text" v-model="cupom"></input-component>
      <button type="button" name="cupom" class="btn btn-primary ml-2" @click="adicionarCupom(cupom)">Adicionar</button>
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
        verCarrinho: false, verificado: false, cupom: null, desconto: 0.50, subtotalComDesconto: null
      }
    },
    methods: {
      removerCarrinho(item) {
        item.quantidade -= 1;
        this.items.splice(this.items.indexOf(item), 1);
      },
      adicionarCupom(cupom){
        if (cupom == 'desconto') { //só um exemplo de aplicação de desconto
          this.subtotal = this.subtotal * this.desconto
        }
        else {
          this.subtotal = this.subtotal
          this.subtotalComDesconto = null
        }
      }
    },
    computed: {
      subtotal: {//calcula o subtotal da compra
        get: function () {
          var subtotal = 0
          for (var i = 0; i < this.items.length; i++) {
            subtotal += this.items[i].preco;
          }
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
