<script setup>
import Header from './components/Header.vue';
import { ref } from 'vue';
import Person from './components/Person.vue';


const persons = ref([
        { id: 1,
        PersonName: "Mark Twen",
        Avatar: "ava1.png",
        PubDate: 'Today, 12:00',
        Rating: 5,
        Commentary: "This is awesome adventure that I had! Thanks!",
        Topic: "gre" },
        { id: 2,
        PersonName: "Peter Parker",
        Avatar: "ava1.png",
        PubDate: 'Today, 16:00',
        Rating: 4,
        Commentary: "This is awesome adventure that I had! Thanks!",
        Topic: "engtnbr" },
        { id: 2,
        PersonName: "Peter Parker",
        Avatar: "ava1.png",
        PubDate: 'Today, 16:00',
        Rating: 4,
        Commentary: "This is awesome adventure that I had! Thanks!",
        Topic: "engtnbr" },
        { id: 2,
        PersonName: "Peter Parker",
        Avatar: "ava1.png",
        PubDate: 'Today, 16:00',
        Rating: 4,
        Commentary: "This is awesome adventure that I had! Thanks!",
        Topic: "engtnbr" },
    ]);
    
</script>

<template>
    <div>
        <Header></Header> 
        <div className="grid-container">
            <Person v-for="el in persons" 
            :key="el.id" 
            :id="el.id" 
            :PersonName="el.PersonName"
            :Avatar="el.Avatar"
            :PubDate="el.PubDate"
            :Rating="el.Rating"
            :Commentary="el.Commentary"
            :Topic="el.Topic"></Person>
        </div>
    </div>
</template>

<style scoped>
    div{
        background: url("assets\background-site.png");
        background-size: cover;
    }

    .grid-container{
        display: grid;
        grid-template-columns: auto auto;
    }

</style>
