import { defineStore } from 'pinia';
import { getEnumKeyByValue, getEnumCount } from '@/utils';
import lg from '@/plugins/local-storage';
import { ThemeEnum, StorageEnum, LangEnum } from '@/types';

const getLayoutState = () => ({
  // 當前主題
  theme: ThemeEnum.light,
  // 當前語系
  lang: LangEnum.en,
});

export default defineStore('layout', {
  state: () => getLayoutState(),
  getters: {
    // 取得 當前主題
    getTheme: (state) => getEnumKeyByValue(ThemeEnum, state.theme),
    // 取得 當前語系
    getLang: (state) => getEnumKeyByValue(LangEnum, state.lang),
  },
  actions: {
    /**
     * 切換當前主題
     */
    toggleTheme() {
      this.setTheme((this.theme + 1) % getEnumCount(ThemeEnum));
    },
    /**
     * 設置當前主題
     * @param {number} theme - 主題
     */
    setTheme(theme: number) {
      this.theme = Number.isNaN(theme) ? ThemeEnum.light : theme;
      lg.set(StorageEnum.THEME, theme);
    },
    /**
     * 設置當前語系
     * @param {number} lang - 語系
     */
    setLang(lang: number) {
      this.lang = Number.isNaN(lang) ? LangEnum.en : lang;
      lg.set(StorageEnum.LANG, lang as number);
    },
  },
});
