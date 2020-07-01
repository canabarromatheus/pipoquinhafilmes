<template>
  <div id="registerMovie">
    <div class="box">
      <h1>Adicionar Filme</h1>
      <form @submit.prevent="save">
        <vs-row w="12">
          <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="6">
            <vs-input class="inputsConfig" text-white border color="#f48fb1" type="text" label-placeholder="Nome" v-model="movie.name">
              <template #icon>
                <i class='bx bx-user'></i>
              </template>
            </vs-input>
          </vs-col>
          <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="6">
            <vs-input class="inputsConfig" text-white border color="#f48fb1" type="text" label-placeholder="Ano" v-model="movie.launch">
              <template #icon>
                <i class='bx bx-calendar' ></i>
              </template>
            </vs-input>
          </vs-col>
        </vs-row>

        <vs-row w="12">
          <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="6">
            <vs-input class="inputsConfig" text-white border color="#f48fb1" type="text" label-placeholder="Diretor" v-model="movie.director">
              <template #icon>
                <i class='bx bx-movie'></i>
              </template>
            </vs-input>
          </vs-col>
          <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="6">
            <vs-input class="inputsConfig" text-white border color="#f48fb1" type="text" label-placeholder="Categoria" v-model="movie.category">
              <template #icon>
                <i class='bx bx-folder-plus' ></i>
              </template>
            </vs-input>
          </vs-col>
        </vs-row>

        <vs-row>
          <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="12">
            <vs-input class="inputsConfig" text-white icon-after border color="#f48fb1" type="text" label-placeholder="Sinopse" v-model="movie.synopsis">
              <template #icon>
                <i class='bx bxs-book-open'></i>
              </template>
            </vs-input>
          </vs-col>
        </vs-row>

        <vs-row>
          <vs-col offset="4" vs-type="flex" vs-justify="center" vs-align="center" w="4">
            <vs-button color="#f48fb1" text-white relief block @click="openNotification('bottom-center', 'dark')">
              <i class="bx bxs-paper-plane"></i> Enviar
            </vs-button>
          </vs-col>
        </vs-row>
      </form>
    </div>
  </div>
</template>

<script>
import MovieServices from '../services/movieservices'

export default {
  data() {
    return {
        movie: {
          id: '',
          name: '',
          launch: '',
          director: '',
          category: '',
          synopsis: ''
        },
        movies: []
    }
  },
  name: 'RegisterMovie',
  props: {
  },
  mounted() {
    this.listMovies();
  },
  methods: {
    openNotification(position = null, color) {
      this.$vs.notification(
        {
          color,
          position,
          title: 'Status',
          text: `Filme foi adicionado com sucesso!`
        }
      )
    },
    save() {
      MovieServices.save(this.movie).then(response => {this.listMovies(); this.movie = {}; return response;});
      event.target.reset();
    }
  },
  dataButton:() => ({
    active: 0
    })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#registerMovie {
  color: white;
  margin-top: 100px;
  margin-left: 40px;
  margin-right: 40px;
}
.inputsConfig {
  margin: 20px;
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
