<template>
  <form class="form-row mb-0">
    <div class="form-group col-md-12 col-lg-12 mb-1">
      <label class="control-label text-left" for="username">Usuário</label>
      <input-component classeinput="form-control"
      tipoinput="text" v-model="usuario.nome"></input-component>
    </div>
    <div class="form-group col-md-12 col-lg-12 mb-1">
      <label class="control-label text-left" for="senha">Senha</label>
      <input-component labelinput="senha" label="Senha" classeinput="form-control"
      tipoinput="password" v-model="usuario.senha"></input-component>
    </div>
    <p v-show="alerta != ''" class="alert alert-danger" role="alert"{{ alerta }}</p>
    <div class="form-group col-md-12 col-lg-12 reset">
      <router-link to="/reset">Esqueci minha senha</router-link>
    </div>
    <div class="form-group col-md-12 col-lg-12 text-center">
      <button @click.prevent="login($event)" class="btn btn-primary">Entrar</button>
    </div>
    <div class="form-group col-md-12 col-lg-12 text-center">
      <p>Não possui conta?<router-link to="/register" class="link"><strong> Cadastre-se</strong></router-link></p>
    </div>
    <modal-component v-if="showModal" @close="showModal = false">
      <h3 slot="header">Login</h3>
      <h6 slot="body" class="text-center"><i :class="icone" aria-hidden="true"></i> {{message}}</h6>
    </modal-component>
  </form>
</template>

<script>
  import InputComponent from '../shared/InputComponent.vue'
  import ModalComponent from '../shared/ModalComponent.vue'
  export default {
    name: 'login-form-component',
    components: {
      InputComponent, ModalComponent
    },
    data () {
      return {
        usuario: { nome: null, senha: null },
        alerta: '', showModal: null, message: null
      }
    },
    methods: {
      login (event) {
        if (this.usuario.nome != null || this.usuario.senha != null) {
          sessionStorage.setItem('usuario', JSON.stringify(this.usuario))
          this.$router.push('/home') // redireciona o usuário pra página principal
        }
        else {
          this.showModal = true
          this.message = 'Preencha todos os campos corretamente'
          this.icone = 'text-danger far fa-lg fa-times-circle'
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .form-row{
    .reset{
      a{
        font-size: 0.9rem;
        color: #41698E;
        &:hover{
          color: #213345;
          text-decoration: none;
        }
      }
    }
    .link{
      color: #41698E;
      &:hover{
        color: #213345!important;
        text-decoration: none!important;
      }
    }
  }
</style>
