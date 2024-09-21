<script setup>

const props = defineProps({
    element: String,
    list: Array,
    index: Number
})

const listItem = props.list
const indexItem = props.index

function removeElement(){
    listItem.splice(indexItem, 1)
}

</script>

<template>

    <div className="elem">

    <div>
        {{ element }}
    </div>

    <button @click="removeElement()">Remove</button>
    </div>

    <br>


  
</template>

<style scoped>

.elem{
    background-color: aqua;
    margin: 0 10em
}

button{
    color: bisque;
    background-color: blue;
    cursor: pointer;
}

button:hover{
    background-color: rgb(86, 86, 187);
}
</style>
