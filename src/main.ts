import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router';
import vuetify from '@/plugins/vuetify';
import pinia from '@/plugins/pinia';
import i18n from '@/plugins/i18n';
import setMockApi from '@/mock';

const app = createApp(App);
app.use(router);
app.use(vuetify);
app.use(pinia);
app.use(i18n);
app.mount('#app');

setMockApi();
