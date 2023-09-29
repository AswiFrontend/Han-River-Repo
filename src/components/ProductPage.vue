<!-- 
{
    "id": 1,
    "title": "iPhone 9",
    "description": "An apple mobile which is nothing like apple",
    "price": 549,
    "discountPercentage": 12.96,
    "rating": 4.69,
    "stock": 94,
    "brand": "Apple",
    "category": "smartphones",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "images": [
        "https://i.dummyjson.com/data/products/1/1.jpg",
        "https://i.dummyjson.com/data/products/1/2.jpg",
        "https://i.dummyjson.com/data/products/1/3.jpg",
        "https://i.dummyjson.com/data/products/1/4.jpg",
        "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ]
} -->


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