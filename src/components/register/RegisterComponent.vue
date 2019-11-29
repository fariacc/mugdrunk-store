<template>
  <div class="container register-component">
    <div class="row">
      <div class="col-md-12 col-lg-12">
        <div class="conta">
          <h2>Faça o seu cadastro</h2>
          <p class="font-italic text-center">Registrar com a sua conta do Facebook</p>
          <div class="text-center">
            <facebook-autenticacao class="social-net"></facebook-autenticacao>
            <p class="font-italic text-center">Ou preencha os campos abaixo</p>
          </div>
          <register-form-component></register-form-component>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FacebookAutenticacao from '../shared/FacebookAutenticacao.vue'
import RegisterFormComponent from './RegisterFormComponent.vue'
  export default {
    name: 'register-component',
    components: {
      FacebookAutenticacao, RegisterFormComponent
    },
    methods:{
      verificarUsuario(){
        let usuarioAux = sessionStorage.getItem('usuario') //pega a info de "usuario"
        if (usuarioAux){
          this.$router.push('/')
        }
        else{
          this.$router.push('/register')
        }
      }
    },
    created(){
      this.verificarUsuario()
    }
  }
</script>

<style lang="scss">
  .register-component{
    .conta{
      width: 50%;
      height: 50%;
      margin: auto;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      h2 {
        color: #41698E;
        font-weight: 900;
        text-align: center;
      }
    }
  }
</style>
