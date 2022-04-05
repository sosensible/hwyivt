<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
<div>
    <h1>Docker</h1>
    <h2>Dev Stack</h2>

    <a href="https://www.docker.com/">
      <img src="../../assets/Moby-logo-sm.png.webp" style="height: 160px;">
    </a>

    <pre>
      <code class="docker-compose">
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

      <code class="terminal"> 
&gt; <span class="cmd">docker compose up -d</span>             
&gt; <span class="cmd">docker exec -it my_frontend /bin/bash</span>             
&gt; <span class="cmd">npm init @vitejs/app</span>             
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