<template>
  <div id="v-step-0" class="home-component">
    <div  class="row mx-0">
      <navbar-component id="v-step-1" :items="items"></navbar-component>
      <banner-component v-if="usuario.Permissao != 'admin'" text="MUG DRUNK SHOP"></banner-component>
      <produtos-component id="v-step-2" @update:items="items = $event" v-if="usuario.Permissao != 'admin'"></produtos-component>
      <admin-component v-else-if="usuario.Permissao == 'admin'"></admin-component>
      <footer-component id="v-step-3"></footer-component>
      <div class="fim-tour" id="v-step-4"></div>
      <v-tour name="myTour" :steps="steps"></v-tour>

    </div>
  </div>
</template>

<script>
  import NavbarComponent from './shared/NavbarComponent.vue'
  import BannerComponent from './shared/BannerComponent.vue'
  import ProdutosComponent from './produtos/ProdutosComponent.vue'
  import AdminComponent from './admin/AdminComponent.vue'
  import FooterComponent from './shared/FooterComponent.vue'
  export default {
    name: 'home-component',
    components: {
      NavbarComponent, BannerComponent, ProdutosComponent, AdminComponent, FooterComponent
    },
    data(){
      return{
        items: [],
        usuario: { Permissao: null },
        steps: [
          {
            target: '#v-step-0',  // We're using document.querySelector() under the hood
          content: `Seja Bem-vindo ao Mug Drunk Shop! Vou te apresentar a loja para facilitar sua navegação.`
          },
          {
            target: '#v-step-1',
            content: 'Essa é a barra princiapal do site, nela você poderá ver seu carrinho e efetuar o login!'
          },
          {
            target: '#v-step-2',
            content: 'Aqui é nosssa seção de produtos! Escolha aquele que mais te agrade e acrescente no carrinho com o botão comprar.'
          },
          {
            target: '#v-step-3',
            content: 'Esse é o link para nosso formulário de pesquisa de satisfação. Sempre que possível o responda, pois o seu feedback é muito importante para nós.',

          },
          {
            target: '#v-step-4',
            content: 'Esperamos que sua experiência em nossa loja seja sempre a melhor! Obrigado!<br/>Qualquer duvida ou se precisar falar com a gente use o chat ao lado, ou <a href="/contato">Clique aqui</a> e nos mande um email',
            params: {
              placement: 'top'
            }
          }
        ]
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
      if (this.$route.params.items != undefined) {
        this.items = this.$route.params.items//recebendo a lista de items para o carrinho
      }

    }
  }
</script>

<style lang="scss">
  .home-component{
    background-color: #ececec;
    min-height: 100vh;
    max-height: 100%;
  }
  .fim-tour{
    width: 100vw
  }
</style>
