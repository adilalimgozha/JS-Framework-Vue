<script>
import User from './components/User.vue';

export default {
  components: { User },

  data(){
    return{
      users: [],
      error: "",
      userName: "",
      userPass: "",
      userEmail: "",
    }
  },

  methods: {
    sendData() {
      if (this.userName == '') {
        this.error = "Имя не введено";
        return
      }else if (this.userPass == '') {
        this.error = "Пароль не введен";
        return
      }else if (this.userEmail == '') {
        this.error = "Email не введен";
        return
      }
      this.error = "";

      this.users.push({
        name: this.userName,
        pass: this.userPass,
        email: this.userEmail
      })
    },
    deleteUser(index) {
      this.users.splice(index, 1);
    }
  }
  
}
</script>

<template>
  <input type="text" v-model="userName" placeholder="Имя">
  <input type="password" v-model="userPass" placeholder="Пароль">
  <input type="email" v-model="userEmail" placeholder="Email">
  <button @click="sendData()">Отправить</button>
  <p className="error">{{ error }}</p>

  <div v-if="users.length == 0" className="user">
    Нет пользователей
  </div>
  <div v-else-if="users.length == 1" className="user">
    1 пользователь
  </div>
  <div v-else className="user">
    Больше 1 пользователя
  </div>

  <User v-for="(el, index) in users" :key="index" className="user" :user="el" :index="index" :deleteUser="deleteUser" />
</template>

<style scoped>
  
</style>
