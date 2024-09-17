<script setup>

const props = defineProps({
    id: Number,
    PersonName: String,
    Avatar: String,
    PubDate: String,
    Rating: Number,
    Commentary: String,
    Topic: String
})

</script>

<template>

    <div className="card">
        <div className="card-top">
            <div className="info">
                <div className="name">{{ PersonName }}</div>
                <div className="date">{{ PubDate }}</div>
            </div>

            <div className="rating">
                <div classname="rating-word">Rating</div>
                <div calssname="stars">
                    <img classname="star" src="../assets/star-yellow.png" alt="star">
                    <img classname="star" src="../assets/star-white.png" alt="star">
                    <img classname="star" src="../assets/star-white.png" alt="star">
                    <img classname="star" src="../assets/star-white.png" alt="star">
                    <img classname="star" src="../assets/star-white.png" alt="star">  
                </div>
            </div>

            <img :src="`src/assets/${Avatar}`" alt="avatar" className="avatar">
        </div>
        

        <div>{{ Commentary }}</div>

        <div className="btn">
            <button className="like">Like</button>
        </div>

    </div>

</template>

<style scoped>

    .card{
        width: 50%;
        border-radius: 1.1em;
        color: white;
        background: #5BB9CD;
        padding: 1%;
        font-size: 1.1em;
        font-weight:bold;
        margin: 2em;
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

    .btn{
        text-align: right;
        margin-right: 2%;
    }

</style>
