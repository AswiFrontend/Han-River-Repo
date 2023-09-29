<template>
  <HomePage />
</template>

<script setup>
import { onMounted } from "vue";
import HomePage from "./components/HomePage.vue";
import { useProductsStore } from "./store/index";
const store = useProductsStore();
onMounted(() => store.getProducts());
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
}
a {
  text-decoration: none;
}
.router-link-active,
.router-link-exact-active {
  color: #f62 !important;
}
</style>
