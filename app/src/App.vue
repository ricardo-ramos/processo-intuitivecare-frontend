<template>
  <div id="app">
    <div class="search-container">
      <form v-on:submit="getData">
        <input name="pesquisa" placeholder="pesquisa" v-on:change="onChangePesquisa" />
        <button> Pesquisar </button>
      </form>
      <ListFoundItems :lista="lista" />
    </div>
  </div>
</template>

<script>
import ListFoundItems from "./components/ListFoundItems/ListFoundItems.vue"

export default ({
  name: "App",
  components: {
    ListFoundItems,
  },
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
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    display: flex;
    height: 100vh;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    justify-content: center;
    text-align: center;
  }

  form {
    display: flex;
    gap: 1rem;
  }

  .search-container {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    justify-content: center;
  }
</style>