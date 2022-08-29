<template>
  <div id="login-card">
    <form @submit.prevent="login" id="loginUser">
      <p v-if="isLoginSuccess">Success</p>
      <!-- Eğer sonuç doğru ise /secure şeklinde bir componente göndercez -->
      <div>
        <input
          id="userName"
          name="userName"
          type="text"
          v-model="userName"
          placeholder="UserName"
        />
      </div>
      <div>
        <input
          id="userPassword"
          name="userPassword"
          type="password"
          v-model="userPassword"
          placeholder="Password"
        />
      </div>
      <div>
        <base-button id="loginButton" class="blue">Login</base-button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: "",
      userPassword: "",
      isLoginSuccess: false,
    };
  },
  methods: {
    login() {
      console.log(this.userName + this.userPassword);
      if (
        this.userName === "mehmetocal" &&
        this.userPassword === "udemySeleniumCourse*!"
      ) {
        this.isLoginSuccess = true;
      }
    },
  },
};
</script>

<style scoped>
#login-card {
  margin: 25px auto;
  width: 30%;
  min-height: 100px;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
#loginUser div {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
}
#loginUser div input {
  width: 90%;
  height: 30px;
}
</style>