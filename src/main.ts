import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router/index.ts';
import vuetify from '@/plugins/vuetify/index.ts';
import pinia from '@/plugins/pinia/index.ts';

const app = createApp(App);
app.use(router);
app.use(vuetify);
app.use(pinia);
app.mount('#app');
