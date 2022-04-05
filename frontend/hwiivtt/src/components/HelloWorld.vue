<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
    <pre>
      <code class="vue">
<span class="script">&lt;script setup lang="ts"&gt;<span class="body">
// put me at the top now
</span>&lt;/script&gt;</span>

<span class="template">&lt;template&gt;<span class="body">
  &lt;ul&gt;
    &lt;li&gt;
      <span>Wrapper tags not typically required</span>
    &lt;/li&gt;
  &lt;/ul&gt;
</span>&lt;/template&gt;</span>

<span class="style">&lt;style lang="scss" scoped&gt;<span class="body">
  &lt;p checked class="title" id='title'&gt;Title&lt;/p&gt;
  &lt;!-- here goes the rest of the page --&gt;
</span>&lt;/style&gt;</span>
      </code>
    </pre>

  <router-link to="/mwv3/">Modernize with Vue 3</router-link>
</template>

<style lang="scss">
@import "../shared/styles/code.scss";
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}
</style>
