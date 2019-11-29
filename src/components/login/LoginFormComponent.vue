<template>
  <form class="form-row mb-0">
    <div class="form-group col-md-12 col-lg-12 mb-1">
      <label class="control-label text-left" for="email">E-mail</label>
      <input-component classeinput="form-control"
      tipoinput="email" v-model="usuario.email"></input-component>
    </div>
    <div class="form-group col-md-12 col-lg-12 mb-1">
      <label class="control-label text-left" for="senha">Senha</label>
      <input-component labelinput="senha" label="Senha" classeinput="form-control"
      tipoinput="password" v-model="usuario.senha"></input-component>
    </div>
    <div class="form-group col-md-12 col-lg-12 text-center">
      <button @click.prevent="login" class="btn btn-default">Entrar</button>
    </div>
    <div class="form-group col-md-12 col-lg-12 text-center">
      <p>Não possui conta?<router-link to="/register" class="link"><strong> Cadastre-se</strong></router-link></p>
    </div>
  </form>
</template>

<script>
  import InputComponent from '../shared/InputComponent.vue'
  export default {
    name: 'login-form-component',
    components: {
      InputComponent
    },
    data () {
      return {
        usuario: { email: null, senha: null }
      }
    },
    methods: {
      validEmail: function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      },
      login () {
        if (this.validEmail(this.usuario.email) && this.usuario.senha) {
          sessionStorage.setItem('usuario', JSON.stringify(this.usuario))
          this.$router.push('/') // redireciona o usuário pra página principal
        }
        else {
          alert('Preencha todos os campos corretamente')
        }
      }
    }
  }
</script>

<style lang="scss">
</style>
