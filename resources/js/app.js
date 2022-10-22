import {createHead} from "@vueuse/head";
import {createPinia} from 'pinia'
import {createApp} from 'vue/dist/vue.esm-bundler.js'

import './bootstrap';
import router from "./router/index.js";

// Init VUE3 app
const app = createApp({});

app.use(router);         // Enable router
app.use(createPinia());  // Enable Pinia store
app.use(createHead());   // Enable SEO Head Tags

app.mount("#app");