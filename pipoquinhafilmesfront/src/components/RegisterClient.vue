<template>
  <div id="registerClient">
    <div class="box">
      <h1>Informações do Cliente</h1>
        <form @submit.prevent="save"  class="none">
          <vs-row w='12'>
            <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="6">
              <vs-input class="inputsConfig" text-white border color="#f48fb1" type="text" label-placeholder="Nome" v-model="client.name">
                <template #icon>
                  <i class='bx bxs-user-circle'></i>
                </template>
              </vs-input>
            </vs-col>

            <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="6">
              <vs-input class="inputsConfig" text-white border color="#f48fb1" type="Number" label-placeholder="Idade" v-model="client.age">
                <template #icon>
                  <i class='bx bx-calendar' ></i>
                </template>
              </vs-input>
            </vs-col>

          </vs-row>

          <vs-row w='12'>
            <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="6">
              <vs-input class="inputsConfig" text-white border color="#f48fb1" type="text" v-mask="'(##)#-####-####'" label-placeholder="Celular" v-model="client.phone">
                <template #icon>
                  <i class='bx bxs-phone' ></i>
                </template>
              </vs-input>
            </vs-col>

            <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="6">
              <vs-input class="inputsConfig" text-white border color="#f48fb1" type="text" label-placeholder="E-Mail" v-model="client.email">
                <template #icon>
                  <i class='bx bx-mail-send'></i>
                </template>
              </vs-input>
            </vs-col>
          </vs-row>

          <vs-row w='12'>
            <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="12">
              <vs-input class="inputsConfig" text-white border color="#f48fb1" type="text" label-placeholder="Endereço" v-model="client.address">
                <template #icon>
                  <i class='bx bx-home'></i>
                </template>
              </vs-input>
            </vs-col>
          </vs-row>

          <vs-row>
            <vs-col offset="4" vs-type="flex" vs-justify="center" vs-align="center" w="4">
              <vs-button color="#f48fb1" @click="openNotification('bottom-center', 'dark')" relief block>
                <i class="bx bxs-paper-plane"></i> Cadastrar
              </vs-button>
            </vs-col>
          </vs-row>
      </form>
    </div>
  </div>
</template>

<script>
import ClientServices from '../services/clientservices'

export default {
  data() {
    return {
        client: {
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
  name: 'registerClient',
  props: {
  },
  mounted() {
    this.listClients();
  },
  methods: {
    openNotification(position = null, color) {
      this.$vs.notification(
        {
          color,
          position,
          title: 'Status',
          text: `Cliente foi adicionado com sucesso!`
        }
      )
    },
    save() {
      ClientServices.save(this.client).then(response => {this.listClients(); this.client = {}; return response;});
      event.target.reset();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#registerClient {
  color: white;
  margin-top: 100px;
  margin-left: 40px;
  margin-right: 40px;
}
#centralizer {
  text-align: center;
}
.inputsConfig {
  margin: 20px;
  color: white;
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
</style>
