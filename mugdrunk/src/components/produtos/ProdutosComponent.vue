<template>
  <div class="container produtos-component">
    <div class="row">
      <filtro-canecas-component @update:range="range = $event"></filtro-canecas-component>
      <caneca-component @update:items="$emit('update:items', $event)" :canecas="canecas" :range="range"></caneca-component>
    </div>
  </div>
</template>

<script>
  import FiltroCanecasComponent from './FiltroCanecasComponent.vue'
  import CanecaComponent from './CanecaComponent.vue'

  export default {
    name: "produtos-component",
    components: {
      FiltroCanecasComponent, CanecaComponent
    },
    data(){
      return{
        range: [], canecas: []
      }
    },
    methods:{
      verificarUsuario(){
        let usuarioAux = sessionStorage.getItem('usuario') //pega a info de "usuario"
        if (usuarioAux){
          this.usuario = JSON.parse(usuarioAux) //this.usuario recebendo as infos de usuario em forma de objeto
        }
      },
      requisicaoCanecas(){
        this.$http.get('http://localhost:3000/getCanecasPromo').then(function(response) {
          this.canecas = response.body
        })
      }
    },
    created(){
      this.verificarUsuario()
      this.requisicaoCanecas()
    }
  }
</script>

<style lang="scss">
</style>
