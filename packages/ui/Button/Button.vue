<template>
  <button class="btn" :class="[type ? 'btn-' + type : '']">
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
export default defineComponent({
  props: {
    type: String,
    size: String,
  },
  setup(props, ctx) {
    const $vitec = useGlobalConfig();

    const buttonSize = computed(() => {
      return props.size || $vitec.size;
    });

    return {
      buttonSize,
    };
  },
});
</script>
