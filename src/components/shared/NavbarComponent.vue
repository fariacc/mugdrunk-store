<template>
  <nav class="navbar navbar-expand">
    <div class="container">
      <p class="nav-item text-light ml-auto mb-0 py-2" @click="verCarrinho = true">
        <i class="fas fa-shopping-cart" aria-hidden="true"></i>
        {{ items.length }} <span>Itens</span>
      </p>
      <b-dropdown right v-if="usuario != null" :text="usuario.nome" class="mx-2">
        <b-dropdown-item @click="logout()">Sair</b-dropdown-item>
      </b-dropdown>
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
              <button type="button" name="button" class="btn btn-default" @click="verCarrinho = false">
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
        verCarrinho: false, usuario: null
      }
    },
    methods:{
      verificarUsuario(){
        let usuarioAux = sessionStorage.getItem('usuario') //pega a info de "usuario"
        if (usuarioAux){
          this.usuario = JSON.parse(usuarioAux) //this.usuario recebendo as infos de usuario em forma de objeto
        }
      },
      logout(){
        sessionStorage.clear()
        this.usuario = false
        this.$router.push('/login')
      }
    },
    created(){
      this.verificarUsuario()
    }
  }
</script>

<style lang="scss">
  .navbar{
    width: 100%;
    background-color: #213345;
  	box-shadow: none;
    padding: 0!important;
    .dropdown{
      .dropdown-toggle{
        background-color: transparent;
        border: 0;
        text-transform: uppercase;
        font-size: 0.9em;
        font-weight: bold;
      }
      .dropdown-menu{
        font-size: 0.9rem;
        .dropdown-item {
          color: #213345;
          background-color: transparent;
          padding: 0.4rem 0.6rem 0.4rem 0.6rem;
          &:hover{
            background-color: #e9ecef;
          }
        }
      }
    }
    .nav-item{
      margin-right: 1.5vw;
      font-size: 0.9em;
      font-weight: bold;
      text-transform: uppercase;
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
