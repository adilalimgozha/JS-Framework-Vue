<script setup>
import Header from './components/Header.vue';
import { computed, ref } from 'vue';
import Person from './components/Person.vue';
import DateComp from './components/DateComp.vue';
import SecondFloor from './components/SecondFloor.vue';
import Menu from './components/Menu.vue';
import _ from 'lodash';


const persons = ref([
        { id: 1,
        PersonName: "Mark Twen",
        Avatar: "ava1.png",
        PubDate: 'Today, 12:00',
        Rating: 6,
        Commentary: "Adventure",
        Topic: "Adventure" },
        { id: 2,
        PersonName: "Peter Parker",
        Avatar: "ava1.png",
        PubDate: 'Today, 16:00',
        Rating: 6,
        Commentary: "Nature",
        Topic: "Nature" },
        { id: 3,
        PersonName: "Max Max",
        Avatar: "ava1.png",
        PubDate: 'Today, 16:00',
        Rating: 3,
        Commentary: "Adventure",
        Topic: "Adventure" },
        { id: 4,
        PersonName: "Suna Suna",
        Avatar: "ava1.png",
        PubDate: 'Today, 16:00',
        Rating: 12,
        Commentary: "Adventure",
        Topic: "Adventure" },
        { id: 5,
        PersonName: "Bror Bror",
        Avatar: "ava1.png",
        PubDate: 'Today, 20:00',
        Rating: 10,
        Commentary: "Nature",
        Topic: "Nature" },
        { id: 6,
        PersonName: "Robert Robert",
        Avatar: "ava1.png",
        PubDate: 'Today, 20:00',
        Rating: 9,
        Commentary: "Adventure",
        Topic: "Adventure" },
        { id: 7,
        PersonName: "Alish Alish",
        Avatar: "ava1.png",
        PubDate: 'Today, 20:00',
        Rating: 10,
        Commentary: "Adventure",
        Topic: "Adventure" },
        { id: 8,
        PersonName: "Annie Annie",
        Avatar: "ava1.png",
        PubDate: 'Today, 20:00',
        Rating: 3,
        Commentary: "Modern",
        Topic: "Modern" },
        { id: 9,
        PersonName: "Erke Erke",
        Avatar: "ava1.png",
        PubDate: 'Today, 20:00',
        Rating: 15,
        Commentary: "Adventure",
        Topic: "Adventure" },
        { id: 10,
        PersonName: "Ali Ali",
        Avatar: "ava1.png",
        PubDate: 'Today, 20:00',
        Rating: 8,
        Commentary: "Adventure",
        Topic: "Adventure" },
        { id: 11,
        PersonName: "Nurik Nurik",
        Avatar: "ava1.png",
        PubDate: 'Today, 20:00',
        Rating: 10,
        Commentary: "Education",
        Topic: "Education" },
        { id: 12,
        PersonName: "Adil Adil",
        Avatar: "ava1.png",
        PubDate: 'Today, 20:00',
        Rating: 9,
        Commentary: "Fasion",
        Topic: "Fashion" },
        { id: 13,
        PersonName: "Ulan Ulan",
        Avatar: "ava1.png",
        PubDate: 'Today, 20:00',
        Rating: 5,
        Commentary: "Fashion",
        Topic: "Fashion" },
        { id: 14,
        PersonName: "Kirill Kirill",
        Avatar: "ava1.png",
        PubDate: 'Today, 20:00',
        Rating: 15,
        Commentary: "Fashion",
        Topic: "Fashion" },
        { id: 15,
        PersonName: "Nikita Nikita",
        Avatar: "ava1.png",
        PubDate: 'Today, 20:00',
        Rating: 12,
        Commentary: "Modern",
        Topic: "Modern" },
        { id: 16,
        PersonName: "Zhasik Zhasik",
        Avatar: "ava1.png",
        PubDate: 'Today, 20:00',
        Rating: 7,
        Commentary: "Fashion",
        Topic: "Fashion" },
        { id: 17,
        PersonName: "Tima Tima",
        Avatar: "ava1.png",
        PubDate: 'Today, 20:00',
        Rating: 8,
        Commentary: "Modern",
        Topic: "Modern" },
        { id: 18,
        PersonName: "Saba Saba",
        Avatar: "ava1.png",
        PubDate: 'Today, 20:00',
        Rating: 15,
        Commentary: "Education",
        Topic: "Education" },
        { id: 19,
        PersonName: "Damir Damir",
        Avatar: "ava1.png",
        PubDate: 'Today, 20:00',
        Rating: 13,
        Commentary: "Nature",
        Topic: "Nature" },
        { id: 20,
        PersonName: "Dima Dima",
        Avatar: "ava1.png",
        PubDate: 'Today, 20:00',
        Rating: 6,
        Commentary: "Nature",
        Topic: "Nature" },
        { id: 21,
        PersonName: "Alen Alen",
        Avatar: "ava1.png",
        PubDate: 'Today, 20:00',
        Rating: 3,
        Commentary: "Nature",
        Topic: "Nature" },
        { id: 22,
        PersonName: "Madina Madina",
        Avatar: "ava1.png",
        PubDate: 'Today, 20:00',
        Rating: 3,
        Commentary: "Education",
        Topic: "Education" },
        { id: 23,
        PersonName: "Alex Alex",
        Avatar: "ava1.png",
        PubDate: 'Today, 20:00',
        Rating: 15,
        Commentary: "Modern",
        Topic: "Modern" }
    ]);

