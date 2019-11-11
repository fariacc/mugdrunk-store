<template>
  <nav class="navbar">
    <div class="container">
      <ul class="ml-auto navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/conta">
            <i class="fas fa-user" aria-hidden="true"></i>
            <span> Conta</span>
          </router-link>
        </li>
        <li class="nav-item" @click="verCarrinho = true">
          <p class="nav-link text-light">
            <i class="fas fa-shopping-cart" aria-hidden="true"></i>
            {{ items.length }} <span>Itens</span>
          </p>
        </li>
      </ul>
      <modal-component v-if="verCarrinho" @close="verCarrinho = false">
        <h3 slot="header">Carrinho</h3>
        <div slot="body" class="text-center">
          <div v-if="items.length > 0" class="carrinho-modal">
            <ul>
              <li v-for="item in items" class="lista-items">
                <img :src="item.src" :alt="item.alt">
                <p class="mb-0">
                  <strong>Produto: </strong>{{ item.nome }}
                </p>
                <p>
                  <strong>Preço: </strong>R$ {{ item.preco }}
                </p>
              </li>
            </ul>
            <router-link class="nav-link" :to="{ name: 'carrinho-component', params: { items: this.items } }">
              <button type="button" name="button" class="btn btn-primary" @click="verCarrinho = false">
                Ir para o carrinho
              </button>
            </router-link>
          </div>
          <div v-if="items.length === 0">
            <p>Carrinho vazio</p>
          </div>
        </div>
      </modal-component>
    </div>
  </nav>
</template>

<script>
  import ModalComponent from './ModalComponent.vue'
  export default {
    name: "navbar-component",
    components:{
      ModalComponent
    },
    props:{
      items: Array
    },
    data(){
      return{
        verCarrinho: false
      }
    }
  }
</script>

<style lang="scss">
  .navbar{
    width: 100%;
    background-color: #213345;
  	box-shadow: none;
    padding: 0!important;
    .navbar-nav{
      flex-direction: row;
    }
    .nav-item{
      margin-right: 1.5vw;
      font-size: 0.8em;
      font-weight: bold;
      text-transform: uppercase;
      a, .nav-link{
        color: #ffffff;
        cursor: pointer;
        margin-bottom: 0;
        &:hover{
          // padding: 0;
          padding-bottom: 0;
          color: #ffffff;
          border-bottom: 2px solid #EE4C5B;
        }
      }
    }
    .carrinho-modal{
      img{
        max-width: 8vw;
      }
      .lista-items{
        display: inline-table;
        list-style: none;
        margin-right: 1vw;
        margin-left: 1vw;
      }
      .btn{
        color: #ffffff;
      }
    }
  }
</style>
