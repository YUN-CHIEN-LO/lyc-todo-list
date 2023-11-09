import Mock from 'mockjs';
import todo from '@/mock/modules/todo';

/**
 * 配置 api 模擬器
 */
function setMockApi() {
  ([] as Array<Mock.Api>).concat(todo).forEach((request) => {
    Mock.mock(
      import.meta.env.VITE_BASE_URL + request.url,
      request.type || 'get',
      request.response,
    );
  });
}

export default setMockApi;
