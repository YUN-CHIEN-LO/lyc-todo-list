import { defineStore } from 'pinia';
import { getEnumKeyByValue, getEnumCount } from '@/utils';
import lg from '@/plugins/local-storage';
import { ThemeEnum, StorageEnum } from '@/types';

const getLayoutState = () => ({
  // 當前主題
  theme: ThemeEnum.light,
});

export default defineStore('layout', {
  state: () => getLayoutState(),
  getters: {
    // 取得 當前主題
    getTheme: (state) => getEnumKeyByValue(ThemeEnum, state.theme),
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
     * @param {Store.ThemeType} theme - 主題
     */
    setTheme(theme: number) {
      this.theme = theme;
      lg.set(StorageEnum.THEME, theme);
    },
  },
});
