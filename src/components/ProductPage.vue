
<template>
  <router-link :to="'/products/' + product.id">
    <article class="product">
      <img class="product-image" :src="product.thumbnail" />
      <h2 class="product-title">{{ product.title }}</h2>
      <span class="product-category">{{ product.category }}</span>
      <p class="product-price">${{ product.price }}</p>
    </article>
  </router-link>
</template>

<script setup>
import { defineProps } from "vue";
defineProps(["product"]);
</script>

<style  scoped>
@import "../styles/product-page.scss";
</style>
