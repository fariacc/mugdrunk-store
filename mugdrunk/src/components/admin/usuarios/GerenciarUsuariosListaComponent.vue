<template>
  <div class="gerenciar-usuarios-lista-component">
    <v-app>
      <v-data-table :headers="headers" :items="usuarios" sort-by="NomeCompleto" class="elevation-1">
        <template v-slot:item.action="{ item }">
          <v-icon small class="mr-2" @click="modalAberto = true, usuarioSelecionado = item">edit</v-icon>
        </template>
      </v-data-table>
    </v-app>
    <modal-component v-if="modalAberto" @close="modalAberto = false">
      <h3 slot="header">Gerenciar usuário</h3>
      <div slot="body" class="text-center">
        <button type="button" name="button" class="btn btn-default mx-2" @click="alterarUsuario(usuarioSelecionado)">
          Ativar/Desativar usuário
        </button>
        <button type="button" name="button" class="btn btn-default mx-2" @click="removerUsuario(usuarioSelecionado)">
          Remover usuário
        </button>
      </div>
    </modal-component>
  </div>
</template>

<script>
  import ModalComponent from '../../shared/ModalComponent.vue'
  export default {
    name: "gerenciar-usuarios-lista-component",
    components:{
      ModalComponent
    },
    data(){
      return{
        headers: [
          { text: 'CPF', align: 'left', sortable: false, value: 'cpf' },
          { text: 'Nome', value: 'NomeCompleto' },
          { text: 'Endereço', value: 'EnderecoCad' },
          { text: 'E-mail', value: 'Email' },
          { text: 'Telefone', value: 'Telefone' },
          { text: 'Ativo', value: 'Ativo' },
          { text: 'Permissão', value: 'Permissao' },
          { text: 'Ações', value: 'action', sortable: false }
        ],
        usuarios: [], ativo: null, modalAberto: false, usuarioSelecionado: null
      }
    },
    methods:{
      requisicaoUsuarios(){
        this.$http.get('http://localhost:3000/ListarCadastros').then(function(response) {
          this.usuarios = response.body
        })
      },
      removerUsuario(usuario){
        this.$http.post('http://localhost:3000/RemoverCadastro', usuario, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(function(response) {
          alert("Usuário removido com sucesso")
          this.modalAberto = false
          this.requisicaoUsuarios()
        })
      },
      alterarUsuario(usuario){
        if (usuario.Ativo == "1"){
          this.ativo = 0
        }
        else{
          this.ativo = 1
        }
        var request = [
          { usuario: usuario, Ativo: this.ativo }
        ]   
        this.$http.put('http://localhost:3000/BloquearCadastro', request[0]).then(function(response) {
          alert("Usuário alterado com sucesso")
          this.modalAberto = false
          this.requisicaoUsuarios()
        })
      }
    },
    mounted(){
      this.requisicaoUsuarios()
    }
  }
</script>

<style lang="scss">
  .gerenciar-usuarios-lista-component{
  }
</style>
