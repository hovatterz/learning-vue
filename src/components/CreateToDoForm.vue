<script setup lang="ts">
import { ref } from 'vue';

import StyledButton from './StyledButton.vue';

defineEmits<{ (e: 'submit', item: Partial<ToDo>): void }>();

const item = ref<Partial<ToDo>>({});
</script>

<template>
  <form
    :id="`todo-${item.id}`"
    class="flex flex-row space-x-4 justify-between items-center bg-gray-100 p-2 border border-gray-200 rounded-lg"
    @submit.prevent="$emit('submit', item)"
  >
    <div class="flex flex-col flex-grow space-y-2">
      <input
        class="p-2 bg-white border border-gray-200 rounded"
        placeholder="Title"
        type="text"
        v-model="item.title"
      />
      <textarea
        class="p-2 bg-white border border-gray-200 rounded"
        placeholder="Description"
        v-model="item.description"
      >
      </textarea>
    </div>

    <StyledButton kind="primary" @click="$emit('submit', item)">Save</StyledButton>
  </form>
</template>
