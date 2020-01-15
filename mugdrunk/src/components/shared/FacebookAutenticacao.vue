<template lang="html">
  <fb-signin-button class="facebookBtn"
    :params="fbSignInParams"
    @success="onSignInSuccess"
    @error="onSignInError">
    <i class="fab fa-facebook-f"></i>
  </fb-signin-button>
</template>

<script>
  export default {
    name: 'facebook-autenticacao',
    data () {
      return {
        fbSignInParams: {
          scope: 'email', return_scopes: true
        }
      }
    },
    methods: {
      onSignInSuccess (response) {
        if (response.status === "connected") {
          FB.api('/me?fields=email,name,id', function(usuario) {
            let profile = {
              "NomeCompleto":usuario.name,
              "Email":usuario.email,
              "facebookId":usuario.id
            }
            sessionStorage.setItem('usuario', JSON.stringify(profile))
          })
          if (this.$route.path == '/register'){
            this.$router.push('/')
          }
        }
      },
      onSignInError (error) {
        alert('A autenticação pelo Facebook falhou')
      }
    }
  }
</script>

<style lang="scss">
  .social-net{ /* global button class */
    position: relative;
    cursor: pointer;
    width: 6.5vh;
    height: 6.5vh;
    border: none;
    box-shadow: 0 2px 2px #999;
    color: #fff;
    font-size: 3.55vh;
    border-radius: 25px;
    margin-bottom: 1vh;
    margin-left: 0.5vw;
    margin-right: 0.5vw;
  }
  .facebookBtn{
    background: #4060A5;
    display: inline-block;
    padding: 4px 8px;
    border-radius: 20px;
    &:hover{
      color: #4060A5!important;
      background: #fff;
      // border: 1.5px solid #4060A5 !important;
    }
  }
</style>