// Нынешняя дата
const today = ref(new Date());
const date = today.value.getDate()
const month = today.value.getMonth() + 1
const year = today.value.getFullYear()

function showDate(){
    return `${date}.${month}.${year}`
}

// Смена темы блога
const page = ref(1)
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
    page.value++
}


// Боковое меню
const isMenuBarOpen = ref(false)

function menuBarOpen(){
    isMenuBarOpen.value = true
}

function menuBarClose(){
    isMenuBarOpen.value = false
}


// Фильтрация людей с определенной темой блога
const perses = ref(persons.value.filter(pers => pers.Topic === "Adventure"))
const maxPage = ref(Math.ceil(perses.value.length / 4))

function onlyAdventure(){
    perses.value = persons.value.filter(pers => pers.Topic == "Adventure")
    maxPage.value = Math.ceil(perses.value.length / 4)
    page.value = 1
}

function onlyNature(){
    perses.value = persons.value.filter(pers => pers.Topic == "Nature")
    maxPage.value = Math.ceil(perses.value.length / 4)
    page.value = 1
}

function onlyFashion(){
    perses.value = persons.value.filter(pers => pers.Topic == "Fashion")
    maxPage.value = Math.ceil(perses.value.length / 4)
    page.value = 1
}

function onlyModern(){
    perses.value = persons.value.filter(pers => pers.Topic == "Modern")
    maxPage.value = Math.ceil(perses.value.length / 4)
    page.value = 1
}

function onlyEducation(){
    perses.value = persons.value.filter(pers => pers.Topic == "Education")
    maxPage.value = Math.ceil(perses.value.length / 4)
    page.value = 1
}

//Фильтрация по Рейтингу и Дате
const filterBy = ref('Filter By')

const isFilterClicked = ref(false)

function filterClickOpen(){
    isFilterClicked.value = true;
}

function filterClickClose(){
    isFilterClicked.value = false;
}

function toRating(){
    filterBy.value = "Rating";
}

function toDate(){
    filterBy.value = "DateTime";
}

function filterDecision(){
    if (filterBy.value == "Rating"){
        perses.value = sortedByRating.value
    }
}
const sortedByRating = computed(() => _.sortBy(perses.value, 'Rating').reverse())
    
</script>

<template>
    <div className="all">
        <Menu v-if="isMenuBarOpen == true" 
        :toAdventure="toAdventure" 
        :toNature="toNature" 
        :toFashion="toFashion" 
        :toModern="toModern"
        :toEducation="toEducation"
        :onlyAdventure="onlyAdventure"
        :onlyNature="onlyNature"
        :onlyFashion="onlyFashion"
        :onlyModern="onlyModern"
        :onlyEducation="onlyEducation"
        :menuBarClose="menuBarClose"></Menu>
        
        <Header :menuBarOpen="menuBarOpen"></Header> 

        <div className="content">
            <DateComp :showDate="showDate"></DateComp>
            <SecondFloor :topic="topic" 
            :maxPage="maxPage" 
            :page="page" 
            :nextPage="nextPage"
            :filterBy="filterBy"
            :isFilterClicked="isFilterClicked"
            :filterClickOpen="filterClickOpen"
            :filterClickClose="filterClickClose"
            :toRating="toRating"
            :toDate="toDate"
            :filterDecision="filterDecision"></SecondFloor>

            <div v-if="page <= maxPage" className="grid-container">
                <Person v-for="el in perses.slice((page-1) * 4, page * 4)" 
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
