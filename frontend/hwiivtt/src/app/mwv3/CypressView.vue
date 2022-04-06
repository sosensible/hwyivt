<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
<div>
  <div class="top-row">
    <h1>
      <a href="https://www.cypress.io/">
        <img src="../../assets/cypress-logo.webp" style="height: 80px;">
      </a>
    </h1>
    <h2>E2E Testing</h2>
  </div>

    <hr>
    <router-link to="/mwv3/vitest">Unit Testing (prev)</router-link> |
    <router-link to="/mwv3/">Modernize Main Page</router-link>
    | <router-link to="/mwv3/miragejs">AJAX Prototyping (next)</router-link>
</div>
</template>