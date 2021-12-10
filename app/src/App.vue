<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <ul>
      <li v-for="item of lista" :key="item.id">
      {{ item.nome }}: {{ item.id }}
      </li>
    </ul>
  </div>
</template>

<script>
export default ({
  name: 'App',
  data() {
    return {
      lista: []
    }
  },
  created(){
    this.getData();
  },
  methods: {
    async getData(){
      const res = await fetch('http://127.0.0.1:8000/');
      const data = await res.json();
      this.lista = data;
    }
  }
})

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
