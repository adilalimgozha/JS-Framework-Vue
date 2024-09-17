<script setup>
import Header from './components/Header.vue';
import { ref } from 'vue';
import Person from './components/Person.vue';
import DateComp from './components/DateComp.vue';
import SecondFloor from './components/SecondFloor.vue';


const persons = ref([
        { id: 1,
        PersonName: "Mark Twen",
        Avatar: "ava1.png",
        PubDate: 'Today, 12:00',
        Rating: 6,
        Commentary: "This is awesome adventure that I had! Thanks!",
        Topic: "gre" },
        { id: 2,
        PersonName: "Peter Parker",
        Avatar: "ava1.png",
        PubDate: 'Today, 16:00',
        Rating: 3,
        Commentary: "This is awesome adventure that I had! Thanks!",
        Topic: "engtnbr" },
        { id: 3,
        PersonName: "Peter Parker",
        Avatar: "ava1.png",
        PubDate: 'Today, 16:00',
        Rating: 4,
        Commentary: "This is awesome adventure that I had! Thanks!",
        Topic: "engtnbr" },
        { id: 4,
        PersonName: "Peter Parker",
        Avatar: "ava1.png",
        PubDate: 'Today, 16:00',
        Rating: 10,
        Commentary: "This is awesome adventure that I had! Thanks!",
        Topic: "engtnbr" },
        { id: 5,
        PersonName: "Bror Bror",
        Avatar: "ava1.png",
        PubDate: 'Today, 20:00',
        Rating: 10,
        Commentary: "This is awesome adventure that I had! Thanks!",
        Topic: "engtnbr" }
    ]);

const today = ref(new Date());
const date = today.value.getDate()
const month = today.value.getMonth() + 1
const year = today.value.getFullYear()

function showDate(){
    return `${date}.${month}.${year}`
}

function nextPage(){
    return
}


    
</script>

<template>
    <div className="all">
        <Header></Header> 
        <div className="content">
            <DateComp :showDate="showDate"></DateComp>
            <SecondFloor></SecondFloor>
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
    </div>
</template>

<style scoped>
    .all{
        background: url("assets\background-site.png");
        background-size: cover;
        align-content: center;
    }

    .grid-container{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
    }

    .content{
        margin: 5em 7em;
        background: linear-gradient(180deg, rgba(254, 254, 254, 0.7) 0%, rgba(206, 210, 210, 0.7) 40%, rgba(193, 197, 197, 0.7) 62%, rgba(184, 187, 187, 0.7) 100%);
        border: 1px solid #63CFF1;
    }

</style>
