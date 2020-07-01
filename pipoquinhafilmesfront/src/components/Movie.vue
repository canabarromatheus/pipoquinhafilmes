<template>
  <div class="movie">
    <div class="box">
      <h1 style="margin-top: -50px;">Filmes</h1>
      <div>
        <form @submit.prevent="findById">
          <div class="expandTable">
            <vs-input v-model="movie.id" border placeholder="Pesquisar ID" />
          </div>
          <div class="expandTable">
            <vs-button id="searchButton" color="#f48fb1">
              <i class='bx bx-search-alt-2'>Pesquisar</i>
            </vs-button>
          </div>
        </form>
      </div>
      <div v-show="findMovie.id">
        <h2>Filme solicitado:</h2>
        <p>Id: {{ findMovie.id }}</p>
        <p>Nome: {{ findMovie.name }}</p>
        <p>Categoria: {{ findMovie.category }}</p>
      </div>
      <table class="table" >
        <thead>
            <th>Nome</th>
            <th>Categoria</th>
            <th>Id</th>
            <th>Atualizar</th>
            <th>Excluir</th>
        </thead>
        <tbody>
          <tr v-for="(movie, i) in $vs.getPage(movies, page, max)"  :key="i" :data="movie">
            <td>{{ movie.name }}</td>
            <td>{{ movie.category }}</td>
            <td>{{ movie.id }}</td>
            <td><vs-button @click="active=!active; updateProgress(movie)" square size="large" border warn>
              <i class='bx bxs-message-edit'></i>
            </vs-button></td>
            <td><vs-button @click="deleteMovie(movie)" square size="large" border danger>
              <i class='bx bx-trash' ></i>
            </vs-button></td>
          </tr>
        </tbody>
      </table>
      <div id="paginationArea" v-show="movies.length > 0">
        <template>
          <vs-pagination warn v-model="page" :length="$vs.getLength(movies, max)" />
        </template>
      </div>
    </div>

    <vs-dialog success overflow-hidden v-model="active">

      <template #header>
        <h4 class="not-margin">
          Editar <b>Filme</b>
        </h4>
      </template>


      <div class="con-form">

        <form @submit.prevent="updateMovie">
          <vs-input type="number" v-model="movie.id" placeholder="id">
            <template #icon>
              <i class='bx bxs-lock'></i>
            </template>
          </vs-input>
            <vs-input type="text" v-model="movie.name" placeholder="nome">
              <template #icon>
                <i class='bx bx-user'></i>
              </template>
            </vs-input>
            <vs-input type="number" v-model="movie.launch" placeholder="Ano">
              <template #icon>
                <i class='bx bx-calendar' ></i>
              </template>
            </vs-input>
            <vs-input v-model="movie.director" placeholder="Diretor">
              <template #icon>
                <i class='bx bx-movie'></i>
              </template>
            </vs-input>
            <vs-input v-model="movie.category" placeholder="Categoria">
              <template #icon>
                <i class='bx bx-folder-plus' ></i>
              </template>
            </vs-input>
            <vs-input v-model="movie.synopsis" placeholder="Sinopse">
              <template #icon>
                <i class='bx bxs-book-open'></i>
              </template>
            </vs-input>
            <vs-button block>
              Atualizar
            </vs-button>
        </form>

      </div>

      <!-- <template #footer>
        <p>teste</p>
      </template> -->
  </vs-dialog>


  </div>
</template>

<script>
import MovieServices from '../services/movieservices'

export default {
  data() {
    return {
        active: false,
        editActive: false,
        edit: null,
        editProp: {},
        page: 1,
        max: 3,
        movie: {
          id: '',
          name: '',
          launch: '',
          director: '',
          category: '',
          synopsis: ''
        },
        findMovie: {
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
  name: 'Movie',
  props: {
  },
  mounted() {
    this.listMovies();
  },
  methods: {
    listMovies() {
      MovieServices.findAll().then(response => {
        this.movies = response.data;
      })
    },
    deleteMovie(movie) {
      MovieServices.delete(movie).then(response => {this.listMovies(); return response; });
      this.$vs.notification(
        {
          color: 'danger',
          position: 'bottom-center',
          title: 'Exclusão',
          text: `Filme foi excluído com sucesso!`
        }
      )
    },
    findById() {
      MovieServices.findById(this.movie).then(response => { this.findMovie = response.data; });
    },
    updateMovie() {
      MovieServices.update(this.movie).then(response => { this.listMovies(); this.movie = {}; return response; });
      this.active = false;
    },
    updateProgress(movie) {
      this.movie = movie;
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
.table {
  margin: 30px;
}
.expandTable {
  display: inline-block;
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

/* AQUI É TESTE OK? */

</style>
