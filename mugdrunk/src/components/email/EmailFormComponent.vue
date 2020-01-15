<template>
  <form method="POST" action="https://formspree.io/evertonluizcoster@gmail.com">
  <fieldset>
    <input type="hidden" name="_subject" value="Novo contato!" />
    <input type="hidden" name="_next" value="https://rossener.com/contato/mensagem-enviada/" />
    <input type="hidden" name="_language" value="pt" />

    <div class="form-group col-md-12 col-lg-12 mb-1" align-self="center">
      <label class="control-label text-left">Seu nome:</label>
      <input type="text" name="nome">
    </div>
    <div class="form-group-email col-md-12 col-lg-12 mb-1" align-self="center">
      <label class="control-label text-left">Seu e-mail:</label>
        <input type="text" name="email">
    </div>
    <div class="form-group col-md-12 col-lg-12 mb-1" align-self="center">
      <label class="control-label text-left">Sua mensagem:</label>
      <textarea class="form-group-textarea" name="mensagem"></textarea>
    </div>
    <div class="form-group col-md-12 col-lg-12 text-center">
      <button class="btn btn-default">Enviar</button>
    </div>

    <!-- <button type="submit">Enviar</button> -->
  </fieldset>
</form>
</template>

<script>
  import InputComponent from '../shared/InputComponent.vue'
  export default {
    name: 'email-form-component',
    components: {
      InputComponent
    }
  }
</script>

<style lang="scss">
  .form-group-textarea{
    width: 100%;
    border-color: red;
  }
</style>
