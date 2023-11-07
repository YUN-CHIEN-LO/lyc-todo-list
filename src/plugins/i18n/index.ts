import { createI18n } from 'vue-i18n';
import en from '@/plugins/i18n/lang/en.json';
import zhTW from '@/plugins/i18n/lang/zh-TW.json';
import { getEnumKeyByValue } from '@/utils';
import { LangEnum, StorageEnum } from '@/types';
import lg from '@/plugins/local-storage';

type MessageSchema = typeof en

const defaultLang = Number(lg.get(StorageEnum.LANG)) ?? LangEnum.en;

const i18n = createI18n<[MessageSchema], 'en' | 'zhTW'>({
  legacy: false,
  locale: getEnumKeyByValue(LangEnum, defaultLang),
  globalInjection: true,
  messages: {
    en,
    zhTW,
  },
});

export default i18n;
