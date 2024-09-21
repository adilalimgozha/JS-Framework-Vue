<script setup>

import { ref, onMounted  } from 'vue';
import ListElement from './components/ListElement.vue';

const message = ref("")
const list = ref([])

onMounted(() => {
      console.log("Mounted");
      list.value = ['item1', 'item2', 'item3'];
    });

const isVisible = ref(true)


function addElement() {
  if (message.value.trim()){

    list.value.push(message.value)
    message.value = ""
  }
}

function toggleVisibility() {
      isVisible.value = !isVisible.value;  // Toggle visibility
    }

console.log(list.value)

</script>

<template>

  <div className="all-app">

    <div className="app">

      <input type="text" v-model="message" placeholder="Type">
      <button className="btn" @click="addElement()">Add</button>

      <div v-show="isVisible">
        <ListElement v-for="(el, index) in list" :key="index" :element="el" :list="list" :index="index"></ListElement>
        <br>
      </div>

      <div v-if="list.length == 0">List is empty, add something</div>

      <button className="btn" @click="toggleVisibility()">{{ isVisible ? 'Hide' : 'Show' }}</button>
    </div>
  </div>

  
</template>

<style scoped>

.app{
  background-color: blanchedalmond;
  text-align: center;
  margin: 2em 25em;
}

.all-app{
  text-align: center;
}

.btn{
  cursor: pointer;
  border: none;
  width: 20%;
  background-color: burlywood;
}

.btn:hover{
  background-color: brown;
}

</style>
