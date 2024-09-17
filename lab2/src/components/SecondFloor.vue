<script setup>

const props = defineProps({
    nextPage: Number
})

</script>

<template>
    <div className="second-fl">
        <div className="blogName">
            <div className="name-word">Adventure</div>
        </div>
        <div className="rating">
            <span><img className="img filter-img" src="../assets/filter.png" alt="filter"></span>
            <span className="rating-word">Rating</span>
            <span><img className="img filter-btn-img" src="../assets/filter_btn.png" alt="filter_btn"></span>
        </div>
        <div className="arrow">
            <img @click="nextPage" class="img arrow-img" src="../assets/arrow.png" alt="arrow">
            <div className="number">1/5</div>
        </div>
    </div>
</template>

<style scoped>
    .second-fl{
        display: flex;
        justify-content: space-between;
        margin: 6em;
    }

    .blogName{
        font-size: 4em;
        background: #5BB9CD;
        border-radius: 10px;
        padding: 0.1em 1.5em 0.5em 0.5em;
        align-items: center;
        color: white;
        width: 30%;
        font-weight: bold;
    }

    .rating{
        font-size: 2.5em;
        background: #EEFCF7;
        align-content: center;
        justify-content: baseline;
        padding: 0 0.3em;
        color:#1DE390;
        font-weight: bold;
    }

    .rating-word{
        margin: 0 1em;
    }

    .filter-img{
        width: 0.9em;
        cursor: pointer;
    }

    .filter-btn-img{
        width: 0.7em;
        cursor: pointer;
    }

    .arrow-img{
        width:120%;
        cursor: pointer;
    }

    .img:hover{
        -webkit-transform: scale(1.1);
        -ms-transform: scale(1.1);
        transform: scale(1.1);
        transition: 0.5s ease;
    }

    .number{
        font-size: 2.5em;
        text-align: center;
        font-style: italic;
        color: white;
        font-weight: 100;
    }

</style>