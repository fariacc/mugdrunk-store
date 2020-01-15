<template>
  <form class="form-row mb-0">
    <div class="form-group col-md-12 col-lg-12 mb-1">
      <label class="control-label text-left" for="cpf">CPF</label>
      <input-component classeinput="form-control"
      tipoinput="text" v-model="usuario.CPF"></input-component>
    </div>
    <div class="form-group col-md-12 col-lg-12 mb-1">
      <label class="control-label text-left" for="senha">Senha</label>
      <input-component labelinput="senha" label="Senha" classeinput="form-control"
      tipoinput="password" v-model="usuario.Senha"></input-component>
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
        usuario: { CPF: null, Senha: null }
      }
    },
    methods: {
      login () {
        if ((this.usuario.CPF.length == 11) && this.usuario.Senha) {
          this.$http.post('http://localhost:3000/login', this.usuario, {
            headers: {
              'Content-Type': 'application/json'
            }
          })
          .then(function(response) {
            if (response.body[0] != undefined){
              this.$http.post('http://localhost:3000/InserirLogAcessos', response.body[0], {
                headers: {
                  'Content-Type': 'application/json'
                }
              });
              sessionStorage.setItem('usuario', JSON.stringify(response.body[0]));
              this.$router.push('/') // redireciona o usuário pra página principal
            }
            else{
              alert("Usuário não encontrado")
            }
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
