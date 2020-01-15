<template>
  <div class="container email-component">
    <div class="row">
      <div class="col-md-12 col-lg-12">
        <div class="conta">
          <h2>Contate-nos atraves de Email</h2>
          <p class="font-italic text-center">Preencha os campos abaixo</p>
          <email-form-component></email-form-component>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EmailFormComponent from './EmailFormComponent.vue'
  export default {
    name: 'email-component',
    components: {
      EmailFormComponent
    }
  }
</script>

<style lang="scss">
  .email-component{
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
