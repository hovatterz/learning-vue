<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <header class="leading-[1.5] lg:flex lg:place-items-center">
    <img
      alt="Vue logo"
      class="block mx-auto mb-8 lg:mr-8"
      src="./assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="lg:flex lg:place-items-start lg:wrap">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>
