<script setup>

</script>

<template>
    <header>
        <button className="menu"><img className="menu-img" src="../assets/menu.png" alt="menu"></button>
        <div>
            <span>New tips on Fall season! Full details on our Instagram accounts</span>
        </div>
        <button className="profile"><img className="profile-img" src="../assets/profile.png" alt="menu"></button>
    </header>
</template>

<style scoped>
    header{
        display: flex;
        justify-content: space-between;
        font-weight: 700;
        font-size: 1.3em;
        background: #FFFFFFBD;
        margin-top: 1%;
        align-items: center;
    }

    span{
        display: block;
        background: linear-gradient(90deg, #FFADAD 0%, #FF774C 100%);
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    div{
        width: 80%;
        background: linear-gradient(90deg, #E5F67C 0%, #ECEF64 33%, #D2E037 66%, #EAEE3A 100%);
        padding: 0.9em;
        border-radius: 0.9em;
        text-align: center;
        margin: 0.5em 0;
    }

    .profile{
        border-radius: 4em;
        width: 4.5em;
        height: 4.5em;
        background: #7EEFFF;
        border: none;
        cursor: pointer;
    }

    .profile:hover{
        background: #08b5cc;
        transition: 0.5s;
    }

    /*.profile-img:hover{
        transform: scale(1.1);
        opacity: 0.9;
    }*/

    .menu{
        border-radius: 2em;
        width: 4em;
        height: 4em;
        background: #7EEFFF;
        border: none;
        cursor: pointer;
        margin-left: 1.1em;
    }

    .menu:hover{
        background: #08b5cc;
        transition: 0.5s;
    }

    .menu-img{
        position: relative;
        left: -0.4em;
    }

    /*.menu-img:hover{
        transform: scale(1.1);
        opacity: 0.9;
    }*/


</style>
