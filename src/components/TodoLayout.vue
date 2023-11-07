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
      <template #title>LYC Todo List {{ getPageTitle }}</template>
      <template #append>
        <v-btn
          :icon="getThemeIcon"
          @click="handleToggleTheme"
        ></v-btn>
        <v-btn icon="mdi-magnify"></v-btn>
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

// 使用 layout 倉儲
const store = useLayoutStore();
// 使用路由
const route = useRoute();
// 取得當前主題圖示
const getThemeIcon = computed(() => (store.$state.theme ? 'mdi-white-balance-sunny' : 'mdi-moon-waning-crescent'));
// 取得當前頁標題
const getPageTitle = computed(() => (route.meta.title ? ` / ${route.meta.title}` : ''));

/**
 * 當切換主題
 */
function handleToggleTheme() {
  store.toggleTheme();
}

</script>

<style lang="scss" scoped></style>
