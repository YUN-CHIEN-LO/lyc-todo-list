import Mock from 'mockjs';

const myTodoList = Mock.mock({
  'list|1-10': [
    {
      'id|+1': 100,
      'checked|1': true,
      label: '@sentence(3, 5)',
    },
  ],
});

export default [
  // 取得 待辦事項清單
  {
    url: '/todo',
    type: 'get',
    response: () => myTodoList,
  },
];
