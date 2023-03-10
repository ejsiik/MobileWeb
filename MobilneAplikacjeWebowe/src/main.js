import { createApp, reactive } from 'vue'
import App from './App.vue'
import router from './router'
import Toaster from '@meforma/vue-toaster';

import './assets/main.css'

const app = createApp(App)
app.provide("banner", reactive({ title: "Title" }));
app.provide("details", reactive({ details: null }));
app.use(Toaster)
app.use(router)

app.mount('#app')
