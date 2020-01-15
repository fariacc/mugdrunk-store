<template>
  <div class="col-md-9 col-lg-9 caneca-component">
    <v-app>
      <v-card-title class="col-sm-12 col-md-5 col-lg-5">
        <v-text-field v-model="search" append-icon="search" label="Pesquisar" single-line hide-details></v-text-field>
      </v-card-title>
      <div class="col-sm-12 col-md-4 col-lg-3 caneca" v-for="(caneca, key) in filtrarCanecas()">
        <img src="../../assets/images/caneca_caveira.jpg" :alt="caneca.Descricao">
        <p class="mb-0">{{ caneca.Descricao }}</p>
        <p class="mb-0">Preço: R$ 
          <span v-if="caneca.PrecoPromo == null">{{caneca.Preco}}</span>
          <span v-else class="caneca-preco">{{caneca.Preco}}</span>
          <span v-if="caneca.PrecoPromo != null" class="text-success"> - {{ caneca.PrecoPromo }}</span></p>
        <button type="button" name="button" class="btn btn-default m-2" @click="addCarrinho(caneca, key)">
          Comprar
        </button>
      </div>
    </v-app>
  </div>
</template>

<script>
  export default {
    name: "caneca-component",
    props: {
      canecas: Array, range: Array
    },
    data(){
      return{
        search: '', items: []
      }
    },
    methods: {
      filtrarCanecas(){
        var app = this
			  return this.canecas.filter(function(caneca){
          if (app.range != null) {
            if (caneca.PrecoPromo == null) {
              return caneca.Descricao.toLowerCase().indexOf(app.search.toLowerCase()) !== -1 && caneca.Preco >= app.range[0] && caneca.Preco <= app.range[1]
            }
            else{
              return caneca.Descricao.toLowerCase().indexOf(app.search.toLowerCase()) !== -1 && caneca.PrecoPromo >= app.range[0] && caneca.PrecoPromo <= app.range[1]
            }
          }
			  })
      },
      addCarrinho(item, key){//adiciona os items no carrinho
        if(item.PrecoPromo != null){
          item.Preco = item.PrecoPromo
        }
        alert("Caneca " + item.Descricao + " adicionada")
        this.items.push(item)
        this.$emit('update:items', this.items)
      }
    },
    watch:{
      range(){//executa toda vez que a prop range mudar
        this.filtrarCanecas()
      }
    }
  }
</script>

<style lang="scss">
  .caneca-component{
    text-align: center;
    .v-application{
      box-shadow: 0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12);
      background-color: #ffffff!important;
      min-height: fit-content;
      &--wrap{
        min-height: auto;
        display: block;
      }
    }
    .caneca{
      width: auto;
      display: inline-block;
      margin: 0.8em;
      padding: 0;
      background-color: #ffffff;
      border-radius: 5px;
      box-shadow: 0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12);
      img{
        width: auto;
        max-width: 100%;
      }
      .caneca-preco{
        text-decoration: line-through;
      }
    }
  }
</style>
