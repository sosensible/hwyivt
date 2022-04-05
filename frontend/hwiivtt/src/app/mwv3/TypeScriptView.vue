<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
<div>
    <h1>TypeScript</h1>
    <h2>Code Language</h2>

    <img src="../../assets/typescriptfeature.png" style="height: 120px;">

    <h3>Virtues of TypeScript</h3>

    <ul>
        <li>Works Better with IDE</li>
        <li>More hints for coder</li>
        <li>Converts to JavaScript</li>
        <li>Tooling beyond the IDE</li>
    </ul>

    <h3>Cage Fight</h3>

    <img src="../../assets/fight.png" height="400px">

    <hr>
    <router-link to="/mwv3/vite">Node development (prev)</router-link> |
    <router-link to="/mwv3/">Modernize Main Page</router-link>
    | <router-link to="/mwv3/compose">Vue Component Scripting (next)</router-link>
</div>
</template>
