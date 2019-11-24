<template>
  <div class="col-md-12 col-lg-6 carrinho-tabela-component">
    <div class="checkout">
      <h4 class="text-center mb-5">Seu carrinho</h4>
      <!-- <h6 class="text-center" v-for="item in items"> -->
        <p class="text-center" v-for="item in items">
          <strong>Produto: </strong>{{ item.nome }} |
          <strong>Preço: R$ </strong>R$ {{ item.preco }} |
          <strong>
            <i class="fa fa-trash" @click="removerCarrinho(item)"></i>
          </strong>
        </p>
      <!-- </h6> -->
    </div>
    <hr v-if="subtotal != 0"/>
    <div class="form-inline mb-1" v-if="subtotal != 0">
      <strong>Cupom de desconto: </strong>
      <input-component classeinput="form-control ml-2" tipoinput="text" v-model="cupom"></input-component>
      <button type="button" name="cupom" class="btn btn-primary ml-2">Adicionar</button>
    </div>
    <hr/>
    <p class="text-center"><strong>Subtotal: </strong> R$ {{ subtotal }}</p>
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
        verCarrinho: false, verificado: false, cupom: null
      }
    },
    methods: {
      removerCarrinho(item) {
        item.quantidade -= 1;
        this.items.splice(this.items.indexOf(item), 1);
      }
    },
    computed: {
      subtotal() {//calcula o subtotal da compra
        var subtotal = 0
        for (var i = 0; i < this.items.length; i++) {
          subtotal += this.items[i].preco;
        }
        this.$emit('mandarSubtotal', subtotal)
        return subtotal
      }
    }
  }
</script>

<style lang="scss">
  .carrinho-tabela-component{

  }
</style>
