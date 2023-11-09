import REST from '@/api/common';

export default {
  // 取得 待辦事項清單
  getTodoList() {
    return REST.get('/todo');
  },
};
