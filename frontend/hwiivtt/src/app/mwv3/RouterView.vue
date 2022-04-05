<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
<div>
    <h1>Router</h1>
    <h2>Router Smart</h2>
    <div class="focus-point">
        <h3>1: install</h3>
        <pre>
            <code class="terminal">
&gt; <span class="cmd">npm install vue-router@4</span>
            </code>
        </pre>
    </div>
    <div class="focus-point">
        <h3>2: router code</h3>
        <p>
            <ul>
                <li>/src/router/index.ts</li>
                <li>/src/app/mwv3/RouterView.vue</li>
                <li>
                    /src/App.vue<br>
                </li>
            </ul>
            
        </p>
    </div>
    <a href="https://router.vuejs.org" target="_blank">Vue Router Site</a>
    <hr>
    <router-link to="/mwv3/">Modernize Main Page</router-link>
    | <router-link to="/mwv3/devstack">DevStack (next)</router-link>
</div>
</template>
