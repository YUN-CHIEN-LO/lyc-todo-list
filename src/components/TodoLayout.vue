<template>
  <v-app
    full-height
    :theme="store.getTheme"
    :data-theme="store.getTheme"
  >
    <v-app-bar :elevation="2">
      <template #prepend> {{ store.getTheme }} </template>
      <template #title>Todo List</template>
      <template #append>
        <v-btn
          icon="mdi-heart"
          @click="handleToggleTheme"
        ></v-btn>
        <v-btn icon="mdi-magnify"></v-btn>
        <v-btn icon="mdi-dots-vertical"></v-btn>
      </template>
    </v-app-bar>
    <div
      class="temp"
      :style="getThemeStyle"
    ></div>
    <pre> {{ getThemeStyle }} </pre>
    <router-view></router-view>
  </v-app>
</template>

<script setup lang="ts">
import useLayoutStore from '@/store/layout';
import { computed } from 'vue';
// 使用 layout 倉儲
const store = useLayoutStore();
// 取得當前主題
const getThemeStyle = computed(() => ({ colorScheme: store.getTheme }));

/**
 * 當切換主題
 */
function handleToggleTheme() {
  store.toggleTheme();
}

</script>

<style lang="scss" scoped>
.temp {
  margin-top: 200px;
  width: 100px;
  height: settings.$button-height;
  border: solid 5px $color-secondary;
  background-color: $color-primary;
}
</style>
