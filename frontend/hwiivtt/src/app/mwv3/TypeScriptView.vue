<script setup lang="ts">
import { reactive } from 'vue'
import { RouterLink } from 'vue-router'

const show = reactive({
    focus: 0,
    list: ['bullet-1','bullet-2','bullet-3','bullet-4','fight'],
    live: [],
})

function focusCheck( item: string ) {
    return show.live.includes( item );
}

function moveFocus() {
  if (show.focus < 4) {
    show.live.push( show.list[show.focus++] )
  } else if (show.focus === 4) {
    show.live = show.list[show.focus++]
  }
}
</script>

<template>
<div>
  <div class="top-row">
    <div class="left-split">
        <h1>TypeScript</h1>
        <h2>Code Language</h2>
    </div>
    <div class="right-split">
      <a href="https://www.typescriptlang.org/">
        <img src="../../assets/typescriptfeature.png" style="height: 120px;">
      </a>
    </div>
  </div>

  <h3>Virtues of TypeScript</h3>
  
  <button @click="moveFocus">&gt;&gt;</button>

  <ul>
    <li v-if="focusCheck( 'bullet-1' )">Works Better with IDE</li>
    <li v-if="focusCheck( 'bullet-2' )">More hints for coder</li>
    <li v-if="focusCheck( 'bullet-3' )">Converts to JavaScript</li>
    <li v-if="focusCheck( 'bullet-4' )">Tooling beyond the IDE</li>
  </ul>

  <div v-if="focusCheck( 'fight' )">
    <h3>Cage Fight</h3>

    <img class="fight" src="../../assets/fight.png" height="400px" xstyle="float:right; margin-right: 120px;">
  </div>
  
  <hr>
  <router-link to="/mwv3/vite">Node development (prev)</router-link> |
  <router-link to="/mwv3/">Modernize Main Page</router-link>
  | <router-link to="/mwv3/compose">Vue Component Scripting (next)</router-link>
  </div>
</template>

<style lang="scss">
.fight {
  height: 400px;
  margin-left: 30%;
}
</style>