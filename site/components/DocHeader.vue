<template>
  <header
    class="flex border-b border-gray-200 top-0 inset-x-0 z-100 h-16 items-center dark:border-gray-500"
  >
    <div
      class="container relative max-w-screen-xl mx-auto px-4 flex items-center h-full"
    >
      <div class="w-1/3">
        <router-link
          class="block mr-4 text-2xl text-black dark:text-gray-200"
          to="/"
        >
          vite-components-playground
        </router-link>
      </div>
      <div class="w-1/2"></div>
      <div class="flex w-1/6 space-x-6">
        <a
          class="flex items-center text-gray-500"
          href="https://github.com/xxholly32/vite-components-playground"
        >
          <Icon icon="codicon:github" height="24" />
        </a>
        <div class="flex items-center text-gray-500">
          <Icon
            :icon="isDark ? 'carbon:moon' : 'carbon:sun'"
            @click="isDark = !isDark"
          />
        </div>
      </div>
    </div>
  </header>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { Icon, addCollection } from "@iconify/vue";
import { isDark } from "../store";
import codicon from "@iconify/json/json/codicon.json";
import carbon from "@iconify/json/json/carbon.json";

addCollection(codicon);
addCollection(carbon);
export default defineComponent({
  components: {
    // Add Icon to list of used components
    Icon,
  },
  setup() {
    return {
      isDark,
    };
  },
});
</script>
