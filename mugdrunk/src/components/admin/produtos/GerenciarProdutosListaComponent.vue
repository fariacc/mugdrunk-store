<template>
  <div class="gerenciar-produtos-lista-component">
    <v-app>
      <button type="button" name="button" class="btn btn-default mx-2" @click="modalAberto = true, botaoAdicionar = true, canecaSelecionada = novaCaneca">
        Adicionar caneca
      </button>
      <v-data-table :headers="headers" :items="canecas" sort-by="IdProduto" class="elevation-1">
        <template v-slot:item.action="{ item }">
          <v-icon small class="mr-2" @click="modalAberto = true, botaoAdicionar = false, canecaSelecionada = item">edit</v-icon>
        </template>
      </v-data-table>
    </v-app>
    <modal-component v-if="modalAberto" @close="modalAberto = false">
      <h3 slot="header">Gerenciar produtos</h3>
      <form slot="body">
        <label class="control-label text-left" for="Descricao">Descrição</label>
        <input-component classeinput="form-control" tipoinput="text" v-model="canecaSelecionada.Descricao"></input-component> 
        <label class="control-label text-left" for="Marca">Marca</label>
        <input-component classeinput="form-control" tipoinput="text" v-model="canecaSelecionada.Marca"></input-component>
        <label class="control-label text-left" for="Preco">Preço</label>
        <input-component classeinput="form-control" tipoinput="text" v-model="canecaSelecionada.Preco"></input-component>
        <label class="control-label text-left" for="Qtd">Quantidade</label>
        <input-component classeinput="form-control" tipoinput="text" v-model="canecaSelecionada.Qtd"></input-component>
        <label class="control-label text-left" for="Cor">Cor</label>
        <input-component classeinput="form-control" tipoinput="text" v-model="canecaSelecionada.Cor"></input-component>
        <label class="control-label text-left" for="Estampa">Estampa</label>
        <input-component classeinput="form-control" tipoinput="text" v-model="canecaSelecionada.Estampa"></input-component>
      </form>
      <div slot="footer" class="text-center" v-if="botaoAdicionar">
        <button type="button" name="button" class="btn btn-default mx-2" @click="inserirCaneca(canecaSelecionada)">
          Adicionar caneca
        </button>
      </div>
      <div slot="footer" class="text-center" v-else>
        <button type="button" name="button" class="btn btn-default mx-2" @click="alterarCaneca(canecaSelecionada)">
          Alterar caneca
        </button>
        <button type="button" name="button" class="btn btn-default mx-2" @click="removerCaneca(canecaSelecionada)">
          Remover caneca
        </button>
      </div>
    </modal-component>
  </div>
</template>

<script>
  import InputComponent from '../../shared/InputComponent.vue'
  import ModalComponent from '../../shared/ModalComponent.vue'
  export default {
    name: "gerenciar-produtos-lista-component",
    components:{
      InputComponent, ModalComponent
    },
    data(){
      return{
        headers: [
          { text: 'ID Produto', align: 'left', sortable: false, value: 'IdProduto' },
          { text: 'Descrição', value: 'Descricao' },
          { text: 'Marca', value: 'Marca' },
          { text: 'Preço', value: 'Preco' },
          { text: 'Quantidade', value: 'Qtd' },
          { text: 'Cor', value: 'Cor' },
          { text: 'Estampa', value: 'Estampa' },
          { text: 'Ações', value: 'action', sortable: false }
        ],
        canecas: [], modalAberto: false, botaoAdicionar: false, canecaSelecionada: null,
        novaCaneca: { 
          "Descricao": null, "Marca": null, "Preco": null, "Qtd": null, "Cor": null, "Estampa": null
        }
      }
    },
    methods:{
      requisicaoCanecas(){
        this.$http.get('http://localhost:3000/getCanecas').then(function(response) {
          this.canecas = response.body
          console.log(this.canecas);//reponse body é um array com o resultado de todas as rows
        })
      },
      inserirCaneca(caneca){
        this.$http.post('http://localhost:3000/InserirCaneca', caneca, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(function(response) {
          alert('Caneca adicionada com sucesso')
          this.modalAberto = false
          this.requisicaoCanecas()
        })
      },
      removerCaneca(caneca){
        this.$http.post('http://localhost:3000/RemoverCaneca', caneca, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(function(response) {
          alert("Caneca removida com sucesso")
          this.modalAberto = false
          this.requisicaoCanecas()
        })
      },
      alterarCaneca(caneca){
        this.$http.put('http://localhost:3000/EditarCaneca', caneca).then(function(response) {
          alert("Caneca alterada com sucesso")
          this.modalAberto = false
          this.requisicaoCanecas()
        })
      }
    },
    mounted(){
      this.requisicaoCanecas()
    }
  }
</script>

<style lang="scss">
  .gerenciar-produtos-lista-component{
  }
</style>
