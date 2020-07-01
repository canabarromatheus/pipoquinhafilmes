<template>
  <div class="home">
    <div class="contentBox">
      <h1 id="h1principal">Pipoquinha Filmes - Locadora Online</h1>
      <vs-row w=12>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="4">
          <h2>Pipoca, edredom e play!</h2>
          <p>Filmes unem as pessoas!
            <br> Seja abraçados assistindo um filme romântico,
            <br> gargalhando juntos de uma cena muito tosca ou apenas rindo atoa de uma piada muito boa <br>
            <br> A verdade é que nós amamos isso, e por isso decidimos começar a locadora <strong>Pipoquinha Filmes!</strong>
          </p>
          <h2>Como surgiu?</h2>
          <p>
            Tudo se iniciou com várias sessões de filmes na madrugada...<br>
            <br>Nós sempre avaliavamos todos os detalhes do filme e assim queriamos mostra-los para os outros, que dessem uma chance de conhecerem uma experiencia dessa obra.
          </p>
        </vs-col>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="8">
          <img id="imagemPrincipal" src="../assets/pipoquinha.png" alt="">
        </vs-col>
      </vs-row>
    </div>

    <div class="contentBox">
      <vs-row w="12">
        <vs-col off-set="1" vs-type="flex" vs-justify="center" vs-align="center" w="10">
        </vs-col>
      </vs-row>
    </div>
  </div>
</template>

<script>


export default {
  name: 'Home',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  font-family: 'ABeeZee';
  color: #fafafa;
  margin-top: 100px;
  margin-left: 40px;
  margin-right: 40px;
}
#imagemPrincipal {
  width: 500px;
  height: 500px;
  margin-right: -90px;
}
h2 {
  text-align: left;
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
p {
  text-align: left;
}
</style>
