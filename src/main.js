import './scss/main.scss';
import router from './router';
// import '@material/web/menu/menu.js';
// import '@material/web/menu/menu-item.js';

import { createApp } from 'vue';
import App from './App.vue';



const app = createApp(App);
app.use(router);
app.mount('#app');
