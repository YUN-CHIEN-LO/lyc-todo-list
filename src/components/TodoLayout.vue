<template>
  <v-app
    full-height
    :theme="store.getTheme"
    :data-theme="store.getTheme"
  >
    <v-app-bar :elevation="2">
      <template #prepend>
        <v-icon icon="mdi-clipboard-check-multiple"></v-icon>
      </template>
      <template #title>{{ $t("sys.projectName") }} {{ getPageTitle }}</template>
      <template #append>
        <v-btn
          :icon="getThemeIcon"
          @click="handleToggleTheme"
        ></v-btn>
        <v-menu>
          <template v-slot:activator="{ props }">
            <v-btn
              v-bind="props"
              icon="mdi-earth"
            ></v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(option) in langOptions"
              :key="option.value"
              :value="option.value"
              @click="handleChangeLang(option.value)"
            >
              <v-list-item-title>
                {{ $t(option.label) }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-btn icon="mdi-dots-vertical"></v-btn>
      </template>
    </v-app-bar>
    <router-view></router-view>
  </v-app>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import useLayoutStore from '@/stores/layout';
import { LangEnum } from '@/types';
import { getEnumEntries } from '@/utils';
import { useI18n } from 'vue-i18n';
import i18n from '@/plugins/i18n';

// 使用多語系
const i18nInstance = useI18n();
// 使用 layout 倉儲
const store = useLayoutStore();
// 使用路由
const route = useRoute();

// 取得當前主題圖示
const getThemeIcon = computed(() => (store.$state.theme ? 'mdi-white-balance-sunny' : 'mdi-moon-waning-crescent'));
// 取得當前頁標題
const getPageTitle = computed(() => (route.meta.title ? ` / ${i18n.global.t(route.meta.title as string)}` : ''));

// 語系選項
const langOptions = getEnumEntries(LangEnum).map(([key, value]) => ({
  label: `lang.${key}`,
  value,
}));

/**
 * 當切換主題
 */
function handleToggleTheme() {
  console.log('當切換主題');
  store.toggleTheme();
}

/**
 * 當切換語系
 * @param {Store.LangType} lang - 語系對應
 */
function handleChangeLang(lang: number) {
  store.setLang(lang);
  i18nInstance.locale.value = store.getLang;
}

</script>

<style lang="scss" scoped></style>
