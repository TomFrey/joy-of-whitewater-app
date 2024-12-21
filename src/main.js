import './scss/main.scss';
import router from './router';


import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
});


//import Vuetify from 'vuetify';
//import $pages from './data';

// import '@material/web/menu/menu.js';
// import '@material/web/menu/menu-item.js';

import { createApp } from 'vue';
import App from './App.vue';



const app = createApp(App);
//const vuetify = new Vuetify({});

app.use(router);

//Daten zwischen den Componets austauschen:
//Bei parent -> child mit 'props', bei child -> parent mit 'emit'
//und wenn es keine Eltern/Kinder sind dann mit provide
//app.provide('$pages', $pages);

app.use(vuetify);

app.mount('#app');
