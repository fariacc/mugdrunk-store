<template>
  <div class="container login-component">
    <div class="row">
      <div class="col-md-12 col-lg-12">
        <div class="conta">
          <h2>Entre na sua conta</h2>
          <p class="font-italic text-center">Acesse com a sua conta do Facebook</p>
          <div class="text-center">
            <facebook-autenticacao class="social-net"></facebook-autenticacao>
            <p class="font-italic text-center">Ou preencha os campos abaixo</p>
          </div>
          <login-form-component></login-form-component>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import FacebookAutenticacao from '../shared/FacebookAutenticacao.vue'
  import LoginFormComponent from './LoginFormComponent.vue'
  export default {
    name: 'login-component',
    components: {
      FacebookAutenticacao, LoginFormComponent
    },
    data(){
      return{
        usuarioVerificado: null
      }
    },
    methods:{
      verificarUsuario(){
        if (this.$route.path == '/login') {
          let usuarioAux = sessionStorage.getItem('usuario') //pega a info de "usuario"
          if (usuarioAux){
            this.$router.push('/')
            clearInterval(this.usuarioVerificado)
          }
          else{
            this.$router.push('/login')
          }
        }
      }
    },
    created(){
      this.verificarUsuario()
    },
    mounted(){
      this.usuarioVerificado = setInterval(function(){
        this.verificarUsuario()
      }.bind(this), 3000)
    }
  }
</script>

<style lang="scss">
  .login-component{
    .conta{
      width: 40%;
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
