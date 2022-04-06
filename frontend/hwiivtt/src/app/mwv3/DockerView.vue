<script setup lang="ts">
import { reactive } from 'vue'
import { RouterLink } from 'vue-router'

const show = reactive({
    focus: 0,
    list: ['docker-compose','startup','terminal','launch'],
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
      <h1>Docker</h1>
      <h2>Dev Stack</h2>
    </div>
    <div class="right-split">
      <a href="https://www.docker.com/">
        <img src="../../assets/Moby-logo-sm.png.webp" style="height: 160px;">
      </a>
    </div>
  </div>

    <button @click="moveFocus">&gt;&gt;</button>

    <pre>
      <code class="docker-compose" v-if="focusCheck( 'docker-compose' )">
version: "3.4"
services:
  my_frontend:
    container_name: my_frontend
    image: node:lts
    working_dir: /var/www/html/app/
    entrypoint: /bin/bash
    ports:
      - 8000:8000
    expose:
      - 8000
    volumes:
      - ./frontend/:/var/www/html/app
    tty: true
      </code>

      <code class="terminal" v-if="focusCheck( 'startup' )"> 
&gt; <span class="cmd">docker compose up -d</span>             
&gt; <span class="cmd" v-if="focusCheck( 'terminal' )">docker exec -it my_frontend /bin/bash</span>             
&gt; <span class="cmd" v-if="focusCheck( 'launch' )">npm init @vitejs/app</span>             
      </code>
    </pre>

    <a href="https://dev.to/jiprochazka/starting-up-a-new-vue-3-project-with-vite-and-docker-3355">Source for this approach</a>

    <hr>
    <router-link to="/mwv3/router">Router (prev)</router-link> |
    <router-link to="/mwv3/">Modernize Main Page</router-link>
    | <router-link to="/mwv3/vite">Node Dev (next)</router-link>
</div>
</template>

<style lang="scss">
@import "../../shared/styles/code.scss";
</style>