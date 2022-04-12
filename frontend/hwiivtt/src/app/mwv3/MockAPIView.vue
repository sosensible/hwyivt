<script setup lang="ts">
import { reactive } from 'vue';
import { RouterLink } from 'vue-router'

const data: { users: { name: string, id: number }[] }  = reactive([])

function getUsers() {
  fetch("/api/users")
    .then((res) => res.json())
    .then((json) => {
      data.users = json.users
    })
}
</script>

<template>
  <div>
    <h1>
      <a href="https://www.cypress.io/">
        <img src="../../assets/cypress-logo.webp" style="height: 80px;">
      </a>
    </h1>
    <h2>Demo</h2>
    
    <button @click="getUsers">Get Users</button>

    <ul>
      <li v-for="user in data.users" :key="user.id">{{ user.name }}</li>
    </ul>

    <router-link to="/mwv3/miragejs">(return)</router-link>
  
  </div>
</template>