<template>
  <ul>
    <li v-for="item of lista" :key="item.id">
    {{ item.nome }}: {{ item.id }}
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

</style>