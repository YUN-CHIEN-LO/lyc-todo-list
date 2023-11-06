export default [
  // 待辦事項頁面
  {
    path: 'todo',
    name: 'Todo',
    component: () => import('@/views/TodoPage.vue'),
    meta: {
      title: 'todoPage.title',
    },
  },
];
