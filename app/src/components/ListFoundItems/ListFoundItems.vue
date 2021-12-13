<template>
  <ul>
    <li v-for="item of lista" :key="item.id">
      Nome: {{ item.nome }} | ID: {{ item.id }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "ListFoundItems",
  props: ["lista"]
}
</script>

<style>
  li {
    margin-top: 1.2rem;
  }
  
  ul {
    list-style: none;
    margin-top: 2rem;
  }
</style>