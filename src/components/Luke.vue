<script setup>
const response = await fetch('https://swapi.dev/api/people/1');
let body = false;
if (response.ok) {
  body = await response.json();
}
</script>

<template>
  <p class="purple">
    1st person in swapi.dev: {{ body ? body.name : 'Loading…' }}
  </p>
</template>

<style>
.purple {
  font-weight: bold;
  font-size: 20px;
  color: rebeccapurple;
}
</style>
