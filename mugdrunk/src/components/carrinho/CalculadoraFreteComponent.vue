<template>
  <div class="calculadora-frete-component">
    <div class="form-inline px-0">
      <strong>Insira o seu CEP: </strong>
      <input-component classeinput="form-control ml-2" tipoinput="text" v-model="frete.cepDestino"></input-component>
      <button type="button" name="cepDestino" @click="calcularFrete('80230901', frete.cepDestino)" class="btn btn-default ml-2">
        Calcular frete
      </button>
    </div>
    <p class="mb-0 text-left" v-if="frete.valor != null">Valor do frete: R$ {{ frete.valor }}</p>
    <p class="text-left" v-if="frete.prazo != null">Tempo de entrega: {{ frete.prazo }} dias</p>
  </div>
</template>

<script>
  import InputComponent from '../shared/InputComponent.vue'
  export default {
    name: 'calculadora-frete-component',
    components: {
      InputComponent
    },
    data(){
      return{
        frete: {
          cepDestino: null, valor: null, prazo: null
        }
      }
    },
    methods:{
      calcularFrete(cepOrigem, cepDestino){
        // pra testar instalar esse plugin no Chrome
        // https://chrome.google.com/webstore/detail/moesif-orign-cors-changer/digfbfaphojjndkpccljibejjbppifbc?hl=en-US
        var request = {}
        let url = `http://ws.correios.com.br/calculador/CalcPrecoPrazo.aspx?nCdEmpresa=08082650&sDsSenha=564321&sCepOrigem=${cepOrigem}&sCepDestino=${cepDestino}&nVlPeso=1&nCdFormato=1&nVlComprimento=20&nVlAltura=20&nVlLargura=20&sCdMaoPropria=n&nVlValorDeclarado=0&sCdAvisoRecebimento=n&nCdServico=04510&nVlDiametro=0&StrRetorno=xml&nIndicaCalculo=3`
        this.$http.post(url, request, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
          }
        })
        .then(response => {
          var xmlObj = new DOMParser().parseFromString(response.data, 'text/xml');
          this.frete.valor = parseFloat(xmlObj.getElementsByTagName("Valor")[0].innerHTML.replace(',', '.'));
          this.frete.prazo = xmlObj.getElementsByTagName("PrazoEntrega")[0].innerHTML;
          this.$emit('mandarFrete', this.frete.valor, this.frete.cepDestino);
        })
      }
    },
    watch:{
      frete(){}
    }
  }
</script>

<style lang="css" scoped>
</style>
