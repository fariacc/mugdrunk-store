<template>
  <form class="form-row mb-0">
    <spam>Seja bem vindo {{usuario.NomeCompleto}} , responda o questionário abaixo e nos ajude a fazermos um site cada vez melhor.
</spam>
    <div class="form-group col-md-12 col-lg-12 mb-1" align-self="center">
      <label class="control-label text-left">1) Essa foi a primeira vez que visitou o site?</label>
      <input-component classeinput="form-control" tipoinput="text" v-model="questionario.questao1"></input-component>
    </div>
    <div class="form-group col-md-12 col-lg-12 mb-1" align-self="center">
      <label class="control-label text-left">2) Qual foi o principal motivo que te trouxe ao site?
      </label>
      <input-component classeinput="form-control" tipoinput="text" v-model="questionario.questao2"></input-component>
    </div>
    <div class="form-group col-md-12 col-lg-12 mb-1" align-self="center">
      <label class="control-label text-left">3) Você achou o que precisava?
      </label>
      <input-component classeinput="form-control" tipoinput="text" v-model="questionario.questao3"></input-component>
    </div>
    <div class="form-group col-md-12 col-lg-12 mb-1" align-self="center">
      <label class="control-label text-left">4) Se você não encontrou nada nem parte do que precisava, diga-nos quais informações você estava procurando.
      </label>
      <input-component classeinput="form-control" tipoinput="text" v-model="questionario.questao4"></input-component>
    </div>
    <div class="form-group col-md-12 col-lg-12 mb-1" align-self="center">
      <label class="control-label text-left">5) É fácil achar informações no site?</label>
      <input-component classeinput="form-control" tipoinput="text" v-model="questionario.questao5"></input-component>
    </div>
    <div class="form-group col-md-12 col-lg-12 mb-1" align-self="center">
      <label class="control-label text-left">6) Qual é sua impressão sobre a profissionalidade do site?</label>
      <input-component classeinput="form-control" tipoinput="text" v-model="questionario.questao6"></input-component>
    </div>
    <div class="form-group col-md-12 col-lg-12 mb-1" align-self="center">
      <label class="control-label text-left">7) Qual é sua impressão sobre a as informações do site?</label>
      <input-component classeinput="form-control" tipoinput="text" v-model="questionario.questao7"></input-component>
    </div>
    <div class="form-group col-md-12 col-lg-12 mb-1" align-self="center">
      <label class="control-label text-left">8) O site e Visualmente agradável?
      </label>
      <input-component classeinput="form-control" tipoinput="text" v-model="questionario.questao8"></input-component>
    </div>
    <div class="form-group col-md-12 col-lg-12 mb-1" align-self="center">
      <label class="control-label text-left">9) Qual é a probabilidade de você visitar o site novamente?
      </label>
      <input-component classeinput="form-control" tipoinput="text" v-model="questionario.questao9"></input-component>
    </div><div class="form-group col-md-12 col-lg-12 mb-1" align-self="center">
      <label class="control-label text-left">10) Adicione seus comentários para melhoria do site. Agradecemos as sugestões de melhoria de áreas específicas, dos recursos que você gostaria que adicion
      </label>
      <input-component classeinput="form-control" tipoinput="text" v-model="questionario.questao10"></input-component>
    </div>
    <div class="form-group col-md-12 col-lg-12 text-center">
      <button @click.prevent="repondeQuestionario" class="btn btn-default">Responder Questionário</button>
    </div>
  </form>
</template>

<script>
  import InputComponent from '../shared/InputComponent.vue'
  export default {
    name: 'questionario-component',
    components: {
      InputComponent
    },
    data(){
      return {
          questionario: { idAvaliacao: 1, idUsuario: 19, questao1: null, questao2: null, questao3: null, questao3: null, questao4: null, questao5: null , questao6: null, questao7: null, questao8: null, questao9: null, questao10: null }
      }
    },
    methods:{
      recuperaQuestoes(){
        this.$http.get('http://localhost:3000/questionario/questoes', this.questoes, {
          headers: {
             'Content-Type': 'application/json'
          }
        })
      },
      verificarUsuario(){
        let usuarioAux = sessionStorage.getItem('usuario') //pega a info de "usuario"
        if (usuarioAux){
          this.usuario = JSON.parse(usuarioAux) //this.usuario recebendo as infos de usuario em forma de objeto
        }else{
          this.$router.push('/login')
        }
      },
      repondeQuestionario () {
        if (this.questionario.questao1 && this.questionario.questao2 && this.questionario.questao3 && this.questionario.questao4 && this.questionario.questao5 && this.questionario.questao6 && this.questionario.questao7 && this.questionario.questao8 && this.questionario.questao9 && this.questionario.questao10) {
          this.$http.post('http://localhost:3000/questionario/inserirRespostaQuestionario', this.questionario, {
            headers: {
              'Content-Type': 'application/json'
            }
          })
          .then(function(response) {
            alert('Questionário com sucesso')
            this.$router.push('/') // redireciona o usuário pra página principal
          })
        }
        else {
          alert('Preencha todos os campos corretamente')
        }
      }
    },
    created(){
      this.recuperaQuestoes()
      this.verificarUsuario()
    }
  }
</script>

<style lang="scss">
</style>
