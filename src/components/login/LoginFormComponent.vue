<template>
  <form class="form-row mb-0">
    <input-component classediv="form-group col-md-12 col-lg-12 mb-1" labelinput="username" label="Usuário" classeinput="form-control"
    tipoinput="text" v-model="usuario.username"></input-component>
    <input-component classediv="form-group col-md-12 col-lg-12 mb-1" labelinput="senha" label="Senha" classeinput="form-control"
    tipoinput="password" v-model="usuario.senha"></input-component>
    <p v-show="alerta != ''" class="alert alert-danger" role="alert"{{ alerta }}</p>
    <div class="form-group col-md-12 col-lg-12 reset">
      <router-link to="/reset">Esqueci minha senha</router-link>
    </div>
    <div class="form-group col-md-12 col-lg-12 text-center">
      <button @click.native="login()" type="submit" class="btn btn-default">Entrar</button>
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
        usuario: { username: null, senha: null },
        alerta: '', showModal: null, message: null
      }
    },
    methods: {
      login () {
        if (this.usuario.username.length > 0 && this.usuario.senha.length > 0) {
          sessionStorage.setItem('usuario', JSON.stringify(this.usuario))
          this.$router.push('/home') // redireciona o usuário pra página principal
        }
        else {
          this.showModal = true
          this.message = 'Preencha todos os campos corretamente'
          this.icone = 'text-danger far fa-lg fa-times-circle'
        }
        event.preventDefault()
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
