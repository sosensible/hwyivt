<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { RouterView, RouterLink } from "vue-router";
</script>

<template>
  <div>
    <h1>
      <img alt="Vue logo" src="./assets/logo.png" />
      13 Ways to Modernize with Vue 3
    </h1>
    <hr />
    <RouterView v-slot="{ Component, route }">
      <Transition name="fade">
        <component :is="Component"></component>
      </Transition>
    </RouterView>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 1.5em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

  button {
    font-size: 0.9em;
  }
}

.top-row {
  clear: both;
  margin-bottom: 30px;
  .left-split {
    float: left;
    padding-right: 80px;
  }
  .right-split {
  }
}

h1 > img {
  height: 40px;
  vertical-align: middle;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
