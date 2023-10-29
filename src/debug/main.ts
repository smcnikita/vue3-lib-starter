import { createApp } from 'vue';

import App from './App.vue';
import router from './router';

import '@/style/style.scss';

const app = createApp(App);

app.use(router);

app.mount('#root-app');
