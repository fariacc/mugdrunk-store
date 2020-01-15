<template>
  <div class="gerenciar-produtos-lista-component">
    <v-app>
      <button type="button" name="button" class="btn btn-default mx-2" @click="modalAberto = true, botaoAdicionar = true, fornecedorSelecionado = novoFornecedor">
        Adicionar fornecedor
      </button>
      <v-data-table :headers="headers" :items="fornecedores" sort-by="IdFornecedor" class="elevation-1">
        <template v-slot:item.action="{ item }">
          <v-icon small class="mr-2" @click="modalAberto = true, botaoAdicionar = false, fornecedorSelecionado = item">edit</v-icon>
        </template>
      </v-data-table>
    </v-app>
    <modal-component v-if="modalAberto" @close="modalAberto = false">
      <h3 slot="header">Gerenciar fornecedores</h3>
      <form slot="body">
        <label class="control-label text-left" for="NomeSocial">Nome Social</label>
        <input-component classeinput="form-control" tipoinput="text" v-model="fornecedorSelecionado.NomeSocial"></input-component>
        <label class="control-label text-left" for="CNPJ">CNPJ</label>
        <input-component classeinput="form-control" tipoinput="text" v-model="fornecedorSelecionado.CNPJ"></input-component>
        <label class="control-label text-left" for="EnderecoCad">Endereço Cadastrado</label>
        <input-component classeinput="form-control" tipoinput="text" v-model="fornecedorSelecionado.EnderecoCad"></input-component>
        <label class="control-label text-left" for="Telefone">Tel</label>
        <input-component classeinput="form-control" tipoinput="text" v-model="fornecedorSelecionado.Telefone"></input-component>
        <label class="control-label text-left" for="Email">E-mail</label>
        <input-component classeinput="form-control" tipoinput="text" v-model="fornecedorSelecionado.Email"></input-component>
        <label class="control-label text-left" for="Ativo">Ativo</label>
        <select class="form-control" name="Ativo" v-model="fornecedorSelecionado.Ativo">
        <option value="" disabled selected>Escolha ativado ou desativado</option>
        <option value="1">Ativo</option>
        <option value="0">Desativado</option>
        </select>
      </form>
      <div slot="footer" class="text-center" v-if="botaoAdicionar">
        <button type="button" name="button" class="btn btn-default mx-2" @click="inserirFornecedor(fornecedorSelecionado)">
          Adicionar fornecedor
        </button>
      </div>
      <div slot="footer" class="text-center" v-else>
        <button type="button" name="button" class="btn btn-default mx-2" @click="alterarfornecedor(fornecedorSelecionado)">
          Alterar fornecedor
        </button>
        <button type="button" name="button" class="btn btn-default mx-2" @click="removerFornecedor(fornecedorSelecionado)">
          Remover fornecedor
        </button>
      </div>
    </modal-component>
  </div>
</template>

<script>
  import InputComponent from '../../shared/InputComponent.vue'
  import ModalComponent from '../../shared/ModalComponent.vue'
  export default {
    name: "gerenciar-fornecedor-lista-component",
    components:{
      InputComponent, ModalComponent
    },
    data(){
      return{
        headers: [
          { text: 'ID Fornecedor', align: 'left', sortable: false, value: 'IdFornecedor' },
          { text: 'Nome Social', value: 'NomeSocial' },
          { text: 'CNPJ', value: 'CNPJ' },
          { text: 'Endereco Cadastro', value: 'EnderecoCad' },
          { text: 'Telefone', value: 'Telefone' },
          { text: 'E-mail', value: 'Email' },
          { text: 'Ativo', value: 'Ativo' },
          { text: 'Ações', value: 'action', sortable: false }
        ],
        fornecedores: [], modalAberto: false, botaoAdicionar: false, fornecedorSelecionado: null,
        novoFornecedor: {
          "NomeSocial": null, "CNPJ": null, "EnderecoCad": null, "Telefone": null, "Email": null, "Ativo": null
        }
      }
    },
    methods:{
      requisicaoFornecedor(){
        this.$http.get('http://localhost:3000/ListarFornecedores').then(function(response) {
          this.fornecedores = response.body
        })
      },
      inserirFornecedor(fornecedores){
        this.$http.post('http://localhost:3000/InserirFornecedor', fornecedores, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(function(response) {
          alert('Fornecedor adicionado com sucesso')
          this.modalAberto = false
          this.requisicaoFornecedor()
        })
      },
      removerFornecedor(fornecedores){
        this.$http.post('http://localhost:3000/RemoverFornecedor', fornecedores, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(function(response) {
          console.log(response.body)
          alert("Fornecedor removido com sucesso")
          this.modalAberto = false
          this.requisicaoFornecedor()
        })
      },
      alterarfornecedor(fornecedores){
        this.$http.put('http://localhost:3000/EditarFornecedor', fornecedores).then(function(response) {
          alert("Fornecedor alterado com sucesso")
          this.modalAberto = false
          this.requisicaoFornecedor()
        })
      },
      bloquearFornecedor(fornecedor){
        if (fornecedor.Ativo == "1"){
          this.Ativo = 0
        }
        else{
          this.Ativo = 1
        }
        var request = [
          { fornecedor: fornecedor, Ativo: this.Ativo }
        ]
        this.$http.put('http://localhost:3000/BloquearFornecedor', request[0]).then(function(response) {
          alert("Fornecedor alterado com sucesso")
          this.modalAberto = false
          this.requisicaoFornecedor()
        })
      }
    },
    mounted(){
      this.requisicaoFornecedor()
    }
  }
</script>

<style lang="scss">
  .gerenciar-fornecedores-lista-component{
  }
</style>
