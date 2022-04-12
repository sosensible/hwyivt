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
  <h1>MirageJS</h1>
  <h2>AJAX Prototyping</h2>
    
  <button @click="moveFocus">&gt;&gt;</button>
    
  <ul>
    <li v-if="focusCheck('bullet-1')">Mock Virtual API</li>
    <li v-if="focusCheck('bullet-2')">Interactive AJAX</li>
    <li v-if="focusCheck('bullet-3')">Interactive Data</li>
    <li v-if="focusCheck('bullet-4')">Seed start state</li>
    <li v-if="focusCheck('bullet-5')">CI Integration</li>
    <li v-if="focusCheck('bullet-6')">E2E test ready</li>
  </ul>

  <pre v-if="focusCheck('install')">
    <code class="terminal" xv-if="focusCheck( 'install' )"> 
&gt; <span class="cmd">npm install --save-dev miragejs</span>
    </code>
  </pre>

  <router-link to="/mwv3/mockapi">Mock API Example</router-link>

  <hr>
  <router-link to="/mwv3/cypress">E2E Testing (prev)</router-link> |
  <router-link to="/mwv3/">Modernize Main Page</router-link>
  | <router-link to="/mwv3/localstore">Beyond Cookies (next)</router-link>
</div>
</template>