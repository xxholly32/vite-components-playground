<template>
  <aside
    class="fixed inset-0 h-full z-90 w-full border-b -mb-16 lg:-mb-0 lg:static lg:h-auto lg:overflow-y-visible lg:border-b-0 lg:pt-0 lg:w-1/4 lg:block lg:border-0 xl:w-1/5 hidden pt-16"
  >
    <nav
      class="h-full overflow-y-auto scrolling-touch lg:h-auto lg:block lg:relative lg:sticky lg:bg-transparent overflow-hidden lg:top-16 bg-white"
    >
      <div
        class="px-6 pt-6 overflow-y-auto text-base lg:text-sm lg:pt-8 lg:pl-6 lg:pr-8 sticky?lg:h-(screen-16)"
        v-for="subMenu in menuConfig"
      >
        <h2 class="mb-3 lg:mb-2 uppercase font-bold lg:text-xs text-gray-500">
          {{ subMenu.name }}
        </h2>
        <ul>
          <li class="mb-3 lg:mb-1" v-for="menu in subMenu.children">
            <router-link
              class="px-2 -mx-2 py-1 transition duration-200 ease-in-out relative block text-gray-600 font-medium"
              :class="{ 'hover:translate-x-2px' : $route.name !== menu.name, 'hover:text-gray-900' : $route.name !== menu.name }"
              :to="`/doc/${menu.path}`"
            >
              <span
                class="rounded absolute inset-0 bg-teal-200 opacity-0"
                :class="{ 'opacity-25': $route.name === menu.name }"
              ></span>
              <span class="relative">{{ menu.name }}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </aside>
</template>
<script lang="ts">
import { menuConfig } from "../router/demo-routes";
export default {
  setup() {
    return {
      menuConfig,
    };
  },
};
</script>
