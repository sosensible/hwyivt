<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
<div>
    <h1>Vite</h1>
    <h2>Webkit Reimagined?</h2>

    <a href="https://vitejs.dev/">
        <img class="image" src="../../assets/logo.svg" style="height: 120px;">
    </a>


    <h3>Learning the need</h3>
    <ul>
        <li>webpack</li>
        <li>Rollup</li>
        <li>Parcel</li>
    </ul>

    <h3>Seeing the benefit</h3>

    <h3>Improving the delivery</h3>
    <ul>
        <li>Instant Server Start</li>
        <li>Fast Hot Module Replacement</li>
        <li>TypesSript, JSX, CSS support and more</li>
        <li>Optimized Asset Builder</li>
        <li>Plugins Universal (Dev + build)</li>
    </ul>

    <hr>
    <router-link to="/mwv3/devstack">Dev Stack (prev)</router-link> |
    <router-link to="/mwv3/">Modernize Main Page</router-link>
    | <router-link to="/mwv3/typescript">TypeScript (next)</router-link>
</div>
</template>