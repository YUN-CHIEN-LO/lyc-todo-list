<template>
  <div>
    <h1>Todo Page</h1>
    {{ todoList }}
  </div>
</template>

<script setup lang="ts">
import api from '@/api';
import { reactive, onMounted } from 'vue';

const todoList = reactive({ data: [] as Array<Mock.Api> });

onMounted(() => {
  api.todo.getTodoList().then((res) => {
    const { data } = res;
    todoList.data = data.list;
  });
});
</script>

<style scoped lang="scss"></style>
