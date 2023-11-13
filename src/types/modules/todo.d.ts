export { };

declare global {
  namespace Todo {
    // 主題名稱
    type TodoItem = {
      id: string;
      label: string;
      checked: boolean
    };
  }
}
