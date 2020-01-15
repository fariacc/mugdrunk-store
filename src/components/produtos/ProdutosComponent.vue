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
        range: [],
        canecas: [
          {
            nome: "Nome A", alt: "Caneca A", preco: 39.90, quantidade: 0,
            src: require("../../assets/images/caneca_caveira.jpg"),
          },
          {
            nome: "Nome B", alt: "Caneca B", preco: 35.90, quantidade: 0,
            src: require("../../assets/images/caneca_caveira.jpg")
          },
          {
            nome: "Nome C", alt: "Caneca C", preco: 31.90, quantidade: 0,
            src: require("../../assets/images/caneca_caveira.jpg")
          },
          {
            nome: "Nome D", alt: "Caneca D", preco: 29.90, quantidade: 0,
            src: require("../../assets/images/caneca_caveira.jpg")
          },
          {
            nome: "Nome E", alt: "Caneca E", preco: 5.90, quantidade: 0,
            src: require("../../assets/images/caneca_caveira.jpg")
          },
          {
            nome: "Nome F", alt: "Caneca F", preco: 45.90, quantidade: 0,
            src: require("../../assets/images/caneca_caveira.jpg")
          },
          {
            nome: "Nome G", alt: "Caneca G", preco: 19.90, quantidade: 0,
            src: require("../../assets/images/caneca_caveira.jpg")
          },
          {
            nome: "Nome H", alt: "Caneca H", preco: 15.90, quantidade: 0,
            src: require("../../assets/images/caneca_caveira.jpg")
          },
          {
            nome: "Nome I", alt: "Caneca I", preco: 39.90, quantidade: 0,
            src: require("../../assets/images/caneca_caveira.jpg")
          },
          {
            nome: "Nome J", alt: "Caneca J", preco: 29.90, quantidade: 0,
            src: require("../../assets/images/caneca_caveira.jpg")
          },
          {
            nome: "Nome K", alt: "Caneca K", preco: 35.90, quantidade: 0,
            src: require("../../assets/images/caneca_caveira.jpg")
          },
          {
            nome: "Nome L", alt: "Caneca L", preco: 35.90, quantidade: 0,
            src: require("../../assets/images/caneca_caveira.jpg")
          }
        ]
      }
    }
  }
</script>

<style lang="scss">
</style>
