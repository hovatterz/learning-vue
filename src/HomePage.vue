<script setup lang="ts">
import { PlusIcon } from '@heroicons/vue/24/outline';
import { ref } from 'vue';

import todoStore from './stores/todos';
import ToDoItem from './components/ToDoItem.vue';
import CreateToDoForm from './components/CreateToDoForm.vue';

const shouldShowCreateForm = ref<boolean>(false);

function showCreateForm() {
  shouldShowCreateForm.value = true;
}

function createToDo(item: Partial<ToDo>) {
  todoStore.create(item);
  shouldShowCreateForm.value = false;
}

function deleteToDo(item: ToDo) {
  todoStore.delete(item.id);
}

function toggleToDoCompletion(item: ToDo) {
  todoStore.update(item.id, { completed: !item.completed });
}
</script>

<template>
  <h2 class="text-lg font-semibold mb-4">ToDos</h2>

  <div class="flex flex-col space-y-2">
    <div
      v-if="shouldShowCreateForm === false"
      @click="showCreateForm"
      class="flex items-center justify-center p-2 bg-gray-100 border border-gray-200 text-gray-600 rounded-lg cursor-pointer"
    >
      <PlusIcon class="w-10" />
    </div>
    <CreateToDoForm v-else @submit="createToDo" />

    <ToDoItem
      :item
      :key="item.id"
      v-for="item in todoStore.todos"
      @delete="deleteToDo"
      @toggle-completion="toggleToDoCompletion"
    />
  </div>
</template>
