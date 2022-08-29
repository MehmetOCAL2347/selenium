<template>
  <div id="navbar">
    <ul>
      <li><base-button @click="goToLink('/#')" class="dark-blue">Ana Sayfa</base-button></li>
      <li><base-button @click="goToLink('/#')" class="dark-blue">İletişim</base-button></li>
      <li><base-button @click="goToLink('/user-login')" class="dark-blue">Giriş Yap</base-button></li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    goToLink(link){
      this.$router.push(link);
    }
  }
};
</script>

<style scoped>
#navbar {
  margin: 0;
  width: 100%;
  height: 70px;
  background-color: var(--navy-blue);
  box-shadow: var(--shadow-bottom-primary);
}

#navbar ul {
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

#navbar ul li {
  margin: 0;
  list-style-type: none;
  width: 100px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
}


</style>