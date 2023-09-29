<template>
  <main class="home">
    <HeaderSection />
    <router-view></router-view>
  </main>
</template>

<script setup>
import HeaderSection from "./HeaderSection.vue";
</script>

<style>
@import "../styles/home-page.scss";
</style>