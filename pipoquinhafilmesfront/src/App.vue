<template>
  <div id="app">
    <div class="center">
      <vs-navbar fixed text-white color="#000000" not-line center-collapsed v-model="active">
        <template #left>
          <a @click.prevent="openLoading">
            <vs-navbar-item to="/home" :active="active == 'home'" id="home">
                <img src="./assets/pipoquinha.png" width="30px" height="30px">
            </vs-navbar-item></a>
            <a @click.prevent="openLoading">
              <vs-navbar-item to="/movie" :active="active == 'movie'" id="movie">
                Filmes
              </vs-navbar-item></a>

            <a @click.prevent="openLoading">
              <vs-navbar-item to="/client"  :active="active == 'client'" id="client">
                Clientes
              </vs-navbar-item></a>
            <a @click.prevent="openLoading">
              <vs-navbar-item to="/about" :active="active == 'about'" id="about">
                Sobre
              </vs-navbar-item></a>
        </template>

        <template #right>

          <vs-navbar-item :active="active == 'registerMovie'" id="registerMovie">
            <vs-button to="/registerMovie" @click="openLoading" block color="#f48fb1">Cadastrar Filmes</vs-button>
          </vs-navbar-item>

          <vs-navbar-item :active="active == 'registerClient'" id="registerClient">
            <vs-button to="/registerClient" @click="openLoading" block color="#f48fb1">Cadastre-se</vs-button>
          </vs-navbar-item>

          <!-- <a href="/registerMovie">
            <vs-button relief color="#f48fb1" >
              <vs-navbar-item :active="active == 'registerMovie'" id="registerMovie">
                Cadastrar filme
              </vs-navbar-item>
            </vs-button>
          </a> -->

            <!-- <a href="/registerClient">
              <vs-navbar-item :active="active == 'registerClient'" id="registerClient">
                Cadastrar Cliente
              </vs-navbar-item></a> -->

        </template>
      </vs-navbar>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
import ClientServices from './services/clientservices'

export default {
  data() {
    return {
      progress: 0
    }
  },
  name: 'App',
  components: {

  },
  mounted() {
    this.listClients();
  },
  methods: {
    openLoading() {

      const loading = this.$vs.loading({ opacity: 1, background: 'dark', color: '#fff176' })
      setTimeout( ()  => { loading.close(); }, 1000)
    },
    listClients() {
      ClientServices.findAll().then(response => {
        this.clients = response.data;
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'ABeeZee';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #FFFFFF;
  margin-top: 150px;
  margin-left: -8px;
}
#home {
  font-size: 20px;
}
.box{
  text-align: center;
  margin-top: 100px;
  margin-bottom: 100px;
  margin-left: 300px;
  margin-right: 300px;
  border-radius: 25px;
  border: 2px solid #161e23;
  padding: 20px;
  color: white;
}
.contentBox {
  background-color: #161e23;
  border-radius: 25px;
  border: 2px solid #161e23;
  margin-top: -50px;
  padding: 50px;

}
.contentItem {
  margin: 20px;
}
#h1principal {
  margin-top: -50px;
  margin-bottom: 60px;
}
a {
  text-decoration: none;
  color: inherit;
}
body {
  background-color: #161e23;
}
h1 {
  text-align: center;
  font-size: 30px;
  color: #fff176;
}
</style>
