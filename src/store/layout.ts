import { defineStore } from 'pinia';
import { getEnumKeyByValue, getEnumCount } from '@/utils';

// 主題名稱
enum themeType {
  'light', 'dark'
}

export default defineStore('layout', {
  state: () => ({
    // 當前主題
    theme: themeType.light
  }),
  getters: {
    // 取得 當前主題
    getTheme: (state) => getEnumKeyByValue(themeType, state.theme),
  },
  actions: {
    /**
     * 切換當前主題
     */
    toggleTheme() {
      this.theme = (this.theme + 1) % getEnumCount(themeType);
    },
  },
});
