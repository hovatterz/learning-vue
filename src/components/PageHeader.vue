<script setup lang="ts">
import NavLink from '@/components/NavLink.vue';
</script>

<template>
  <header class="flex flex-row items-center space-x-4 bg-gray-800 px-8 mb-4">
    <h1 class="leading-8 font-semibold text-2xl text-gray-100"><a href="/#/">ToDos</a></h1>

    <nav class="space-x-4">
      <NavLink to="/#/">ToDos</NavLink>
      <NavLink to="/#/about">About</NavLink>
    </nav>
  </header>
</template>
