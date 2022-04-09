<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
<div>
    <h1>DevTools</h1>
    <h2>Browser Dev Tools</h2>

    <a href="https://vuejs.org/guide/best-practices/production-deployment.html" target="_blank">Production vs Development</a>
    <br>
    # DevTools can be allowed in production via the <a href="https://vuejs.org/guide/best-practices/production-deployment.html" target="_blank">feature flag</a> (__VUE_PROD_DEVTOOLS__) but it is disabled by default.

    <hr>
    <router-link to="/mwv3/compose">Vue Component Scripting (prev)</router-link> |
    <router-link to="/mwv3/">Modernize Main Page</router-link>
    | <router-link to="/mwv3/volar">VSCode Vue Experience (next)</router-link>
</div>
</template>