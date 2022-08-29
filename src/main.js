import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue'
import TheHeader from './layouts/TheHeader.vue';
import TheMain from './layouts/TheMain.vue';

import UserLogin from './components/users/UserLogin.vue';

import BaseCard from './UI/BaseCard.vue';
import BaseButton from './UI/BaseButton.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: TheMain },
    { path: "/user-login", component: UserLogin }
  ],
});

const app = createApp(App);
app.component('the-header', TheHeader);
app.component('the-main', TheMain);
app.component('base-card', BaseCard);
app.component('base-button', BaseButton);

app.use(router);

app.mount('#app');
