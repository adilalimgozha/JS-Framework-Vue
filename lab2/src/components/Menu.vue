<script setup>

    const props = defineProps({
        menuBarClose: Function
    })

</script>

<template>

    <div className="menu-bar">
        <button @click="menuBarClose()" className="button menu-btn">Menu</button>
        <div className="nav-contacts">
            <div className="nav">
                <button className="button adv-btn">Adventure Blog</button>
                <button className="button nat-btn">Nature Blog</button>
                <button className="button fas-btn">Fashion Blog</button>
                <button className="button mod-btn">Modern Blog</button>
                <button className="button edu-btn">Education Blog</button>
            </div>
            <div className="contacts">
                <div className="contacts-word">Contacts</div>
                <div className="contacts-all">
                    <div className="phone">PHONE: +1(234)-23-45-22</div>
                    <div className="adress">ADRESS: Green st. Yellow park</div>
                    <div className="email">EMAIL: Yallow@park.info</div>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped>
    .button{
        display: block;
        font-size: 2em;
    }

    .menu-btn{
        margin:1em;
        background-color: white;
        border: none;
        color: #615C5C;
        cursor: pointer;
        border-radius: 10px;
    }

    .menu-btn:hover{
        background-color: rgb(140, 139, 139);
    }

    .adv-btn{
        background: linear-gradient(90deg, #4CD87C 0%, #42D669 63.42%, #3DD55E 100%);
        border: none;
        color: white;
        cursor: pointer;
    }

    .nat-btn{
        background: linear-gradient(90deg, #5DDE6A 0%, #43D749 43.79%, #21CD1E 100%);
        border: none;
        color: white;
        cursor: pointer;
    }

    .fas-btn{
        background: linear-gradient(90deg, #79DD56 0%, #48E521 100%);
        border: none;
        color: white;
        cursor: pointer;
    }

    .mod-btn{
        background: linear-gradient(90deg, #67E674 0%, #7ECC86 100%);
        border: none;
        color: white;
        cursor: pointer;
    }

    .edu-btn{
        background: linear-gradient(90deg, #53f263 0%, #6be477 100%);
        border: none;
        color: white;
        cursor: pointer;
    }

    .menu-bar{
        position: absolute;
        display: grid;
        background: #C1EBF1;
        width: 20%;
    }

    .nav{
        display: grid;
        grid-template-columns: auto;
        gap: 1em;
        margin-top: 1em;
        margin-bottom: 4em;
    }

    .nav-contacts{
        background: white;
        margin: 1em;
    }

    .contacts{
        background: linear-gradient(180deg, #AFF090 0%, #45C330 100%);
        border-radius: 10px;
        margin: 1em;
        text-align: center;
        color: white;
    }

    .contacts-word{
        font-size: 2em;
        margin-bottom: 0.5em;
    }

    .contacts-all{
        text-align: left;
        font-size: 1.4em;
    }

    .phone{
        margin: 1em 0.5em
    }

    .adress{
        margin: 1em 0.5em
    }

    .email{
        margin: 1em 0.5em
    }

</style>