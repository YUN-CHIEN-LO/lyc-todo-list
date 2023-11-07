// 主題名稱
export enum ThemeEnum {
  'light', 'dark'
}

// 宣告 local storage 鍵值
export enum StorageEnum {
  "THEME"
}



declare global {
  namespace Store {
    // 主題名稱
    type ThemeType = Record<ThemeEnum, number>;
  }
}

