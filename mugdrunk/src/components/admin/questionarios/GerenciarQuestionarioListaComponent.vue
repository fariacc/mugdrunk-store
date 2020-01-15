<template>
  <div class="gerenciar-questionario-lista-component">
    <v-app>
      <button type="button" name="button" class="btn btn-default mx-2" @click="modalAberto = true, botaoAdicionar = true, questionarioSelecionado = novoQuestionario">
        Adicionar questionários
      </button>
      <v-data-table :headers="headers" :items="questionario" sort-by="idAvaliacaoLoja" class="elevation-1">
        <template v-slot:item.action="{ item }">
          <v-icon small class="mr-2" @click="">edit</v-icon>
        </template>
      </v-data-table>
    </v-app>
    <modal-component v-if="modalAberto" @close="modalAberto = false">
      <h3 slot="header">Adicionar questionários</h3>
      <form slot="body">
        <label class="control-label text-left" for="Descricao">Nome do questionário</label>
        <input-component classeinput="form-control" tipoinput="text"></input-component>
      </form>
      <div slot="footer" class="text-center" v-if="botaoAdicionar">
        <button type="button" name="button" class="btn btn-default mx-2" @click="inserirQuestionarios(nomeQuestionario)">
          Adicionar questionário
        </button>
      </div>

    </modal-component>
  </div>
</template>

<script>
  import InputComponent from '../../shared/InputComponent.vue'
  import ModalComponent from './ModalComponent.vue'
  export default {
    name: "gerenciar-questionario-lista-component",
    components:{
      InputComponent, ModalComponent
    },
    data(){
      return{
        headers: [
          { text: 'ID Questionário', align: 'left', sortable: false, value: 'idAvaliacaoLoja' },
          { text: 'Nome Avaliação', value: 'NomeAvaliacao' },
          { text: 'Ações', value: 'action', sortable: false }
        ],
        headersListaRespostas: [
          { text: 'Nome Avaliação', value: 'NomeAvaliacao' },
          { text: 'Cliente', value: 'Login' }
        ],
        questionario: [], modalAberto: false, botaoAdicionar: false, questionarioSelecionado: null,
        novoQuestionario: {
          "NomeAvaliacao": null
        }
      }
    },
    methods:{
      requisicaoQuestionarios(){
        this.$http.get('http://localhost:3000/questionario').then(function(response) {
          this.questionario = response.body
        })
      },
      inserirQuestionarios(questionario){
        this.$http.post('http://localhost:3000/questionario/criaQuestionario', nomeQuestionario, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(function(response) {
          alert('Questionário criado com sucesso')
          this.modalAberto = false
          this.requisicaoQuestionarios()
        })
      },
      requisicaoQuestionariosRespostas(){
        this.$http.get('http://localhost:3000/questionario/respostas').then(function(response) {
          this.questionarioRespostas = response.body
        })
      }
    },
    mounted(){
      this.requisicaoQuestionarios()
    }
  }
</script>

<style lang="scss">
  .gerenciar-questionario-lista-component{
  }
</style>
