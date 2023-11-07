import { createRouter, createWebHistory } from 'vue-router';
import LayoutFrame from '@/components/TodoLayout.vue';
import accessRoutes from '@/router/routes/access';
import whiteNameRoutes from '@/router/routes/white-name';
import lg from '@/plugins/local-storage';
import useLayoutStore from '@/stores/layout';
import { StorageEnum } from '@/types';

const baseUrl = import.meta.env.VITE_BASE_URL;

// 路由清單
const routes = [
  {
    path: baseUrl,
    name: 'Home',
    component: LayoutFrame,
    redirect: `${baseUrl}/todo`,
    children: [
      // 白名單路由
      ...whiteNameRoutes,
      // 權限路由
      ...accessRoutes,
      // 錯誤頁面
      {
        path: 'error/:code?',
        name: 'Error',
        component: () => import('@/views/ErrorPage.vue'),
        meta: {
          title: 'errorPage.title',
        },
      },
    ],
  },
  {
    path: '/',
    redirect: baseUrl,
  },
  // 錯誤路由捕獲
  { path: '/:catchAll(.*)', name: 'NotFound', redirect: `${baseUrl}/error/404` },
];

// 建立路由
const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const layoutStore = useLayoutStore();
  const saveTheme = lg.get(StorageEnum.THEME);
  if (!layoutStore.$state.theme) layoutStore.setTheme(Number(saveTheme) ?? 0);
  next();
});

export default router;
