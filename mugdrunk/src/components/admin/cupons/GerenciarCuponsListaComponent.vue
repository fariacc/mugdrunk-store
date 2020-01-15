<template>
  <div class="gerenciar-produtos-lista-component">
    <v-app>
      <button type="button" name="button" class="btn btn-default mx-2" @click="modalAberto = true, botaoAdicionar = true, cupomSelecionado = novoCupom">
        Adicionar cupom
      </button>
      <v-data-table :headers="headers" :items="cupons" sort-by="IdCupom" class="elevation-1">
        <template v-slot:item.action="{ item }">
          <v-icon small class="mr-2" @click="modalAberto = true, botaoAdicionar = false, cupomSelecionado = item">edit</v-icon>
        </template>
      </v-data-table>
    </v-app>
    <modal-component v-if="modalAberto" @close="modalAberto = false">
      <h3 slot="header">Gerenciar cupons</h3>
      <form slot="body">
        <label class="control-label text-left" for="Codigo">Código</label>
        <input-component classeinput="form-control" tipoinput="text" v-model="cupomSelecionado.Codigo"></input-component> 
        <label class="control-label text-left" for="Valor">Valor</label>
        <input-component classeinput="form-control" tipoinput="text" v-model="cupomSelecionado.Valor"></input-component>
        <label class="control-label text-left" for="Qtd">Quantidade</label>
        <input-component classeinput="form-control" tipoinput="text" v-model="cupomSelecionado.Qtd"></input-component>
      </form>
      <div slot="footer" class="text-center" v-if="botaoAdicionar">
        <button type="button" name="button" class="btn btn-default mx-2" @click="inserirCupom(cupomSelecionado)">
          Adicionar cupom
        </button>
      </div>
      <div slot="footer" class="text-center" v-else>
        <button type="button" name="button" class="btn btn-default mx-2" @click="alterarCupom(cupomSelecionado)">
          Alterar cupom
        </button>
        <button type="button" name="button" class="btn btn-default mx-2" @click="removerCupom(cupomSelecionado)">
          Remover cupom
        </button>
      </div>
    </modal-component>
  </div>
</template>

<script>
  import InputComponent from '../../shared/InputComponent.vue'
  import ModalComponent from '../../shared/ModalComponent.vue'
  export default {
    name: "gerenciar-cupons-lista-component",
    components:{
      InputComponent, ModalComponent
    },
    data(){
      return{
        headers: [
          { text: 'ID Cupom', align: 'left', sortable: false, value: 'IdCupom' },
          { text: 'Código', value: 'Codigo' },
          { text: 'Valor', value: 'Valor' },
          { text: 'Quantidade', value: 'Qtd' },
          { text: 'Ações', value: 'action', sortable: false }
        ],
        cupons: [], modalAberto: false, botaoAdicionar: false, cupomSelecionado: null,
        novoCupom: { 
          "Codigo": null, "Valor": null, "Qtd": null
        }
      }
    },
    methods:{
      requisicaoCupons(){
        this.$http.get('http://localhost:3000/ListarCupons').then(function(response) {
          this.cupons = response.body
        })
      },
      inserirCupom(cupom){
        this.$http.post('http://localhost:3000/InserirCupom', cupom, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(function(response) {
          alert('Cupom adicionado com sucesso')
          this.modalAberto = false
          this.requisicaoCupons()
        })
      },
      removerCupom(cupom){
        this.$http.post('http://localhost:3000/RemoverCupom', cupom, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(function(response) {
          alert("Cupom removido com sucesso")
          this.modalAberto = false
          this.requisicaoCupons()
        })
      },
      alterarCupom(cupom){
        this.$http.put('http://localhost:3000/EditarCupom', cupom).then(function(response) {
          alert("Cupom alterado com sucesso")
          this.modalAberto = false
          this.requisicaoCupons()
        })
      }
    },
    mounted(){
      this.requisicaoCupons()
    }
  }
</script>

<style lang="scss">
  .gerenciar-cupons-lista-component{
  }
</style>
