<template>
  <main class="all-products">
    <h2 v-if="status" class="home-status">{{ status }}</h2>

    <ProductPage
      v-for="product in products"
      :key="product?.id"
      :product="product"
    />
  </main>
</template>
  
  <script setup>
import { computed } from "vue";
import ProductPage from "./ProductPage.vue";
import { useProductsStore } from "@/store";
const productStore = useProductsStore();
const products = computed(() => productStore.products);
const status = computed(() => productStore.status);
</script>
  
<style scoped>
@import "../styles/home-page.scss";
</style>