<script setup lang="ts">
import { reactive } from 'vue';
import { RouterLink } from 'vue-router'

const show = reactive({
  focus: 0,
  list: ["bullet-1","bullet-2","bullet-3","bullet-4","bullet-5","bullet-6","install", "example"],
  live: [],
});

function focusCheck(item: string) {
  return show.live.includes(item);
}

function moveFocus() {
  if (show.focus < 6) {
    show.live.push(show.list[show.focus++])
  } else if (show.focus === 6) {
    show.live = show.list[show.focus++]
  } else if (show.focus === 7) {
    show.live = show.list[show.focus++]
  }
}

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
    
    <button @click="moveFocus">&gt;&gt;</button>

  </div>
    
  <ul>
    <li v-if="focusCheck('bullet-1')">Automated Test Scripts</li>
    <li v-if="focusCheck('bullet-2')">Test Suites</li>
    <li v-if="focusCheck('bullet-3')">Step Driven, recoreded states</li>
    <li v-if="focusCheck('bullet-4')">Auto rerun on test update</li>
    <li v-if="focusCheck('bullet-5')">CI Integration</li>
    <li v-if="focusCheck('bullet-6')">Component Testing in Beta</li>
  </ul>

  <pre v-if="focusCheck('install')">
    <code class="terminal" xv-if="focusCheck( 'install' )"> 
&gt; <span class="cmd">npm install cypress --save-dev</span>
    </code>
  </pre>

  <hr>
  <router-link to="/mwv3/vitest">Unit Testing (prev)</router-link> |
  <router-link to="/mwv3/">Modernize Main Page</router-link>
  | <router-link to="/mwv3/miragejs">AJAX Prototyping (next)</router-link>
</div>
</template>

<style lang="scss">
@import "../../shared/styles/code.scss";
</style>