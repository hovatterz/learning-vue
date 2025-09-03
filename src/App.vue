<script setup lang="ts">
import { computed, ref } from 'vue';

import PageHeader from './components/PageHeader.vue';
import HomePage from './HomePage.vue';
import AboutPage from './AboutPage.vue';
import NotFoundPage from './NotFoundPage.vue';

const routes: RouteConfig = {
  '/': HomePage,
  '/about': AboutPage,
};

const currentPath = ref(window.location.hash);

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash;
});

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || NotFoundPage;
});
</script>

<template>
  <div class="flex flex-col">
    <PageHeader />

    <main class="w-7xl mx-auto">
      <component :is="currentView" />
    </main>
  </div>
</template>
