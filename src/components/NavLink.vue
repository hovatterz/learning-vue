<script setup lang="ts">
defineProps(['to']);
</script>

<template>
  <a class="cursor-pointer text-indigo-200" :href="to"><slot /></a>
</template>
