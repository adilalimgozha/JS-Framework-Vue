<script setup>
import UserCard from './components/UserCard.vue';
import {createMemoryHistory, createRouter } from 'vue-router'
import Home from './components/Home.vue'


</script>

<template>
  <strong>Current route path:</strong> {{ $route.fullPath }}
  <nav>
    <RouterLink to="/home">Go to Home</RouterLink>
  </nav>
  <RouterView></RouterView>
  
  
</template>

<style scoped>

</style>
