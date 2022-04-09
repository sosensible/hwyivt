<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
<div>
  <h1>ViTest</h1>
  <h2>Unit Testing</h2>

  <h3>Unit Testing Refernces</h3>

  <ul>
    <li><a href="https://vitest.dev/guide/comparisons.html" target="_blank">Comparisons</a></li>
    <li><a href="https://vitejs.dev/" target="_blank">ViTest Docs</a></li>
    <li><a href="https://pinia.vuejs.org/cookbook/testing.html" target="_blank">Pinia Stores</a></li>
  </ul>
  

  <hr>
  <router-link to="/mwv3/pinia">Global Data State (prev)</router-link> |
  <router-link to="/mwv3/">Modernize Main Page</router-link>
  | <router-link to="/mwv3/cypress">E2E Testing (next)</router-link>
</div>
</template>