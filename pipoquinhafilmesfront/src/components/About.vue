<template>
  <div class="about">
    <div class="contentBox">
      <h1 style="margin-top: -40px;">Sobre nós</h1>

      <p>Agradecemos todo o apoio que o <b>Pipoquinha filmes</b> teve, de coração!</p>

      <h2 style="padding: 30px;">desenvolvedores</h2>
      <div class="avatars">
        <div class="toLine">
          <vs-avatar square history danger size="240">
            <img src="https://avatars0.githubusercontent.com/u/66311578?s=460&u=c252918f2eecc200ad3e9cd4156dbcc0fdad1dc9&v=4" alt="">
          </vs-avatar>
          <p><b>Full-Stack Web Developer</b></p>
          <p>
            <br> Matheus Canabarro
            <br> canabarro.developer@gmail.com
          </p>
          <vs-row w="12">
            <vs-col offset="3" vs-type="flex" vs-justify="center" vs-align="center" w="4">
              <vs-button color="#263238" size="large" href="https://github.com/matheus-canabarro"><i class='bx bxl-github'></i></vs-button>
            </vs-col>
            <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="4">
              <vs-button color="linkedin" size="large" href="https://www.linkedin.com/in/matheus-canabarro-b8a5b11b1/"><i class='bx bxl-linkedin'></i></vs-button>
            </vs-col>
          </vs-row>
        </div>
        <div class="toLine">
          <vs-avatar square history color="rgb(59,222,200)" size="240">
            <img src="https://avatars2.githubusercontent.com/u/66685082?s=460&u=2303c3fc3dc38816bba06e5300ff0292fa4ab287&v=4" alt="">
          </vs-avatar>
          <p><b>Full-Stack Web Developer</b></p>
          <p>
            <br> Luis Felipe Fraga
            <br> luisfelipersx@gmail.com
          </p>
          <vs-row w="12">
            <vs-col offset="3" vs-type="flex" vs-justify="center" vs-align="center" w="4">
              <vs-button color="#263238" size="large" href="https://github.com/matheus-canabarro"><i class='bx bxl-github'></i></vs-button>
            </vs-col>
            <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="4">
              <vs-button color="linkedin" size="large" href="https://www.linkedin.com/in/luis-fraga-b707a718a/"><i class='bx bxl-linkedin'></i></vs-button>
            </vs-col>
          </vs-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.about {
  font-family: 'ABeeZee';
  color: #fafafa;
  margin-top: 60px;
  margin-left: 40px;
  margin-right: 40px;
}
.toLine {
  display: inline-block;
  margin: 30px;
}
#imagemPipoquinha {
  width: 400px;
  height: 400px;
  margin-right: -90px;
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
