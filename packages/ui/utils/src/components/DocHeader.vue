<template>
  <header class="flex border-b top-0 inset-x-0 z-100 h-16 items-center">
    <div class="container relative mx-auto px-4 flex items-center h-full">
      <div class="w-1/3">
        <h1 class="block mr-4 text-2xl">vite-components-playground</h1>
      </div>
      <div class="w-1/2"></div>
      <div class="flex w-1/6">
        <a
          class="block flex items-center text-gray-500"
          href="https://github.com/xxholly32/vite-components-playground"
        >
          <Icon icon="logos:github-icon" height="24" />
        </a>
      </div>
    </div>
  </header>
</template>
<script>
import { Icon, addCollection } from "@iconify/vue";
import logos from "@iconify/json/json/logos.json";

addCollection(logos);
export default {
  components: {
    // Add Icon to list of used components
    Icon,
  },
};
</script>
