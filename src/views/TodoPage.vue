<template>
  <div>
    <h1>Todo Page</h1>
    <TodoItem
      v-for="item in todoList.data"
      :key="item.id"
      v-model="item.checked"
      :label="item.label"
    />
  </div>
</template>

<script setup lang="ts">
import api from '@/api';
import { reactive, onMounted } from 'vue';
import TodoItem from '@/components/TodoItem.vue';

const todoList = reactive({ data: [] as Array<Todo.TodoItem> });
onMounted(() => {
  api.todo.getTodoList().then((res) => {
    const { data } = res;
    todoList.data = data.list;
  });
});
</script>

<style scoped lang="scss"></style>
