<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
<div>
    <h1>Router</h1>
    <h2>Router Smart</h2>
    <div class="focus-point">
        <h3>1: install</h3>
        <p class="cmd">
            &gt; npm install vue-router@4
        </p>
        <a href="https://vuejs.org/guide/built-ins/transition.html" target="_blank">Transition Docs</a>
    </div>
    <div class="focus-point">
        <h3>2: router code</h3>
        <p>
            <ul>
                <li>/src/router/index.ts</li>
                <li>/src/app/mwv3/RouterView.vue</li>
                <li>
                    /src/App.vue<br>
                    <a href="https://vuejs.org/guide/built-ins/transition.html" target="_blank">Transition Docs</a>
                </li>
            </ul>
            
        </p>
    </div>
    <hr>
    <p>
    <a href="https://router.vuejs.org" target="_blank">Vue Router Site</a>
    </p>
    <router-link to="/mwv3/">Modernize Main Page</router-link>
</div>
</template>

<style>
.cmd {
    margin: 10px;
    padding: 10px;
    border-radius: 5px;
    background-color: black;
    color: yellow;
}
</style>