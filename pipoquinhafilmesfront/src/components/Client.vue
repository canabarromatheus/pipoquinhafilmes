<template>
  <div class="client">
    <div class="box">
      <h1 style="margin-top: -50px;">Clientes</h1>
      <div>
        <form @submit.prevent="findById">
          <div class="expandTable">
            <vs-input v-model="client.id" border placeholder="Pesquisar ID" />
          </div>
          <div class="expandTable">
            <vs-button id="searchButton" color="#f48fb1">
              <i class='bx bx-search-alt-2'>Pesquisar</i>
            </vs-button>
          </div>
        </form>
      </div>
      <div v-show="findClient.id">
        <h2>Cliente solicitado:</h2>
        <p>Id: {{ findClient.id }}</p>
        <p>Nome: {{ findClient.name }}</p>
        <p>E-Mail: {{ findClient.email }}</p>
      </div>
      <!-- <div v-show="progressClient.id">
        <h2>Cliente alterado pela progress:</h2>
        <p>Id: {{ progressClient.id }}</p>
        <p>Nome: {{ progressClient.name }}</p>
        <p>E-Mail: {{ progressClient.email }}</p>
      </div> -->
      <table class="table">
        <thead>
            <th>Nome</th>
            <th>E-Mail</th>
            <th>Id</th>
            <th>Atualizar</th>
            <th>Excluir</th>
        </thead>
        <tbody>
          <tr v-for="(client, i) in $vs.getPage(clients, page, max)"  :key="i" :data="client">
            <td>{{ client.name }}</td>
            <td>{{ client.email }}</td>
            <td>{{ client.id }}</td>
            <td><vs-button @click="updateProgress(client)" square size="large" border warn>
              <i class='bx bxs-message-edit'></i>
            </vs-button></td>
            <td><vs-button @click="deleteClient(client)" square size="large" border danger>
              <i class='bx bx-trash' ></i>
            </vs-button></td>
            <!-- <td><vs-button @click="activeAlert = true" square size="large" border danger>
              <i class='bx bx-trash' ></i>
            </vs-button></td> -->
          </tr>
        </tbody>
      </table>
      <div id="paginationArea" v-show="clients.length > 0">
        <template>
          <vs-pagination warn v-model="page" :length="$vs.getLength(clients, max)" />
        </template>
      </div>


      <vs-dialog overflow-hidden v-model="active">
        <template #header>
          <h4 class="not-margin">
            Editar <b>Cliente</b>
          </h4>
        </template>


        <div>

          <form @submit.prevent="updateClient">
            <vs-input type="number" v-model="client.id" placeholder="id">
              <template #icon>
                <i class='bx bxs-lock'></i>
              </template>
            </vs-input>
              <vs-input type="text" v-model="client.name" placeholder="nome">
                <template #icon>
                  <i class='bx bxs-id-card'></i>
                </template>
              </vs-input>
              <vs-input type="number" v-model="client.age" placeholder="age">
                <template #icon>
                  <i class='bx bx-calendar' ></i>
                </template>
              </vs-input>
              <vs-input v-model="client.phone" placeholder="Celular">
                <template #icon>
                  <i class='bx bxs-phone' ></i>
                </template>
              </vs-input>
              <vs-input v-model="client.email" placeholder="Email">
                <template #icon>
                  <i class='bx bx-mail-send'></i>
                </template>
              </vs-input>
              <vs-input v-model="client.address" placeholder="Endereço">
                <template #icon>
                  <i class='bx bx-home'></i>
                </template>
              </vs-input>
              <vs-button block>
                Atualizar
              </vs-button>
          </form>

        </div>

    </vs-dialog>


    </div>
  </div>
</template>

<script>
import ClientServices from '../services/clientservices'

export default {
  data() {
    return {
        active: false,
        activeAlert: false,
        editActive: false,
        edit: null,
        editProp: {},
        page: 1,
        max: 3,
        client: {
          id: '',
          name: '',
          age: '',
          email: '',
          phone: '',
          address: ''
        },
        findClient: {
          id: '',
          name: '',
          age: '',
          email: '',
          phone: '',
          address: ''
        },
        clients: []
    }
  },
  name: 'Client',
  props: {
  },
  mounted() {
    this.listClients();
  },
  methods: {
    listClients() {
      ClientServices.findAll().then(response => {
        this.clients = response.data;
      })
    },
    deleteClient(client) {
      ClientServices.delete(client).then(response => {this.listClients(); return response; });
      this.$vs.notification(
        {
          color: 'danger',
          position: 'bottom-center',
          title: 'Exclusão',
          text: `Cliente foi excluído com sucesso!`
        }
      )
    },
    findById() {
      ClientServices.findById(this.client).then(response => { this.findClient = response.data; });
    },
    updateClient() {
      ClientServices.update(this.client).then(response => { this.listClients(); this.client = {}; return response; });
      this.active = false;
    },
    updateProgress(client) {
      this.active = true;
      this.client = client;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#paginationArea {
  margin: 20px;
}
#thead {
  text-align: left;
  color: #212121;
  font-weight: bold;
  border-style: none;
}
#searchButton {
  font-family: 'ABeeZee';
  font-weight: bold;
  font-size: 15px;
}
#deleteAlert {
  font-family: 'ABeeZee';
}
.table {
  margin: 30px;
}
.expandTable {
  display: inline-block;
  margin-bottom: 15px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
table {
  border-collapse: collapse;
  width: 100%;
}

th, td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

</style>
