import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

/**
 * 插入 scss 全域檔案
 * @param {string} content - 檔案內容
 * @param {string} filePath - 檔案路徑
 * @returns {string} - 插入檔案文字
 */
function setScssAdditionalData(content: string, filePath: string) {
  // 使用 sass map 方法
  const useSassMap = '@use "sass:map";';
  // 全域 scss 檔案路徑
  const globalScss = '@import "@/styles/_global.scss";';

  // 若檔案為 modeul.scss，不需要插入全域變數
  if (filePath.endsWith('.module.scss')) return useSassMap + content;
  // 在每個檔案前綴全域變數
  return useSassMap + globalScss + content;
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        // 使用全域變數
        additionalData: setScssAdditionalData,
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
