<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
<div>
    <h1>ViTest</h1>
    <h2>Unit Testing</h2>

    <hr>
    <router-link to="/mwv3/pinia">Global Data State (prev)</router-link> |
    <router-link to="/mwv3/">Modernize Main Page</router-link>
    | <router-link to="/mwv3/cypress">E2E Testing (next)</router-link>
</div>
</template>