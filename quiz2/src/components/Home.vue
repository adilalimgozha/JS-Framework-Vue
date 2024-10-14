<script setup>
import UserCard from './UserCard.vue';
import { useRouter } from 'vue-router';


const users = [{
  id: 1,
  Name: 'Adil',
  Age: 21,
  Email: 'alimgzha2003@gmail.com'
},{
  id: 2,
  Name: 'Max',
  Age: 22,
  Email: 'max@gmail.com'
},
{
  id: 3,
  Name: 'Alex',
  Age: 24,
  Email: 'alex@gmail.com'
}]

const router = useRouter();

function goDetail(userId) {
    router.push({ name: 'UserCard', params: { id: userId } });
}

</script>

<template>
  <p>
    <strong>Current route path:</strong> {{ $route.fullPath }}
  </p>
  <nav>
    <RouterLink to="/">Go to Home</RouterLink>
  </nav>

  <UserCard v-for="user in users"
  @click="goDetail(user.id)"
  :id="user.id" 
  :Name="user.Name"
  :Age="user.Age"
  :Email="user.Email"></UserCard>

  
  
</template>

<style scoped>

</style>
