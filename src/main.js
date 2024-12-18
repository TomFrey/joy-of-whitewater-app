import './scss/main.scss';
import router from './router';
//import $pages from './data';

// import '@material/web/menu/menu.js';
// import '@material/web/menu/menu-item.js';

import { createApp } from 'vue';
import App from './App.vue';



const app = createApp(App);
app.use(router);

//Daten zwischen den Componets austauschen:
//Bei parent -> child mit props
//und wenn es keine Eltern/Kinder sind dann mit provide
//app.provide('$pages', $pages);

app.mount('#app');
