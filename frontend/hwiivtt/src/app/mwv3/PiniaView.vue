<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
<div>
    <h1>Pinia</h1>
    <h2>Global Data State</h2>

    <hr>
    <router-link to="/mwv3/envvar">Environment Configuration (prev)</router-link> |
    <router-link to="/mwv3/">Modernize Main Page</router-link>
    | <router-link to="/mwv3/vitest">Unit Testing (next)</router-link>
</div>
</template>