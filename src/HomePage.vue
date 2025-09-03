<script setup lang="ts">
import todoStore from '@/stores/todos';
import ToDoItem from './components/ToDoItem.vue';
</script>

<template>
  <h2 class="text-lg font-semibold">ToDos</h2>

  <div class="flex flex-col space-y-2">
    <ToDoItem :item :key="item.id" v-for="item in todoStore.todos" />
  </div>
</template>
