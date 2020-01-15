<template>
  <div class="container questionario-component">
    <div class="row">
      <div class="col-md-12 col-lg-12">
        <div class="questionario">
          <h2>Questionario Avaliação da Loja</h2>
          <questionario-form-component></questionario-form-component>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import QuestionarioFormComponent from './QuestionarioFormComponent.vue'
  export default {
    name: 'questionario-component',
     components: {
       QuestionarioFormComponent
     },
  }
</script>

<style lang="scss">
  .questionario-component{
    .questionario{
      width: 100%;
      height: 100%;
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
