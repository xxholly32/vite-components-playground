<template>
  <div>
    <doc-header></doc-header>
    <main class="w-full max-w-screen-xl mx-auto px-6">
      <div class="lg:flex -mx-6">
        <!-- sidebar -->
        <doc-siderbar></doc-siderbar>
        <!-- content -->
        <div
          class="flex min-h-screen w-full lg:w-3/4 xl:w-4/5"
        >
          <router-view></router-view>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import DocHeader from "./components/DocHeader.vue";
import DocSiderbar from "./components/DocSiderbar.vue";

export default {
  name: "App",
  components: { DocHeader, DocSiderbar },
};
</script>
