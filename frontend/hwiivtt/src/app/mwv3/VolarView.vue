<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
<div>
    <h1>Volar</h1>
    <h2>VSCode Vue experience</h2>

    <a href="https://marketplace.visualstudio.com/items?itemName=MisterJ.vue-volar-extention-pack" target="_blank">
        <img src="../../assets/Volar.png" />
    </a>
    <a href="https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar" target="_blank">
        <img height="120" src="https://johnsoncodehk.gallerycdn.vsassets.io/extensions/johnsoncodehk/volar/0.33.13/1648991939228/Microsoft.VisualStudio.Services.Icons.Default" target="_blank" />
    </a>

    <h3>Extension Pack</h3>
    <ul>
        <li><span class="ext-name">JavaScript (ES6) code snippets</span> - Code snippets for JavaScript in ES6 syntax</li>
        <li><span class="ext-name">Path Intellisense</span> - Visual Studio Code plugin that auto completes filenames</li>
        <li><span class="ext-name">Auto Close Tag</span> - Automatically add HTML/XML close tag, same as Visual Studio IDE or Sublime Text</li>
        <li><span class="ext-name">Auto Rename Tag</span> - Auto rename paired HTML/XML tag</li>
        <li><span class="ext-name">Auto Import</span> - Automatically finds, parses and provides code actions and code completion for all available imports. Works with Typescript and TSX</li>
        <li><span class="ext-name">TSLint</span> - TSLint support for Visual Studio Code</li>
        <li><span class="ext-name">Sass</span> - Indented Sass syntax Highlighting, Autocomplete & Formatter</li>
        <li><span class="ext-name">DotENV</span> - Support for dotenv file syntax</li>
        <li><span class="ext-name">SCSS Formatter</span> - A Visual Studio Code Extension to format SCSS</li>
        <li><span class="ext-name">Prettier</span> - Code formatter - Code formatter using prettier</li>
        <li><span class="ext-name">Vue 3 Support</span> - All In One - Vue 2/3 Code Syntax Highlight, Snippets, Template Generator And Code Formatters Into Visual Studio Code.</li>
        <li><span class="ext-name">Vue Language Features (Volar)</span> - Language support for Vue 3</li>
        <li><span class="ext-name">Vue VSCode Snippets</span> - Snippets that will supercharge your Vue workflow</li>
    </ul>

    <hr>
    <router-link to="/mwv3/devtools">Browser Dev Tools (prev)</router-link> |
    <router-link to="/mwv3/">Modernize Main Page</router-link>
    | <router-link to="/mwv3/envvar">Environment Configuration (next)</router-link>
</div>
</template>

<style lang="scss">
.ext-name {
    font-weight: bolder;
    color: rgb(2, 104, 2);
}
</style>