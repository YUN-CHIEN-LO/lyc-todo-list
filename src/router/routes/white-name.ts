export default [
  // 登入頁面
  {
    path: 'login',
    name: 'Login',
    component: () => import('@/views/LoginPage.vue'),
    meta: {
      title: 'loginPage.title',
    },
  },
];
