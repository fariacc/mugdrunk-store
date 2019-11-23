<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 col-lg-12">
        <div class="conta">
          <h2>Entre na sua conta</h2>
          <p class="font-italic text-center">Acesse com a sua conta do Facebook</p>
          <div class="text-center">
            <facebook-login class="social-net"></facebook-login>
            <p class="font-italic text-center">Ou preencha os campos abaixo</p>
          </div>
          <login-form-component></login-form-component>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import FacebookLogin from './FacebookLogin.vue'
  import LoginFormComponent from './LoginFormComponent.vue'
  export default {
    name: 'login-component',
    components: {
      FacebookLogin, LoginFormComponent
    },
    data(){
      return{
        usuarioVerificado: null
      }
    },
    methods:{
      verificarUsuario(){
        let usuarioAux = sessionStorage.getItem('usuario') //pega a info de "usuario"
        if (usuarioAux){
          this.$router.push('/')
          clearInterval(this.usuarioVerificado)
        }
        else{
          this.$router.push('/login')
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
  .conta{
    width: 50%;
    height: 70%;
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
</style>
