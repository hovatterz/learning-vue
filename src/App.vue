<script setup lang="ts">
import { computed, ref, type Component } from 'vue';

import Header from './components/Header.vue';
import Home from './Home.vue';
import About from './About.vue';
import NotFound from './NotFound.vue';

type RouteConfig = { [key: string]: Component };

const routes: RouteConfig = {
  '/': Home,
  '/about': About,
};

const currentPath = ref(window.location.hash);

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash;
});

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || NotFound;
});
</script>

<template>
  <div class="flex flex-col">
    <Header />

    <main class="max-w-7xl mx-auto">
      <component :is="currentView" />
    </main>
  </div>
</template>
