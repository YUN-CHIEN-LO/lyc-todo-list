import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import variable from '@/styles/_vars.module.scss';
import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css';

export default createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          ...variable,
        },
      },
    },
  },
  components,
  directives,
});
