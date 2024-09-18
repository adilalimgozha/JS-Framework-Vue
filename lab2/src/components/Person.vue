<script setup>
import { ref } from 'vue';

const props = defineProps({
    id: Number,
    PersonName: String,
    Avatar: String,
    PubDate: String,
    Rating: Number,
    Commentary: String,
    Topic: String
})

const rate = ref(props.Rating)

function liked(){
    rate.value += 1
}


</script>

<template>

    <div className="card">
        <div className="card-top">
            <div className="info">
                <div className="name">{{ PersonName }}</div>
                <div className="date">{{ PubDate }}</div>
            </div>

            <div className="rating">
                <div calssName="rating-word">Rating</div>
                <div className="stars">
                    <img v-if="rate < 3" className="star" src="../assets/star-white.png" alt="star">
                    <img v-else-if="rate >= 3" className="star" src="../assets/star-yellow.png" alt="star">

                    <img v-if="rate < 6" className="star" src="../assets/star-white.png" alt="star">
                    <img v-else-if="rate >= 6" className="star" src="../assets/star-yellow.png" alt="star">

                    <img v-if="rate < 9" className="star" src="../assets/star-white.png" alt="star">
                    <img v-else-if="rate >= 9" className="star" src="../assets/star-yellow.png" alt="star">

                    <img v-if="rate < 12" className="star" src="../assets/star-white.png" alt="star">
                    <img v-else-if="rate >= 12" className="star" src="../assets/star-yellow.png" alt="star">

                    <img v-if="rate < 15" className="star" src="../assets/star-white.png" alt="star">
                    <img v-else-if="rate >= 15" className="star" src="../assets/star-yellow.png" alt="star">
                </div>
            </div>

            <img :src="`src/assets/${Avatar}`" alt="avatar" className="avatar">
        </div>
        

        <div>{{ Commentary }}</div>

        <div className="btn">
            <button className="like" @click="liked()">Like</button>
        </div>

    </div>

</template>

<style scoped>

    .card{
        width: 70%;
        border-radius: 1.1em;
        color: white;
        background: #5BB9CD;
        padding: 1%;
        font-size: 1.3em;
        font-weight:bold;
        margin: 2em 4.5em;
    }

    .card-top{
        display: flex;
        justify-content: space-between;
    }

    .info{
        width: 30%;
        height: 100%;
        height:fit-content;
        border-radius: 0.7em;
        background: #FFFFF526;
        text-align: center;
    }

    .rating{
        display: grid;
        grid-template-columns: auto;
        text-align: center;
    }

    
   
    .avatar{
        width: 5em;
    }

    .name{
        margin-bottom: 25%;
        margin-top: 10%;
    }

    .date{
        margin-bottom: 10%;
    }

    .like{
        width: 5em;
        height: 2em;
        border-radius: 2em;
        font-size: 0.9em;
        font-weight:bold;
        background: #43EF27;
        color: white;
        border: none;
        cursor: pointer;
        transition: 0.5s;
    }

    .like:hover{
        background-color: rgb(36, 149, 30);
    }
    
    .like:active{
        background-color: #3e8e41;
        box-shadow: 0 5px #727272;
        transform: translateY(2px);
    }

    .btn{
        text-align: right;
        margin-right: 2%;
    }

    .star{
        margin: 0 0.3em;
        width: 1.2em;
    }

</style>
