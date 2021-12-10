<template>
  <div id="app">
    <ul>
      <li v-for="item of lista" :key="item.id">
      {{ item.nome }}: {{ item.id }}
      </li>
    </ul>
    <form v-on:submit="getData">
      <input name="pesquisa" placeholder="pesquisa" v-on:change="onChangePesquisa" />
      <button> Pesquisar </button>
    </form>
  </div>
</template>

<script>
export default ({
  name: 'App',
  data() {
    return {
      lista: [],
      pesquisa: ""
    }
  },
  methods: {
    async getData(e) {
      e.preventDefault()
      const res = await fetch(`http://127.0.0.1:8000/?pesquisa=${this.pesquisa}`);
      const data = await res.json();
      this.lista = data;
    },
    onChangePesquisa(e) {
      this.pesquisa = e.target.value
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