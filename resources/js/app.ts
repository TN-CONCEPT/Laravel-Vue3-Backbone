import {createHead} from "@vueuse/head";
import {createPinia} from 'pinia'
import {createApp} from 'vue'
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';

import './bootstrap';
import router from "./router";

// Init VUE3 app
const app = createApp({});

const toastOptions = {
    transition: 'Vue-Toastification__slideBlurred',
    maxToasts: 20,
    newestOnTop: true
};

app.use(router);         // Enable router
app.use(createPinia());  // Enable Pinia store
app.use(createHead());   // Enable SEO Head Tags
app.use(Toast, toastOptions);

app.mount("#app");