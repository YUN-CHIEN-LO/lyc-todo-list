import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import variables from '@/styles/_vars.module.scss';
import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css';

/**
 * 取得主題樣式變數
 * @param {string} theme - 主題 [light | dark]
 * @returns {object} - 主題樣式變數
 */
function getThemeVariable(theme: string): object {
  return Object.entries(variables).reduce((varSet, [scssVar, scssValue]) => {
    const [themeType, variableName] = scssVar.split(/(?<=[light|dark])-(?=\w+)/);
    if (themeType === theme) Object.assign(varSet, { [variableName]: scssValue });
    return varSet;
  }, {});
}

export default createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: { colors: getThemeVariable('light') },
      dark: { colors: getThemeVariable('dark') },
    },
  },
  components,
  directives,
});
