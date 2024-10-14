<script setup>
import { ref } from 'vue'

const props = defineProps({
    id: Number,
    Name: String,
    Age: Number,
    Email: String
})


</script>

<template>

    <div className="card">
        <p>id: {{ id }}</p>
        <p>Name: {{ Name }}</p>
        <p>Age: {{ Age }}</p>
        <p>Email: {{ Email }}</p>
    </div>
  
</template>

<style scoped>

.card{
    border: red solid;
    margin: 1em;
}

</style>
