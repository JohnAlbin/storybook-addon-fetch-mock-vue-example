<script setup>
import { Suspense } from "vue"
import { RouterLink } from 'vue-router'
import Luke from './components/Luke.vue'
import NoFetch from './components/NoFetch.vue'
</script>

<template>
  <div class="wrapper">
    <h1>hello</h1>

    <Suspense>
      <Luke />
    </Suspense>
    <NoFetch />

    <nav>
      <RouterLink to="/about">About</RouterLink>
    </nav>

    <RouterView />
  </div>
</template>

<style>
body {
  font-family: arial, sans-serif;
  background: rebeccapurple;
}
</style>

<style scoped>
.wrapper {
  max-width: 920px;
  margin: 20px auto;
  padding: 100px 40px;
  background-color: white;
}
</style>
