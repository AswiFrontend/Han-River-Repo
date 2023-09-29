<template>
  <main class="single-product-page">
    <section>
      <button @click="backToProducts">BACK TO PRODUCTS</button>
      <aside>
        <img
          v-for="img in product?.images"
          :src="img"
          alt="image"
          :key="img"
          @mouseover="changePreview(img)"
        />
      </aside>
      <img :src="preview" alt="" />
    </section>
    <aside>
      <h3>{{ product?.brand }}</h3>
      <h1>{{ product?.title }}</h1>
      <p>{{ product?.description }}</p>
      <h2>${{ product?.price }}</h2>
      <button>Buy Now</button>
    </aside>
  </main>
</template>

<script setup>
import { ref, onBeforeMount } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useProductsStore } from "@/store";
const store = useProductsStore();
const route = useRoute();
const router = useRouter();
const product = ref(null);
const preview = ref("");
const changePreview = (src) => {
  preview.value = src;
};
const getProduct = async () => {
  let findProduct = store.products?.find((e) => e.id == route.params.id);
  if (findProduct) {
    product.value = findProduct;
    preview.value = findProduct.images[3];
  } else {
    if (!store.products?.length) {
      await store.getProducts();
      getProduct();
    } else {
      router.push("/error");
    }
  }
};
onBeforeMount(() => {
  getProduct();
});
const backToProducts = () => {
  router.push("/products");
};
</script>

<style scoped>
@import "../styles/single-product-page.scss";
</style>