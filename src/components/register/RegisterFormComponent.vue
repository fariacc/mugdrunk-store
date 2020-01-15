<template>
  <form class="form-row mb-0">
    <div class="form-group col-md-12 col-lg-6 mb-1">
      <label class="control-label text-left" for="nome">Nome</label>
      <input-component classeinput="form-control" tipoinput="text" v-model="usuario.nome"></input-component>
    </div>
    <div class="form-group col-md-12 col-lg-6 mb-1">
      <label class="control-label text-left" for="email">E-mail</label>
      <input-component classeinput="form-control" tipoinput="email" v-model="usuario.email"></input-component>
    </div>
    <div class="form-group col-md-12 col-lg-6 mb-1">
      <label class="control-label text-left" for="senha">Senha</label>
      <input-component classeinput="form-control" tipoinput="password" v-model="usuario.senha"></input-component>
    </div>
    <div class="form-group col-md-12 col-lg-6 mb-1">
      <label class="control-label text-left" for="confirmarSenha">Confirmar senha</label>
      <input-component classeinput="form-control" tipoinput="password" v-model="usuario.confirmarSenha"></input-component>
    </div>
    <div class="form-group col-md-12 col-lg-12 text-center">
      <button @click.prevent="register" class="btn btn-default">Cadastrar</button>
    </div>
    <div class="form-group col-md-12 col-lg-12 text-center">
      <p>Já possui conta?<router-link to="/login" class="link"><strong> Acesse</strong></router-link></p>
    </div>
  </form>
</template>

<script>
  import InputComponent from '../shared/InputComponent.vue'
  export default {
    name: 'register-form-component',
    components: {
      InputComponent
    },
    data () {
      return {
        usuario: { nome: null, email: null, senha: null, confirmarSenha: null }
      }
    },
    methods: {
      validEmail: function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      },
      register () {
        if (this.usuario.nome && this.validEmail(this.usuario.email) && this.usuario.senha &&
        this.usuario.confirmarSenha && (this.usuario.senha == this.usuario.confirmarSenha)) {
          alert('Cadastrado com sucesso')
          this.$router.push('/login') // redireciona o usuário pra página principal
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
