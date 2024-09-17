<script setup>
import Header from './components/Header.vue';
import { ref } from 'vue';
import Person from './components/Person.vue';
import DateComp from './components/DateComp.vue';
import SecondFloor from './components/SecondFloor.vue';
import Menu from './components/Menu.vue';


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
        PersonName: "Max Max",
        Avatar: "ava1.png",
        PubDate: 'Today, 16:00',
        Rating: 4,
        Commentary: "This is awesome adventure that I had! Thanks!",
        Topic: "engtnbr" },
        { id: 4,
        PersonName: "Suna Suna",
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
        Topic: "engtnbr" },
        { id: 6,
        PersonName: "Robert Robert",
        Avatar: "ava1.png",
        PubDate: 'Today, 20:00',
        Rating: 10,
        Commentary: "This is awesome adventure that I had! Thanks!",
        Topic: "engtnbr" },
        { id: 7,
        PersonName: "Alish Alish",
        Avatar: "ava1.png",
        PubDate: 'Today, 20:00',
        Rating: 10,
        Commentary: "This is awesome adventure that I had! Thanks!",
        Topic: "engtnbr" },
        { id: 8,
        PersonName: "Annie Annie",
        Avatar: "ava1.png",
        PubDate: 'Today, 20:00',
        Rating: 10,
        Commentary: "This is awesome adventure that I had! Thanks!",
        Topic: "engtnbr" },
        { id: 9,
        PersonName: "Erke Erke",
        Avatar: "ava1.png",
        PubDate: 'Today, 20:00',
        Rating: 10,
        Commentary: "This is awesome adventure that I had! Thanks!",
        Topic: "engtnbr" },
        { id: 10,
        PersonName: "Ali Ali",
        Avatar: "ava1.png",
        PubDate: 'Today, 20:00',
        Rating: 10,
        Commentary: "This is awesome adventure that I had! Thanks!",
        Topic: "engtnbr" },
        { id: 11,
        PersonName: "Nurik Nurik",
        Avatar: "ava1.png",
        PubDate: 'Today, 20:00',
        Rating: 10,
        Commentary: "This is awesome adventure that I had! Thanks!",
        Topic: "engtnbr" },
        { id: 12,
        PersonName: "Adil Adil",
        Avatar: "ava1.png",
        PubDate: 'Today, 20:00',
        Rating: 10,
        Commentary: "This is awesome adventure that I had! Thanks!",
        Topic: "engtnbr" },
        { id: 13,
        PersonName: "Ulan Ulan",
        Avatar: "ava1.png",
        PubDate: 'Today, 20:00',
        Rating: 10,
        Commentary: "This is awesome adventure that I had! Thanks!",
        Topic: "engtnbr" },
        { id: 14,
        PersonName: "Kirill Kirill",
        Avatar: "ava1.png",
        PubDate: 'Today, 20:00',
        Rating: 10,
        Commentary: "This is awesome adventure that I had! Thanks!",
        Topic: "engtnbr" },
        { id: 15,
        PersonName: "Nikita Nikita",
        Avatar: "ava1.png",
        PubDate: 'Today, 20:00',
        Rating: 10,
        Commentary: "This is awesome adventure that I had! Thanks!",
        Topic: "engtnbr" },
        { id: 16,
        PersonName: "Zhasik Zhasik",
        Avatar: "ava1.png",
        PubDate: 'Today, 20:00',
        Rating: 10,
        Commentary: "This is awesome adventure that I had! Thanks!",
        Topic: "engtnbr" },
        { id: 17,
        PersonName: "Tima Tima",
        Avatar: "ava1.png",
        PubDate: 'Today, 20:00',
        Rating: 10,
        Commentary: "This is awesome adventure that I had! Thanks!",
        Topic: "engtnbr" },
        { id: 18,
        PersonName: "Saba Saba",
        Avatar: "ava1.png",
        PubDate: 'Today, 20:00',
        Rating: 10,
        Commentary: "This is awesome adventure that I had! Thanks!",
        Topic: "engtnbr" },
        { id: 19,
        PersonName: "Damir Damir",
        Avatar: "ava1.png",
        PubDate: 'Today, 20:00',
        Rating: 10,
        Commentary: "This is awesome adventure that I had! Thanks!",
        Topic: "engtnbr" },
        { id: 20,
        PersonName: "Dima Dima",
        Avatar: "ava1.png",
        PubDate: 'Today, 20:00',
        Rating: 10,
        Commentary: "This is awesome adventure that I had! Thanks!",
        Topic: "engtnbr" },
        { id: 21,
        PersonName: "Dima Dima",
        Avatar: "ava1.png",
        PubDate: 'Today, 20:00',
        Rating: 10,
        Commentary: "This is awesome adventure that I had! Thanks!",
        Topic: "engtnbr" },
        { id: 22,
        PersonName: "Dima Dima",
        Avatar: "ava1.png",
        PubDate: 'Today, 20:00',
        Rating: 10,
        Commentary: "This is awesome adventure that I had! Thanks!",
        Topic: "engtnbr" },
        { id: 23,
        PersonName: "Saba Saba",
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

const page = ref(1)
const maxPage = ref(Math.ceil(persons.value.length / 4))
const topic = ref("Adventure")

function toAdventure(){
    topic.value = "Adventure"
}
function toNature(){
    topic.value = "Nature"
}
function toFashion(){
    topic.value = "Fashion"
}
function toModern(){
    topic.value = "Modern"
}
function toEducation(){
    topic.value = "Education"
}

function nextPage(){
    if (page.value == maxPage.value){
        return
    }
    return page.value++
}

const isMenuBarOpen = ref(false)

function menuBarOpen(){
    isMenuBarOpen.value = true
}

function menuBarClose(){
    isMenuBarOpen.value = false
}

    
</script>

<template>
    <div className="all">
        <Menu v-if="isMenuBarOpen == true" 
        :toAdventure="toAdventure" 
        :toNature="toNature" 
        :toFashion="toFashion" 
        :toModern="toModern"
        :toEducation="toEducation"
        :menuBarClose="menuBarClose"></Menu>
        
        <Header :menuBarOpen="menuBarOpen"></Header> 

        <div className="content">
            <DateComp :showDate="showDate"></DateComp>
            <SecondFloor :topic="topic" :maxPage="maxPage" :page="page" :nextPage="nextPage"></SecondFloor>

            <div v-if="page <= maxPage" :key="index" className="grid-container">
                <Person v-for="el in persons.slice((page-1) * 4, page * 4)" 
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
