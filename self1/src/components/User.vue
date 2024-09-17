<script>
export default {
    props: {
        user: {
            type: Object,
            required: true
        },
        index: {
            type: Number,
            required: true
        },
        deleteUser: {
            type: Function,
            required: true
        }
    }
}
</script>

<template>
    <div className="user">
        <button @click="deleteUser(index)">Delete</button>
        <h3>{{ user.name }}</h3>
        <p>{{ user.email }} - <b>{{ user.pass }}</b></p>
    </div>
</template>

<style scoped>

</style>