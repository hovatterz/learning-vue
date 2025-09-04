<script setup lang="ts">
import StyledButton from './StyledButton.vue';

defineEmits<{ (e: 'toggleCompletion', item: ToDo): void; (e: 'delete', item: ToDo): void }>();
const { item } = defineProps<{ item: ToDo }>();
</script>

<template>
  <div
    :id="`todo-${item.id}`"
    class="flex flex-row justify-between items-center bg-gray-100 p-2 border border-gray-200 rounded-lg"
    @click="$emit('toggleCompletion', item)"
  >
    <div class="flex flex-row space-x-2">
      <input type="checkbox" :checked="item.completed" />

      <div>
        <h3 class="text-lg font-semibold">{{ item.title }}</h3>
        <p>{{ item.description }}</p>
      </div>
    </div>

    <StyledButton kind="cancel" @click="$emit('delete', item)">Delete</StyledButton>
  </div>
</template>
