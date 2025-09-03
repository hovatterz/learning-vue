<script setup lang="ts">
import StyledButton from './StyledButton.vue';

const { item } = defineProps<{ item: ToDo }>();
</script>

<template>
  <div
    :id="`todo-${item.id}`"
    class="flex flex-row justify-between items-center bg-gray-100 p-2 border border-gray-200 rounded-lg"
  >
    <div class="flex flex-row space-x-2">
      <input type="checkbox" :checked="item.completed" />

      <div>
        <h3 class="text-lg font-semibold">{{ item.title }}</h3>
        <p>{{ item.description }}</p>
      </div>
    </div>

    <StyledButton kind="cancel">Delete</StyledButton>
  </div>
</template>
