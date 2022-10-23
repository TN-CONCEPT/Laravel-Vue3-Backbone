import { createHead } from "@vueuse/head"
import { createPinia } from "pinia"
import { createApp } from "vue"
import { createI18n } from "vue-i18n"
import Toast from "vue-toastification"
import "vue-toastification/dist/index.css"

import "./bootstrap"
import router from "./router"
import { i18nOptions } from "./common/config/i18n"
import { toastOptions } from "./common/config/toast"

// Init VUE3 app
const app = createApp({})

app.use(router) // Enable router
app.use(createPinia()) // Enable Pinia store
app.use(createHead()) // Enable SEO Head Tags
app.use(createI18n(i18nOptions)) // Enable I18n
app.use(Toast, toastOptions) // Enable Toast component

app.mount("#app")
