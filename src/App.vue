<template>
  <v-app>
    <Header></Header>
    <v-main class="app-main">
      <router-view/>
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
*{
  box-sizing: border-box;
}
body{
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
.app-main{
  position:relative;
  margin-top: 50px;
}

</style>
