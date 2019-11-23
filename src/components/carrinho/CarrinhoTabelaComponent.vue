<template>
  <div class="container carrinho-tabela-component">
    <div class="row">
      <div class="checkout mx-auto text-center">
        <h3 class="text-center">Seu carrinho</h3>
        <h5 class="text-center" v-for="item in items">
          <p>
            <strong>Produto: </strong>{{ item.nome }} |
            <strong>Preço: R$ </strong>R$ {{ item.preco }} |
            <strong>
              <i class="fa fa-trash" @click="removerCarrinho(item)"></i>
            </strong>
          </p>
        </h5>
        <hr />
        <div class="col-md-12 col-lg-12">
          <div class="u-pull-right">
            <h5>Subtotal: <span>{{ subtotal }}</span></h5>
            <button v-if="subtotal != 0">Finalizar compra</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'carrinho-tabela-component',
    props: {
      items: Array
    },
    data(){
      return{
        verCarrinho: false, verificado: false
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
        var subtotal = 0;
        for (var i = 0; i < this.items.length; i++) {
          subtotal += this.items[i].preco;
        }
        return subtotal;
      }
    },
    mounted(){
      console.log(this.items);
    }
  }
</script>

<style lang="scss">
  .carrinho-tabela-component{

  }
</style>
