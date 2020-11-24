<template>
  <button class="btn" :class="[type ? 'btn-' + type : '']">
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "el-button",
  props: {
    type: String,
  },
});
</script>
<style lang="css">
@import url("./style/main.css");
</style>
