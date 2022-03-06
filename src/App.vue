<template>
  <Header/>
  <Main/>
  <Buttom/>
</template>

<script>
import Header from '@/toolbar/Header.vue'
import Buttom from '@/buttom/Buttom.vue'
import Main from '@/main/Main.vue'

export default {
  name: 'App',
  data() {
    return {
      count: 4,
      editor: undefined,
    }
  },
  components: {
    Header,
    Buttom,
    Main,
  },
  mounted() {
    document.getElementById('app').style.display = 'block';
    document.getElementById('loading').style.display = 'none';
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>