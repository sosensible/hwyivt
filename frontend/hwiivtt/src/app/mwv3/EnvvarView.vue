<script setup lang="ts">
import { RouterLink } from 'vue-router'

interface ImportMeta {
  readonly env: ImportMetaEnv
}

const envvar: ImportMeta = import.meta.env
</script>

<template>
<div>
    <h1>Environment Variables</h1>
    <h2>Environment Configuration</h2>

    <hr>
    <ul>
        <li v-for="(evar, key) in envvar">{{ key }}: {{ evar }}</li>
    </ul>

    <ul>
        <li>Environment Variables
            <ul>
                <li><a href="https://vitejs.dev/guide/env-and-mode.html#env-variables-and-modes" target="_blank">Vite</a></li>
                <li><a href="https://cli.vuejs.org/guide/mode-and-env.html" target="_blank">Vue CLI</a></li>
                <li>! in non-built Vue soltuions.</li>
            </ul>
        </li>
    </ul>

    <hr>
    <router-link to="/mwv3/volar">VSCode Vue Experience (prev)</router-link> |
    <router-link to="/mwv3/">Modernize Main Page</router-link>
    | <router-link to="/mwv3/pinia">Global Data State (next)</router-link>
</div>
</template>