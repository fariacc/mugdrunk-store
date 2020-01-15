<template>
  <form class="form-row mb-0">
    <div class="form-group col-md-12 col-lg-12 mb-1">
      <label class="control-label text-left" for="nome">Nome</label>
      <input-component classeinput="form-control" tipoinput="text" v-model="usuario.NomeCompleto"></input-component>
    </div>
    <div class="form-group col-md-12 col-lg-6 mb-1">
      <label class="control-label text-left" for="cpf">CPF</label>
      <input-component classeinput="form-control" tipoinput="text" v-model="usuario.CPF"></input-component>
    </div>
    <div class="form-group col-md-12 col-lg-6 mb-1">
      <label class="control-label text-left" for="tipo">Tipo de permissão</label>
      <select class="form-control" v-model="usuario.Permissao">
        <option value="admin">Admin</option>
        <option value="cliente">Cliente</option>
      </select>
    </div>
    <div class="form-group col-md-12 col-lg-6 mb-1">
      <label class="control-label text-left" for="nascimento">Nascimento</label>
      <input-component classeinput="form-control" tipoinput="date" v-model="usuario.DataNascimento"></input-component>
    </div>
    <div class="form-group col-md-12 col-lg-6 mb-1">
      <label class="control-label text-left" for="endereco">Endereço</label>
      <input-component classeinput="form-control" tipoinput="text" v-model="usuario.EnderecoCad"></input-component>
    </div>
    <div class="form-group col-md-12 col-lg-6 mb-1">
      <label class="control-label text-left" for="telefone">Telefone</label>
      <input-component classeinput="form-control" tipoinput="text" v-model="usuario.Telefone"></input-component>
    </div>
    <div class="form-group col-md-12 col-lg-6 mb-1">
      <label class="control-label text-left" for="email">E-mail</label>
      <input-component classeinput="form-control" tipoinput="email" v-model="usuario.Email"></input-component>
    </div>
    <div class="form-group col-md-12 col-lg-6 mb-1">
      <label class="control-label text-left" for="senha">Senha</label>
      <input-component classeinput="form-control" tipoinput="password" v-model="usuario.Senha"></input-component>
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
        usuario: { NomeCompleto: null, DataNascimento: null, CPF: null, EnderecoCad: null, Telefone: null, Email: null, Sexo: "F", Senha: null, Ativo: 1, Permissao: null }
      }
    },
    methods: {
      validEmail: function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      },
      register () {
        if (this.usuario.NomeCompleto && (this.usuario.CPF.length == 11) && this.usuario.DataNascimento && this.usuario.EnderecoCad && this.usuario.Permissao && this.usuario.Telefone && this.usuario.Senha && this.validEmail(this.usuario.Email)) {
          this.$http.post('http://localhost:3000/InserirCadastro', this.usuario, {
            headers: {
              'Content-Type': 'application/json'
            }
          })
          .then(function(response) {
            alert('Cadastrado com sucesso')
            this.$router.push('/login') // redireciona o usuário pra página principal
          })
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
